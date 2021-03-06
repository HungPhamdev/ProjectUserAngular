import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  newUser = this.fb.group({
    id: [],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  });
  constructor(private userService: UserService, private fb: FormBuilder) { }

  getUsers(): void{
    this.userService.getUser();
  }

  ngOnInit(): void {
    this.users=this.userService.getUser();
    this.getUsers();
  }

  add(user: User): void{
    if(!user.name.trim()&&!user.phone.trim()&&!user.email.trim()){return; }
    user.id = Math.round(Math.random()*100);
    this.userService.addUser(user);
  }

  delete(index: number): void{
    this.userService.deleteUser(index);
  }

}
