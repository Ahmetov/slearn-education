import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user";
import {MatDialog} from "@angular/material/dialog";
import {UserEditComponent} from "../user/user-edit/user-edit.component";
import {UserProfileEditComponent} from "./user-profile-edit/user-profile-edit.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: User = {email: "", firstname: "", lastname: ""};

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getInfo().subscribe(resp => {
      this.user = resp;
    })
  }


  edit(): void {
    let dialogRef = this.dialog.open(UserProfileEditComponent, {
      height: '70%',
      width: '600px',
      data: this.user
    });
  }
}
