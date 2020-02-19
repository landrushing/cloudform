import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RuleAction {
    Allow?: AllowAction;
    Block?: BlockAction;
    Count?: CountAction;
    constructor(properties: RuleAction);
}
export declare type UriPath = undefined;
export declare type Body = undefined;
export declare class ManagedRuleGroupStatement {
    Name?: Value<string>;
    VendorName?: Value<string>;
    ExcludedRules?: ExcludedRules;
    constructor(properties: ManagedRuleGroupStatement);
}
export declare class TextTransformation {
    Priority?: Value<number>;
    Type?: Value<string>;
    constructor(properties: TextTransformation);
}
export declare type AllowAction = undefined;
export declare class DefaultAction {
    Allow?: AllowAction;
    Block?: BlockAction;
    constructor(properties: DefaultAction);
}
export declare class OrStatementTwo {
    Statements?: StatementThrees;
    constructor(properties: OrStatementTwo);
}
export declare class XssMatchStatement {
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    constructor(properties: XssMatchStatement);
}
export declare class StatementOne {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    RateBasedStatement?: RateBasedStatementOne;
    AndStatement?: AndStatementOne;
    OrStatement?: OrStatementOne;
    NotStatement?: NotStatementOne;
    constructor(properties: StatementOne);
}
export declare class ByteMatchStatement {
    SearchString?: Value<string>;
    SearchStringBase64?: Value<string>;
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    PositionalConstraint?: Value<string>;
    constructor(properties: ByteMatchStatement);
}
export declare class Rules {
    Rules?: List<Rule>;
    constructor(properties: Rules);
}
export declare class NotStatementTwo {
    Statement?: StatementThree;
    constructor(properties: NotStatementTwo);
}
export declare class OverrideAction {
    Count?: CountAction;
    None?: NoneAction;
    constructor(properties: OverrideAction);
}
export declare class RateBasedStatementTwo {
    Limit?: Value<number>;
    AggregateKeyType?: Value<string>;
    ScopeDownStatement?: StatementThree;
    constructor(properties: RateBasedStatementTwo);
}
export declare type Method = undefined;
export declare class AndStatementTwo {
    Statements?: StatementThrees;
    constructor(properties: AndStatementTwo);
}
export declare class RegexPatternSetReferenceStatement {
    Arn?: Value<string>;
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    constructor(properties: RegexPatternSetReferenceStatement);
}
export declare class Rule {
    Name?: Value<string>;
    Priority?: Value<number>;
    Statement?: StatementOne;
    Action?: RuleAction;
    OverrideAction?: OverrideAction;
    VisibilityConfig?: VisibilityConfig;
    constructor(properties: Rule);
}
export declare class CountryCodes {
    CountryCodes?: List<Value<string>>;
    constructor(properties: CountryCodes);
}
export declare class StatementThrees {
    StatementThrees?: List<StatementThree>;
    constructor(properties: StatementThrees);
}
export declare type BlockAction = undefined;
export declare type QueryString = undefined;
export declare class StatementTwos {
    StatementTwos?: List<StatementTwo>;
    constructor(properties: StatementTwos);
}
export declare class OrStatementOne {
    Statements?: StatementTwos;
    constructor(properties: OrStatementOne);
}
export declare class RuleGroupReferenceStatement {
    Arn?: Value<string>;
    ExcludedRules?: ExcludedRules;
    constructor(properties: RuleGroupReferenceStatement);
}
export declare class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    RateBasedStatement?: RateBasedStatementTwo;
    AndStatement?: AndStatementTwo;
    OrStatement?: OrStatementTwo;
    NotStatement?: NotStatementTwo;
    constructor(properties: StatementTwo);
}
export declare class TextTransformations {
    TextTransformations?: List<TextTransformation>;
    constructor(properties: TextTransformations);
}
export declare type CountAction = undefined;
export declare type NoneAction = undefined;
export declare class NotStatementOne {
    Statement?: StatementTwo;
    constructor(properties: NotStatementOne);
}
export declare class ExcludedRules {
    ExcludedRules?: List<ExcludedRule>;
    constructor(properties: ExcludedRules);
}
export declare class RateBasedStatementOne {
    Limit?: Value<number>;
    AggregateKeyType?: Value<string>;
    ScopeDownStatement?: StatementTwo;
    constructor(properties: RateBasedStatementOne);
}
export declare class ExcludedRule {
    Name?: Value<string>;
    constructor(properties: ExcludedRule);
}
export declare class VisibilityConfig {
    SampledRequestsEnabled?: Value<boolean>;
    CloudWatchMetricsEnabled?: Value<boolean>;
    MetricName?: Value<string>;
    constructor(properties: VisibilityConfig);
}
export declare class SizeConstraintStatement {
    FieldToMatch?: FieldToMatch;
    ComparisonOperator?: Value<string>;
    Size?: Value<number>;
    TextTransformations?: TextTransformations;
    constructor(properties: SizeConstraintStatement);
}
export declare class SingleHeader {
    Name?: Value<string>;
    constructor(properties: SingleHeader);
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
export declare class SqliMatchStatement {
    FieldToMatch?: FieldToMatch;
    TextTransformations?: TextTransformations;
    constructor(properties: SqliMatchStatement);
}
export declare class GeoMatchStatement {
    CountryCodes?: CountryCodes;
    constructor(properties: GeoMatchStatement);
}
export declare type AllQueryArguments = undefined;
export declare class SingleQueryArgument {
    Name?: Value<string>;
    constructor(properties: SingleQueryArgument);
}
export declare class IPSetReferenceStatement {
    Arn?: Value<string>;
    constructor(properties: IPSetReferenceStatement);
}
export declare class AndStatementOne {
    Statements?: StatementTwos;
    constructor(properties: AndStatementOne);
}
export declare class StatementThree {
    ByteMatchStatement?: ByteMatchStatement;
    SqliMatchStatement?: SqliMatchStatement;
    XssMatchStatement?: XssMatchStatement;
    SizeConstraintStatement?: SizeConstraintStatement;
    GeoMatchStatement?: GeoMatchStatement;
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
    IPSetReferenceStatement?: IPSetReferenceStatement;
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
    constructor(properties: StatementThree);
}
export declare class TagList {
    TagList?: List<ResourceTag>;
    constructor(properties: TagList);
}
export interface WebACLProperties {
    DefaultAction: DefaultAction;
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    Rules?: Rules;
    VisibilityConfig: VisibilityConfig;
    Tags?: TagList;
}
export default class WebACL extends ResourceBase<WebACLProperties> {
    static RuleAction: typeof RuleAction;
    static ManagedRuleGroupStatement: typeof ManagedRuleGroupStatement;
    static TextTransformation: typeof TextTransformation;
    static DefaultAction: typeof DefaultAction;
    static OrStatementTwo: typeof OrStatementTwo;
    static XssMatchStatement: typeof XssMatchStatement;
    static StatementOne: typeof StatementOne;
    static ByteMatchStatement: typeof ByteMatchStatement;
    static Rules: typeof Rules;
    static NotStatementTwo: typeof NotStatementTwo;
    static OverrideAction: typeof OverrideAction;
    static RateBasedStatementTwo: typeof RateBasedStatementTwo;
    static AndStatementTwo: typeof AndStatementTwo;
    static RegexPatternSetReferenceStatement: typeof RegexPatternSetReferenceStatement;
    static Rule: typeof Rule;
    static CountryCodes: typeof CountryCodes;
    static StatementThrees: typeof StatementThrees;
    static StatementTwos: typeof StatementTwos;
    static OrStatementOne: typeof OrStatementOne;
    static RuleGroupReferenceStatement: typeof RuleGroupReferenceStatement;
    static StatementTwo: typeof StatementTwo;
    static TextTransformations: typeof TextTransformations;
    static NotStatementOne: typeof NotStatementOne;
    static ExcludedRules: typeof ExcludedRules;
    static RateBasedStatementOne: typeof RateBasedStatementOne;
    static ExcludedRule: typeof ExcludedRule;
    static VisibilityConfig: typeof VisibilityConfig;
    static SizeConstraintStatement: typeof SizeConstraintStatement;
    static SingleHeader: typeof SingleHeader;
    static FieldToMatch: typeof FieldToMatch;
    static SqliMatchStatement: typeof SqliMatchStatement;
    static GeoMatchStatement: typeof GeoMatchStatement;
    static SingleQueryArgument: typeof SingleQueryArgument;
    static IPSetReferenceStatement: typeof IPSetReferenceStatement;
    static AndStatementOne: typeof AndStatementOne;
    static StatementThree: typeof StatementThree;
    static TagList: typeof TagList;
    constructor(properties: WebACLProperties);
}
