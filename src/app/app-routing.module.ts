import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdduserComponent } from './adduser/adduser.component';
import { combineLatest } from 'rxjs';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update/:id', component: UpdateuserComponent },
  { path: 'view/:id', component: ViewuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }