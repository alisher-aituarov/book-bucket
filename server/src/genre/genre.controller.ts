import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateGenreDTO } from 'src/DTO/genre/create.dto';
import { DeleteGenreDTO } from 'src/DTO/genre/delete.dto';
import { GenreService } from './genre.service';
import { RolesGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';

// @UseGuards(RolesGuard)
@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async create(@Body() body: CreateGenreDTO, @Res() response) {
    await this.genreService.create(body);

    return response.send({ status: 'ok' });
  }

  @HttpCode(HttpStatus.OK)
  @Delete()
  async delete(@Body() body: DeleteGenreDTO, @Res() response) {
    await this.genreService.delete(body);

    return response.send({ status: 'ok' });
  }
}
