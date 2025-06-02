import { CategoryEnum } from "../../../enums/category.enum";

export interface ICreateProductDto{
    nombre:string,
    talle:string,
    color:string,
    stock:number,
    categoria:CategoryEnum, //enum
    precio:number
}