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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsController = void 0;
const common_1 = require("@nestjs/common");
const createRecord_dto_1 = require("../DTO/records/createRecord.dto");
const records_service_1 = require("./records.service");
const auth_guard_1 = require("../auth/guards/auth.guard");
let RecordsController = class RecordsController {
    constructor(service) {
        this.service = service;
    }
    async create(data, req) {
        return this.service.create(data, Number(req.user.sub));
    }
    async read(req) {
        const category = req.query.category
            ? String(req.query.category)
            : undefined;
        const dateStart = req.query.date_start || null;
        const dateEnd = req.query.date_end || null;
        return this.service.read(Number(req.user.sub), {
            category,
            dateStart,
            dateEnd,
        });
    }
    async delete(req) {
        return this.service.delete(String(req.query.id), Number(req.user.sub));
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAccessAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createRecord_dto_1.CreateRecordDTO, Object]),
    __metadata("design:returntype", Promise)
], RecordsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAccessAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecordsController.prototype, "read", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.HttpCode)(204),
    (0, common_1.UseGuards)(auth_guard_1.JwtAccessAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecordsController.prototype, "delete", null);
RecordsController = __decorate([
    (0, common_1.Controller)('records'),
    __metadata("design:paramtypes", [records_service_1.RecordsService])
], RecordsController);
exports.RecordsController = RecordsController;
//# sourceMappingURL=records.controller.js.map