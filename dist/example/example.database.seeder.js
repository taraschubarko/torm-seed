"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeder_1 = require("@/seeder");
const example_seeder_1 = require("@/example/example.seeder");
class ExampleDatabaseSeeder extends seeder_1.Seeder {
    run() {
        this.call(new example_seeder_1.ExampleSeeder());
    }
}
exports.ExampleDatabaseSeeder = ExampleDatabaseSeeder;
