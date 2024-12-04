// post body validation
// {
//   "id": 110540928425395527323,
//   "title": "this is my title", 
//   "body": "this is my note"
// }
const mongoose = require('mongoose');
const db = mongoose.connection;

const Schema = mongoose.Schema;
const NoteSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    validate: [schemaValidator, 'title must be a string']
  },
  body: {
    type: String,
    required: true,
    validate: [schemaValidator, 'note message needs to be a string']
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

function schemaValidator(value) {
  return typeof(value == 'string')
}

module.exports = mongoose.model('Note', NoteSchema);