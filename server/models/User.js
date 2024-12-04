const mongoose = require('mongoose');
const db = mongoose.connection; 

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: 'object', 
      required: ['googleId', 'displayName', 'firstName', 'lastName'], 
      properties: {
        googleId: {
          bsonType: 'string', 
          description: 'googleId should be a string'
          }, 
        displayName: {
          bsonType: 'string', 
          description: 'display name needs to be a string'
        }, 
        firstName: {
          bsonType: 'string', 
          description: 'first name needs to be a string'
        }, 
        lastName: {
          bsonType: 'string', 
          description: 'last name needs to be a string'
        }
        }
      }
   }
} )

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);