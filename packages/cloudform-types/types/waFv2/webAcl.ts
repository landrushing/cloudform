/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 11.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class RuleAction {
    Allow?: AllowAction
    Block?: BlockAction
    Count?: CountAction

    constructor(properties: RuleAction) {
        Object.assign(this, properties)
    }
}

export type UriPath = undefined

export type Body = undefined

export class ManagedRuleGroupStatement {
    Name?: Value<string>
    VendorName?: Value<string>
    ExcludedRules?: ExcludedRules

    constructor(properties: ManagedRuleGroupStatement) {
        Object.assign(this, properties)
    }
}

export class TextTransformation {
    Priority?: Value<number>
    Type?: Value<string>

    constructor(properties: TextTransformation) {
        Object.assign(this, properties)
    }
}

export type AllowAction = undefined

export class DefaultAction {
    Allow?: AllowAction
    Block?: BlockAction

    constructor(properties: DefaultAction) {
        Object.assign(this, properties)
    }
}

export class OrStatementTwo {
    Statements?: StatementThrees

    constructor(properties: OrStatementTwo) {
        Object.assign(this, properties)
    }
}

export class XssMatchStatement {
    FieldToMatch?: FieldToMatch
    TextTransformations?: TextTransformations

    constructor(properties: XssMatchStatement) {
        Object.assign(this, properties)
    }
}

export class StatementOne {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement
    RateBasedStatement?: RateBasedStatementOne
    AndStatement?: AndStatementOne
    OrStatement?: OrStatementOne
    NotStatement?: NotStatementOne

    constructor(properties: StatementOne) {
        Object.assign(this, properties)
    }
}

export class ByteMatchStatement {
    SearchString?: Value<string>
    SearchStringBase64?: Value<string>
    FieldToMatch?: FieldToMatch
    TextTransformations?: TextTransformations
    PositionalConstraint?: Value<string>

    constructor(properties: ByteMatchStatement) {
        Object.assign(this, properties)
    }
}

export class Rules {
    Rules?: List<Rule>

    constructor(properties: Rules) {
        Object.assign(this, properties)
    }
}

export class NotStatementTwo {
    Statement?: StatementThree

    constructor(properties: NotStatementTwo) {
        Object.assign(this, properties)
    }
}

export class OverrideAction {
    Count?: CountAction
    None?: NoneAction

    constructor(properties: OverrideAction) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatementTwo {
    Limit?: Value<number>
    AggregateKeyType?: Value<string>
    ScopeDownStatement?: StatementThree

    constructor(properties: RateBasedStatementTwo) {
        Object.assign(this, properties)
    }
}

export type Method = undefined

export class AndStatementTwo {
    Statements?: StatementThrees

    constructor(properties: AndStatementTwo) {
        Object.assign(this, properties)
    }
}

export class RegexPatternSetReferenceStatement {
    Arn?: Value<string>
    FieldToMatch?: FieldToMatch
    TextTransformations?: TextTransformations

    constructor(properties: RegexPatternSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Name?: Value<string>
    Priority?: Value<number>
    Statement?: StatementOne
    Action?: RuleAction
    OverrideAction?: OverrideAction
    VisibilityConfig?: VisibilityConfig

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class CountryCodes {
    CountryCodes?: List<Value<string>>

    constructor(properties: CountryCodes) {
        Object.assign(this, properties)
    }
}

export class StatementThrees {
    StatementThrees?: List<StatementThree>

    constructor(properties: StatementThrees) {
        Object.assign(this, properties)
    }
}

export type BlockAction = undefined

export type QueryString = undefined

export class StatementTwos {
    StatementTwos?: List<StatementTwo>

    constructor(properties: StatementTwos) {
        Object.assign(this, properties)
    }
}

export class OrStatementOne {
    Statements?: StatementTwos

    constructor(properties: OrStatementOne) {
        Object.assign(this, properties)
    }
}

export class RuleGroupReferenceStatement {
    Arn?: Value<string>
    ExcludedRules?: ExcludedRules

    constructor(properties: RuleGroupReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class StatementTwo {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement
    RateBasedStatement?: RateBasedStatementTwo
    AndStatement?: AndStatementTwo
    OrStatement?: OrStatementTwo
    NotStatement?: NotStatementTwo

    constructor(properties: StatementTwo) {
        Object.assign(this, properties)
    }
}

export class TextTransformations {
    TextTransformations?: List<TextTransformation>

    constructor(properties: TextTransformations) {
        Object.assign(this, properties)
    }
}

export type CountAction = undefined

export type NoneAction = undefined

export class NotStatementOne {
    Statement?: StatementTwo

    constructor(properties: NotStatementOne) {
        Object.assign(this, properties)
    }
}

export class ExcludedRules {
    ExcludedRules?: List<ExcludedRule>

    constructor(properties: ExcludedRules) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatementOne {
    Limit?: Value<number>
    AggregateKeyType?: Value<string>
    ScopeDownStatement?: StatementTwo

    constructor(properties: RateBasedStatementOne) {
        Object.assign(this, properties)
    }
}

export class ExcludedRule {
    Name?: Value<string>

    constructor(properties: ExcludedRule) {
        Object.assign(this, properties)
    }
}

export class VisibilityConfig {
    SampledRequestsEnabled?: Value<boolean>
    CloudWatchMetricsEnabled?: Value<boolean>
    MetricName?: Value<string>

    constructor(properties: VisibilityConfig) {
        Object.assign(this, properties)
    }
}

export class SizeConstraintStatement {
    FieldToMatch?: FieldToMatch
    ComparisonOperator?: Value<string>
    Size?: Value<number>
    TextTransformations?: TextTransformations

    constructor(properties: SizeConstraintStatement) {
        Object.assign(this, properties)
    }
}

export class SingleHeader {
    Name?: Value<string>

    constructor(properties: SingleHeader) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    SingleHeader?: SingleHeader
    SingleQueryArgument?: SingleQueryArgument
    AllQueryArguments?: AllQueryArguments
    UriPath?: UriPath
    QueryString?: QueryString
    Body?: Body
    Method?: Method

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export class SqliMatchStatement {
    FieldToMatch?: FieldToMatch
    TextTransformations?: TextTransformations

    constructor(properties: SqliMatchStatement) {
        Object.assign(this, properties)
    }
}

export class GeoMatchStatement {
    CountryCodes?: CountryCodes

    constructor(properties: GeoMatchStatement) {
        Object.assign(this, properties)
    }
}

export type AllQueryArguments = undefined

export class SingleQueryArgument {
    Name?: Value<string>

    constructor(properties: SingleQueryArgument) {
        Object.assign(this, properties)
    }
}

export class IPSetReferenceStatement {
    Arn?: Value<string>

    constructor(properties: IPSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class AndStatementOne {
    Statements?: StatementTwos

    constructor(properties: AndStatementOne) {
        Object.assign(this, properties)
    }
}

export class StatementThree {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    RuleGroupReferenceStatement?: RuleGroupReferenceStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    ManagedRuleGroupStatement?: ManagedRuleGroupStatement

    constructor(properties: StatementThree) {
        Object.assign(this, properties)
    }
}

export class TagList {
    TagList?: List<ResourceTag>

    constructor(properties: TagList) {
        Object.assign(this, properties)
    }
}

export interface WebACLProperties {
    DefaultAction: DefaultAction
    Description?: Value<string>
    Name?: Value<string>
    Scope: Value<string>
    Rules?: Rules
    VisibilityConfig: VisibilityConfig
    Tags?: TagList
}

export default class WebACL extends ResourceBase<WebACLProperties> {
    static RuleAction = RuleAction
    static ManagedRuleGroupStatement = ManagedRuleGroupStatement
    static TextTransformation = TextTransformation
    static DefaultAction = DefaultAction
    static OrStatementTwo = OrStatementTwo
    static XssMatchStatement = XssMatchStatement
    static StatementOne = StatementOne
    static ByteMatchStatement = ByteMatchStatement
    static Rules = Rules
    static NotStatementTwo = NotStatementTwo
    static OverrideAction = OverrideAction
    static RateBasedStatementTwo = RateBasedStatementTwo
    static AndStatementTwo = AndStatementTwo
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static Rule = Rule
    static CountryCodes = CountryCodes
    static StatementThrees = StatementThrees
    static StatementTwos = StatementTwos
    static OrStatementOne = OrStatementOne
    static RuleGroupReferenceStatement = RuleGroupReferenceStatement
    static StatementTwo = StatementTwo
    static TextTransformations = TextTransformations
    static NotStatementOne = NotStatementOne
    static ExcludedRules = ExcludedRules
    static RateBasedStatementOne = RateBasedStatementOne
    static ExcludedRule = ExcludedRule
    static VisibilityConfig = VisibilityConfig
    static SizeConstraintStatement = SizeConstraintStatement
    static SingleHeader = SingleHeader
    static FieldToMatch = FieldToMatch
    static SqliMatchStatement = SqliMatchStatement
    static GeoMatchStatement = GeoMatchStatement
    static SingleQueryArgument = SingleQueryArgument
    static IPSetReferenceStatement = IPSetReferenceStatement
    static AndStatementOne = AndStatementOne
    static StatementThree = StatementThree
    static TagList = TagList

    constructor(properties: WebACLProperties) {
        super('AWS::WAFv2::WebACL', properties)
    }
}
