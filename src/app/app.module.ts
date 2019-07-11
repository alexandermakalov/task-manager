import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './dashboard/components/task-item/task-item.component';
import { TaskListComponent } from './dashboard/components/task-list/task-list.component';
import { DashboardShellComponent } from './dashboard/containers/dashboard-shell/dashboard-shell.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './dashboard/state/task-list.reducer';
import { TaskService } from './services/task.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    DashboardShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ taskPage: reducer}),
    // StoreModule.forFeature('tasks', reducer),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
