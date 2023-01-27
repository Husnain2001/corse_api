const express = require("express");
const router = express.Router();


const authController = require("./auth.controller");

router

  .get("/", authController.findAll)

  .get("/count", authController.Count) 

  .post("/", authController.create) // Create a new User

  .post("/login", authController.login)
  
  .get("/verify-token", (err, res) => {
    res.json('1')
  }) 
  
  .get("/:id", authController.findById)

  .delete('/delete/:id', authController.delete);

module.exports = router;