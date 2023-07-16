import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  constructor(private service: AppService,private router:Router) { 
    this.service.getHolidays().subscribe(data => {
        this.holidays=data
      
    })
  }
  ngOnInit(): void {
    console.log("Oninit emp-directory");
  }
  holidays!:any[]
}
