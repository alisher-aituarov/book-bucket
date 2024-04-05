import { CreateRecordDTO } from 'src/DTO/records/createRecord.dto';
import { DBService } from 'src/services/db.service';
export declare class RecordsService {
    private readonly dbService;
    constructor(dbService: DBService);
    create(data: CreateRecordDTO, ownerId: number): Promise<any>;
    read(userId: number, filters: {
        category: string;
        dateStart: any;
        dateEnd: any;
    }): Promise<any>;
    delete(idsString: string, userId: number): Promise<void>;
}
