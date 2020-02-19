import DBCluster_ from './dbCluster';
import DBParameterGroup_ from './dbParameterGroup';
import DBClusterParameterGroup_ from './dbClusterParameterGroup';
import DBSubnetGroup_ from './dbSubnetGroup';
import DBInstance_ from './dbInstance';
export declare namespace Neptune {
    const DBCluster: typeof DBCluster_;
    const DBParameterGroup: typeof DBParameterGroup_;
    const DBClusterParameterGroup: typeof DBClusterParameterGroup_;
    const DBSubnetGroup: typeof DBSubnetGroup_;
    const DBInstance: typeof DBInstance_;
    type DBCluster = DBCluster_;
    type DBParameterGroup = DBParameterGroup_;
    type DBClusterParameterGroup = DBClusterParameterGroup_;
    type DBSubnetGroup = DBSubnetGroup_;
    type DBInstance = DBInstance_;
}
