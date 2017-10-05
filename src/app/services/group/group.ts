import {Resource, AccessLevel} from '../resource/resource';


export class GroupAccess {
    resource: Resource;
    access: AccessLevel[];
};

export class Group {
    name: string;
    description: string;

    resources: GroupAccess[];
};