import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    unique:true
    // required: true
  },
  phone: {
    type: String,
    // required: true
  },
  age: {
    type: Number,
    // required: true
  },
  dateOfBirth: {
    type: Date,
    // required: true
  },
  pastExperience: {
    type: String,
    // required: true
  },
  highestLevelPlayed: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  photo: {
    type: String,
    // required: true
  },
  achievements: {
    type: String,
    // required: true
  },
  roleOfPlay: {
    type: String,
    // required: true
  },
  description:{
    type:String,
  },
  roleOfCoaching: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  }
});

const CoachModel = mongoose.model("Coach", coachSchema);

export default CoachModel;