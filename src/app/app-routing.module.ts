import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardShellComponent } from './dashboard/containers/dashboard-shell/dashboard-shell.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
