import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details = [];

  constructor(private service: HomeService, private router: Router) {
  }

  ngOnInit() {
    this.getVideoDetailFromService();
  }

  getVideoDetailFromService() {
    this.service.getVideoDetails().subscribe((details: any) => {
      this.details = details.items;
      },
      err => {
      console.log('error!!!');
      },
      () => {
      console.log('complete!!!');
      }
    );
  }
}
