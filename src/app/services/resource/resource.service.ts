import { Injectable } from '@angular/core';
import { Resource } from './resource';


@Injectable()
export class ResourceService {
    resources: Resource[] = [];

    constructor() {
        this.resources = this.createDummyResources();
    }

    getResources(): Resource[] {
        return this.resources;
    }

    getResource(id: string) {
        for (let r of this.resources) {
            if (r.id === id) {
                return r;
            }
        }
        return null;
      }

    setResource(resource: Resource) {
        let temp=this.getResource(resource.id);
        if (temp) {
            temp.description=resource.description;
        } else {
            this.resources.push(resource);
        }
    }

    createDummyResources(): Resource[] {
        var tempResources: Resource[] = [
            {id: '1', description: 'Resource 1'},
            {id: '2', description: 'Resource 2'},
            {id: '3', description: 'Resource 3'},
            {id: '4', description: 'Resource 4'},
            {id: '5', description: 'Resource 5'},
            {id: '6', description: 'Resource 6'},
            {id: '7', description: 'Resource 7'}
        ];
        return tempResources;
    }
}