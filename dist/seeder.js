"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Seeder {
    call(seed) {
        console.log('\x1b[42m', `${seed.constructor.name} ---is running`, '\x1b[0m');
        return seed.run();
    }
}
exports.Seeder = Seeder;
