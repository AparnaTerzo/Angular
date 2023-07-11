import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  p:number=1
  totalemployees:any;
viewEmployee(id:number) {
this.router.navigate(['view',id]);
}


  updateUser(id: number){
    this.router.navigate(['update', id]);
  }
  constructor(private service: AppService,private router:Router) { 
    this.service.getUsers().subscribe(data => {
      this.employees = data;
      this.totalemployees=data.length;
    })
  }


  employees!:any[]
  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    })
  }
  ngOnInit(): void {
    console.log("Oninit emp-directory");
  }

}