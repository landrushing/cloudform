"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("@landrush/cloudform-types"));
function cloudform(template) {
    return JSON.stringify(template, undefined, 2);
}
exports.default = cloudform;
