const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// CREATE student
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json(error);
  }
});

// READ all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE student
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;
