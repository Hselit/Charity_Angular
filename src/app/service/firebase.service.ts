import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
	 constructor(private fireauth :AngularFireAuth,private router : Router){}

	 ulogin(email:string,password:string){
		this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
			localStorage.setItem('token','true');
			this.router.navigate(['/user-home']);

			if(res.user?.emailVerified ==true){
				password="123456";
				this.router.navigate(['user-home']);
			}
			else{
				this.router.navigate(['/user-home']);
			}
		}, err=>{
			alert("Something went wrong")
			this.router.navigate(['/user']);
		})
	 }

	 vlogin(email:string,password:string){
		this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
			localStorage.setItem('token','true');
			this.router.navigate(['/home']);

			if(res.user?.emailVerified ==true){
				password="123456";
				this.router.navigate(['/home']);
			}
			else{
				this.router.navigate(['/home']);
			}
		}, err=>{
			alert("Something went wrong")
			this.router.navigate(['/vol']);
		})
	 }

	 alogin(email:string,password:string){
		this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
			localStorage.setItem('token','true');
			this.router.navigate(['/admin-home']);

			if(res.user?.emailVerified ==true){
				password="123456";
				this.router.navigate(['home']);
			}
			else{
				this.router.navigate(['/verify-email']);
			}
		}, err=>{
			alert("Something went wrong")
			this.router.navigate(['/vol']);
		})
	 }


	 uregister(email:string,password:string){
		this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
			alert("Registered Successfully");
			this.router.navigate(['/login']);
			this.sendEmailForVerification(res.user);
		},err=>{
			alert(err.message);
			this.router.navigate(['/register']);
		})
	 }

	 vregister(email:string,password:string){
		this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
			alert("Registered Successfully");
			this.router.navigate(['/login']);
			this.sendEmailForVerification(res.user);
		},err=>{
			alert(err.message);
			this.router.navigate(['/register']);
		})
	 }


	 ulogout(){
		this.fireauth.signOut().then(() =>{
			localStorage.removeItem('token');
			this.router.navigate(['/user']);
		},err=>{
			alert(err.message);
		})
	 }

	 vlogout(){
		this.fireauth.signOut().then(() =>{
			localStorage.removeItem('token');
			this.router.navigate(['/vol']);
		},err=>{
			alert(err.message);
		})
	 }


	 forgotpassword(email:string){
		this.fireauth.sendPasswordResetEmail(email).then(()=>{
			this.router.navigate(['/verify-email'])
		},err=>{
			alert("Somrthing Went Wrong");
		})
	 }

	 sendEmailForVerification(user:any){
		user.sendEmailForVerification().then((res:any)=>{
			this.router.navigate(['/verify-email']);
		},(err:any)=>{
			alert('Something Went Wrong...Not able to Send Mail to your email');
		})
	 }


}
