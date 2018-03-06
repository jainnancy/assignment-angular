import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  password: string;
  @Output() submitName = new EventEmitter();
  user: Login = new Login('' , '' );


  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.router.navigate(['home']);
  }
}
