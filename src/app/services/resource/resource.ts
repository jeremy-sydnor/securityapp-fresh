import {Injectable} from '@angular/core';

export enum AccessLevel {
    Read,
    Write,
    Create,
    Delete,
    Admin
};

export class Resource {
    id: string;
    description: string;
}
