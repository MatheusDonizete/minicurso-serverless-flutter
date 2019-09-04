import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { ImageViewerModule } from '../../components/image-viewer/image-viewer.module';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [{
    path: '',
    component: HomeComponent
}];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ImageViewerModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
