/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface UserProfileProperties {
    AllowSelfManagement?: Value<boolean>
    IamUserArn: Value<string>
    SshPublicKey?: Value<string>
    SshUsername?: Value<string>
}

export default class UserProfile extends ResourceBase {
    constructor(properties: UserProfileProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::UserProfile', properties, dependsOn)
    }
}