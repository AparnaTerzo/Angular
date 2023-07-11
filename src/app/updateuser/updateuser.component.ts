import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Employee} from 'src/app/Employee';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user!: Employee
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

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
    directManager: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateUser(this.user?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
