import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardShellComponent } from './containers/dashboard-shell/dashboard-shell.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/task-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { DashboardEffects } from './state/task-list.effects';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const dashbaordRoutes: Routes = [
  { path: '', component: DashboardShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(dashbaordRoutes),
    StoreModule.forFeature('tasks', reducer),
    EffectsModule.forFeature(
      [ DashboardEffects ]
    ),
  ],
  declarations: [
    DashboardShellComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskEditComponent,
  ]
})
export class DashboardModule { }
