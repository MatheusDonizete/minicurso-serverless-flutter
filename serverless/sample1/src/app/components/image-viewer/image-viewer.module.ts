import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImageViewerComponent } from './image-viewer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ImageViewerComponent
  ],
  exports: [
    MatCardModule,
    ImageViewerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ImageViewerModule { }
