import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {NavController} from "@ionic/angular";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  users: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.users= this.http.get('http://ec2-34-243-7-84.eu-west-1.compute.amazonaws.com:8080/v1/users')
    this.users.subscribe(data => {console.log('my data: ', data);})
  }

  //constructor(private usersService: UsersService) { }

  ngOnInit() {
    //this.users = this.usersService.getUsers();
  }


}
