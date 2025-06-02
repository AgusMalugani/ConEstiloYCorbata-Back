import {Router} from "express";
import { ProductController } from "../models/Product/product.controller";
const productRouter = Router();
const productController = new ProductController();

productRouter.get("/",productController.getAllProducts)


export default productRouter;