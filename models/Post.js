const mongoose = require('mongoose')
const slugify = require('slugify')

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: 'no-photo.jpg',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,

      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

// Create slug from post
PostSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true })
  next()
})

module.exports = mongoose.model('Post', PostSchema)
