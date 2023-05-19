const express = require('express');
const app = express();
const router = express.Router();
const axios = require("axios");
const registry = require("./registry.json");
const fs = require("fs");
const bodyParser = require("body-parser");
// const registrationInfo = {
//     "apiName": "registrytest",
//     "host": "http://localhost",
//     "port": "3001",
//     "url": "http://localhost:3001/"
// }


// Parse JSON-encoded bodies
router.use(bodyParser.json());

router.all('/:apiName/:path', (req, res) => {
  console.log('Hello 5' );
  console.log(req.params.apiName)
  if(registry.services[req.params.apiName]){
    axios({ 
      method : req.method,
      url : registry.services[req.params.apiName].url + req.params.path,
      headers : req.headers,
      data : req.body,
    }).then((response)=> {
      res.send(response.data);
    })
  }else{
    res.send("Such an API doesn't exist");
  }
});

//! curl command for POST requesting an API to register the API : 
// curl -X POST -H "Content-Type: application/json" -d '{"apiName":"AnkitRegisters", "host":"http://localhost", "port":"3001", "url":"http://localhost:3001/"}' http://localhost:3000/register
 

router.post("/register", (req, res)=>{
  const registrationInfo =  req.body;
  console.log(registrationInfo);
  registry.services[registrationInfo.apiName] = { ...registrationInfo}
  fs.writeFile('./routes/registry.json', JSON.stringify(registry), (error)=>{
    if(error){
      res.send("Could not register" + registrationInfo.apiName + "'\n" + error);
    }else{
      res.send("\n Successfully registered" + registrationInfo.apiName + "''  ");
    }
  })
})

console.log('Hello 4');
module.exports = router;