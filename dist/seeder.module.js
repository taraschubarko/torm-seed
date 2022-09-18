"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const seeder_service_1 = require("./seeder.service");
const seeder_command_1 = require("./seeder.command");
let SeederModule = class SeederModule {
};
SeederModule = __decorate([
    common_1.Module({
        imports: [nestjs_command_1.CommandModule],
        providers: [seeder_command_1.SeederCommand, seeder_service_1.SeederService],
    })
], SeederModule);
exports.SeederModule = SeederModule;
