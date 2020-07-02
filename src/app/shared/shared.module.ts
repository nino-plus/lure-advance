import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NotifymsgPipe } from '../pipe/notifymsg.pipe';
import { RelativetimePipe } from '../pipe/relativetime.pipe';
import { ActivityComponent } from './activity/activity.component';
import { ComonCommentComponent } from './comon-comment/comon-comment.component';
import { FilterComponent } from './filter/filter.component';
import { ThingCardSmComponent } from './thing-card-sm/thing-card-sm.component';
import { ThingCardWideComponent } from './thing-card-wide/thing-card-wide.component';
import { ThingCardComponent } from './thing-card/thing-card.component';

@NgModule({
  declarations: [
    ComonCommentComponent,
    ActivityComponent,
    NotifymsgPipe,
    ThingCardComponent,
    ThingCardSmComponent,
    ThingCardWideComponent,
    FilterComponent,
    RelativetimePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatChipsModule,
  ],
  exports: [
    ComonCommentComponent,
    ActivityComponent,
    ThingCardComponent,
    ThingCardSmComponent,
    ThingCardWideComponent,
    FilterComponent,
  ],
})
export class SharedModule {}
