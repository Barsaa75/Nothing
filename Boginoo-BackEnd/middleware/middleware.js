import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  token = req.body.token;
  jwt.verify(token, "T0PS3CR3T", (err, result) => {
    if (err) {
      res.status(403).send(err);
    } else {
      next();
      return result;
    }
  });
};
