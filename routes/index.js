const express = require('express');
const router = express.Router();
console.log('Hello 3');
router.all('/:apiName', (req, res) => {
  console.log('Hello 5');
  console.log(req.params.apiName);
  res.send(req.params.apiName + '\n');
});
console.log('Hello 4');
module.exports = router;
