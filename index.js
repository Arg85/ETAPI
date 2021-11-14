const express = require("express");
const app = express();
const datya = [{ name: "Anurag" ,dob:"109123012",course:"BE"}, { name: "Leesha",dob:"109123012",course:"BE" }, { name: "Rishika",dob:"109123012",course:"BE" }];
const datya2 = [{ name: "Anurag" ,course:"BE"}, { name: "Leesha",course:"BE" }, { name: "Rishika",course:"BE" }];
const userRoute = require("./Routes/userRoute");
// app.get('/users',userRoute)
app.use(express.json())
app.use("/users", userRoute);
app.get("/RungtaStudents", (req, res) => {
  console.log(req.body)
  
});
app.get("/RungtaStudents/Short", (req, res) => {
  res.status(404).send(datya2);
});
app.listen(7000, () => {
  console.log("server runnning on port 7000");
});
