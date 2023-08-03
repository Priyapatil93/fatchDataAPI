import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { UsermasterService } from 'usermaster.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
userlist:any;
constructor(private http:HttpClient){
  
  this.userlist=[];
}

ngOnInit():void{
 this.getuserlist()
}

 getuserlist(){
  this.http.get('https://gorest.co.in/public/v2/users').subscribe((result:any)=>
  {
    this.userlist=result;
  
  });
 
  
}
selecteduser?: any;
onSelect(user: any): void {
  this.selecteduser = user;
}
}