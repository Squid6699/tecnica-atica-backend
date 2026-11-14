import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty({"message": "El codigo es requerido"})
    @Length(5, 5, {"message": "El codigo debe tener exactamente 5 caracteres"})
    codigo: string;

    @IsNotEmpty({"message": "El nombre es requerido"})
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNotEmpty({message: "El precio es requerido"})
    @IsNumber({allowNaN: false, allowInfinity: false}, {message: "El precio debe ser un numero"})
    precio: number;

    @IsOptional()
    @IsNumber()
    stock?: number;
}
