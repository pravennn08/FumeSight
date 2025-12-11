// Add this to your existing middleware file or create wsMiddleware.js
export const attachWebSocket = (wsInstance) => {
  return (req, res, next) => {
    req.wsServer = wsInstance.getWss();
    next();
  };
};
