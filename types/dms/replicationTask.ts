/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface ReplicationTaskProperties {
    ReplicationTaskSettings?: Value<string>
    TableMappings: Value<string>
    ReplicationTaskIdentifier?: Value<string>
    SourceEndpointArn: Value<string>
    MigrationType: Value<string>
    TargetEndpointArn: Value<string>
    ReplicationInstanceArn: Value<string>
    Tags?: ResourceTag[]
    CdcStartTime?: Value<number>
}

export default class ReplicationTask extends ResourceBase {
    constructor(properties: ReplicationTaskProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::ReplicationTask', properties, dependsOn)
    }
}