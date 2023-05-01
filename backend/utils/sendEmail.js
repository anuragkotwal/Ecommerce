const apiKey = process.env.API_KEY_MAILJET
const SecretKey = process.env.SECRET_KEY_MAILJET
const mailjet = require ('node-mailjet')
.apiConnect(`${apiKey}`,`${SecretKey}`);

const sendEmail = (options) =>mailjet
    .post("send", {'version': 'v3.1'})
    .request({
    "Messages":[
        {
        "From": {
            "Email": process.env.SENDER_MAIL,
            "Name":"Ecommerce"
        },
        "To": [
            {
            "Email": options.email,
            }
        ],
        "Subject": options.subject,
        "TextPart": options.message,
        }
    ]
    })

module.exports = sendEmail;
