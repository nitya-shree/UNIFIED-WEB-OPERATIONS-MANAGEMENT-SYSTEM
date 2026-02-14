const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { deleteComplaint } = require("../controllers/complaintController");

const {
  createComplaint,
  getUserComplaints,
  getAllComplaints,
  updateComplaintStatus
} = require("../controllers/complaintController");

// User
router.post("/", protect, createComplaint);
router.get("/my", protect, getUserComplaints);


// Admin
router.get("/all", protect, adminOnly, getAllComplaints);
router.put("/:id", protect, adminOnly, updateComplaintStatus);
router.delete("/:id", protect, adminOnly, deleteComplaint);

module.exports = router;