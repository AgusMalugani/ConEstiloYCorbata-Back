import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../Product/entities/product.entity";


@Entity()
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    seña:number;
    @Column()
    resto:number;
    @Column()
    celular:string;
    @Column()
    entregado:boolean;
    @Column({default:true})
    isActive:boolean;
    @ManyToMany(()=> Product, (prod)=> prod.ordenes)
     @JoinTable() // <-- SOLO AQUÍ
    productos: Product[]
}