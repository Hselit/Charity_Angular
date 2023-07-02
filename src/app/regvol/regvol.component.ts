import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { Book} from '../base/adm';

@Component({
  selector: 'app-regvol',
  templateUrl: './regvol.component.html',
  styleUrls: ['./regvol.component.css']
})
export class RegvolComponent {
  name:string='';
  mobile:string='';
  day: string='';
  place:string='';

  resetForm(){
    this.name='';
    this.day='';
    this.mobile='';
    this.place='';
  }

  bookList :Book[] =[];
  bookObj:Book={
    id:'',
    name:'',
    day:'',
    place:'',
    mobile:''
  };

  constructor(private auth:FirebaseService, private data:DataService){}

  ngOnInit():void{
    this.getAllBook();
  }

  getAllBook(){
    this.data.getAllBook().subscribe(res=>{
      this.bookList = res.map((e:any)=>{
        const data =e.payload.doc.data();
        data.id =e.payload.doc.id;
        return data;
      })},err =>{
      alert("Error while Fetching the Data");
    })
  }


  addBook(){
    if(this.name =='' || this.place =='' || this.mobile==''){
      alert('Fill all the Input Fields');
      return;
    }

    this.bookObj.id='';
    this.bookObj.name=this.name;
    this.bookObj.day=this.day;
    this.bookObj.mobile=this.mobile;
    this.bookObj.place=this.place;

    this.data.addBook(this.bookObj);
    this.resetForm();
  
  }

  updateBook(){

  }

  deleteBook(bo:Book){
    if(window.confirm('Are you sure you want to delete '+bo.name+'?')){
    this.data.deleteBook(bo);
    }
  }

}
