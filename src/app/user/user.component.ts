import { Component, OnInit} from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { User } from '../base/adm';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  id:string ='';
  name:string ='';
  mobile:string ='';
  b: boolean=true;
  email:string='';
  password:string='';
  constructor(private auth : FirebaseService){}
    ulogin()
    {
      if(this.email == '')
      {
        alert("Pleas Enter your Email");
        return;
      }
      if(this.password == '')
      {
        alert('Please Enter your Password');
        return;
      }
    
    this.auth.ulogin(this.email,this.password);
    this.email ='';
    this.password ='';
  }
  resetForm(){
    this.id ='';
    this.name ='';
    this.email ='';
    this.password ='';
    this.mobile='';
  }
}

