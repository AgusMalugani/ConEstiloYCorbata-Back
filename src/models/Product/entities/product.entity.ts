import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../../Order/entities/order.entity";
import { CategoryEnum } from "../../../enums/category.enum";
@Entity()
export class Product{
@PrimaryGeneratedColumn("uuid")
id: string
@Column()
nombre:string
@Column()
talle:number;
@Column()
color:string;
@Column()
stock:number;
@Column({type:"enum", enum:CategoryEnum})
categoria:CategoryEnum; 
@Column()
precio:number;
@Column({default:true})
isActive : boolean
@ManyToMany(()=>Order,(ord)=> ord.productos )
ordenes: Order[]
}