"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LifecycleHook extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AutoScaling::LifecycleHook', properties);
    }
}
exports.default = LifecycleHook;
