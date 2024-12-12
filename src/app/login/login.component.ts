import { Component, OnInit } from '@angular/core';
import { IntegrationService } from '../services/integration.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from '../model/login-request';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginCustomerComponent implements OnInit {
  userForm: FormGroup;
  request: LoginRequest; 
  role: string | null = null; 
  sendDetails = {};

  constructor(
    private userService: IntegrationService,
    private route: ActivatedRoute,
    private router:Router
  ) {
    // Initialize the `userForm` in the constructor.
    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    // Initialize the `request` object.
    this.request = new LoginRequest();
  }

  ngOnInit(): void {
    // Retrieve the role from query parameters.
    this.role = this.route.snapshot.queryParamMap.get('role');
    console.log('Role:', this.role); // Debugging log
    console.log(this.userForm);
    
  }

  // dologin() {
  //   const formValue = this.userForm.value;

  //   // Validate credentials.
  //   if (formValue.username === '' || formValue.password === '') {
  //     alert('Wrong credentials');
  //     return;
  //   }

  //   // Set `LoginRequest` properties.
  //   this.request.username = formValue.username;
  //   this.request.password = formValue.password;

  //   // Call the login service.
  //   // this.integration.doLogin(this.request).subscribe({
  //   //   next: (res) => {
  //   //     console.log('Received response: ' + res.token);
  //   //     alert(`Login successful as ${this.role}`);

  //   //     // Navigate to the appropriate home component based on role.
  //   //     if (this.role === 'vendor') {
  //   //       this.router.navigate(['/home-vendor']);
  //   //     } else if (this.role === 'customer') {
  //   //       this.router.navigate(['/home-customer']);
  //   //     } else {
  //   //       alert('Role is not defined. Cannot proceed.');
  //   //     }
  //   //   }
  //   // });
  // }
  dologin(){
  
    if (this.role === 'Vendor') {
      this.sendDetails = this.userForm.value;
      this.userService.doLogin(this.role, this.sendDetails)
      this.router.navigate(['/home-vendor']);
      } else if (this.role === 'Customer') {
        this.router.navigate(['/home-customer']);
      } else {
        alert('Role is not defined. Cannot proceed.');
      }
  }
}