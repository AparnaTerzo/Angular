import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }

  data: any

  form = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required]),
})

ngOnInit(): void {
}

submit(){
  this.data = this.form.value
  console.log(this.data)
  this.service.applyleave(this.data).subscribe(data => {
    console.log(data)
  })
  this.router.navigate(['']);
}

}
