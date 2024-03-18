const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  roleOfPlay: {
    type: String,
    required: true
  },
  highestLevelPlayed: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;
