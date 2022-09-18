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
const fs_1 = require("fs");
const util_1 = require("util");
exports.checkIfFileOrDirectoryExists = (path) => {
    return fs_1.default.existsSync(path);
};
exports.getFile = (path, encoding) => __awaiter(this, void 0, void 0, function* () {
    const readFile = util_1.promisify(fs_1.default.readFile);
    return encoding ? readFile(path, encoding) : readFile(path, {});
});
exports.createFile = (path, fileName, data) => __awaiter(this, void 0, void 0, function* () {
    if (!exports.checkIfFileOrDirectoryExists(path)) {
        fs_1.default.mkdirSync(path);
    }
    const writeFile = util_1.promisify(fs_1.default.writeFile);
    return yield writeFile(`${path}/${fileName}`, data, 'utf8');
});
exports.deleteFile = (path) => __awaiter(this, void 0, void 0, function* () {
    const unlink = util_1.promisify(fs_1.default.unlink);
    return yield unlink(path);
});
