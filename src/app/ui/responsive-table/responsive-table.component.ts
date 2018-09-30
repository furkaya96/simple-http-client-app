import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../User';
import { Data } from '../../Data';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.css']
})
export class ResponsiveTableComponent implements OnInit {

  title: String = 'All Users'
  data: Data;
  users: User[];
  count: Number;
  showSpinner: Boolean = true;
  query: String = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this
      .userService
      .getUsers(this.query)
      .subscribe((data: Data) => {
        this.data = data;
        this.users = data.users;
        this.count = data.count;
        this.showSpinner = false;
      });
  }

  getMaleUsers() {
    this.title = 'Male Users';
    this.query = '?gender=male';
    this.ngOnInit();
  }

  getFemaleUsers() {
    this.title = 'Female Users';
    this.query = '?gender=female';
    this.ngOnInit();
  }

  getAllUsers() {
    this.title = 'All Users';
    this.query = '';
    this.ngOnInit();
  }

}
