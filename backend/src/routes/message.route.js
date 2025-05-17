import express from "express";

const router = express.Router();

router.get("/users",protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessages);

export default router;