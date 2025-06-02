import { Request,Response } from 'express';
import { ProductService } from './product.service';
export class ProductController {
    private readonly productService = new ProductService();

    getAllProducts= async (req:Request, res:Response) =>{
        const data = await this.productService.getAllProducts();
      res.status(200).json(data)
     }
    
     createProduct= async (req:Request, res:Response) =>{
       // const { nombre, talle, color, stock, categoria, precio } = req.body;
        const data = this.productService.createProduct(req.body)
      res.status(201).json(data);
     }
    
    // async updateProduct(req, res) {
    //   // Logic to update an existing product
    // }
    
    // async deleteProduct(req, res) {
    //   // Logic to delete a product
    // }
}