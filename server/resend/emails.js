import { resendClient, sender } from "./resend.config.js";
import {
  SMOKE_ALERT_EMAIL_TEMPLATE,
  AIR_QUALITY_ALERT_EMAIL_TEMPLATE,
  SMOKE_AND_AIR_QUALITY_ALERT_TEMPLATE,
} from "./emailTemplate.js";

export const sendSmokeAlertEmail = async (email, smokeVal) => {
  const recipient = [{ email }];
  try {
    const response = await resendClient.emails.send({
      from: sender,
      to: recipient,
      subject: "Smoke Danger Alert",
      html: SMOKE_ALERT_EMAIL_TEMPLATE.replace("{smokeVal}", smokeVal),
    });
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(
      err.message || `Error sending verification email due to ${err} `
    );
  }
};

export const sendAirQualityAlertEmail = async (email, airQualityVal) => {
  const recipient = [{ email }];
  try {
    const response = await resendClient.emails.send({
      from: sender,
      to: recipient,
      subject: "Air Quality Danger Alert",
      html: AIR_QUALITY_ALERT_EMAIL_TEMPLATE.replace(
        "{airQualityVal}",
        airQualityVal
      ),
    });
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(
      err.message || `Error sending verification email due to ${err} `
    );
  }
};

export const sendSmokeAndAirQualityAlertEmail = async (
  email,
  smokeVal,
  airQualityVal
) => {
  const recipient = [{ email }];
  try {
    const response = await resendClient.emails.send({
      from: sender,
      to: recipient,
      subject: "Smoke and Air Quality Danger Alert",
      html: SMOKE_AND_AIR_QUALITY_ALERT_TEMPLATE.replaceAll(
        /\{(smokeVal|airQualityVal)\}/g,
        (match) => {
          if (match === "{smokeVal}") return smokeVal;
          if (match === "{airQualityVal}") return airQualityVal;
          return match;
        }
      ),
    });
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(
      err.message || `Error sending verification email due to ${err} `
    );
  }
};
