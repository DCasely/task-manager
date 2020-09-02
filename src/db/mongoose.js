const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

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

// const me = new User({
//   name: 'John Deere  ',
//   email: 'anonymous@xxx.com',
//   password: 'thisismycode',
// })
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const newTask = new Task({
  description: 'GOT IT DONE?   ',
})
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
