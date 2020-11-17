const asyncHandler = require('express-async-handler')
const Post = require('../models/Post')

// @ desc       Fetch all posts
// @route       GET /api/posts
// @access      Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 })

  res.json(posts)
})

// @ desc       Fetch single post
// @route       GET /api/posts/:id
// @access      Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc        Create new fungus
// @route       POST /api/v1/fungus
// @access      Private
const createPost = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body)

  res.status(201).json({ success: true, data: post })
})

module.exports = { getPosts, getPostById, createPost }
