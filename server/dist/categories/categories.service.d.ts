import { Logger } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { DBService } from 'src/services/db.service';
export declare class CategoriesService {
    readonly dbService: DBService;
    private readonly logger;
    constructor(dbService: DBService, logger: Logger);
    create(data: Prisma.CategoryCreateWithoutOwnerInput, ownerId: number): any;
    read(where: Prisma.CategoryWhereInput): any;
    readOne(id: number): any;
    delete(id: number, userId: number): Promise<void>;
    update(): Promise<Category>;
}
