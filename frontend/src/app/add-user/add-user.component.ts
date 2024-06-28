import { Component } from '@angular/core';
import { IUser } from '../home/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user : IUser = { id : 0, name : '', email : '' };

  constructor(private userService : UserService, private router : Router) {
    
  }

  addUser() {
    this.userService.addUser(this.user).subscribe({ 
      next: () => this.router.navigate(['/home'])
    });
  }
}
