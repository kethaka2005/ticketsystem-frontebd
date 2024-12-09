import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-select',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css'],
})
export class UserSelectComponent {
  selectedOption: string = ''; // Variable to store user selection

  constructor(private router: Router) {}

  navigateBasedOnRole(): void {
    console.log('Selected Option:', this.selectedOption); // Debugging log
    if (this.selectedOption === 'Vendor') {
      this.router.navigate(['/login-customer']); // Navigate to the login-customer component
    } else if (this.selectedOption === 'Customer') {
      this.router.navigate(['/login-vendor']); // Navigate to the login-vendor component
    } else {
      alert('Please select a role to proceed.');
    }
  }
}
