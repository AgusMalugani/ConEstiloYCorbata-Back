import {Router} from "express";
import { OrderController } from '../models/Order/order.controller';
const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get("/", orderController.findAllOrders); 
orderRouter.post("/", orderController.createOrder); 

export default orderRouter;