const { nanoid } = require("nanoid");
const AWS = require("aws-sdk");

const env = require("dotenv");
env.config();

const awsConfig = {
  accessKeyId: "AKIARRVXCV4GHPQR2JTH",
  secretAccessKey: "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",
  region: "us-east-1",
};

const SES = new AWS.SES(awsConfig);

const sendmail = async (email,body) => {
  const emailnew = "bikash@tanumanasa.com";
  // const shortCode = nanoid(6).toUpperCase();

  try {
    // prepare for email
    const params = {
      Source: "welcome@vichayan.com", //from email
      Destination: {
        ToAddresses: [emailnew], // user /To email - should recieved as parameter
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: body,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "OTP FROM Vichayan Application",
        },
      },
    };

    const emailSent = SES.sendEmail(params).promise();
    emailSent
      .then((data) => {
        console.log("Email Sent Successfully", data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendmail;
// sendmail();

// bikash@tanumanasa.com

// abinash@tanumanasa.com