import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UpdateSuccessDialogComponent } from '../update-success-dialog/update-success-dialog.component';

interface OwnerData {
  ownerName: string;
  ownerId: string;
  propertyLocation: string;
  createdBy: string;
  createdDate: Date;
  assignedTo: string;
  description: string;
  status: string;
}

interface UploadedFile {
  name: string;
  uploadTime: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  ownerData: OwnerData = {
    ownerName: '',
    ownerId: '',
    propertyLocation: '',
    createdBy: '',
    createdDate: new Date(),
    assignedTo: '',
    description: '',
    status: 'New' // Default status
  };

  selectedFiles: FileList | null = null;
  uploadedFiles: UploadedFile[] = [];
  
  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch owner data or set default values
    this.ownerData = {
      ownerName: '',
      ownerId: '',
      propertyLocation: '',
      createdBy: '',
      createdDate: new Date(),
      assignedTo: '',
      description: '',
      status: ''
    };
    this.route.params.subscribe(params => {
      const ticketId = +params['ticketId']; // Access the ticket ID parameter from the URL
      console.log('Ticket ID:', ticketId);
      // Fetch ticket details or perform actions based on ticket ID
    });
  }

  onFileSelected(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement)?.files;
  }

  onSubmit() {
    const formData = new FormData();
    Object.entries(this.ownerData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (this.selectedFiles?.length) {
      Array.from(this.selectedFiles).forEach(file => {
        formData.append('files', file);
        this.uploadedFiles.push({ name: file.name, uploadTime: new Date().toISOString() });
      });
    } else {
      // Handle case where no files were selected
    }

    // Simulating HTTP post request
    console.log('Form data:', formData);
    console.log('Uploaded files:', this.uploadedFiles);

    // Clear selected files after submission
    this.selectedFiles = null;

    const dialogRef = this.dialog.open(UpdateSuccessDialogComponent);

    // Handle dialog close event
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed:', result);
    });
  }
}
