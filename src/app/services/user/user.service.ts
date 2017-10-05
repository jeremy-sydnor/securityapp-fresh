import { Injectable } from '@angular/core';
import { GroupService } from '../group/group.service';
import { User } from './user';

@Injectable()
export class UserService {
  users: User[];

  constructor(private groupService: GroupService) {
    this.users = this.createTempUsers();
  }

  getUsers(): User[] {
    return this.users;
  }

  findUsers(searchText: string):  User[]  {
    let st = searchText.toLowerCase();
    var result:User[] = [];
    for (let u of this.getUsers()) {
      if (u.name.toLowerCase().indexOf(st) >= 0) {
        result.push(u);
      } else if (u.email.toLowerCase().indexOf(st) >= 0) { 
        result.push(u);
      } else if (u.userid.toLowerCase().indexOf(st) >= 0) {
        result.push(u);
      }
    }
    return result;
  }

  getUser(userid: string) {
    for (let u of this.users) {
      if (u.userid === userid) {
        return u;
      }
    }
    return null;
  }

  setUser(user: User) {
    let temp:User = this.getUser(user.userid);
    if (temp) {
      temp.email=user.email;
      temp.name=user.name;
      temp.groups=user.groups;
    } else {
      this.users.push(temp);
    }
  }

  createTempUsers(): User[] {
    let tempGroups = [
      { userid: 'User1', 
        name: 'User 1',
        email: 'a@b.com', 
        groups: [this.groupService.getGroup('group1'), this.groupService.getGroup('group2')]
      },
      { userid: 'User2', 
        name: 'User 2', 
        email: 'b@c.com', 
        groups: [this.groupService.getGroup('group3')]
      },
      { userid: 'User3', 
        name: 'User 3',
        email: 'ab@ba.com', 
        groups: [this.groupService.getGroup('group1'), this.groupService.getGroup('group2'), this.groupService.getGroup('group3')]
      }
    ];
    return tempGroups;
  }
}
