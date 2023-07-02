import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { Donate} from '../base/adm';

@Component({
  selector: 'app-dont',
  templateUrl: './dont.component.html',
  styleUrls: ['./dont.component.css']
})
export class DontComponent {

  donList :Donate[] =[];
  donObj:Donate={
    id: '',
    name: '',
    email: '',
    address: '',
    mobile: '',
    amount: '',
    place: ''
  };
  id:string ='';
  name:string ='';
  email:string ='';
  address:string ='';
  mobile:string ='';
  amount:string='';
  constructor(private auth:FirebaseService, private data:DataService){}

  ngOnInit():void{
    this.getAllDonate();
  }

  getAllDonate(){
    this.data.getAllDonate().subscribe(res=>{
      this.donList = res.map((e:any)=>{
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
    this.address ='';
    this.mobile='';
    this.amount='';
  }

  addDonate(){
    if(this.name =='' || this.email =='' || this.mobile==''||this.address==''||this.amount==''){
      alert('Fill all the Input Feidls');
      return;
    }

    this.donObj.id='';
    this.donObj.email=this.email;
    this.donObj.name=this.name;
    this.donObj.address=this.address;
    this.donObj.mobile=this.mobile;
    this.donObj.amount=this.amount;

    this.data.addDonate(this.donObj);
    this.resetForm();
  
  }

  updateDonate(){

  }

  deleteDonate(don:Donate){
    if(window.confirm('Are you sure you want to delete '+don.name+'?')){
    this.data.deleteDonate(don);
    }
  }

  checkamt(not:any){
    console.log(not);
    if(not>=1000000){
      alert("You will be Taxable at 18%");
    }
    else{

      alert("You don't need to pay Tax")
    }
  }
  
}
