import express from "express";
import { createProduct, deleteProduct, getProductById, updateProduct } from "../controllers/productController.js";
import { getAllProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/",getAllProducts)

productRouter.post("/",createProduct)

productRouter.delete("/:productId",deleteProduct)

productRouter.put("/:productId",updateProduct)

productRouter.get ("/:productId",getProductById)



export default productRouter;