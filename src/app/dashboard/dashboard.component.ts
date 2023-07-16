import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate: string | undefined;
  query!:string
  employees!:any[]
  birthdays!:any[]
  anniversarys!:any[]
  hires!:any[]
  fa!:any
  faMessage!:any
  faCalendar!:any
  totalemployees:any;
  employee?: Employee

  constructor(private service: AppService,private router:Router,private route:ActivatedRoute,) { 

    let email = this.route.snapshot.params['email'];
     console.log(email);
     this.service.getEmployeeByEmail(email).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
    
  this.fa=faUser
  this.faMessage=faMessage
  this.faCalendar=faCalendar

    if(!localStorage.getItem('jwtToken'))
    this.router.navigate(['login']);

    this.service.getBirthdays().subscribe(data => {
      this.birthdays = data;
      
    })
    this.service.getAnniversarys().subscribe(data => {
      this.anniversarys = data;
     
      
    })
    this.service.getHires().subscribe(data => {
      this.hires = data;
     
      
    })
     
    this.service.getEmployeeByEmail(email).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
      
  }

  ngOnInit() {
    this.updateDate();
    setInterval(() => {
      this.updateDate();
    }, 1000);
  }

  updateDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = currentDate.toLocaleDateString('en-US');
  }
  logout(){
    localStorage.clear();
      this.router.navigate(['/login']); 
  }
}


