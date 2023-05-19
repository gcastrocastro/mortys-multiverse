const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    addFavorite,
    getFavorites
}

async function create(req, res){
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}

async function getFavorites(req, res) {
    try {
        const user = await User.findById(req.query.userId);
        res.json(user.favorites);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function addFavorite(req, res){
    try{
        const user = await User.findById(req.body.userId);
        const existingFavoriteIndex = user.favorites.findIndex(favorite => favorite.id === req.body.id);
        if (existingFavoriteIndex !== -1) {
          user.favorites.splice(existingFavoriteIndex, 1);
        } else {
          user.favorites.push({ id: req.body.id });
        }
        await user.save();
        res.json(user.favorites);
    } catch(error){
        console.log(error);
        res.status(400).json(error);
    }
}

async function login(req, res){
    try {
        const foundUser = await User.findOne({email: req.body.email});
        if (!foundUser) return res.status(400).json({error: 'invalid credentials'});

        const certified = await bcrypt.compare(req.body.password, foundUser.password);
        if (!certified) return res.status(400).json({error: 'invalid credentials'}); 

        const token = createJWT(foundUser); 
        res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}