"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../services/db.service");
let GenreService = class GenreService {
    constructor(logger, dbService) {
        this.logger = logger;
        this.dbService = dbService;
    }
    async create({ name }) {
        try {
            this.dbService.genre.create({ data: { name } });
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async delete({ ids }) {
        try {
            this.dbService.genre.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                },
            });
        }
        catch (error) { }
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_1.Logger,
        db_service_1.DBService])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map