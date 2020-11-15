const express = require('express')

const router = express.Router()

const { getPosts, getPostById } = require('../controllers/postController')

// @ desc       Fetch all posts
// @route       GET /api/posts
// @access      Public
router.route('/').get(getPosts)

// @ desc       Fetch single post
// @route       GET /api/posts/:id
// @access      Public
router.route('/:id').get(getPostById)

module.exports = router
