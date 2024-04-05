import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {}

  async signIn(email: string, password: string) {
    try {
      const user = await this.usersService.findOne(email);
      const isCorrectPassword = await bcrypt.compare(
        password,
        user?.password ?? '',
      );
      if (isCorrectPassword === false) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      const payload = { sub: user.id, email: user.email };
      const accessToken = await this.jwtService.signAsync(payload);
      return accessToken;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async signUp(data: { email: string; password: string; username: string }) {
    const salt = this.configService.get<string>('HASH_SALT');
    const hashedPassword = await bcrypt.hash(data.password, Number(salt));
    try {
      await this.usersService.create({
        ...data,
        password: hashedPassword,
      });

      return {
        status: 'ok',
      };
    } catch (error) {
      throw error;
    }
  }
}
