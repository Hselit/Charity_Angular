import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-vreg',
  templateUrl: './vreg.component.html',
  styleUrls: ['./vreg.component.css']
})
export class VregComponent {
  email:string='';
  password:string='';
  id:string ='';
  name:string ='';
  mobile:string ='';
  constructor(private auth : FirebaseService){}
    vregister()
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
    
  
    this.auth.vregister(this.email,this.password);
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
