import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User, User2 } from 'src/app/shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  submitted = false
  message: string

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) => {
      if(params['loginAgain']){
        this.message = 'Пожалуйста введите данные'
      }
    })

    this.form = new FormGroup({
      email: new FormControl (null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl (null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    if(this.form.invalid){
      return
    }

    this.submitted = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    const user2: User2 = {
      value: this.form.value.email,
    }

    this.auth.login(user2)
      .subscribe(() => {
        this.form.reset()
        this.router.navigate(['/admin', 'dashboard'])
        this.submitted = false
      })

  }

}
