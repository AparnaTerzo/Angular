import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }

  data: any

  
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    employeeId: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    doj: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    employeeType: new FormControl('', [Validators.required]),
    directManager: new FormControl('', [Validators.required]),
    profileurl: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    })

    
    
    this.router.navigate(['/']);
  }

}
