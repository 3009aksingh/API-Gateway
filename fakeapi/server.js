const express = require("express");
const app = express();
const PORT = 3001;
// app.use(express.json());
app.get("/fakeapi", (req, res, next) => {
  res.send("Hello from FAKE API server")
})

app.listen(PORT, () => {
  console.log("FAKE API running at port " + PORT);
})