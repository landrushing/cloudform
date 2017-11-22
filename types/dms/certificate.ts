/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface CertificateProperties {
    CertificateIdentifier?: Value<string>
    CertificatePem?: Value<string>
    CertificateWallet?: Value<string>
}

export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::Certificate', properties, dependsOn)
    }
}