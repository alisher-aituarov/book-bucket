import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private logger;
    constructor(appService: AppService, logger: Logger);
    getHello(): string;
}
