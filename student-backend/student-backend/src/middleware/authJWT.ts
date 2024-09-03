const jwt = require("jsonwebtoken");

const verifyToken = (req: any, res: any, next: any) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, "Akanksha", (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.body.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };
