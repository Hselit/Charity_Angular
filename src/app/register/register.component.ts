import { Component} from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  email:string='';
  password:string='';
  id:string ='';
  name:string ='';
  mobile:string ='';
  constructor(private auth : FirebaseService){}
    uregister()
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
    
  
    this.auth.uregister(this.email,this.password);
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

