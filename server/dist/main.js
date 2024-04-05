"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const db_service_1 = require("./services/db.service");
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const path = require("path");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger({
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), nest_winston_1.utilities.format.nestLike('MyApp', {
                        colors: true,
                        prettyPrint: true,
                    })),
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
    const prismaService = app.get(db_service_1.DBService);
    await prismaService.enableShutdownHooks(app);
    app.useGlobalPipes(new common_1.ValidationPipe({ skipMissingProperties: false }));
    app.use(cookieParser());
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map