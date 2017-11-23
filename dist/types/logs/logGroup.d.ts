import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LogGroupProperties {
    LogGroupName?: Value<string>;
    RetentionInDays?: Value<number>;
}
export default class LogGroup extends ResourceBase {
    constructor(properties: LogGroupProperties, dependsOn?: Value<string>);
}
