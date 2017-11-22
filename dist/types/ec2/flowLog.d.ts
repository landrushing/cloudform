import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface FlowLogProperties {
    DeliverLogsPermissionArn: Value<string>;
    LogGroupName: Value<string>;
    ResourceId: Value<string>;
    ResourceType: Value<string>;
    TrafficType: Value<string>;
}
export default class FlowLog extends ResourceBase {
    constructor(properties: FlowLogProperties, dependsOn?: Value<string>);
}