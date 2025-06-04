import { Product } from "../../Product/entities/product.entity"

export interface ICreateOrderDto{
    seña:number,
    resto:number,
    celular:string
    productos: string[] //array de ids
}