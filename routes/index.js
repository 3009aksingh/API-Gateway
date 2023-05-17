const express = require('express');
const router = express.Router();
const axios = require("axios");
const registry = require("./registry.json");
console.log('Hello 3');


router.all('/:apiName/:path', (req, res) => {
  console.log('Hello 5' );
  if(registry.services[req.params.apiName]){
    axios.get(registry.services[req.params.apiName].url + req.params.path).then((response)=> {
      res.send(response.data);
    })
  }else{
    res.send("Such an API doesn't exist");
  }
});

console.log('Hello 4');
module.exports = router;