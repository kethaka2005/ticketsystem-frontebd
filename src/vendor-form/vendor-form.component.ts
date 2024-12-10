import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-form',
  imports:[FormsModule],
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent {
  logedInUser: string = 'John Doe'; // Example, replace with actual logic

  event = {
    eventName:'',
    eventLocation: '',
    eventPrice: 0,
    configuration: {
      maxTicketCapacity: 0
    }
  };

  createEvent(): void {
    console.log('Event Created:', this.event);
    alert('Event created successfully!');
  }
}
