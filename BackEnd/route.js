import express from "express";
import nodemailer from 'nodemailer';
import StudentModel from "./models/studentSchema.js";
import CoachModel from "./models/coachSchema.js"

const router = express.Router();

router.use(express.json());

router.post("/createUser", async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    // Create test account for nodemailer

    // Create transporter with SMTP configuration
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Create email message
    let message = {
      from: 'kumar.mohan@kalvium.community',
      to: 'mohantheboss1432@gmail.com',
      subject: "Hello",
      text: "Hello world",
      html: "<b>Hello world</b>",
    };

    // Send email
    let info = await transporter.sendMail(message);

    // Log email information
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Save user data
    const data = req.body;
    const user = new StudentModel(data);
    await user.save();

    // Respond with success message
    res.status(201).json({
      msg: "You should receive an email",
      info: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
      message: true,
      data: "New user is created successfully",
      User: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});
///Student checking if he exists or not
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

//Create the coach
router.post("/createCoach", async (req, res) => {
  const {email}=req.body
  const data = req.body;
  try {   
    const coachExists=await CoachModel.findOne({email:email});
    if (coachExists){
      res.send({message:"user Exists"});
    }  // Save user data
    else{

      const Coach = new CoachModel(data);
      await Coach.save();
      res.send({message:"Done",data:Coach})
    }
    // Respond with success message   
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
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});

export default router;
