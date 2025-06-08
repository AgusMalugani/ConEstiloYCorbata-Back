import { ICreateProductDto } from "./dto/ICreateProductDto.interface";
import productRepository from './../../repositories/product.repository';
import { Product } from "./entities/product.entity";

export class ProductService {

    async findAll() {
        return await productRepository.find({where:{isActive:true}}); //{relations:{ordenes:true}}
    }

    async createProduct(createProductDto: ICreateProductDto) {
        const newProduct = productRepository.create({...createProductDto,isActive:true})
        return await productRepository.save(newProduct);
    }

    async findByIds(ids:string[]) : Promise<(Product)[]>{
        try{
            const products = await Promise.all(ids.map(async id=> {
                return await this.findById(id);
            }))
            
            return products;
        } catch(error){
            console.log("error en el array de ids",error);
            throw new Error("Error al buscar los productos por id")
            
        }
    }

    async findById(id:string){
        const product = await productRepository.findOne({where:{id}});
        if(!product){
            console.log("no se encuentra el producto con ese id",id);
            throw new Error(`Producto con id ${id} no encontrado`);
        } else{
            return product;
        }
    }

    async updateProduct(id:string, updateData: Partial<ICreateProductDto>) {
        const product = await this.findById(id);
        if (!product) {
            throw new Error(`Producto con id ${id} no encontrado`);
        }
        Object.assign(product, updateData);
        return await productRepository.save(product);
    }
}