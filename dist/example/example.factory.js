"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_config_1 = require("@/config/typeorm.config");
const factory_1 = require("@/factory");
const example_entity_1 = require("@/example/example.entity");
class ExampleFactory extends factory_1.Factory {
    get dataSource() {
        return typeorm_config_1.getDataSource();
    }
    get model() {
        return example_entity_1.ExampleEntity;
    }
    definition() {
        return new example_entity_1.ExampleEntity();
    }
}
exports.ExampleFactory = ExampleFactory;
