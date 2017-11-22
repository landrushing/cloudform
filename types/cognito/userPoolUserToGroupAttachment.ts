/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface UserPoolUserToGroupAttachmentProperties {
    GroupName: Value<string>
    UserPoolId: Value<string>
    Username: Value<string>
}

export default class UserPoolUserToGroupAttachment extends ResourceBase {
    constructor(properties: UserPoolUserToGroupAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPoolUserToGroupAttachment', properties, dependsOn)
    }
}