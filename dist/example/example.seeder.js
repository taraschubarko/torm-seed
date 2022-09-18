"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeder_1 = require("@/seeder");
const example_factory_1 = require("@/example/example.factory");
class ExampleSeeder extends seeder_1.Seeder {
    run() {
        new example_factory_1.ExampleFactory().factory(15).create();
    }
}
exports.ExampleSeeder = ExampleSeeder;
