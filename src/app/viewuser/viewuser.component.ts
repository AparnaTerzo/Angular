import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

  user?: Employee
  data:any

  constructor(private service:AppService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    // },error => {
    //   if (error instanceof HttpErrorResponse && error.status === 403 ) {
    //     this.router.navigate(['/login'])
    //     console.error('Expectation Failed:', error.message);
    //   } else {
    //     console.error('An error occurred:', error);
    //   }
    });
  }


}
