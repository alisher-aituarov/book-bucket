import { Request } from 'express';
import { CreateRecordDTO } from 'src/DTO/records/createRecord.dto';
import { RecordsService } from './records.service';
export declare class RecordsController {
    private readonly service;
    constructor(service: RecordsService);
    create(data: CreateRecordDTO, req: Request & {
        user: {
            sub: string;
        };
    }): Promise<any>;
    read(req: Request & {
        user: {
            sub: string;
        };
    }): Promise<any>;
    delete(req: Request & {
        user: {
            sub: string;
        };
    }): Promise<void>;
}
