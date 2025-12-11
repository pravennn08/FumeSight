// // // import { resendClient, sender } from "./resend.config.js";
// // // import {
// // //   SMOKE_ALERT_EMAIL_TEMPLATE,
// // //   AIR_QUALITY_ALERT_EMAIL_TEMPLATE,
// // //   AMMONIA_ALERT_EMAIL_TEMPLATE,
// // //   ALCOHOL_ALERT_EMAIL_TEMPLATE,
// // //   TEMPERATURE_ALERT_EMAIL_TEMPLATE,
// // // } from "./emailTemplate.js";

// // // export const sendSmokeAlertEmail = async (email, smokeVal) => {
// // //   const recipient = [{ email }];
// // //   try {
// // //     const response = await resendClient.emails.send({
// // //       from: sender,
// // //       to: recipient,
// // //       subject: "Smoke Danger Alert",
// // //       html: SMOKE_ALERT_EMAIL_TEMPLATE.replace("{smokeVal}", smokeVal),
// // //     });
// // //     return response;
// // //   } catch (err) {
// // //     console.error(err);
// // //     throw new Error(
// // //       err.message || `Error sending verification email due to ${err} `
// // //     );
// // //   }
// // // };

// // // export const sendAirQualityAlertEmail = async (email, airQualityVal) => {
// // //   const recipient = [{ email }];
// // //   try {
// // //     const response = await resendClient.emails.send({
// // //       from: sender,
// // //       to: recipient,
// // //       subject: "Air Quality Danger Alert",
// // //       html: AIR_QUALITY_ALERT_EMAIL_TEMPLATE.replace(
// // //         "{airQualityVal}",
// // //         airQualityVal
// // //       ),
// // //     });
// // //     return response;
// // //   } catch (err) {
// // //     console.error(err);
// // //     throw new Error(
// // //       err.message || `Error sending verification email due to ${err} `
// // //     );
// // //   }
// // // };

// // // export const sendAlcoholAlertEmail = async (email, alcoholVal) => {
// // //   const recipient = [{ email }];
// // //   try {
// // //     const response = await resendClient.emails.send({
// // //       from: sender,
// // //       to: recipient,
// // //       subject: "Air Quality Danger Alert",
// // //       html: ALCOHOL_ALERT_EMAIL_TEMPLATE.replace("{alcoholVal}", alcoholVal),
// // //     });
// // //     return response;
// // //   } catch (err) {
// // //     console.error(err);
// // //     throw new Error(
// // //       err.message || `Error sending verification email due to ${err} `
// // //     );
// // //   }
// // // };

// // // export const sendAmmoniaAlertEmail = async (email, ammoniaVal) => {
// // //   const recipient = [{ email }];
// // //   try {
// // //     const response = await resendClient.emails.send({
// // //       from: sender,
// // //       to: recipient,
// // //       subject: "Air Quality Danger Alert",
// // //       html: AMMONIA_ALERT_EMAIL_TEMPLATE.replace("{ammoniaVal}", ammoniaVal),
// // //     });
// // //     return response;
// // //   } catch (err) {
// // //     console.error(err);
// // //     throw new Error(
// // //       err.message || `Error sending verification email due to ${err} `
// // //     );
// // //   }
// // // };

// // // export const sendTemperatureAlertEmail = async (email, temperatureVal) => {
// // //   try {
// // //     const currentTime = new Date().toLocaleString();

// // //     const htmlContent = TEMPERATURE_ALERT_EMAIL_TEMPLATE.replace(
// // //       /{temperatureVal}/g,
// // //       temperatureVal
// // //     ).replace(/{alertTime}/g, currentTime);

// // //     const response = await resendClient.emails.send({
// // //       from: "Air Quality Alert <onboarding@resend.dev>",
// // //       to: email,
// // //       subject: `🌡️ Temperature Alert: ${temperatureVal}°C Detected`,
// // //       html: htmlContent,
// // //     });

// // //     console.log("Temperature alert email sent:", response.data?.id);
// // //     return response;
// // //   } catch (err) {
// // //     console.error("Error sending temperature alert email:", err);
// // //     throw new Error(`Failed to send temperature alert email: ${err.message}`);
// // //   }
// // // };

// // import { resendClient } from "./resend.config.js"; // Only need resendClient
// // import {
// //   SMOKE_ALERT_EMAIL_TEMPLATE,
// //   AIR_QUALITY_ALERT_EMAIL_TEMPLATE,
// //   AMMONIA_ALERT_EMAIL_TEMPLATE,
// //   ALCOHOL_ALERT_EMAIL_TEMPLATE,
// //   TEMPERATURE_ALERT_EMAIL_TEMPLATE,
// // } from "./emailTemplate.js";

// // // Helper function to create subject
// // const createSubject = (type, value) => {
// //   const thresholds = {
// //     smoke: 10, // Example threshold - adjust as needed
// //     airQuality: 100, // Example threshold - adjust as needed
// //     ammonia: 5, // Example threshold - adjust as needed
// //     alcohol: 50, // Example threshold - adjust as needed
// //     temperature: 10, // Your existing threshold
// //   };

// //   const types = {
// //     smoke: "Smoke",
// //     airQuality: "Air Quality",
// //     ammonia: "Ammonia",
// //     alcohol: "Alcohol",
// //     temperature: "Temperature",
// //   };

// //   return `🚨 ${types[type]} Alert: ${value}${
// //     type === "temperature" ? "°C" : type === "ammonia" ? " ppm" : "%"
// //   } Detected`;
// // };

// // export const sendSmokeAlertEmail = async (email, smokeVal) => {
// //   try {
// //     console.log(`Sending smoke alert email to: ${email}, Value: ${smokeVal}%`);

// //     const htmlContent = SMOKE_ALERT_EMAIL_TEMPLATE.replace(
// //       "{smokeVal}",
// //       smokeVal
// //     );

// //     const response = await resendClient.emails.send({
// //       from: "Air Quality Alert <onboarding@resend.dev>", // Use string format
// //       to: email, // Direct string or array of strings
// //       subject: createSubject("smoke", smokeVal),
// //       html: htmlContent,
// //     });

// //     console.log("Smoke alert email sent successfully:", response.data?.id);
// //     return response;
// //   } catch (err) {
// //     console.error("Error sending smoke alert email:", err);
// //     throw new Error(`Failed to send smoke alert email: ${err.message}`);
// //   }
// // };

// // export const sendAirQualityAlertEmail = async (email, airQualityVal) => {
// //   try {
// //     console.log(
// //       `Sending air quality alert email to: ${email}, Value: ${airQualityVal}%`
// //     );

// //     const htmlContent = AIR_QUALITY_ALERT_EMAIL_TEMPLATE.replace(
// //       "{airQualityVal}",
// //       airQualityVal
// //     );

// //     const response = await resendClient.emails.send({
// //       from: "Air Quality Alert <onboarding@resend.dev>",
// //       to: email,
// //       subject: createSubject("airQuality", airQualityVal),
// //       html: htmlContent,
// //     });

// //     console.log(
// //       "Air quality alert email sent successfully:",
// //       response.data?.id
// //     );
// //     return response;
// //   } catch (err) {
// //     console.error("Error sending air quality alert email:", err);
// //     throw new Error(`Failed to send air quality alert email: ${err.message}`);
// //   }
// // };

// // export const sendAlcoholAlertEmail = async (email, alcoholVal) => {
// //   try {
// //     console.log(
// //       `Sending alcohol alert email to: ${email}, Value: ${alcoholVal}%`
// //     );

// //     // You need to define ALCOHOL_ALERT_EMAIL_TEMPLATE or create it
// //     // For now, let me provide a simple template
// //     const alcoholTemplate = `<!DOCTYPE html>
// //     <html lang="en">
// //       <head>
// //         <meta charset="UTF-8" />
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //         <title>Alcohol Danger Alert</title>
// //       </head>
// //       <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
// //         <div style="background: #8B0000; padding: 20px; text-align: center">
// //           <h1 style="color: white; margin: 0">Alcohol Warning</h1>
// //         </div>
// //         <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
// //           <p>Hello,</p>
// //           <p>The <strong>alcohol vapor</strong> level in the room is currently at:</p>
// //           <div style="text-align: center; padding: 12px; margin: 20px 0; background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%); border-radius: 12px; border: 1px solid rgba(139, 0, 0, 0.3);">
// //             <span style="font-size: 56px; font-weight: 800; color: #8B0000; display: block; line-height: 1; margin-bottom: 12px;">${alcoholVal}%</span>
// //             <span style="font-size: 16px; color: #600000; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">Alcohol Vapor Level</span>
// //           </div>
// //           <p style="background: #fff4f0; padding: 15px; border-left: 4px solid #8B0000; border-radius: 4px;">
// //             <strong>⚠️ Immediate Actions Required:</strong>
// //           </p>
// //           <ul style="background: #fff8f5; padding: 15px 15px 15px 35px; border-radius: 4px;">
// //             <li>Evacuate the area immediately</li>
// //             <li>Ventilate the area thoroughly</li>
// //             <li>Eliminate all ignition sources (no smoking, sparks, or flames)</li>
// //             <li>Do not operate electrical switches or equipment</li>
// //             <li>Use explosion-proof equipment only</li>
// //           </ul>
// //           <p><strong>Health Risk:</strong> Alcohol vapors can cause dizziness, headache, nausea, and at high concentrations, unconsciousness or explosion risk.</p>
// //         </div>
// //         <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
// //           <p>This is an automated alert message, please do not reply to this email.</p>
// //         </div>
// //       </body>
// //     </html>`;

// //     const response = await resendClient.emails.send({
// //       from: "Air Quality Alert <onboarding@resend.dev>",
// //       to: email,
// //       subject: createSubject("alcohol", alcoholVal),
// //       html: alcoholTemplate,
// //     });

// //     console.log("Alcohol alert email sent successfully:", response.data?.id);
// //     return response;
// //   } catch (err) {
// //     console.error("Error sending alcohol alert email:", err);
// //     throw new Error(`Failed to send alcohol alert email: ${err.message}`);
// //   }
// // };

// // export const sendAmmoniaAlertEmail = async (email, ammoniaVal) => {
// //   try {
// //     console.log(
// //       `Sending ammonia alert email to: ${email}, Value: ${ammoniaVal} ppm`
// //     );

// //     const htmlContent = AMMONIA_ALERT_EMAIL_TEMPLATE.replace(
// //       "{ammoniaVal}",
// //       ammoniaVal
// //     );

// //     const response = await resendClient.emails.send({
// //       from: "Air Quality Alert <onboarding@resend.dev>",
// //       to: email,
// //       subject: createSubject("ammonia", ammoniaVal),
// //       html: htmlContent,
// //     });

// //     console.log("Ammonia alert email sent successfully:", response.data?.id);
// //     return response;
// //   } catch (err) {
// //     console.error("Error sending ammonia alert email:", err);
// //     throw new Error(`Failed to send ammonia alert email: ${err.message}`);
// //   }
// // };

// // // Your existing temperature function (updated)
// // export const sendTemperatureAlertEmail = async (email, temperatureVal) => {
// //   try {
// //     console.log(
// //       `Sending temperature alert email to: ${email}, Value: ${temperatureVal}°C`
// //     );

// //     const currentTime = new Date().toLocaleString();
// //     const htmlContent = TEMPERATURE_ALERT_EMAIL_TEMPLATE.replace(
// //       /{temperatureVal}/g,
// //       temperatureVal
// //     ).replace(/{alertTime}/g, currentTime);

// //     const response = await resendClient.emails.send({
// //       from: "Air Quality Alert <onboarding@resend.dev>",
// //       to: email,
// //       subject: createSubject("temperature", temperatureVal),
// //       html: htmlContent,
// //     });

// //     console.log(
// //       "Temperature alert email sent successfully:",
// //       response.data?.id
// //     );
// //     return response;
// //   } catch (err) {
// //     console.error("Error sending temperature alert email:", err);
// //     throw new Error(`Failed to send temperature alert email: ${err.message}`);
// //   }
// // };

// import { resendClient } from "./resend.config.js";
// import {
//   SMOKE_ALERT_EMAIL_TEMPLATE,
//   AIR_QUALITY_ALERT_EMAIL_TEMPLATE,
//   AMMONIA_ALERT_EMAIL_TEMPLATE,
//   ALCOHOL_ALERT_EMAIL_TEMPLATE,
//   TEMPERATURE_ALERT_EMAIL_TEMPLATE,
// } from "./emailTemplate.js";

// // Helper function to create subject
// const createSubject = (type, value) => {
//   const types = {
//     smoke: "Smoke",
//     airQuality: "Air Quality",
//     ammonia: "Ammonia",
//     alcohol: "Alcohol Vapor",
//     temperature: "Temperature",
//   };

//   const units = {
//     smoke: "%",
//     airQuality: "%",
//     ammonia: " ppm",
//     alcohol: "% LEL",
//     temperature: "°C",
//   };

//   return `🚨 ${types[type]} Alert: ${value}${units[type]} Detected`;
// };

// export const sendSmokeAlertEmail = async (email, smokeVal) => {
//   try {
//     console.log(`Sending smoke alert email to: ${email}, Value: ${smokeVal}%`);

//     const htmlContent = SMOKE_ALERT_EMAIL_TEMPLATE.replace(
//       "{smokeVal}",
//       smokeVal
//     );

//     const response = await resendClient.emails.send({
//       from: "Air Quality Alert <onboarding@resend.dev>",
//       to: email,
//       subject: createSubject("smoke", smokeVal),
//       html: htmlContent,
//     });

//     console.log("✅ Smoke alert email sent successfully:", response.data?.id);
//     return response;
//   } catch (err) {
//     console.error("❌ Error sending smoke alert email:", err);
//     throw new Error(`Failed to send smoke alert email: ${err.message}`);
//   }
// };

// export const sendAirQualityAlertEmail = async (email, airQualityVal) => {
//   try {
//     console.log(
//       `Sending air quality alert email to: ${email}, Value: ${airQualityVal}%`
//     );

//     const htmlContent = AIR_QUALITY_ALERT_EMAIL_TEMPLATE.replace(
//       "{airQualityVal}",
//       airQualityVal
//     );

//     const response = await resendClient.emails.send({
//       from: "Air Quality Alert <onboarding@resend.dev>",
//       to: email,
//       subject: createSubject("airQuality", airQualityVal),
//       html: htmlContent,
//     });

//     console.log(
//       "✅ Air quality alert email sent successfully:",
//       response.data?.id
//     );
//     return response;
//   } catch (err) {
//     console.error("❌ Error sending air quality alert email:", err);
//     throw new Error(`Failed to send air quality alert email: ${err.message}`);
//   }
// };

// export const sendAlcoholAlertEmail = async (email, alcoholVal) => {
//   try {
//     console.log(
//       `Sending alcohol alert email to: ${email}, Value: ${alcoholVal}% LEL`
//     );

//     // Use the correct template from emailTemplate.js
//     const htmlContent = ALCOHOL_ALERT_EMAIL_TEMPLATE.replace(
//       "{alcoholVal}",
//       alcoholVal
//     );

//     const response = await resendClient.emails.send({
//       from: "Air Quality Alert <onboarding@resend.dev>",
//       to: email,
//       subject: createSubject("alcohol", alcoholVal),
//       html: htmlContent,
//     });

//     console.log("✅ Alcohol alert email sent successfully:", response.data?.id);
//     return response;
//   } catch (err) {
//     console.error("❌ Error sending alcohol alert email:", err);
//     throw new Error(`Failed to send alcohol alert email: ${err.message}`);
//   }
// };

// export const sendAmmoniaAlertEmail = async (email, ammoniaVal) => {
//   try {
//     console.log(
//       `Sending ammonia alert email to: ${email}, Value: ${ammoniaVal} ppm`
//     );

//     const htmlContent = AMMONIA_ALERT_EMAIL_TEMPLATE.replace(
//       "{ammoniaVal}",
//       ammoniaVal
//     );

//     const response = await resendClient.emails.send({
//       from: "Air Quality Alert <onboarding@resend.dev>",
//       to: email,
//       subject: createSubject("ammonia", ammoniaVal),
//       html: htmlContent,
//     });

//     console.log("✅ Ammonia alert email sent successfully:", response.data?.id);
//     return response;
//   } catch (err) {
//     console.error("❌ Error sending ammonia alert email:", err);
//     throw new Error(`Failed to send ammonia alert email: ${err.message}`);
//   }
// };

// export const sendTemperatureAlertEmail = async (email, temperatureVal) => {
//   try {
//     console.log(
//       `Sending temperature alert email to: ${email}, Value: ${temperatureVal}°C`
//     );

//     const currentTime = new Date().toLocaleString();
//     const htmlContent = TEMPERATURE_ALERT_EMAIL_TEMPLATE.replace(
//       /{temperatureVal}/g,
//       temperatureVal
//     ).replace(/{alertTime}/g, currentTime);

//     const response = await resendClient.emails.send({
//       from: "Air Quality Alert <onboarding@resend.dev>",
//       to: email,
//       subject: createSubject("temperature", temperatureVal),
//       html: htmlContent,
//     });

//     console.log(
//       "✅ Temperature alert email sent successfully:",
//       response.data?.id
//     );
//     return response;
//   } catch (err) {
//     console.error("❌ Error sending temperature alert email:", err);
//     throw new Error(`Failed to send temperature alert email: ${err.message}`);
//   }
// };

import { resendClient } from "./resend.config.js";
import {
  SMOKE_ALERT_EMAIL_TEMPLATE,
  AIR_QUALITY_ALERT_EMAIL_TEMPLATE,
  AMMONIA_ALERT_EMAIL_TEMPLATE,
  ALCOHOL_ALERT_EMAIL_TEMPLATE,
  TEMPERATURE_ALERT_EMAIL_TEMPLATE,
} from "./emailTemplate.js";

// Helper function to create subject
const createSubject = (type, value) => {
  const types = {
    smoke: "Smoke",
    airQuality: "Air Quality",
    ammonia: "Ammonia",
    alcohol: "Alcohol Vapor",
    temperature: "Temperature",
  };

  const units = {
    smoke: "%",
    airQuality: "%",
    ammonia: " ppm",
    alcohol: "% LEL",
    temperature: "°C",
  };

  return `🚨 ${types[type]} Alert: ${value}${units[type]} Detected`;
};

export const sendSmokeAlertEmail = async (email, smokeVal) => {
  try {
    console.log(`Sending smoke alert email to: ${email}, Value: ${smokeVal}%`);

    // Use GLOBAL replace like temperature function
    const htmlContent = SMOKE_ALERT_EMAIL_TEMPLATE.replace(
      /{smokeVal}/g, // Notice the /g flag
      smokeVal
    );

    const response = await resendClient.emails.send({
      from: "Air Quality Alert <onboarding@resend.dev>",
      to: email,
      subject: createSubject("smoke", smokeVal),
      html: htmlContent,
    });

    console.log("✅ Smoke alert email sent successfully:", response.data?.id);
    return response;
  } catch (err) {
    console.error("❌ Error sending smoke alert email:", err);
    throw new Error(`Failed to send smoke alert email: ${err.message}`);
  }
};

export const sendAirQualityAlertEmail = async (email, airQualityVal) => {
  try {
    console.log(
      `Sending air quality alert email to: ${email}, Value: ${airQualityVal}%`
    );

    // Use GLOBAL replace
    const htmlContent = AIR_QUALITY_ALERT_EMAIL_TEMPLATE.replace(
      /{airQualityVal}/g, // Notice the /g flag
      airQualityVal
    );

    const response = await resendClient.emails.send({
      from: "Air Quality Alert <onboarding@resend.dev>",
      to: email,
      subject: createSubject("airQuality", airQualityVal),
      html: htmlContent,
    });

    console.log(
      "✅ Air quality alert email sent successfully:",
      response.data?.id
    );
    return response;
  } catch (err) {
    console.error("❌ Error sending air quality alert email:", err);
    throw new Error(`Failed to send air quality alert email: ${err.message}`);
  }
};

export const sendAlcoholAlertEmail = async (email, alcoholVal) => {
  try {
    console.log(
      `Sending alcohol alert email to: ${email}, Value: ${alcoholVal}% LEL`
    );

    // Use GLOBAL replace with the correct template
    const htmlContent = ALCOHOL_ALERT_EMAIL_TEMPLATE.replace(
      /{alcoholVal}/g, // Notice the /g flag
      alcoholVal
    );

    const response = await resendClient.emails.send({
      from: "Air Quality Alert <onboarding@resend.dev>",
      to: email,
      subject: createSubject("alcohol", alcoholVal),
      html: htmlContent,
    });

    console.log("✅ Alcohol alert email sent successfully:", response.data?.id);
    return response;
  } catch (err) {
    console.error("❌ Error sending alcohol alert email:", err);
    throw new Error(`Failed to send alcohol alert email: ${err.message}`);
  }
};

export const sendAmmoniaAlertEmail = async (email, ammoniaVal) => {
  try {
    console.log(
      `Sending ammonia alert email to: ${email}, Value: ${ammoniaVal} ppm`
    );

    // Use GLOBAL replace
    const htmlContent = AMMONIA_ALERT_EMAIL_TEMPLATE.replace(
      /{ammoniaVal}/g, // Notice the /g flag
      ammoniaVal
    );

    const response = await resendClient.emails.send({
      from: "Air Quality Alert <onboarding@resend.dev>",
      to: email,
      subject: createSubject("ammonia", ammoniaVal),
      html: htmlContent,
    });

    console.log("✅ Ammonia alert email sent successfully:", response.data?.id);
    return response;
  } catch (err) {
    console.error("❌ Error sending ammonia alert email:", err);
    throw new Error(`Failed to send ammonia alert email: ${err.message}`);
  }
};

export const sendTemperatureAlertEmail = async (email, temperatureVal) => {
  try {
    console.log(
      `Sending temperature alert email to: ${email}, Value: ${temperatureVal}°C`
    );

    const currentTime = new Date().toLocaleString();
    const htmlContent = TEMPERATURE_ALERT_EMAIL_TEMPLATE.replace(
      /{temperatureVal}/g,
      temperatureVal
    ).replace(/{alertTime}/g, currentTime);

    const response = await resendClient.emails.send({
      from: "Air Quality Alert <onboarding@resend.dev>",
      to: email,
      subject: createSubject("temperature", temperatureVal),
      html: htmlContent,
    });

    console.log(
      "✅ Temperature alert email sent successfully:",
      response.data?.id
    );
    return response;
  } catch (err) {
    console.error("❌ Error sending temperature alert email:", err);
    throw new Error(`Failed to send temperature alert email: ${err.message}`);
  }
};
