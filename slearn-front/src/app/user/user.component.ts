import {Component, OnInit} from '@angular/core';
import {Lecture} from "../model/lecture";
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import {LectureEditComponent} from "../lecture/lecture-edit/lecture-edit.component";
import {MatDialog} from "@angular/material/dialog";
import {UserEditComponent} from "./user-edit/user-edit.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];
  public user: User = {email: "", firstname: "", lastname: ""};

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  delete(id: number | undefined, index: number): void {
    if (id !== undefined) {
      this.userService.delete(id).subscribe(data => {
        this.users.splice(index, 1);
      });
    }
  }

  edit(user: User): void {
    let dialogRef = this.dialog.open(UserEditComponent, {
      height: '70%',
      width: '600px',
      data: user
    });
  }
}
