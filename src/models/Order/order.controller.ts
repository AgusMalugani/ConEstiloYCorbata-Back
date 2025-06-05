
import { Request, Response } from 'express';
import { OrderService } from './order.service';
export class OrderController{
private readonly orderService = new OrderService();

 createOrder = async (req:Request, res:Response)=>{
    const {seña,resto,celular,productos} = req.body;
const order= await this.orderService.createOrder({seña,resto,celular,productos});
    return res.status(201).json({message:"orden creada con exito ", data:order});
}

 findAllOrders = async (req:Request, res:Response)=>{
    const orders = await this.orderService.findAll();
    return res.status(200).json(orders);
}

 findOrderById = async (req:Request, res:Response)=>{
    const {id} = req.params;
    const order = await this.orderService.findById(id);
    if(!order){
        return res.status(404).json({message:"orden no encontrada"});
    }
    return res.status(200).json(order); 
}

updateOrder = async (req:Request,res:Response) =>{
const {id}= req.params;
const {seña,resto,celular,productos}=req.body;
const order = await this.orderService.updateOrder(id,{seña,resto,celular,productos});
}

deleteOrder = async (req:Request, res:Response)=>{
const{id}=req.params;
const order = await this.orderService.deleteOrder(id);
res.status(200).json({message:"orden eliminada con exito", data:order});
}




}