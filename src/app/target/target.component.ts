import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit{
  searchTerm: string ='';
  user:any;
  constructor(private usersservice: UsersService) {}
    ngOnInit(): void {
      this.usersservice.getusers().subscribe(data =>{
        this.user = data;
      })
    }
  }


