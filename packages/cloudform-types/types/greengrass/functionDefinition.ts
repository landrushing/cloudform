/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Execution {
    IsolationMode?: Value<string>
    RunAs?: RunAs

    constructor(properties: Execution) {
        Object.assign(this, properties)
    }
}

export class FunctionConfiguration {
    MemorySize?: Value<number>
    Pinned?: Value<boolean>
    ExecArgs?: Value<string>
    Timeout?: Value<number>
    EncodingType?: Value<string>
    Environment?: Environment
    Executable?: Value<string>

    constructor(properties: FunctionConfiguration) {
        Object.assign(this, properties)
    }
}

export class Environment {
    Variables?: {[key: string]: any}
    Execution?: Execution
    ResourceAccessPolicies?: List<ResourceAccessPolicy>
    AccessSysfs?: Value<boolean>

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class FunctionDefinitionVersion {
    DefaultConfig?: DefaultConfig
    Functions!: List<Function>

    constructor(properties: FunctionDefinitionVersion) {
        Object.assign(this, properties)
    }
}

export class RunAs {
    Uid?: Value<number>
    Gid?: Value<number>

    constructor(properties: RunAs) {
        Object.assign(this, properties)
    }
}

export class DefaultConfig {
    Execution!: Execution

    constructor(properties: DefaultConfig) {
        Object.assign(this, properties)
    }
}

export class Function {
    FunctionArn!: Value<string>
    FunctionConfiguration!: FunctionConfiguration
    Id!: Value<string>

    constructor(properties: Function) {
        Object.assign(this, properties)
    }
}

export class ResourceAccessPolicy {
    ResourceId!: Value<string>
    Permission?: Value<string>

    constructor(properties: ResourceAccessPolicy) {
        Object.assign(this, properties)
    }
}

export interface FunctionDefinitionProperties {
    InitialVersion?: FunctionDefinitionVersion
    Name: Value<string>
}

export default class FunctionDefinition extends ResourceBase<FunctionDefinitionProperties> {
    static Execution = Execution
    static FunctionConfiguration = FunctionConfiguration
    static Environment = Environment
    static FunctionDefinitionVersion = FunctionDefinitionVersion
    static RunAs = RunAs
    static DefaultConfig = DefaultConfig
    static Function = Function
    static ResourceAccessPolicy = ResourceAccessPolicy

    constructor(properties: FunctionDefinitionProperties) {
        super('AWS::Greengrass::FunctionDefinition', properties)
    }
}
