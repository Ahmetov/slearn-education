import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    passwordRepeat: "",
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registration(): void {
    this.authService.registration(this.user).subscribe(data => {
      this.router.navigate(['/login'])
    });
  }
}
