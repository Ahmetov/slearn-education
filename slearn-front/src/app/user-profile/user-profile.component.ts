import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: User = {email: "", firstname: "", lastname: ""};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getInfo().subscribe(resp => {
      this.user = resp;
    })
  }



}
