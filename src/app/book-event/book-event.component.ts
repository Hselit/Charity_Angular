import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { Event} from '../base/adm';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent {
  name:string='';
  mobile:string='';
  day:string='';
  place:string='';
  id:string='';

  resetForm(){
    this.name='';
    this.day='';
    this.mobile='';
    this.place='';
  }

  eveList :Event[] =[];
  eveObj:Event={
    id: '',
    name: '',
    place: '',
    mobile: '',
    day: ''
  };

  constructor(private auth:FirebaseService, private data:DataService){}

  ngOnInit():void{
    this.getAllEvent();
  }

  getAllEvent(){
    this.data.getAllEvent().subscribe(res=>{
      this.eveList = res.map((e:any)=>{
        const data =e.payload.doc.data();
        data.id =e.payload.doc.id;
        return data;
      })},err =>{
      alert("Error while Fetching the Data");
    })
  }


  addEvent(){
    if(this.name =='' || this.place =='' || this.mobile==''){
      alert('Fill all the Input Feidls');
      return;
    }

    this.eveObj.id='';
    this.eveObj.name=this.name;
    this.eveObj.day=this.day;
    this.eveObj.mobile=this.mobile;
    this.eveObj.place=this.place;

    this.data.addEvent(this.eveObj);
    this.resetForm();
  
  }

  updateEvent(){

  }

  deleteEvent(eve:Event){
    if(window.confirm('Are you sure you want to delete '+eve.name+'?')){
    this.data.deleteEvent(eve);
    }
  }
}
