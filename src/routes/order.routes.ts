import {Router} from "express";
import { OrderController } from './../models/Order/order.controller';
const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get("/", orderController.findAllOrders); 

orderRouter.get("/:id",orderController.findOrderById)

orderRouter.post("/", orderController.createOrder); 

orderRouter.put("/:id",orderController.updateOrder)

orderRouter.delete("/delete/:id", orderController.deleteOrder)

orderRouter.put("/entrega/:id",orderController.deliveredOrder)

export default orderRouter;