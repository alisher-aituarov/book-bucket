import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from 'src/DTO/categories/createCategory.dto';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
export declare class CategoriesController {
    private readonly service;
    private readonly usersService;
    constructor(service: CategoriesService, usersService: UsersService);
    read(req: Request & {
        user: {
            sub: string;
        };
    }): Promise<any>;
    readOne(id: any): Promise<any>;
    create(data: CreateCategoryDTO, req: Request & {
        user: {
            sub: string;
        };
    }): Promise<any>;
    delete(id: any, req: Request & {
        user: {
            sub: string;
        };
    }): Promise<void>;
}
