import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { Vol } from '../base/adm';

@Component({
  selector: 'app-view-vol',
  templateUrl: './view-vol.component.html',
  styleUrls: ['./view-vol.component.css']
})
export class ViewVolComponent {
  volList :Vol[] =[];
  volObj:Vol={
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
    this.getAllVol();
  }

  getAllVol(){
    this.data.getAllVol().subscribe(res=>{
      this.volList = res.map((e:any)=>{
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

  addVol(){
    if(this.name =='' || this.email =='' || this.mobile==''||this.password==''){
      alert('Fill all the Input Feidls');
      return;
    }

    this.volObj.id='';
    this.volObj.email=this.email;
    this.volObj.name=this.name;
    this.volObj.password=this.password;
    this.volObj.mobile=this.mobile;

    this.data.addVol(this.volObj);
    this.resetForm();
  
  }

  updateVol(){

  }

  deleteVol(vol:Vol){
    if(window.confirm('Are you sure you want to delete '+vol.name+'?')){
    this.data.deleteVol(vol);
    }
  }

}
