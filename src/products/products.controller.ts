import { BadRequestException, Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Controller("api/products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    async getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Get('paginated')
    async getPaginatedProducts(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
        return this.productsService.getPaginatedProducts(page);
    }

    @Get(':id')
    async getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(Number(id));
    }

    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productsService.createProduct(createProductDto);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.updateProduct(Number(id), updateProductDto);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(Number(id));
    }

}