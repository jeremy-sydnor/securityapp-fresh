import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
} from '@angular/material';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCardModule, 
        MatMenuModule, 
        MatToolbarModule, 
        MatIconModule,
    ]
})
export class MaterialModules { }