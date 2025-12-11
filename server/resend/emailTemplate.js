export const SMOKE_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smoke Danger Alert</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <div style="background: red; padding: 20px; text-align: center">
      <h1 style="color: white; margin: 0">Warning</h1>
    </div>

    <div
      style="
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <p>Hello,</p>
      <p>The <strong>smoke</strong> level in the room is currently at:</p>

      <div
        style="
          text-align: center;
          padding: 12px;
          margin: 20px 0;
          background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
          border-radius: 12px;
          border: 1px solid rgba(229, 62, 62, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        "
      >
        <span
          style="
            font-size: 56px;
            font-weight: 800;
            color: #c53030;
            display: block;
            line-height: 1;
            margin-bottom: 12px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          "
          >{smokeVal}%</span
        >

        <span
          style="
            font-size: 16px;
            color: #742a2a;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          "
          >Smoke Level</span
        >
      </div>

      <p>
        Immediate action is required. Please evacuate the area immediately and
        move to a safe location.
      </p>
      <p>
        If you are experiencing breathing difficulties, seek medical attention
        immediately.
      </p>
    </div>

    <div
      style="
        text-align: center;
        margin-top: 20px;
        color: #888;
        font-size: 0.8em;
      "
    >
      <p>
        This is an automated alert message, please do not reply to this email.
      </p>
    </div>
  </body>
</html>
`;

export const AIR_QUALITY_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Air Quality Danger Alert</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <div style="background: red; padding: 20px; text-align: center">
      <h1 style="color: white; margin: 0">Warning</h1>
    </div>

    <div
      style="
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <p>Hello,</p>
      <p>The <strong>air quality</strong> level in the room is currently at:</p>

      <div
        style="
          text-align: center;
          padding: 12px;
          margin: 20px 0;
          background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
          border-radius: 12px;
          border: 1px solid rgba(229, 62, 62, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        "
      >
        <span
          style="
            font-size: 56px;
            font-weight: 800;
            color: #c53030;
            display: block;
            line-height: 1;
            margin-bottom: 12px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          "
          >{airQualityVal}%</span
        >

        <span
          style="
            font-size: 16px;
            color: #742a2a;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          "
          >Air Quality Level</span
        >
      </div>

      <p>
        Immediate action is required. Please evacuate the area immediately and
        move to a safe location.
      </p>
      <p>
        If you are experiencing breathing difficulties, seek medical attention
        immediately.
      </p>
    </div>

    <div
      style="
        text-align: center;
        margin-top: 20px;
        color: #888;
        font-size: 0.8em;
      "
    >
      <p>
        This is an automated alert message, please do not reply to this email.
      </p>
    </div>
  </body>
</html>
`;

export const AMMONIA_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ammonia Danger Alert</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <div style="background: #ff6b35; padding: 20px; text-align: center">
      <h1 style="color: white; margin: 0">Ammonia Warning</h1>
    </div>

    <div
      style="
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <p>Hello,</p>
      <p>The <strong>ammonia</strong> level in the room is currently at:</p>

      <div
        style="
          text-align: center;
          padding: 12px;
          margin: 20px 0;
          background: linear-gradient(135deg, #fff8f5 0%, #ffe4d6 100%);
          border-radius: 12px;
          border: 1px solid rgba(255, 107, 53, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        "
      >
        <span
          style="
            font-size: 56px;
            font-weight: 800;
            color: #e04e00;
            display: block;
            line-height: 1;
            margin-bottom: 12px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          "
          >{ammoniaVal} ppm</span
        >

        <span
          style="
            font-size: 16px;
            color: #8a2c00;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          "
          >Ammonia Concentration</span
        >
      </div>

      <p style="background: #fff4f0; padding: 15px; border-left: 4px solid #ff6b35; border-radius: 4px;">
        <strong>⚠️ Immediate Actions Required:</strong>
      </p>
      <ul style="background: #fff8f5; padding: 15px 15px 15px 35px; border-radius: 4px;">
        <li>Evacuate the area immediately</li>
        <li>Avoid breathing fumes - use respiratory protection if available</li>
        <li>Ventilate the area by opening windows and doors</li>
        <li>Do not touch any spilled material</li>
        <li>If exposed, move to fresh air immediately</li>
      </ul>

      <p>
        <strong>Medical Alert:</strong> Ammonia exposure can cause burning of eyes, nose, throat and respiratory tract. 
        If anyone is experiencing difficulty breathing, coughing, or burning sensations, seek medical attention immediately.
      </p>
    </div>

    <div
      style="
        text-align: center;
        margin-top: 20px;
        color: #888;
        font-size: 0.8em;
      "
    >
      <p>
        This is an automated alert message, please do not reply to this email.
      </p>
    </div>
  </body>
</html>
`;

export const ALCOHOL_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alcohol Vapor Danger Alert</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <div style="background: #9d4edd; padding: 20px; text-align: center">
      <h1 style="color: white; margin: 0">Alcohol Vapor Warning</h1>
    </div>

    <div
      style="
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <p>Hello,</p>
      <p>The <strong>alcohol vapor</strong> level in the room is currently at:</p>

      <div
        style="
          text-align: center;
          padding: 12px;
          margin: 20px 0;
          background: linear-gradient(135deg, #f9f5ff 0%, #e9d6ff 100%);
          border-radius: 12px;
          border: 1px solid rgba(157, 78, 221, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        "
      >
        <span
          style="
            font-size: 56px;
            font-weight: 800;
            color: #7b2cbf;
            display: block;
            line-height: 1;
            margin-bottom: 12px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          "
          >{alcoholVal}% LEL</span
        >

        <span
          style="
            font-size: 16px;
            color: #5a189a;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          "
          >Alcohol Vapor Concentration</span
        >
        <div style="font-size: 12px; color: #7b2cbf; margin-top: 5px;">
          (Lower Explosive Limit)
        </div>
      </div>

      <p style="background: #f8f0ff; padding: 15px; border-left: 4px solid #9d4edd; border-radius: 4px;">
        <strong>⚠️ High Risk of Fire and Explosion:</strong>
      </p>
      <ul style="background: #f9f5ff; padding: 15px 15px 15px 35px; border-radius: 4px;">
        <li>Evacuate the area immediately</li>
        <li>Do not operate electrical switches or equipment</li>
        <li>Eliminate all ignition sources (no flames, sparks, or smoking)</li>
        <li>Ventilate the area thoroughly</li>
        <li>Use intrinsically safe equipment only</li>
      </ul>

      <p>
        <strong>Health Hazard:</strong> Alcohol vapors can cause dizziness, headaches, 
        and irritation to eyes and respiratory system. At high concentrations, 
        they can lead to loss of consciousness.
      </p>
      
      <p>
        <strong>Fire Safety:</strong> The area is now considered a Class I, Division 1 
        hazardous location. Only trained personnel with proper equipment should enter.
      </p>
    </div>

    <div
      style="
        text-align: center;
        margin-top: 20px;
        color: #888;
        font-size: 0.8em;
      "
    >
      <p>
        This is an automated alert message, please do not reply to this email.
      </p>
    </div>
  </body>
</html>
`;
export const TEMPERATURE_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Temperature Alert</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <div style="background: #ff6b35; padding: 20px; text-align: center">
      <h1 style="color: white; margin: 0">Temperature Alert</h1>
    </div>

    <div
      style="
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      "
    >
      <p>Hello,</p>
      <p>A temperature alert has been triggered in the monitoring system.</p>

      <div
        style="
          text-align: center;
          padding: 12px;
          margin: 20px 0;
          background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
          border-radius: 12px;
          border: 1px solid rgba(255, 107, 53, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        "
      >
        <span
          style="
            font-size: 56px;
            font-weight: 800;
            color: #c53030;
            display: block;
            line-height: 1;
            margin-bottom: 12px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          "
          >{temperatureVal}°C</span
        >

        <span
          style="
            font-size: 16px;
            color: #742a2a;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          "
          >Current Temperature</span
        >
      </div>

      <div style="margin: 20px 0; padding: 15px; background: #fff4f0; border-radius: 8px; border-left: 4px solid #ff6b35;">
        <p style="margin: 0 0 10px 0; font-weight: bold; color: #c53030;">
          ⚠️ TEMPERATURE ALERT
        </p>
        <p style="margin: 0;">
          Temperature has exceeded the threshold limit.
        </p>
      </div>

      <p style="background: #fff8f5; padding: 15px; border-left: 4px solid #ff6b35; border-radius: 4px;">
        <strong>⚠️ Recommended Actions:</strong>
      </p>
      <ul style="background: #fff8f5; padding: 15px 15px 15px 35px; border-radius: 4px;">
        <li>Check the temperature monitoring system</li>
        <li>Verify sensor readings</li>
        <li>Ensure proper ventilation in the area</li>
        <li>Monitor for any safety concerns</li>
        <li>Take appropriate measures based on the temperature level</li>
      </ul>

      <p>
        <strong>Note:</strong> This is an automated temperature alert. Please verify the actual conditions in the monitored area.
      </p>
      
      <p>
        <strong>Alert Details:</strong><br>
        • Threshold: 10°C<br>
        • Current Reading: {temperatureVal}°C<br>
        • Alert Time: {alertTime}<br>
        • System: Air Quality Monitoring
      </p>
    </div>

    <div
      style="
        text-align: center;
        margin-top: 20px;
        color: #888;
        font-size: 0.8em;
      "
    >
      <p>
        This is an automated alert message. Please do not reply to this email.
      </p>
      <p>
        Air Quality Monitoring System
      </p>
    </div>
  </body>
</html>`;
