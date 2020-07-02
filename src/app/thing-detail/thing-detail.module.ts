import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { StlModelViewerModule } from 'angular-stl-model-viewer';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RelativetimePipe } from '../pipe/relativetime.pipe';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './comments/comments.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DescriptionComponent } from './description/description.component';
import { FilesComponent } from './files/files.component';
import { ThingDetailRoutingModule } from './thing-detail-routing.module';
import { ThingDetailComponent } from './thing-detail/thing-detail.component';

@NgModule({
  declarations: [
    ThingDetailComponent,
    CommentsComponent,
    DescriptionComponent,
    FilesComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    ThingDetailRoutingModule,
    SharedModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    MatDialogModule,
    SwiperModule,
    StlModelViewerModule,
    RouterModule,
  ],
})
export class ThingDetailModule {}
