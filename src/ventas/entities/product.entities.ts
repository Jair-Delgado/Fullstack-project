import { DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//Nombre de la tabla
@Entity('products', {schema:'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:number;
    @CreateDateColumn({

    name:'create_date',
    type:'timestampt',
    default:()=> 'CURRENT_TIMESTAMP',
})
createAt:Date;
 @UpdateDateColumn({

    name:'update_date',
    type:'timestampt',
    default:()=> 'CURRENT_TIMESTAMP'
})
updateAt:Date;

 @DeleteDateColumn({

    name:'delete_date',
    type:'timestampt',
    default:()=> 'CURRENT_TIMESTAMP',
    
})
deleteAt:Date;