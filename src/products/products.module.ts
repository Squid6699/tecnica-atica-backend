import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Product } from './products.model.js';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';

@Module({
    imports: [
        SequelizeModule.forFeature([Product]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }

