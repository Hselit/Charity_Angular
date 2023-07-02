import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import{routingComponents} from './app-routing.module'
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import{CalenderComponent} from './calender/calender.component'
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { ReqAmtComponent } from './req-amt/req-amt.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import{ BookEventComponent } from './book-event/book-event.component';
import { RegvolComponent } from './regvol/regvol.component';
import { DonateComponent } from './donate/donate.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { VregComponent } from './vreg/vreg.component';
import { ViewVolComponent } from './view-vol/view-vol.component';
import { DontComponent } from './dont/dont.component';


const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'volunteer',component:VolunteerComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'calender',component:CalenderComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'user-home',component:UserHomeComponent},
  {path:'user-type',component:UserTypeComponent},
  {path:'req-amt',component:ReqAmtComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'book-event',component:BookEventComponent},
  {path:'regvol',component:RegvolComponent},
  {path:'donate',component:DonateComponent},
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'view-user',component:ViewUserComponent},
  {path:'vreg',component:VregComponent},
  {path:'view-vol',component:ViewVolComponent},
  {path:'dont',component:DontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents=[UserComponent,VolunteerComponent,AdminComponent]
