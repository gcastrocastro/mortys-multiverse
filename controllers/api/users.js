const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
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

function checkToken(req, res) {
    console.log(req.user);
    res.json(req.exp);
}