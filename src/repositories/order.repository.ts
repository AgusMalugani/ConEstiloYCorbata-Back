import { AppDataSource } from "../config/typeOrm.config";
import { Order } from "../models/Order/entities/order.entity";

const orderRepository= AppDataSource.getRepository(Order)
export default orderRepository;