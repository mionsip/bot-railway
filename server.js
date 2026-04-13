const express = require("express");
const { spawn } = require("child_process");

const app = express();
const port = process.env.PORT || 3000;

// chạy bot KHÔNG block
const bot = spawn("openclaw", ["gateway"]);

bot.stdout.on("data", (data) => {
  console.log(`bot: ${data}`);
});

bot.stderr.on("data", (data) => {
  console.error(`bot error: ${data}`);
});

// route uptime
app.get("/", (req, res) => {
  res.send("Bot is alive!");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
