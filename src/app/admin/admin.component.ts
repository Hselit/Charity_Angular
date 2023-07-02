import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  email:string='';
  password:string='';

  constructor(private auth : FirebaseService){}
    alogin()
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
    
    this.auth.alogin(this.email,this.password);
    this.email ='';
    this.password ='';
  }

  resetForm(){
    
    this.email ='';
    this.password ='';
    
  }

}
