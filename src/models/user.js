const mongoose = require('mongoose');
const validator = require('validator');

// USER SCHEMA
const User = mongoose.model('User', {
  name: {
    type: String,
    default: 'anonymous',
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number.');
      }
    },
  },
  password: {
    type: String,
    minlength: [6, 'Must have atleast 6 characters'],
    trim: true,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Your Password cannot contain the word "password"');
      }
    },
  },
});

module.exports = User;
