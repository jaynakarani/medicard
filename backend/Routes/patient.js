const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post(
  "/addpatient",
  async (req, res) => {
    try {
      const { name, email, age , bloodG , mobileNo , gender , address , comments } = req.body;
      const patient = new Patient({
        name,
        email,
        age,
        bloodG,
        mobileNo,
        gender,
        address,
        comments
      });
      const savePatient = await patient.save();
      res.json(savePatient);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Internal server error occured");
    }
  }
);

module.exports = router;
