const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// let retries=5;
// while(retries){
//   try{
//        createConnection();

//   }catch(err){

//   }
// }

app.use("/dev", require("./routes/dev.js"));
app.get("/v1", (req, res) => {
  res.send("helldo");
});

app.listen(3001, () => {
  console.log("server is listen port 3001");
});
