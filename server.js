const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = process.env.PORT || 3000;

// chạy bot
exec("openclaw gateway start");

// route cho uptime
app.get("/", (req, res) => {
  res.send("Bot is alive!");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
