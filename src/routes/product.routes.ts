import {Router} from "express";
import { ProductController } from "../models/Product/product.controller";
const productRouter = Router();
const productController = new ProductController();

productRouter.get("/",productController.findAllProducts)

productRouter.get("/:id",productController.findOneProductById)

productRouter.post("/",productController.createProduct)

productRouter.put("/:id",productController.updateProduct)

productRouter.put("/delete/:id",productController.deleteProduct)

export default productRouter;