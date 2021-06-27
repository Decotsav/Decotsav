const express = require('express');
const router = express.Router()
const sgMail = require('@sendgrid/mail');
const { getMaxListeners } = require('process');
const { send } = require('@sendgrid/mail');
const sgMailApiKey = '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';
const template_id = "d-78e9f7ee8fa14a8aab79fa63ddb23a69";
var email = "digvijayrana0696@gmail.com";
const to = 'digvijaygaur96@gmail.com'


router.post("/sendGridEmail", (req, res) => {
    const { name, emailUser, address, } = req.body;
    const output = `
  <p>You have a new Contact Request</p>
  <h3>contact Details </h3>
  <ul>
  <li>Name: ${name}</li>
  <li>Email:${emailUser}</li>
  <li>Address:${address}<li>
  <ul>`;

    sgMail.setApiKey(sgMailApiKey)
    const msg = {
        to: to, // Change to your recipient
        from: { email }, // Change to your verified sender
        subject: 'Vehicle Authentication',
        text: 'Testing  Data',
        html: output,
        dynamic_template_data: {
            name: name,
            phone: emailUser,
            address: address
        },

    }
    sgMail
        .send(msg)
        .then(() => {
            res.send("Email Sent");
            console.log('Email sent')

        })
        .catch((error) => {
            console.error(error)
        })
})

module.exports = router;