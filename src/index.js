const nodemailer = require("nodemailer");
var OTP = Math.floor(Math.random() * 10000);
const ResumeCraftHub = "Email_id";
const edata = {
  email: "abhay@gmail.com",
  otpa: OTP,
};
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("forgot-password");
});

app.get("/forgot-password", (req, res) => {
  res.render("forgot-password");
  az();
});
app.post("/refresh", (req, res) => {
  res.render("forgot-password");
});
app.post("/Send-OTP", async (req, res) => {
  edata.email = await req.body.data_email;
  az();
  res.render("conf");
  edata.email = "abhay@gmail.com";
});

const az = async (req, res) => {
  var dataz = edata.email;
  const auth = await nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: ResumeCraftHub,
      pass: "Email_app_password",
    },
  });
  const reciver = await {
    from: "ResumeCraftHub",
    to: dataz,
    subject: "One Time password for your Email",
    text: "Hello",
    html: `your one time password is : <b style="color:red">${OTP}</b>`,
  };
  edata.email = "abhay@gmail.com";
  dataz = "abhay@gmail.com";
  auth.sendMail(reciver, (err, res) => {
    if (err) throw err;
    console.log("success");
    console.log(edata.otpa);
    response.end("success");
  });
  edata.email = "abhay@gmail.com";
};

app.post("/conf", async (req, res) => {
  const condat = req.body.conotp;
  console.log(condat);
  if (condat == OTP) {
    res.status(200).render("home");
  } else {
    res.status(400).render("kick");
  }
});

app.listen(port, (req, res) => {
  console.log(`server is running in port no ${port}`);
});
