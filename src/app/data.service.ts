import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Donate, User, Vol,Request,Event, Book } from './base/adm';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  addUser(user : User){
    user.id=this.afs.createId();
    return this.afs.collection('/user').add(user);
  }

  getAllUser(){
    return this.afs.collection('/user').snapshotChanges();
  }

  deleteUser(user : User){
    return this.afs.doc('/user/'+user.id).delete();
  }

  updateUser(user:User){
    this.deleteUser(user);
    this.addUser(user);
  }

  addVol(vol : Vol){
    vol.id=this.afs.createId();
    return this.afs.collection('/volunteer').add(vol);
  }

  getAllVol(){
    return this.afs.collection('/volunteer').snapshotChanges();
  }

  deleteVol(vol : Vol){
    return this.afs.doc('/volunteer/'+ vol.id).delete();
  }

  updateVol(vol:Vol){
    this.deleteVol(vol);
    this.addVol(vol);
  }

  getAllDonate(){
    return this.afs.collection('/donate').snapshotChanges();
  }

  addDonate(dont : Donate){
    dont.id=this.afs.createId();
    return this.afs.collection('/donate').add(dont);
  }

  deleteDonate(dont : Donate){
    return this.afs.doc('/donate/'+dont.id).delete();
  }

  updateDonate(dont:Donate){
    this.deleteDonate(dont);
    this.addDonate(dont);
  }

  getAllRequest(){
    return this.afs.collection('/request').snapshotChanges();
  }

  addRequest(Req : Request){
    Req.id=this.afs.createId();
    return this.afs.collection('/request').add(Req);
  }

  deleteRequest(Req : Request){
    return this.afs.doc('/request/'+Req.id).delete();
  }

  updateRequest(Req:Request){
    this.deleteRequest(Req);
    this.addRequest(Req);
  }

  
  getAllEvent(){
    return this.afs.collection('/event').snapshotChanges();
  }

  addEvent(eve : Event){
    eve.id=this.afs.createId();
    return this.afs.collection('/event').add(eve);
  }

  deleteEvent(eve : Event){
    return this.afs.doc('/event/'+eve.id).delete();
  }

  updateEvent(eve:Event){
    this.deleteEvent(eve);
    this.addEvent(eve);
  }

  getAllBook(){
    return this.afs.collection('/book').snapshotChanges();
  }

  addBook(bo : Book){
    bo.id=this.afs.createId();
    return this.afs.collection('/book').add(bo);
  }

  deleteBook(bo : Book){
    return this.afs.doc('/book/'+bo.id).delete();
  }

  updateBook(bo:Book){
    this.deleteBook(bo);
    this.addBook(bo);
  }
}
