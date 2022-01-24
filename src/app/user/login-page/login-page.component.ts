import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  loading = false;

  dummyUser = {
    login: 'test@test.ru',
    password: '123',
    userName: 'Тестовый Пользователь',
  };

  errorMessage!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get isLoggedIn() {
    return !(sessionStorage.getItem('activeUser') === null);
  }

  get loggedInUserName() {
    const activeUser = JSON.parse(sessionStorage.getItem('activeUser')!);
    return activeUser.userName;
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email!.value;
    const password = this.password!.value;

    if (email === this.dummyUser.login && password == this.dummyUser.password) {
      sessionStorage.setItem('activeUser', JSON.stringify(this.dummyUser));
    } else {
      this.errorMessage = 'Пользователь не найден.';
    }

    this.loading = false;
  }
}
