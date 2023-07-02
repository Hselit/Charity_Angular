import { Component } from '@angular/core';
import{collection,addDoc,Firestore} from'@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charity';
  name:string="";
  count:boolean=true;
  di:boolean=true;
  b:boolean=true;

  func():void{
    this.di=false;
  }

  
}
