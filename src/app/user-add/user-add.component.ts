import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  loading = false;
  users: User[]=[];
  newUser = this.fb.group({
    id: [],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  });
  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  add(user: User): void{
    if(!user.name.trim()&&!user.phone.trim()&&!user.email.trim()){return; }
    user.id = Math.round(Math.random()*100);
    this.userService.addUser(user)
    .subscribe(user=>{this.users.push(user)
    });
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(function a(){ alert("Thêm thành công!");}, 3000);

  }

}
