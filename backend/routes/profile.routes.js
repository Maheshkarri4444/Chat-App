import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { editProfile, getProfile } from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/:userId",protectRoute,getProfile);
router.put("/:userId",protectRoute,editProfile);

export default router;