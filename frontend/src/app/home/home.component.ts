import { Component, OnInit } from '@angular/core';
import { IUser } from './user.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users: IUser[];
  user: IUser = {id: 0, name : "qweqwe", email: "asdfasdf"};

  constructor(private userService : UserService) {



    this.users = [];
  //   this.users = [
  //   {
  //     id: 1,
  //     name: "Ghita",
  //     email: "vxzcvzxcvzxc"
  //   },
  //   {
  //     id: 2,
  //     name: "Ghita",
  //     email: "vxzcvzxcvzxc"
  //   },
  //   {
  //     id: 3,
  //     name: "Ghita",
  //     email: "vxzcvzxcvzxc"
  //   }
  // ];
  }


  ngOnInit() {
    this.userService.addUser( this.user );

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
