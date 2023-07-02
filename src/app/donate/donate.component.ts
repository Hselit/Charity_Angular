import { Component } from '@angular/core';
import{collection,addDoc,Firestore} from'@angular/fire/firestore';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  name:string='';
  address:string='';
  email:string='';
  mobile:string='';

constructor(private firestore:Firestore){}

  resetForm(){
  this.name='';
  this.address='';
  this.email='';
  this.mobile='';
  }

  addData(f:any){
    const collref = collection(this.firestore,'users');
    addDoc(collref,f.value)
    .then(()=>{
      console.log('Data Saved');
    })
    .catch((err: any)=>{
      console.log(err);
    })
  }
}






