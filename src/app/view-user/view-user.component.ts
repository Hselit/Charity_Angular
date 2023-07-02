import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { User } from '../base/adm';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  userList :User[] =[];
  userObj:User={
    id:'',
    name:'',
    email:'',
    password:'',
    mobile:''
  };
  id:string ='';
  name:string ='';
  email:string ='';
  password:string ='';
  mobile:string ='';

  constructor(private auth:FirebaseService, private data:DataService){}

  ngOnInit():void{
    this.getAllUser();
  }

  getAllUser(){
    this.data.getAllUser().subscribe(res=>{
      this.userList = res.map((e:any)=>{
        const data =e.payload.doc.data();
        data.id =e.payload.doc.id;
        return data;
      })},err =>{
      alert("Error while Fetching the Data");
    })
  }

  resetForm(){
    this.id ='';
    this.name ='';
    this.email ='';
    this.password ='';
    this.mobile='';
    
  }

  addUser(){
    if(this.name =='' || this.email =='' || this.mobile==''||this.password==''){
      alert('Fill all the Input Feidls');
      return;
    }

    this.userObj.id='';
    this.userObj.email=this.email;
    this.userObj.name=this.name;
    this.userObj.password=this.password;
    this.userObj.mobile=this.mobile;

    this.data.addUser(this.userObj);
    this.resetForm();
  
  }

  updateUser(){

  }

  deleteUser(user:User){
    if(window.confirm('Are you sure you want to delete '+user.name+'?')){
    this.data.deleteUser(user);
    }
  }
  
}
