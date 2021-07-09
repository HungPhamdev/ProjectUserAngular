import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  loading = false;
  users: User[]=[];
  user: User | undefined;
  newUser = this.fb.group({
    id: [],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  });
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public location: Location,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.users = this.userService.getUser();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user=this.users.find(e=>e.id===id);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    if(this.user){
      //this.userService.updateUser(this.user).subscribe(() => this.goBack());
      this.userService.updateUser(this.user);
      this.loading = true;
      setTimeout(() => this.loading = false, 2000);
      alert("Cập nhật thành công!");
    }
  }
  add(user: User): void{
    if(!user.name.trim()&&!user.phone.trim()&&!user.email.trim()){return; }
    user.id = Math.round(Math.random()*100);
    this.userService.addUser(user);
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
    setTimeout(function a(){ alert("Thêm thành công!");}, 3000);

  }

}
