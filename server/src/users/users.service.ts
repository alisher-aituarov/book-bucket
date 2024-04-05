import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DBService } from 'src/services/db.service';

@Injectable()
export class UsersService {
  constructor(private dbService: DBService) {}
  async findOne(email) {
    return this.dbService.user.findUnique({ where: { email } });
  }

  async create(data: { email: string; username: string; password: string }) {
    try {
      const { password: _, ...rest } = await this.dbService.user.create({
        data,
      });
      return rest;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new HttpException(
            `Email is already in use`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }
      throw e;
    }
  }
}
