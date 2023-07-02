import { Component ,EventEmitter,Input,Output} from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() isLogout = new EventEmitter<boolean>();
  constructor(public firebaseService: FirebaseService){}
  
  ngOnInit():void{

  }

  logout(){
    
    this.isLogout.emit()
  }
  
}
