//EXPRESS
const express = require("express");
const app = express();

//LISTEN PORT

app.listen(3000, () => {
  console.log("server 3000");
});

//CORS
const cors = require("cors");
app.use(cors());

var approuter = require('./approuter/router.js')
approuter.config(app)

// module.exports = app;
