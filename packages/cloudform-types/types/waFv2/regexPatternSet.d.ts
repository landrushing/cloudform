import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RegularExpressionList {
    RegularExpressionList?: List<Regex>;
    constructor(properties: RegularExpressionList);
}
export declare class TagList {
    TagList?: List<ResourceTag>;
    constructor(properties: TagList);
}
export declare class Regex {
    RegexString?: Value<string>;
    constructor(properties: Regex);
}
export interface RegexPatternSetProperties {
    Description?: Value<string>;
    Name?: Value<string>;
    RegularExpressionList: RegularExpressionList;
    Scope: Value<string>;
    Tags?: TagList;
}
export default class RegexPatternSet extends ResourceBase<RegexPatternSetProperties> {
    static RegularExpressionList: typeof RegularExpressionList;
    static TagList: typeof TagList;
    static Regex: typeof Regex;
    constructor(properties: RegexPatternSetProperties);
}
