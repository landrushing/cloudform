"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SerdeInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SerdeInfo = SerdeInfo;
class Column {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Column = Column;
class PartitionInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PartitionInput = PartitionInput;
class StorageDescriptor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageDescriptor = StorageDescriptor;
class Order {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Order = Order;
class SkewedInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SkewedInfo = SkewedInfo;
class Partition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Glue::Partition', properties);
    }
}
Partition.SerdeInfo = SerdeInfo;
Partition.Column = Column;
Partition.PartitionInput = PartitionInput;
Partition.StorageDescriptor = StorageDescriptor;
Partition.Order = Order;
Partition.SkewedInfo = SkewedInfo;
exports.default = Partition;
