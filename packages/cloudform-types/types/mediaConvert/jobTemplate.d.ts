import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AccelerationSettings {
    Mode: Value<string>;
    constructor(properties: AccelerationSettings);
}
export interface JobTemplateProperties {
    Category?: Value<string>;
    Description?: Value<string>;
    AccelerationSettings?: AccelerationSettings;
    Priority?: Value<number>;
    StatusUpdateInterval?: Value<string>;
    SettingsJson: {
        [key: string]: any;
    };
    Queue?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class JobTemplate extends ResourceBase<JobTemplateProperties> {
    static AccelerationSettings: typeof AccelerationSettings;
    constructor(properties: JobTemplateProperties);
}
