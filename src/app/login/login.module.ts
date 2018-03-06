import {NgModule} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './login.routes';

@NgModule({

  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [HomeComponent],
  providers: [],
  bootstrap: []
})
export class LoginModule {
}
