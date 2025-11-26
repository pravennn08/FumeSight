import { twilioClient, sender } from "./twilio.config.js";
import {
  SMOKE_ALERT_MESSAGE,
  AIR_QUALITY_ALERT_MESSAGE,
} from "./messageTemplate.js";

export const sendSmokeAlertMessage = async (twilioWhatsApp, smokeVal) => {
  const recipient = [{ twilioWhatsApp }];
  try {
    const message = await twilioClient.messages.create({
      body: SMOKE_ALERT_MESSAGE.replace("{smokeVal}", smokeVal),
      from: sender,
      to: recipient,
    });
    console.log(message.sid);
    return message;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || `Failed to send message due to ${err} `);
  }
};

export const sendAirQualityAlertMessage = async (
  twilioWhatsApp,
  airQualityVal
) => {
  const recipient = [{ twilioWhatsApp }];
  try {
    const message = await twilioClient.messages.create({
      body: AIR_QUALITY_ALERT_MESSAGE.replace("{airQualityVaL}", airQualityVal),
      from: sender,
      to: recipient,
    });
    console.log(message.sid);
    return message;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || `Failed to send message due to ${err} `);
  }
};

// export const sendSmokeAndAirQualityAlertMessage = async (
//   twilioWhatsApp,
//   airQualityVal
// ) => {
//   const recipient = [{ twilioWhatsApp }];
//   try {
//     const message = await twilioClient.messages.create({
//       body: SMOKE_AND_AIR_QUALITY_ALERT_MESSAGE.replace.replaceAll(
//         /\{(smokeVal|airQualityVal)\}/g,
//         (match) => {
//           if (match === "{smokeVal}") return smokeVal;
//           if (match === "{airQualityVal}") return airQualityVal;
//           return match;
//         }
//       ),
//       from: sender,
//       to: recipient,
//     });
//     console.log(message.sid);
//     return message;
//   } catch (err) {
//     console.error(err);
//     throw new Error(err.message || `Failed to send message due to ${err} `);
//   }
// };
