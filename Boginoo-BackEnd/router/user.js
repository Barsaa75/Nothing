import express from "express";
import {
  user,
  users,
  createUser,
  deleteUser,
  getUserById,
} from "../controller/user.js";

const userRouter = express.Router();

userRouter.route("/").get(users).post(createUser);
userRouter.route("/:id").delete(deleteUser).get(getUserById);
userRouter.route("/login").post(user);

export default userRouter;