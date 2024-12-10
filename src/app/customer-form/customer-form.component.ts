import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {
  // Define specific keys for the events object
  events: Record<'Event 1' | 'Event 2', number> = {
    'Event 1': 100, // Maximum tickets for Event 1
    'Event 2': 50,  // Maximum tickets for Event 2
  };

  // Customer data
  customer = {
    selectedEvent: '' as keyof typeof this.events, // Restrict selectedEvent to the event keys
    tickets: 0,
  };

  // Maximum tickets for the selected event
  maxTickets: number | null = null;

  // Update max tickets based on the selected event
  updateMaxTickets(): void {
    this.maxTickets = this.events[this.customer.selectedEvent] || null;
  }

  // Handle form submission
  submitForm(): void {
    if (this.maxTickets !== null && this.customer.tickets > this.maxTickets) {
      alert(
        `You cannot purchase more than ${this.maxTickets} tickets for ${this.customer.selectedEvent}.`
      );
    } else {
      console.log('Customer Data:', this.customer);
      alert('Form submitted successfully!');
    }
  }
}
