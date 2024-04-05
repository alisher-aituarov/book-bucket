import { Type } from '@prisma/client';
export declare class CreateRecordDTO {
    amount: number;
    categoryId: number;
    type: Type;
    note: string;
}
