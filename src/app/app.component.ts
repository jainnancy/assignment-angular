import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public email: string;
  public password: string;

  ngOnInit() {
  }

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }
}
