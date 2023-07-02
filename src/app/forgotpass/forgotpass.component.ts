import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  email:string='';
  constructor(private auth:FirebaseService){}

  forgotpassword(){
      this.auth.forgotpassword(this.email);
      this.email='';
  }
 

}
