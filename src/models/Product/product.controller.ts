import { Request,Response } from 'express';
import { ProductService } from './product.service';
export class ProductController {
    private readonly productService = new ProductService();

    findAllProducts= async (req:Request, res:Response) =>{
        const data = await this.productService.findAll();
      res.status(200).json(data)
     }
    
     createProduct= async (req:Request, res:Response)=> {
        const { nombre, talle, color, stock, categoria, precio } = req.body;
        const product = this.productService.createProduct({nombre, talle, color, stock, categoria, precio})
      res.status(201).json({message:"Producto creado con exito",data:product});
     }

     findOneProductById = async (req:Request, res:Response)=>{
      const {id}= req.params;
      const product = await this.productService.findById(id);
      res.status(200).json(product)
     }
    
    // async updateProduct(req, res) {
    //   // Logic to update an existing product
    // }
    
    // async deleteProduct(req, res) {
    //   // Logic to delete a product
    // }
}