import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
  res.sendStatus(200);
});

app.get("/healthz", (_req, res) => {
  return res.sendStatus(200);
});

const { PORT = 4000 } = process.env;


app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

process.on("SIGINT", function () {
  console.log("\ngracefully shutting down from SIGINT (Crtl-C)");
  process.exit();
});
