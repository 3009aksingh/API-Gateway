const express = require("express");
const app = express();
const PORT = 3002;
const axios = require("axios");
const HOST = "localhost";
// const URL = "http://localhost:3001/";
// app.use(express.json());
app.get("/fakeapi", (req, res, next) => {
  res.send("Hello from FAKE API server")
})

app.post("/bogusapi", (req, res, next) => {
  res.send("Hello. from BOGUS API, trying POST request ")
})

app.listen(PORT, () => {
  axios({ 
    method : 'POST',
    url : 'http://localhost:3000/register',
    headers : {'Content-Type' : 'application/json'},
    data : {
      "apiName": "RavitejRegisters",
      "protocol": "http",
      "host": HOST,
      "port": PORT,

      // "url": HOST+":"+PORT+"/"
    },
  }).then((response)=>{
    console.log(response.data)
  })
  console.log("FAKE API running at port " + PORT + " 🚀🚀🚀");
})