import { Component } from '@angular/core';
import { IntegrationService } from '../services/integration.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from '../model/login-request';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-customer',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent {
  userForm: FormGroup;
  request: LoginRequest; 

  constructor(private integration: IntegrationService) {
    // Initialize the `userForm` in the constructor.
    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    // Initialize the `request` object.
    this.request = new LoginRequest();
  }

  dologin() {
    const formValue = this.userForm.value;

    // Validate credentials
    if (formValue.username === '' || formValue.password === '') {
      alert('Wrong credentials');
      return;
    }

    // Set `LoginRequest` properties.
    this.request.username = formValue.username;
    this.request.password = formValue.password;

    // Call the login service.
    this.integration.doLogin(this.request).subscribe({
      next: (res) => {
        console.log('Received response: ' + res.token);
      },
      error: (err) => {
        console.log('Error received: ' + err);
      }
    });
  }
}
