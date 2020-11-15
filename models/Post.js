const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', PostSchema)
