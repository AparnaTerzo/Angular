import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  p:number=1
  totalemployees:any;
  query!:string
  role!:string|null
  isNotAdmin=true;
  dept!:string

  form = new FormGroup({
    search:new FormControl('',[Validators.required])
  })
  form1 = new FormGroup({
    dept:new FormControl('',[Validators.required])
  })
  
viewEmployee(id:number) {
this.router.navigate(['view',id]);
}


  updateUser(id: number){
    this.router.navigate(['update', id]);
  }
  constructor(private service: AppService,private router:Router) { 
   
    if(!localStorage.getItem("Role"))
    this.isNotAdmin=false;
    this.service.getUsers().subscribe(data => {
      this.employees = data;
      this.totalemployees=data.length;
      },error => {
      if (error instanceof HttpErrorResponse && error.status === 403 ) {
        this.router.navigate(['/login'])
        console.error('Expectation Failed:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    }
    )
  }

 

  employees!:any[]
  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
      setTimeout(()=>{
        window.location.reload();
      });
    })
  }
  ngOnInit(): void {
    console.log("Oninit emp-directory");
  }

  searchUser(){
    this.service.searchUsers(this.query).subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    })
  }

  sortUser(){
    this.service.sortUsers(this.dept).subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    })
  }

  logout(){
    localStorage.clear();
      this.router.navigate(['/login']); 
  }

  addUser() {
    this.router.navigate(['add']);
    }
  
}