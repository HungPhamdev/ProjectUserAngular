import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  loading = false;
  user: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  getUser(): void{
    const id=parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(id).subscribe(user=>this.user=user);
  }

  ngOnInit(): void {
    this.getUser();
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    if(this.user){
      this.userService.updateUser(this.user).subscribe(() => this.goBack());
      this.loading = true;
      setTimeout(() => this.loading = false, 2000);
      alert("Cập nhật thành công!");
    }
  }

}
