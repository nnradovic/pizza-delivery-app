const express = require('express');
const { body } = require('express-validator/check')

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);


module.exports = router;