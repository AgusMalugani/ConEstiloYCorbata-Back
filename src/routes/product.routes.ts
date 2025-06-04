import {Router} from "express";
import { ProductController } from "../models/Product/product.controller";
const productRouter = Router();
const productController = new ProductController();

productRouter.get("/",productController.findAllProducts)

productRouter.get("/:id",productController.findOneProductById)

productRouter.post("/",productController.createProduct)


export default productRouter;