"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_seeder_1 = require("@/database/seeds/database.seeder");
const typeorm_config_1 = require("@/config/typeorm.config");
const storage_helper_1 = require("@/storage.helper");
let SeederService = class SeederService {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            new database_seeder_1.DatabaseSeeder().run();
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield typeorm_config_1.getDataSource();
                const entities = connection.entityMetadatas;
                const tableNames = entities
                    .map((entity) => `"${entity.tableName}"`)
                    .join(', ');
                yield connection.query(`TRUNCATE ${tableNames} RESTART IDENTITY CASCADE;`);
                console.log('\x1b[35m', '[AUTH SERVICE DATABASE]: Clean', '\x1b[0m');
                return true;
            }
            catch (error) {
                throw new Error(`ERROR: Cleaning test database: ${error}`);
            }
        });
    }
    makeSeederFile(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = `database/seeds`;
            const fileName = `${filename}.seeder.ts`;
            yield storage_helper_1.createFile(filePath, fileName, 'csv');
            console.log(fileName);
        });
    }
};
SeederService = __decorate([
    common_1.Injectable()
], SeederService);
exports.SeederService = SeederService;
