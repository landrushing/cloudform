import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface InsightRuleProperties {
    RuleState: Value<string>;
    RuleBody: Value<string>;
    RuleName: Value<string>;
}
export default class InsightRule extends ResourceBase<InsightRuleProperties> {
    constructor(properties: InsightRuleProperties);
}
