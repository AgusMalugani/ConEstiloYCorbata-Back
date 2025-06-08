import orderRepository from '../../repositories/order.repository';
import { ProductService } from '../Product/product.service';
import { ICreateOrderDto } from './dto/ICreateOrderDto.interface';
import { Order } from './entities/order.entity';
export  class OrderService {
private productService = new ProductService();

async createOrder(createOrderDto : ICreateOrderDto) : Promise<Order>{
    const products = await this.productService.findByIds(createOrderDto.productos)
    const newOrder = orderRepository.create({...createOrderDto,productos:products, entregado:false,});
    return await orderRepository.save(newOrder);
}

async findAll() { // : Promise<Order[]>
    return await orderRepository.find({relations: {productos:true}});
}

async findById(id: string) : Promise<Order | null> {
    return await orderRepository.findOne({
        where: { id },
        relations: { productos: true }
    }); 
}

async updateOrder(id:string,createOrderDto : Partial<ICreateOrderDto>){
const order = await this.findById(id);
if(!order){
    throw new Error("Order not found");
}
//TODO: Si se modifica el producto, se debe de devolver al stock el producto que estaba mal cargado y se debe descontar el stock al nuevo producto
Object.assign(order,createOrderDto)
return await orderRepository.save(order);
}

async deleteOrder(id:string){
    //TODO: Se debe devolver al stock los productos
    const isActive=false;
    return await this.updateOrder(id,{isActive})
}

async deliveredOrder(id:string){
    const isActive = false;
    const entregado = true;
    return await this.updateOrder(id,{isActive,entregado});
}

}
