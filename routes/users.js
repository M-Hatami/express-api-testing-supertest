// ./routes/users.js
var express = require("express");
var router = express.Router();

const bodyParser = (req, res, next) => {
  let bodyData = "";
  req.on("data", (data) => {
    bodyData += data;
  });
  req.on("end", () => {
    if (bodyData) {
      req.body = JSON.parse(bodyData);
    }
    next();
  });
};

/*** get all users*/
router.get("/", function (req, res, next) {
  return res.json("all users sent");
});

/*** Get a specific user*/
router.get("/:id", function (req, res, next) {
  if (req.params.id === "U001") {
    // just to demo
    return res.json("user U001 found");
  }
  return res.status(404).json("user not found");
});

/*** Add a user*/
router.post("/", bodyParser, function (req, res, next) {
  let content = req.body;
  if (content.id) {
    //just to demo
    return res.status(201).json("user created");
  }
  return res.status(400).json("user not created");
});

module.exports = router;
