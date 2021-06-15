import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  public user: User = {email: "", firstname: "", lastname: ""};

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private userService: UserService) {
    this.user = data;
  }

  ngOnInit(): void {
  }


  edit() {
    this.userService.update(this.user).subscribe(resp => {})
  }
}
