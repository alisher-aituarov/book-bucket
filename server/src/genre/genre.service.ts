import { Injectable, Logger } from '@nestjs/common';
import { CreateGenreDTO } from 'src/DTO/genre/create.dto';
import { DeleteGenreDTO } from 'src/DTO/genre/delete.dto';
import { DBService } from 'src/services/db.service';

@Injectable()
export class GenreService {
  constructor(
    private readonly logger: Logger,
    private readonly dbService: DBService,
  ) {}

  async create({ name }: CreateGenreDTO) {
    try {
      this.dbService.genre.create({ data: { name } });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async delete({ ids }: DeleteGenreDTO) {
    try {
      this.dbService.genre.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
    } catch (error) {}
  }
}
