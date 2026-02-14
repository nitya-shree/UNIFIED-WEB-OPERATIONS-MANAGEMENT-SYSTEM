const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createOperation,
  getUserOperations,
  getAllOperations,
  updateStatus
} = require("../controllers/operationController");

router.post("/", auth, createOperation);
router.get("/my", auth, getUserOperations);
router.get("/", auth, role("ADMIN"), getAllOperations);
router.put("/:id", auth, role("ADMIN"), updateStatus);

module.exports = router;