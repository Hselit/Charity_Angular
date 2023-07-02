import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { DataService } from '../data.service';
import { Request} from '../base/adm';

@Component({
  selector: 'app-req-amt',
  templateUrl: './req-amt.component.html',
  styleUrls: ['./req-amt.component.css']
})
export class ReqAmtComponent {


  acc_no:string='';
  bank_name:string='';
  acc_hold_name:string='';
  acc_mobile:string='';
  ifsc:string='';
  amount:string='';
  remarks:string='';
  
  constructor(private auth:FirebaseService, private data:DataService){}

  resetForm(){
    this.bank_name='';
    this.acc_no='';
    this.acc_hold_name='';
    this.acc_mobile='';
    this.ifsc='';
    this.amount='';
    this.remarks='';
  }

  
  ReqList :Request[] =[];
  ReqObj:Request={
    bank_name: '',
    acc_no: '',
    acc_hold_name: '',
    acc_mobile: '',
    ifsc: '',
    amount: '',
    remarks: '',
    id: ''
  };

  ngOnInit():void{
    this.getAllRequest();
  }

  getAllRequest(){
    this.data.getAllRequest().subscribe(res=>{
      this.ReqList = res.map((e:any)=>{
        const data =e.payload.doc.data();
        data.id =e.payload.doc.id;
        return data;
      })},err =>{
      alert("Error while Fetching the Data");
    })
  }

  
  addRequest(){
    if(this.acc_hold_name =='' || this.acc_no =='' || this.acc_mobile==''||this.bank_name==''||this.amount==''||this.ifsc==''){
      alert('Fill all the Input Fields');
      return;
    }

    this.ReqObj.id='';
    this.ReqObj.bank_name=this.bank_name;
    this.ReqObj.acc_hold_name=this.acc_hold_name;
    this.ReqObj.acc_no=this.acc_no;
    this.ReqObj.bank_name=this.bank_name;
    this.ReqObj.acc_mobile=this.acc_mobile;
    this.ReqObj.amount=this.amount;
    this.ReqObj.remarks=this.remarks;
    this.ReqObj.ifsc=this.ifsc;

    this.data.addRequest(this.ReqObj);
    this.resetForm();
  
  }

  updateRequest(){

  }

  deleteRequest(Req:Request){
    if(window.confirm('Are you sure you want to delete '+Req.acc_hold_name+'?')){
    this.data.deleteRequest(Req);
    }
  }
}
