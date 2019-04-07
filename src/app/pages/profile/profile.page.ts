import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NavController} from "@ionic/angular";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  users: Observable<any>;
  userlist: any;
  stalkCount = 0;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.users= this.http.get('http://ec2-34-243-7-84.eu-west-1.compute.amazonaws.com:8080/v1/users')
    this.users.subscribe(data => {console.log('my data: ', data);})
  }

  //constructor(private usersService: UsersService) { }

  ngOnInit() {
    //this.users = this.usersService.getUsers();
  }

  checkboxClick(name) {
    if(this.userlist == undefined) {
      this.userlist = [];
    }
    if (this.userlist.includes(name)) {
      var index = this.userlist.indexOf(name);
      this.userlist.splice(index, 1);
    } else {
      this.userlist.push(name)
    }
    this.stalkCount = this.userlist.length;
  }

  stalk() {
    var toStalk = {
      followingList: []
    };

    this.userlist.map(function(item) {
      toStalk.followingList.push({
        "phoneNumber":"972508841819",
        "following": item,
        "followerName": "ronito"
      });
    });
    let add_headers =  new HttpHeaders();
    add_headers.append('Content-Type', 'application/json');
    let request = this.http.post('http://ec2-34-243-7-84.eu-west-1.compute.amazonaws.com:8080/v1/following', toStalk,
        { headers: add_headers}) .subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });

  }


}
