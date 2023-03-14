const nodemailer = require("nodemailer");
const keys = require("../config/keys")

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: "true",
  auth: {
    user: keys.emailUsername,
    pass: keys.emailPassword
  }
});

module.exports = {
  sendEmail: async function sendEmail(fName, lName, clientEmail, business, service, haveWebsite, haveDomain) {
    try {
      let info = await transporter.sendMail({
        from: "nattipop815@gmail.com",
        to: keys.emailUsername,
        subject: `New website form from ${fName} ${lName}`,
        html: `Full Name: ${fName} ${lName}`,
        html: `Email: ${clientEmail}`,
        html: `Business/Non-Profit Name: ${business}`,
        html: `Service: ${service}`,
        html: `Already have a website: ${haveWebsite}`,
        html: `Already have domain: ${haveDomain}`
      })
    } catch (err) {
      console.log(err)
    }
  }
}