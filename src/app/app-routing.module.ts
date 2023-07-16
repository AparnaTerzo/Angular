import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdduserComponent } from './adduser/adduser.component';
import { combineLatest } from 'rxjs';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'update/:id', component: UpdateuserComponent },
  { path: 'view/:id', component: ViewuserComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard/:email', component: DashboardComponent },
  { path: 'leave', component: ApplyleaveComponent },
  { path: 'calendar', component: CalendarComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }