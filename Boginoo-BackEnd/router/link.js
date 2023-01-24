import express from "express";
import { getAlllinks, createlink, findlink } from "../controller/link.js";
import { checkToken } from "../middleware/middleware.js";

const router = express.Router();
router.route("/").get(getAlllinks);
router.post("/", checkToken, createlink);
router.route("/:params").get(findlink);

export default router;
