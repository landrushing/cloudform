import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RateBasedStatementTwo {
    Limit?: Value<number>;
    AggregateKeyType?: Value<string>;
    ScopeDownStatement?: StatementThree;
    constructor(properties: RateBasedStatementTwo);
}
export declare class XssMatchStatement {
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    constructor(properties: XssMatchStatement);
}
export declare class OrStatementOne {
    Statements?: StatementTwos;
    constructor(properties: OrStatementOne);
}
export declare type AllowAction = undefined;
export declare class NotStatementOne {
    Statement?: StatementTwo;
    constructor(properties: NotStatementOne);
}
export declare type UriPath = undefined;
export declare class TextTransformation {
    Priority?: Value<number>;
    Type?: Value<string>;
    constructor(properties: TextTransformation);
}
export declare type Body = undefined;
export declare class ByteMatchStatement {
    SearchString?: Value<string>;
    SearchStringBase64?: Value<string>;
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    PositionalConstraint?: Value<string>;
    constructor(properties: ByteMatchStatement);
}
export declare class RegexPatternSetReferenceStatement {
    Arn?: Value<string>;
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    constructor(properties: RegexPatternSetReferenceStatement);
}
export declare class SingleQueryArgument {
    Name?: Value<string>;
    constructor(properties: SingleQueryArgument);
}
export declare class AndStatementTwo {
    Statements?: StatementThrees;
    constructor(properties: AndStatementTwo);
}
export declare class StatementThree {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    constructor(properties: StatementThree);
}
export declare class NotStatementTwo {
    Statement?: StatementThree;
    constructor(properties: NotStatementTwo);
}
export declare class Rule {
    Name?: Value<string>;
    Priority?: Value<number>;
    Statement?: StatementOne;
    Action?: RuleAction;
    VisibilityConfig?: VisibilityConfig;
    constructor(properties: Rule);
}
export declare class RuleAction {
    Allow?: AllowAction;
    Block?: BlockAction;
    Count?: CountAction;
    constructor(properties: RuleAction);
}
export declare type BlockAction = undefined;
export declare class Rules {
    Rules?: List<Rule>;
    constructor(properties: Rules);
}
export declare class StatementOne {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    RateBasedStatement?: RateBasedStatementOne;
    AndStatement?: AndStatementOne;
    OrStatement?: OrStatementOne;
    NotStatement?: NotStatementOne;
    constructor(properties: StatementOne);
}
export declare class CountryCodes {
    CountryCodes?: List<Value<string>>;
    constructor(properties: CountryCodes);
}
export declare class RateBasedStatementOne {
    Limit?: Value<number>;
    AggregateKeyType?: Value<string>;
    ScopeDownStatement?: StatementTwo;
    constructor(properties: RateBasedStatementOne);
}
export declare class StatementThrees {
    StatementThrees?: List<StatementThree>;
    constructor(properties: StatementThrees);
}
export declare class OrStatementTwo {
    Statements?: StatementThrees;
    constructor(properties: OrStatementTwo);
}
export declare class FieldToMatch {
    SingleHeader?: SingleHeader;
    SingleQueryArgument?: SingleQueryArgument;
    AllQueryArguments?: AllQueryArguments;
    UriPath?: UriPath;
    QueryString?: QueryString;
    Body?: Body;
    Method?: Method;
    constructor(properties: FieldToMatch);
}
export declare type CountAction = undefined;
export declare class IPSetReferenceStatement {
    Arn?: Value<string>;
    constructor(properties: IPSetReferenceStatement);
}
export declare class TextTransformations {
    TextTransformations?: List<TextTransformation>;
    constructor(properties: TextTransformations);
}
export declare type QueryString = undefined;
export declare type Method = undefined;
export declare class SingleHeader {
    Name?: Value<string>;
    constructor(properties: SingleHeader);
}
export declare type AllQueryArguments = undefined;
export declare class StatementTwos {
    StatementTwos?: List<StatementTwo>;
    constructor(properties: StatementTwos);
}
export declare class VisibilityConfig {
    SampledRequestsEnabled?: Value<boolean>;
    CloudWatchMetricsEnabled?: Value<boolean>;
    MetricName?: Value<string>;
    constructor(properties: VisibilityConfig);
}
export declare class GeoMatchStatement {
    CountryCodes?: CountryCodes;
    constructor(properties: GeoMatchStatement);
}
export declare class SqliMatchStatement {
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    constructor(properties: SqliMatchStatement);
}
export declare class AndStatementOne {
    Statements?: StatementTwos;
    constructor(properties: AndStatementOne);
}
export declare class TagList {
    TagList?: List<ResourceTag>;
    constructor(properties: TagList);
}
export declare class SizeConstraintStatement {
    FieldToMatch?: FieldToMatch;
    ComparisonOperator?: Value<string>;
    Size?: Value<number>;
    TextTransformations?: TextTransformations;
    constructor(properties: SizeConstraintStatement);
}
export declare class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    RateBasedStatement?: RateBasedStatementTwo;
    AndStatement?: AndStatementTwo;
    OrStatement?: OrStatementTwo;
    NotStatement?: NotStatementTwo;
    constructor(properties: StatementTwo);
}
export interface RuleGroupProperties {
    Capacity: Value<number>;
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    Rules?: Rules;
    VisibilityConfig: VisibilityConfig;
    Tags?: TagList;
}
export default class RuleGroup extends ResourceBase<RuleGroupProperties> {
    static RateBasedStatementTwo: typeof RateBasedStatementTwo;
    static XssMatchStatement: typeof XssMatchStatement;
    static OrStatementOne: typeof OrStatementOne;
    static NotStatementOne: typeof NotStatementOne;
    static TextTransformation: typeof TextTransformation;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static SingleQueryArgument: typeof SingleQueryArgument;
    static AndStatementTwo: typeof AndStatementTwo;
    static StatementThree: typeof StatementThree;
    static NotStatementTwo: typeof NotStatementTwo;
    static Rule: typeof Rule;
    static RuleAction: typeof RuleAction;
    static Rules: typeof Rules;
    static StatementOne: typeof StatementOne;
    static CountryCodes: typeof CountryCodes;
    static RateBasedStatementOne: typeof RateBasedStatementOne;
    static StatementThrees: typeof StatementThrees;
    static OrStatementTwo: typeof OrStatementTwo;
    static FieldToMatch: typeof FieldToMatch;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    static TextTransformations: typeof TextTransformations;
    static SingleHeader: typeof SingleHeader;
    static StatementTwos: typeof StatementTwos;
    static VisibilityConfig: typeof VisibilityConfig;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static AndStatementOne: typeof AndStatementOne;
    static TagList: typeof TagList;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    static StatementTwo: typeof StatementTwo;
    constructor(properties: RuleGroupProperties);
}
