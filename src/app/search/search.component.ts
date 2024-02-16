import { Component } from '@angular/core';
import { Owner } from '../owner';

@Component({
  selector: 'app-search',
  templateUrl:'./search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'pms';
  filteredOwnersData: Owner[] = [
    // Sample owner data
    { ownerId: 1, ownerName: 'John Doe', propertyId: 10, mobileNumber: '1234567890',create:"CREATE" },
    { ownerId: 2, ownerName: 'Jane Doe', propertyId: 20, mobileNumber: '9876543210',create:"CREATE" },
    { ownerId: 3, ownerName: 'Alice Smith', propertyId: 30, mobileNumber: '0123456789',create:"CREATE" },
    // Add three more owners here
    { ownerId: 4, ownerName: 'Bob Smith', propertyId: 40, mobileNumber: '1122334455',create:"CREATE" },
    { ownerId: 5, ownerName: 'Charlie Brown', propertyId: 50, mobileNumber: '6677889900',create:"CREATE" },
    { ownerId: 6, ownerName: 'Lucy Jones', propertyId: 60, mobileNumber: '2233445566' ,create:"CREATE"}
  ];

}
