const express = require("express"),
  app = express();

app.get("*", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
