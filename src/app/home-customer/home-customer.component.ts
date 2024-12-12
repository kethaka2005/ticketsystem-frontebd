import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
      earlyBirdCapacity: 50,
      generalCapacity: 100,
      lastMinuteCapacity: 50,
      imageUrl: 'https://via.placeholder.com/150',
      selectedEarlyBird: 0,
      selectedGeneral: 0,
      selectedLastMinute: 0,
    },
    {
      eventName: 'Event 2',
      eventLocation: 'Los Angeles',
      eventPrice: 75,
      maxTicketCapacity: 150,
      earlyBirdCapacity: 40,
      generalCapacity: 80,
      lastMinuteCapacity: 30,
      imageUrl: 'https://via.placeholder.com/150',
      selectedEarlyBird: 0,
      selectedGeneral: 0,
      selectedLastMinute: 0,
    },
  ];

  buyTickets(event: any): void {
    const totalSelected =
      event.selectedEarlyBird + event.selectedGeneral + event.selectedLastMinute;

    if (totalSelected > event.maxTicketCapacity) {
      alert('Total tickets exceed available capacity!');
      return;
    }

    if (
      event.selectedEarlyBird > event.earlyBirdCapacity ||
      event.selectedGeneral > event.generalCapacity ||
      event.selectedLastMinute > event.lastMinuteCapacity
    ) {
      alert('Selected tickets exceed available capacity for one or more types!');
      return;
    }

    const totalCost =
      event.selectedEarlyBird * event.eventPrice +
      event.selectedGeneral * event.eventPrice +
      event.selectedLastMinute * event.eventPrice;

    alert(
      `You have purchased ${totalSelected} tickets for ${event.eventName} at a total cost of $${totalCost}.`
    );

    console.log('Ticket purchase details:', {
      eventName: event.eventName,
      earlyBird: event.selectedEarlyBird,
      general: event.selectedGeneral,
      lastMinute: event.selectedLastMinute,
      totalCost,
    });

    // Deduct the purchased tickets from the capacities
    event.earlyBirdCapacity -= event.selectedEarlyBird;
    event.generalCapacity -= event.selectedGeneral;
    event.lastMinuteCapacity -= event.selectedLastMinute;
    event.maxTicketCapacity -= totalSelected;

    // Reset the selected tickets
    event.selectedEarlyBird = 0;
    event.selectedGeneral = 0;
    event.selectedLastMinute = 0;
  }
}
