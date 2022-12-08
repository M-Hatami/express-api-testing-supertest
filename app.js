// ./app.js
const express = require("express");
const app = express();
const router = require("./routes/users");               // import route to /users

app.use(express.static("public"));

app.use("/users", router);                              // using /users route

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;                                   // this is required by apiTest.js
