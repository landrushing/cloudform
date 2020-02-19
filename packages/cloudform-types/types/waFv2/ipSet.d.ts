import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagList {
    TagList?: List<ResourceTag>;
    constructor(properties: TagList);
}
export declare class IPAddresses {
    IPAddresses?: List<Value<string>>;
    constructor(properties: IPAddresses);
}
export interface IPSetProperties {
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    IPAddressVersion: Value<string>;
    Addresses: IPAddresses;
    Tags?: TagList;
}
export default class IPSet extends ResourceBase<IPSetProperties> {
    static TagList: typeof TagList;
    static IPAddresses: typeof IPAddresses;
    constructor(properties: IPSetProperties);
}
