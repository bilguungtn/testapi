const express = require("express");
const app = express();
const port = 3002;

const test = {
  categories: [],
  created_at: "2020-01-05 13:42:21.179347",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "JJAAmEyFQcqlWInDZcvTJg",
  updated_at: "2020-01-05 13:42:21.179347",
  url: "https://api.chucknorris.io/jokes/JJAAmEyFQcqlWInDZcvTJg",
  value: "CHuck Norris' Mother has a tatoo of Chuck Norris on her right bicep.",
};
app.get("/", (req, res) => {
  res.send({test});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

