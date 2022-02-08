import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosListComponent } from './app/empleados-list/empleados-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '/empleados/get', component: EmpleadosListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
