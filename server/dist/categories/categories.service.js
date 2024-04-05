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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../services/db.service");
let CategoriesService = class CategoriesService {
    constructor(dbService, logger) {
        this.dbService = dbService;
        this.logger = logger;
    }
    create(data, ownerId) {
        return this.dbService.category.create({
            data: Object.assign(Object.assign({}, data), { ownerId }),
        });
    }
    read(where) {
        return this.dbService.category.findMany({ where });
    }
    readOne(id) {
        return this.dbService.category.findUnique({
            where: {
                id,
            },
        });
    }
    async delete(id, userId) {
        try {
            const category = await this.readOne(id);
            if (category.ownerId === userId || userId === undefined) {
                await this.dbService.category.delete({
                    where: { id },
                });
                return;
            }
            throw new common_1.UnauthorizedException();
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    update() {
        throw new Error('Not implemented');
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DBService,
        common_1.Logger])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map