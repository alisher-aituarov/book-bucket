import { Logger } from '@nestjs/common';
import { CreateGenreDTO } from 'src/DTO/genre/create.dto';
import { DeleteGenreDTO } from 'src/DTO/genre/delete.dto';
import { DBService } from 'src/services/db.service';
export declare class GenreService {
    private readonly logger;
    private readonly dbService;
    constructor(logger: Logger, dbService: DBService);
    create({ name }: CreateGenreDTO): Promise<void>;
    delete({ ids }: DeleteGenreDTO): Promise<void>;
}
