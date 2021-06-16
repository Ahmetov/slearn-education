import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserEditComponent} from "../../user/user-edit/user-edit.component";
import {EnemySayModalComponent} from "./enemy-say-modal/enemy-say-modal.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    let dialogRef = this.dialog.open(EnemySayModalComponent, {
      height: '70%',
      width: '600px',
      data: "assets/enemy1.png"
    });
  }

}
