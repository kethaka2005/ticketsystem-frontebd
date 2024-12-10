import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css'],
})
export class HomeCustomerComponent {
  events = [
    {
      eventName: 'Event 1',
      eventLocation: 'New York',
      eventPrice: 50,
      maxTicketCapacity: 200,
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
      eventName: 'Event 2',
      eventLocation: 'Los Angeles',
      eventPrice: 75,
      maxTicketCapacity: 150,
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
    }
  ];

  buyTicket(event: any): void {
    alert(`You have bought a ticket for ${event.eventName} at $${event.eventPrice}.`);
    console.log('Ticket purchased for:', event);
  }
}
