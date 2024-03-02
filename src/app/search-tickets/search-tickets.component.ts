import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css'],
})
export class SearchTicketsComponent implements OnInit {
  tickets: any[] = [];
  searchText: string = '';
  filteredTickets: any[] = [];

  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit(): void {
    this.searchTickets('');
  }

  searchTickets(query: string): void {
    this.ticketsService.searchTickets(query).subscribe(
      (data: any[]) => {
        this.tickets = data;
        this.filteredTickets = data;
        this.highlightMatchingTicket(query);
      },
      (error: any) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }

  highlightMatchingTicket(query: string): void {
    this.filteredTickets.forEach(ticket => {
      ticket.highlighted = ticket.ownerID.toLowerCase().includes(query.toLowerCase());
    });
  }

  viewTicket(ticketId: number) {
    console.log('View ticket with ownerID:', ticketId);
    this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
  }

  updateTicket(ticketId: number) {
    console.log('Update ticket with ownerID:', ticketId);
    this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
  }
}

  
  
  
  
  
  
//   updateTicket(ticketId: number) {
//     // Perform navigation logic here
//     console.log('Update ticket with ID:', ticketId);
//     this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
//   }
// }
