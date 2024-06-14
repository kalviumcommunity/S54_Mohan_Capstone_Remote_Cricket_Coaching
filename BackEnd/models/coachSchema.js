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
  country: {
    type: String,
    // required: true
  },
  pinCode: {
    type: Number,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  gender: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    unique: true
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
  amionline: {
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
  description: {
    type: String,
  },
  roleOfCoaching: {
    type: String,
    // required: true
  },
  coachingfor: {
    type: String,
    // required: true
  },
  fee: {
    type: Number,
    // required: true
  },
  detailedDescription: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  availableTime: {
    type: Array,
    default: []
    // required: true
  },
  CoachID:{
    type:Array,
    default:[]
  }
});

const CoachModel = mongoose.model("Coach", coachSchema);
const ApplicationsForCoach = mongoose.model("applicationsForCoach", coachSchema);

export { CoachModel, ApplicationsForCoach };
