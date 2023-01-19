import express from "express";
import {
  createUser,
  getAllUser,
  getUser,
  login,
  // forget,
} from "../controller/user.js";
import { checkToken } from "../middleware/middleware.js";
const routerUser = express.Router();

routerUser
  .all(checkToken)
  .get("/", getAllUser)
  .post("/register", createUser)
  .post("/login", login)
  // .post("/forget", forget);
routerUser.route("/:id").get(getUser);

export default routerUser;