import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../../Order/entities/order.entity";
@Entity()
export class Product{
@PrimaryGeneratedColumn("uuid")
id: string
@Column()
nombre:string
@Column()
talle:string;
@Column()
color:string;
@Column()
stock:number;
@Column()
categoria:string; //enum
@Column()
precio:number;
@ManyToMany(()=>Order,(ord)=> ord.productos )
ordenes: Order[]

}