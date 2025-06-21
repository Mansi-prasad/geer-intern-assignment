import express from "express";
import {
  addProduct,
  deleteProduct,
  getProductById,
  listProducts,
} from "../controllers/productController.js";
const router = express.Router();
router.get("/", listProducts); // supports ?name=filter
router.post("/", addProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
