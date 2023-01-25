import { Entity, PrimaryGeneratedColumn } from "typeorm";

//Nombre de la tabla
@Entity('products', {schema:'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:number;
}