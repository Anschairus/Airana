"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NpcModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var npc_controller_1 = require("./npc.controller");
var npc_service_1 = require("./npc.service");
var npc_schema_1 = require("./schemas/npc.schema");
var NpcModule = /** @class */ (function () {
    function NpcModule() {
    }
    NpcModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Npc', schema: npc_schema_1.NpcSchema }]),
            ],
            controllers: [npc_controller_1.NpcController],
            providers: [npc_service_1.NpcService]
        })
    ], NpcModule);
    return NpcModule;
}());
exports.NpcModule = NpcModule;
