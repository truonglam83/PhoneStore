import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createRegister();
  }

  createRegister(){
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
      [this.validateEmailNotTaken()]
    ],
      password:[null,[Validators.required]]
    })
  }
  
  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe(res => {
      this.router.navigateByUrl('/');
    },error => {
      console.log(error);
    })
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if(control.value){
            return of(null);
          } else{
            return this.accountService.checkEmailExists(control.value).pipe(
              map(res => {
                return res? {EmailExists: true} : true;
              })
            )
          }
        })
      )
    }
  }
}
