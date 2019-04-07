import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  results: Observable<any>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  getUsers(){
    this.results = this.usersService.getUsers();
  }
}
