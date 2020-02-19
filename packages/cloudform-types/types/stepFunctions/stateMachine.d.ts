import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagsEntry {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsEntry);
}
export declare class LoggingConfiguration {
    IncludeExecutionData?: Value<boolean>;
    Destinations?: List<LogDestination>;
    Level?: Value<string>;
    constructor(properties: LoggingConfiguration);
}
export declare class CloudWatchLogsLogGroup {
    LogGroupArn: Value<string>;
    constructor(properties: CloudWatchLogsLogGroup);
}
export declare class LogDestination {
    CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
    constructor(properties: LogDestination);
}
export interface StateMachineProperties {
    DefinitionString: Value<string>;
    LoggingConfiguration?: LoggingConfiguration;
    StateMachineName?: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<TagsEntry>;
    StateMachineType?: Value<string>;
}
export default class StateMachine extends ResourceBase<StateMachineProperties> {
    static TagsEntry: typeof TagsEntry;
    static LoggingConfiguration: typeof LoggingConfiguration;
    static CloudWatchLogsLogGroup: typeof CloudWatchLogsLogGroup;
    static LogDestination: typeof LogDestination;
    constructor(properties: StateMachineProperties);
}
