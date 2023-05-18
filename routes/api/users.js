const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST to /api/users
router.post('/', usersCtrl.create);

// POST to /api/users/login
router.post('/login', usersCtrl.login);

//GET to /api/users/favorites
router.get('/get-favorites', usersCtrl.getFavorites);

//POST to /api/users/add-favorite/id
router.post('/add-favorite/:id', usersCtrl.addFavorite);

module.exports = router;