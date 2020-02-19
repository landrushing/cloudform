import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LustreConfiguration {
    ImportPath?: Value<string>;
    WeeklyMaintenanceStartTime?: Value<string>;
    ImportedFileChunkSize?: Value<number>;
    DeploymentType?: Value<string>;
    ExportPath?: Value<string>;
    PerUnitStorageThroughput?: Value<number>;
    constructor(properties: LustreConfiguration);
}
export declare class SelfManagedActiveDirectoryConfiguration {
    FileSystemAdministratorsGroup?: Value<string>;
    UserName?: Value<string>;
    DomainName?: Value<string>;
    OrganizationalUnitDistinguishedName?: Value<string>;
    DnsIps?: List<Value<string>>;
    Password?: Value<string>;
    constructor(properties: SelfManagedActiveDirectoryConfiguration);
}
export declare class WindowsConfiguration {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    WeeklyMaintenanceStartTime?: Value<string>;
    ActiveDirectoryId?: Value<string>;
    DeploymentType?: Value<string>;
    ThroughputCapacity?: Value<number>;
    CopyTagsToBackups?: Value<boolean>;
    DailyAutomaticBackupStartTime?: Value<string>;
    AutomaticBackupRetentionDays?: Value<number>;
    PreferredSubnetId?: Value<string>;
    constructor(properties: WindowsConfiguration);
}
export interface FileSystemProperties {
    KmsKeyId?: Value<string>;
    StorageCapacity?: Value<number>;
    FileSystemType: Value<string>;
    LustreConfiguration?: LustreConfiguration;
    BackupId?: Value<string>;
    SubnetIds: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    WindowsConfiguration?: WindowsConfiguration;
}
export default class FileSystem extends ResourceBase<FileSystemProperties> {
    static LustreConfiguration: typeof LustreConfiguration;
    static SelfManagedActiveDirectoryConfiguration: typeof SelfManagedActiveDirectoryConfiguration;
    static WindowsConfiguration: typeof WindowsConfiguration;
    constructor(properties: FileSystemProperties);
}
