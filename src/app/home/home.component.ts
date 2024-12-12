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
      earlyBirdCapacity: new FormControl(0),
      generalCapacity: new FormControl(0),
      lastMinuteCapacity: new FormControl(0),
    });
  }

  createEvent(): void {
    const newEvent = this.eventForm.value;

    // Calculate the total capacity
    const totalCapacity =
      newEvent.earlyBirdCapacity +
      newEvent.generalCapacity +
      newEvent.lastMinuteCapacity;

    if (totalCapacity <= 0) {
      alert('Total capacity must be greater than 0!');
      return;
    }

    this.createdEvents.push({
      ...newEvent,
      totalCapacity, // Store the total capacity for display
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image for the event
    });
    this.eventForm.reset(); // Reset the form after submission
  }
}
