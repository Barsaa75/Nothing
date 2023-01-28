import express from "express";
import {
  getAlllinks,
  createlink,
  findlink,
  superDelete,
} from "../controller/link.js";
import { checkToken } from "../middleware/middleware.js";
import { AdminRole } from "../middleware/role.js";

const router = express.Router();
router.route("/").get(getAlllinks);
router.post("/", checkToken, createlink);
router.route("/:params").get(findlink);
router.delete("/delete/:_id", AdminRole, superDelete);

export default router;
