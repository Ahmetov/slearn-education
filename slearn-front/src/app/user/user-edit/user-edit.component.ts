import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: User = {email: "", firstname: "", lastname: ""};

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private userService: UserService) {
    this.user = data;
  }

  ngOnInit(): void {
  }

  registration() {
    this.userService.update(this.user).subscribe(resp => {

    })
  }
}
