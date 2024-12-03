const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'Comment'
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Comment', CommentSchema);