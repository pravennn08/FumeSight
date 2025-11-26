import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

twilioClient.messages
  .create({
    body: "Hello master",
    from: process.env.TWILIO_WHATSAPP_NUMBER,
    to: process.env.MY_WHATSAPP_NUMBER,
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));
