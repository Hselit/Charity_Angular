import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent {
  email:string='';
  password:string='';

  constructor(private auth : FirebaseService){}
    vlogin()
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
    
    this.auth.vlogin(this.email,this.password);
    this.email ='';
    this.password ='';
  }

  resetForm(){
    this.email ='';
    this.password ='';
  }
}