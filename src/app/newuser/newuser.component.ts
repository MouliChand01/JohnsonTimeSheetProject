import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  submitted = false;
  registerForm: any;

  constructor(private formBilder: FormBuilder, private router: Router,private ser:OjasSerService) { }

  ngOnInit(): void {
    this.registerForm = this.formBilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      empid: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  newData(){
    console.log(`${this.registerForm.value.name} done your registration..`)
  }
}
 

