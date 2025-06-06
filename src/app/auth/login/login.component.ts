import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loginError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const { email, senha } = this.form.value;

    this.authService.login(email, senha).subscribe(res => {
      if (res) {
        this.loginError = false;
        this.router.navigate(['/dashboard']);
      } else {
        this.loginError = true;
      }
    });
  }
}
