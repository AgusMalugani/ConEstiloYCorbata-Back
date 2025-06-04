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

async findAll() : Promise<Order[]> {
    return await orderRepository.find({relations: {productos:true}});
}

async findById(id: string) : Promise<Order | null> {
    return await orderRepository.findOne({
        where: { id },
        relations: { productos: true }
    }); 
}

}
