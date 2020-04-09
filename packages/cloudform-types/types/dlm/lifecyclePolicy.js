"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FastRestoreRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FastRestoreRule = FastRestoreRule;
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class CrossRegionCopyRetainRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrossRegionCopyRetainRule = CrossRegionCopyRetainRule;
class CrossRegionCopyRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrossRegionCopyRule = CrossRegionCopyRule;
class CreateRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreateRule = CreateRule;
class RetainRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetainRule = RetainRule;
class PolicyDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PolicyDetails = PolicyDetails;
class Parameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Parameters = Parameters;
class LifecyclePolicy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DLM::LifecyclePolicy', properties || {});
    }
}
exports.default = LifecyclePolicy;
LifecyclePolicy.FastRestoreRule = FastRestoreRule;
LifecyclePolicy.Schedule = Schedule;
LifecyclePolicy.CrossRegionCopyRetainRule = CrossRegionCopyRetainRule;
LifecyclePolicy.CrossRegionCopyRule = CrossRegionCopyRule;
LifecyclePolicy.CreateRule = CreateRule;
LifecyclePolicy.RetainRule = RetainRule;
LifecyclePolicy.PolicyDetails = PolicyDetails;
LifecyclePolicy.Parameters = Parameters;
