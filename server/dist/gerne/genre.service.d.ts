import { Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    private readonly logger;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService, logger: Logger);
    signIn(email: string, password: string): Promise<string>;
    signUp(data: {
        email: string;
        password: string;
        username: string;
    }): Promise<{
        status: string;
    }>;
}
