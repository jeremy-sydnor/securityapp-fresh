import { Injectable } from '@angular/core';
import { Group, GroupAccess } from './group';
import { AccessLevel, Resource } from '../resource/resource';
import { ResourceService } from '../resource/resource.service';

@Injectable()
export class GroupService {
  groups: Group[] = [];
  
  constructor(private resourceService: ResourceService) {
    this.groups = this.createDummyGroups();
  }

  getGroups(): Group[] {
    return this.groups;
  }

  findGroups(searchText:string): Group[] {
    let st = searchText.toLowerCase();
    var results:Group[];
    for (let g of this.getGroups()) {
      if (g.name.toLowerCase().indexOf(st) >= 0) {
        results.push(g);
      } else if (g.description.toLowerCase().indexOf(st) >= 0) {
        results.push(g);
      }
      return results;
    }
  }

  getGroup(name: string) {
    for (let g of this.groups) {
      if (g.name === name) {
        return g;
      }
    }
    return null;
  }

  setGroup(group: Group) {
    let temp:Group=this.getGroup(group.name);
    if (temp) {
      temp.description=group.description;
      temp.resources=group.resources;
    } else {
      this.groups.push(group);
    }
  }
  
  createDummyGroups(): Group[] {
    let tempGroups: Group[] = [
      { name: 'Group1', 
        description: 'Group 1', 
        resources: [
          {resource: this.resourceService.getResource('1'), access:[AccessLevel.Read]},
          {resource: this.resourceService.getResource('3'), access:[AccessLevel.Write, AccessLevel.Admin]}
        ]
      },
      { name: 'Group2', 
        description: 'Group 2', 
        resources: [
          {resource: this.resourceService.getResource('2'), access:[AccessLevel.Read, AccessLevel.Write,AccessLevel.Create]}
        ]
      },
      { name: 'Group3', 
        description: 'Group 3', 
        resources: [
          {resource: this.resourceService.getResource('5'), access:[AccessLevel.Admin]}
        ]
      }
    ];

    return tempGroups;
  }
}