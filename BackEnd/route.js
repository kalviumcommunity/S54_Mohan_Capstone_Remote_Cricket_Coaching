import express from "express";
import StudentModel from "./models/studentSchema.js";
import CoachModel from "./models/coachSchema.js";
import sendMail from "./utils/sendMail.js";
import denyMail from "./utils/DenyMail.js";
const router = express.Router();

router.use(express.json());

router.post("/createUser", async (req, res) => {
  const { email, firstName } = req.body;
  const data = req.body;
  try {
    const studentExists = await StudentModel.findOne({ email: email });
    if (studentExists) {
      res.send({ message: "user Exists" });
    } else {
      const Student = new StudentModel(data);
      await Student.save();
      sendMail(email, firstName);
      res.send({ message: "Done", data: Student });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});

router.get("/checkUser", async (req, res) => {
  try {
    const user = await StudentModel.find();
    res.send({
      message: "Got the data",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});

router.get("/fetchData", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.send({
      message: "Fetched data successfully",
      data: students
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});

router.get("/sendemail", sendMail);
router.get("/denyemail", denyMail);


router.post("/createCoach", async (req, res) => {
  const { email } = req.body;
  const data = req.body;
  try {
    const coachExists = await CoachModel.findOne({ email: email });
    if (coachExists) {
      res.send({ message: "user Exists" });
    } else {
      const Coach = new CoachModel(data);
      await Coach.save();
      res.send({ message: "Done", data: Coach });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});

router.get("/checkCoach", async (req, res) => {
  try {
    const coach = await CoachModel.find();
    res.send({
      message: "Got the data",
      coachData:coach
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});
router.delete("/deleteuser/:username/:id", async (req, res) => {
  const id=req.params.id
  const usermail=req.params.username
  denyMail(usermail)
  try {
    const coach = await StudentModel.findByIdAndDelete(id);
    res.send({
      message: "User deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});
router.delete("/deleteuserafterverified/:id", async (req, res) => {
  const id=req.params.id
  try {
    const coach = await StudentModel.findByIdAndDelete(id);
    res.send({
      message: "User deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});
export default router;
