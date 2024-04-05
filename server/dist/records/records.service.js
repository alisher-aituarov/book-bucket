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
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../services/db.service");
let RecordsService = class RecordsService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(data, ownerId) {
        try {
            return this.dbService.record.create({
                data: {
                    amount: data.amount,
                    note: data.note,
                    type: data.type,
                    owner: {
                        connect: {
                            id: ownerId,
                        },
                    },
                    category: {
                        connect: {
                            id: data.categoryId,
                        },
                    },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async read(userId, filters) {
        try {
            const categories = typeof filters.category !== 'undefined'
                ? filters.category
                    .split(',')
                    .filter(Number)
                    .map((c) => Number(c))
                : undefined;
            const dateStart = filters.dateStart
                ? new Date(filters.dateStart).toISOString()
                : undefined;
            const dateEnd = filters.dateEnd
                ? new Date(filters.dateEnd).toISOString()
                : undefined;
            console.log(filters.category, categories);
            return this.dbService.record.findMany({
                where: {
                    ownerId: userId,
                    createdAt: {
                        gte: dateStart,
                        lte: dateEnd,
                    },
                    categoryId: {
                        in: categories,
                    },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async delete(idsString, userId) {
        const ids = idsString.split(',').map((i) => Number(i));
        try {
            await this.dbService.record.deleteMany({
                where: {
                    id: {
                        in: ids,
                    },
                    ownerId: userId,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
};
RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DBService])
], RecordsService);
exports.RecordsService = RecordsService;
//# sourceMappingURL=records.service.js.map