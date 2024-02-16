import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tickets',
  templateUrl:'./search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css'],
})
export class SearchTicketsComponent implements OnInit {
  tickets: any[] = []; // Option 1: Initialize the property inline

  constructor() { }

  ngOnInit(): void {
    // Initialize or fetch tickets here
    this.tickets = [
      { id: 1, createdBy: 'John Doe', createdDateTime: '2024-02-07', daysToClose: 5 },
      { id: 1, createdBy: 'John Doe', createdDateTime: '2024-02-07', daysToClose: 5 },
      { id: 1, createdBy: 'John Doe', createdDateTime: '2024-02-07', daysToClose: 5 },
      { id: 1, createdBy: 'John Doe', createdDateTime: '2024-02-07', daysToClose: 5 },
      { id: 1, createdBy: 'John Doe', createdDateTime: '2024-02-07', daysToClose: 5 }
    ];
  }

  viewTicket(ticketId: number) {
    console.log('View ticket with ID:', ticketId);
  }

  updateTicket(ticketId: number) {
    console.log('Update ticket with ID:', ticketId);
  }
}