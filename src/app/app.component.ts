import { Component } from '@angular/core';
import { User } from './users/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User={
    id:1,
    name:"God Dev",
    phone:"0328858916",
    email:"devgod@gmail"
  }
}
