import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  role!:string;
  
  constructor(private service: AppService, private router: Router) { 
    localStorage.clear();
  }

  data: any

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required])
  })


  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.service.login(this.data).subscribe(data => {
      const jwtToken = data['token'];
      console.log(jwtToken)
      localStorage.setItem('jwtToken', jwtToken);
      console.log(localStorage.getItem('jwtToken'));

      this.service.getRole(this.data.email).subscribe(response=>{
        if(response['role']=="ADMIN"||response['role']=="admin"){
          localStorage.setItem("Role","admin");
        }
      })
      console.log(this.data.email);
     localStorage.setItem('email',this.data.email);
     this.router.navigate(['dashboard',this.data.email]).then(()=>{
       window.location.reload();
    })


  }
    )
}

}
