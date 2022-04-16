require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const { PORT } = process.env;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.listen(PORT, () => {
  console.log("***************** ***************** *****************");
  console.log("********** 서버가 정상적으로 실행되고 있습니다 *********");
  console.log("***************** ***************** *****************");
});

app.get("/api/now", cors(corsOptions), (req, res) => {
  res.json({ now: new Date().toLocaleString() });
});
