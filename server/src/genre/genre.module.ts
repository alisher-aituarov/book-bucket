import { Logger, Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { DBService } from 'src/services/db.service';

@Module({
  controllers: [GenreController],
  providers: [GenreService, DBService, Logger],
})
export class GenreModule {}
