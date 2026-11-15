import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model.js";
import { InjectModel } from "@nestjs/sequelize";
import { CreateProductDto } from "./dto/create-product.dto.js";


@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productModel: typeof Product) {}

    async createProduct(productData: CreateProductDto): Promise<Product> {

        const existingProduct = await this.productModel.findOne({ where: { codigo: productData.codigo } });
        if (existingProduct) {
            throw new ConflictException(`El producto con codigo ${productData.codigo} ya existe.`);
        }

        const createProduct = {
            codigo: productData.codigo,
            nombre: productData.nombre,
            descripcion: productData.descripcion,
            precio: productData.precio,
            stock: productData.stock 
        };

        const product = await this.productModel.create(createProduct);

        return product;
    }

    async getAllProducts(): Promise<Product[]> {
        return this.productModel.findAll();
    }

    async getProductById(id: number): Promise<Product | null> {
        return this.productModel.findByPk(id);
    }

    async updateProduct(id: number, productData: Partial<Product>): Promise<Product | null> {
        const product = await this.productModel.findByPk(id);
        if (!product) {
            throw new NotFoundException(`No se encontro el producto.`);
        }
        await product.update(productData);
        return product;
    }

    async deleteProduct(id: number): Promise<Product> {
        const product = await this.productModel.findByPk(id);
        if (!product) {
            throw new NotFoundException(`No se encontro el producto.`);
        }
        await product.destroy();
        return product;
    }
}