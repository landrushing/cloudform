import Cluster_ from './cluster';
import PrimaryTaskSet_ from './primaryTaskSet';
import Service_ from './service';
import TaskSet_ from './taskSet';
import TaskDefinition_ from './taskDefinition';
export declare namespace ECS {
    const Cluster: typeof Cluster_;
    const PrimaryTaskSet: typeof PrimaryTaskSet_;
    const Service: typeof Service_;
    const TaskSet: typeof TaskSet_;
    const TaskDefinition: typeof TaskDefinition_;
    type Cluster = Cluster_;
    type PrimaryTaskSet = PrimaryTaskSet_;
    type Service = Service_;
    type TaskSet = TaskSet_;
    type TaskDefinition = TaskDefinition_;
}
