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
class Factory {
    constructor() {
        this.params = {};
    }
    entity() {
        return __awaiter(this, void 0, void 0, function* () {
            const ds = yield this.dataSource;
            return ds.getRepository(this.model);
        });
    }
    factory(count = 1) {
        this.count = count;
        return this;
    }
    overrideParams(params = {}) {
        this.params = params;
        return this;
    }
    overrideParamsMany(paramsMany) {
        this.paramsMany = paramsMany;
        return this;
    }
    create() {
        let res = [];
        if (Object.keys(this.definition()).length ||
            Object.keys(this.params).length) {
            res = [...Array(this.count).keys()].map(() => __awaiter(this, void 0, void 0, function* () {
                const entity = yield this.entity();
                const definition = this.definition();
                if (Object.keys(this.params).length) {
                    for (const key in this.params) {
                        if (this.params.hasOwnProperty(key)) {
                            definition[key] = this.params[key];
                        }
                    }
                }
                return yield entity.save(definition);
            }));
            console.log('\x1b[36m%s\x1b[0m', `${this.model.name} Factory seeder is complete!`);
        }
        else {
            console.error('\x1b[41m', '!!! No data to create !!!', '\x1b[0m');
        }
        return res;
    }
    createMany() {
        const res = [];
        if (this.paramsMany.length) {
            new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const arr = [];
                for (const value of this.paramsMany) {
                    const entity = yield this.entity();
                    arr.push(yield entity.save(value));
                }
                resolve(arr);
            }));
            console.log('\x1b[36m%s\x1b[0m', `${this.model.name} Factory seeder is complete!`);
        }
        else {
            console.error('\x1b[41m', '!!! No data to create !!!', '\x1b[0m');
        }
        return res;
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dataSource;
        });
    }
}
exports.Factory = Factory;
