import { Component, OnInit } from '@angular/core';
import { UserService, UserInfo } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: UserInfo[];

  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.userInfo = users);
  }

  ngOnInit() {
    this.getUsers();
  }

}
