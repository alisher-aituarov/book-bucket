import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBService } from './services/db.service';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            utilities.format.nestLike('MyApp', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../logs/debug/'),
          filename: 'debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../logs/error/'),
          filename: 'error.log',
          level: 'error',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../logs/info/'),
          filename: 'info.log',
          level: 'info',
        }),
      ],
    }),
  });

  const prismaService = app.get(DBService);
  await prismaService.enableShutdownHooks(app);
  // Add request body validation middleware
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: false }));

  app.use(cookieParser());

  await app.listen(4000);
}
bootstrap();
