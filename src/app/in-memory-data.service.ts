import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const users=[
      {id:1,name:"Phạm Lý Hùng",phone:"0328858916", email:"lyhung102@gmail.com"},
      {id:2,name:"Nguyễn Viết Văn",phone:"0513532854", email:"vietvan@gmail.com"},
      {id:3,name:"Võ Hoàng Thanh",phone:"0975421589", email:"thanhvt@gmail.com"},
      {id:4,name:"Lý Thị A",phone:"0856565333", email:"lythi102@gmail.com"},
      {id:5,name:"Trần Yến B",phone:"0932777646", email:"tranyen102@gmail.com"},
      {id:5,name:"Hoàng Thị C",phone:"0268005888", email:"hoangthi@gmail.com"},
      {id:6,name:"Nguyễn Văn D",phone:"0808006440", email:"nguyenvan@gmail.com"},
      {id:7,name:"Hứa Mỹ E",phone:"0973112995", email:"huamy@gmail.com"},
      {id:8,name:"Phạm Văn G",phone:"0322251467", email:"phamvan@gmail.com"},
      {id:9,name:"Lê Thị I",phone:"0123458916", email:"lethi@gmail.com"},
      {id:10,name:"Đinh Văn P",phone:"0868858916", email:"dinhvan@gmail.com"}
    ];
    return {users};
  }

  genId(users: User[]): number{
    return users.length > 0 ? Math.max(...users.map(user=> user.id)) + 1 : 10;
  }
  constructor() { }
}
