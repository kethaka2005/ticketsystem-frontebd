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
  constructor(private router: Router) {}

  navigateBasedOnRole(user: string): void {
    console.log('Selected Option:', user); // Debugging log

    // Use the same route for both roles since "login" is a shared component
    if (user === 'Vendor' || user === 'Customer') {
      this.router.navigate(['/login'], {
        queryParams: { role: user }, // Pass the role as a query parameter
      });
    } else {
      alert('Please select a role to proceed.');
    }
  }
}
