import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class AccessEndpoint {
    EndpointType: Value<string>;
    VpceId: Value<string>;
    constructor(properties: AccessEndpoint);
}
export declare class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>;
    DirectoryName?: Value<string>;
    constructor(properties: DomainJoinInfo);
}
export interface ImageBuilderProperties {
    ImageName?: Value<string>;
    Description?: Value<string>;
    VpcConfig?: VpcConfig;
    EnableDefaultInternetAccess?: Value<boolean>;
    DisplayName?: Value<string>;
    DomainJoinInfo?: DomainJoinInfo;
    AppstreamAgentVersion?: Value<string>;
    InstanceType: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    ImageArn?: Value<string>;
    AccessEndpoints?: List<AccessEndpoint>;
}
export default class ImageBuilder extends ResourceBase<ImageBuilderProperties> {
    static VpcConfig: typeof VpcConfig;
    static AccessEndpoint: typeof AccessEndpoint;
    static DomainJoinInfo: typeof DomainJoinInfo;
    constructor(properties: ImageBuilderProperties);
}
