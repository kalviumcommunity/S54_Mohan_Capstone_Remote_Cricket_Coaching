import express from "express"
const router = express.Router();
import StudentModel from "./models/studentSchema.js";

router.use(express.json());



router.post("/createUser", async (req, res) =>{
  try {
    const data = req.body;
    const user = new StudentModel(data);
    await user.save();
    res.send({
      message: true,
      data: "New user is created successfully",
      User: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: false, error: "Internal Server Error" });
  }
});


export default router;