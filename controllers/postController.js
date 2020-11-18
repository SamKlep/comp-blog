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

// @desc        Update post
// @route       PUT /api/v1/posts/:id
// @access      Private
const updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  if (!post) {
    return next(new Error(`Post not found with id of ${req.params.id}`, 404))
  }
})

// @desc        Delete post
// @route       DELETE /api/v1/post/:id
// @access      Private
const deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id)

  if (!post) {
    return next(new Error(`Post not found with id of ${req.params.id}`, 404))
  }

  post.remove()

  res.status(200).json({ success: true, data: {} })
})

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost }
