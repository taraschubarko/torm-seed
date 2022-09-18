"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestjs_command_1 = require("nestjs-command");
const seeder_module_1 = require("./seeder.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule, {
            logger: ['error'],
        });
        try {
            yield app.select(nestjs_command_1.CommandModule).get(nestjs_command_1.CommandService).exec();
            yield app.close();
        }
        catch (error) {
            console.error(error);
            yield app.close();
            process.exit(1);
        }
    });
}
bootstrap();
