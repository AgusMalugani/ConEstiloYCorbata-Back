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
    
     updateProduct = async (req:Request, res:Response) => {
     const {id}=req.params;
      const {stock,precio} = req.body;
      const product = await this.productService.updateProduct(id,{stock,precio});
      res.status(200).json({message:"Producto actualizado",data : product})
    }
    
    deleteProduct= async (req:Request, res:Response)=> {
      const{id} = req.params;
      const isActive=false;
      const product = await this.productService.updateProduct(id,{isActive});
      res.status(200).json({message:"Producto eliminado",data:product})
    }
}