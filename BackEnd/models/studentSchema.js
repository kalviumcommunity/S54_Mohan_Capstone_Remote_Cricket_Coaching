import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
 
  },
  lastName: {
    type: String,
 
  },
  phone: {
    type: String,
 
    unique: true,
  },
  email: {
    type: String,
 
    unique: true,
  },
  country: {
    type: String,
 
  },
  state: {
    type: String,
 
  },
  pinCode: {
    type: String,
 
  },
  address: {
    type: String,
 
  },
  role: {
    type: String,
 
  },
  highestLevelPlayed: {
    type: String,
    },
  photo: {
    type: String,
 
  },
  age: {
    type: Number,
 
  },
  dateOfBirth: {
    type: Date,
   
  },
  gender: {
    type: String,
 
  },
  confirmPassword: {
    type: String,
 
  },
  password: {
    type: String,
 
  },
  SlotBooked: {
    type: Boolean,
    default:false,
 
  },
});

const StudentModel = mongoose.model("Student", studentSchema);
export default StudentModel;

 
