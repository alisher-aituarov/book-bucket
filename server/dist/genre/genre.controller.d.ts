import { CreateGenreDTO } from 'src/DTO/genre/create.dto';
import { DeleteGenreDTO } from 'src/DTO/genre/delete.dto';
import { GenreService } from './genre.service';
export declare class GenreController {
    private genreService;
    constructor(genreService: GenreService);
    create(body: CreateGenreDTO, response: any): Promise<any>;
    delete(body: DeleteGenreDTO, response: any): Promise<any>;
}
