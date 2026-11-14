import { Model, DataType ,AutoIncrement, Column, PrimaryKey, Table, Default } from 'sequelize-typescript';

@Table({
    tableName: 'products',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})


export class Product extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    declare codigo: string;

    @Column(DataType.STRING)
    declare nombre: string;

    @Column(DataType.TEXT)
    declare descripcion: string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    declare precio: number;

    @Default(0)
    @Column({ type: DataType.INTEGER, allowNull: false })
    declare stock: number;

    @Default(true)
    @Column({ type: DataType.BOOLEAN, allowNull: false })
    declare disponible: boolean;
}