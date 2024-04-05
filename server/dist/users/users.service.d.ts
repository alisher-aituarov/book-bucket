import { DBService } from 'src/services/db.service';
export declare class UsersService {
    private dbService;
    constructor(dbService: DBService);
    findOne(email: any): Promise<import(".prisma/client").User>;
    create(data: {
        email: string;
        username: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        role: import(".prisma/client").Role;
    }>;
}
