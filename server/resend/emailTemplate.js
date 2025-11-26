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

export const SMOKE_AND_AIR_QUALITY_ALERT_TEMPLATE = `<!DOCTYPE html>
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
      <p>
        The <strong>smoke</strong> and <strong>air quality</strong> level in the
        room is currently at:
      </p>

      <div
        style="
          text-align: center;
          padding: 18px;
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
        <br />
        <br />

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
