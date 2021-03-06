/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ApplicationSettings {
    SettingsGroup?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: ApplicationSettings) {
        Object.assign(this, properties)
    }
}

export class StorageConnector {
    Domains?: List<Value<string>>
    ResourceIdentifier?: Value<string>
    ConnectorType!: Value<string>

    constructor(properties: StorageConnector) {
        Object.assign(this, properties)
    }
}

export class UserSetting {
    Action!: Value<string>
    Permission!: Value<string>

    constructor(properties: UserSetting) {
        Object.assign(this, properties)
    }
}

export interface StackProperties {
    ApplicationSettings?: ApplicationSettings
    Description?: Value<string>
    StorageConnectors?: List<StorageConnector>
    DeleteStorageConnectors?: Value<boolean>
    UserSettings?: List<UserSetting>
    AttributesToDelete?: List<Value<string>>
    DisplayName?: Value<string>
    RedirectURL?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
    FeedbackURL?: Value<string>
}

export default class Stack extends ResourceBase<StackProperties> {
    static ApplicationSettings = ApplicationSettings
    static StorageConnector = StorageConnector
    static UserSetting = UserSetting

    constructor(properties?: StackProperties) {
        super('AWS::AppStream::Stack', properties || {})
    }
}
