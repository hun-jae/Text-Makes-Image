const express = require("express");
const app = express();

const sequelize = require("./models").sequelize;
const bodyParser = require("body-parser");

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  User,
  Sequelize: { Op },
} = require("./models");
sequelize.query("SET NAMES utf8;");

app.post("/add/user", (req, res) => {
  console.log(req.data);

  User.create({
    uid: req.body.uid,
    password: req.body.password,
    nickname: req.body.nickname,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

app.get("/get/user", (req, res) => {
  console.log(req);
  User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
