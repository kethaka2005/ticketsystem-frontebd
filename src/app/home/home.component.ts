import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  eventForm: FormGroup;
  createdEvents: any[] = []; // Array to store created events

  constructor() {
    this.eventForm = new FormGroup({
      eventName: new FormControl(''),
      eventLocation: new FormControl(''),
      eventPrice: new FormControl(0),
      maxTicketCapacity: new FormControl(0),
    });
  }

  createEvent(): void {
    const newEvent = this.eventForm.value;
    this.createdEvents.push({
      ...newEvent,
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image for the event
    });
    this.eventForm.reset(); // Reset the form after submission
  }
}
