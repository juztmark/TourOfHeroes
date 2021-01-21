import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  failedAttempt: boolean = false;
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const controls = this.loginForm.controls;
    const user = {
      name: controls.userName.value,
      password: controls.password.value,
    };
    this.authservice.login(user as User);
    this.authservice.IsLoggedIn.subscribe(
      (x) => (this.failedAttempt = x ? false : true)
    );
  }
}
