import express from "express";
import StudentModel from "./models/studentSchema.js";
import {CoachModel, ApplicationsForCoach } from "./models/coachSchema.js";
import sendMail from "./utils/sendMail.js";
import coachmail from "./utils/CoachMail.js";
import denyMail from "./utils/DenyMail.js";
import coachDeny from "./utils/CoachDeny.js";

const router = express.Router();

router.use(express.json());

router.post("/createUser", async (req, res) => {
  const { email, firstName } = req.body;
  try {
    const studentExists = await StudentModel.findOne({ email });
    if (studentExists) {
      return res.status(409).json({ message: "User already exists" });
    }
    const Student = new StudentModel(req.body);
    await Student.save();
    sendMail(email, firstName);
    res.status(201).json({ message: "User created successfully", data: Student });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await StudentModel.find();
    res.status(200).json({ message: "Fetched data successfully", data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.post("/createCoach", async (req, res) => {
  const { email, firstName } = req.body;
  try {
    const coachExists = await CoachModel.findOne({ email });
    if (coachExists) {
      return res.status(409).json({ message: "Coach already exists" });
    }
    const Coach = new CoachModel(req.body);
    await Coach.save();
    coachmail(email, firstName);
    res.status(201).json({ message: "Coach created successfully", data: Coach });
  } catch (error) {
    console.error("Error creating coach:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/coaches", async (req, res) => {
  try {
    const coaches = await CoachModel.find();
    res.status(200).json({ message: "Fetched data successfully", data: coaches });
  } catch (error) {
    console.error("Error fetching coaches:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.post("/applyCoach", async (req, res) => {
  const { email } = req.body;
  try {
    const applicationExists = await ApplicationsForCoach.findOne({ email });
    if (applicationExists) {
      return res.status(409).json({ message: "Application already exists" });
    }
    const application = new ApplicationsForCoach(req.body);
    await application.save();
    res.status(201).json({ message: "Application submitted successfully", data: application });
  } catch (error) {
    console.error("Error applying for coach:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.delete("/deleteuser/:username/:id", async (req, res) => {
  const { id, username } = req.params;
  try {
    denyMail(username);
    const result = await StudentModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.delete("/deleteuserafterverified/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await StudentModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user after verification:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.delete("/deletecoach/:coachname/:id", async (req, res) => {
  const { id, coachname } = req.params;
  try {
    coachDeny(coachname);
    const result = await CoachModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Coach not found" });
    }
    res.status(200).json({ message: "Coach deleted successfully" });
  } catch (error) {
    console.error("Error deleting coach:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.delete("/deletecoachafterverified/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CoachModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Coach not found" });
    }
    res.status(200).json({ message: "Coach deleted successfully" });
  } catch (error) {
    console.error("Error deleting coach after verification:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

export default router;
