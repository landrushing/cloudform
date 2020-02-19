import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClusterSetting {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: ClusterSetting);
}
export interface ClusterProperties {
    ClusterName?: Value<string>;
    ClusterSettings?: List<ClusterSetting>;
    Tags?: List<ResourceTag>;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static ClusterSetting: typeof ClusterSetting;
    constructor(properties?: ClusterProperties);
}
