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

//READ FILE
var file = require("./list/emp.json");


//API FOR GETTING LIST OF EMPLOYEES
app.get("/getuser", (req, res) => {
  var arr = [];
  var infor = [];
  infor = file.employees;
  let start = parseInt(req.query.start);
  let end = parseInt(req.query.end);
  // console.log(start,end)
  for (let i = start; i < end; i++) {
    arr.push(infor[i]);
     if (i == infor.length) {
      break;
    }
  }
  
  res.send({ records:arr,length: infor.length});
  
});

 // {users:arr,length:infor.length}
// console.log(i)
 // console.log(start,end)
module.exports = app;
