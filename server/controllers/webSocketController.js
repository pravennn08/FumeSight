import colors from "colors";

let sensorData = {};

export const webSocketController = (ws, req, wss) => {
  console.log(colors.yellow("Client connected"));

  ws.send(JSON.stringify({ sensor: sensorData }));

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);
      if (data.sensor) {
        sensorData = data.sensor;

        // Print sensor readings to console
        console.log(colors.green("Received:"));
        console.log(sensorData); // { temp, humid, smoke, alcohol, co2, ammonia }

        // Broadcast latest sensor readings to all connected clients
        wss.clients.forEach((client) => {
          if (client.readyState === 1) {
            client.send(JSON.stringify({ sensor: sensorData }));
          }
        });
      }
    } catch (err) {
      console.log(colors.cyan("WS Handshake:"), msg.toString());
    }
  });

  ws.on("close", () => {
    console.log(colors.red("Client disconnected"));
  });

  ws.on("error", (error) => {
    console.error(colors.red("WebSocket error:"), error);
  });
};
