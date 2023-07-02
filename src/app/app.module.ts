import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { AngularFireModule } from "@angular/fire/compat";
import { FirebaseService } from './service/firebase.service';
import { ReqAmtComponent } from './req-amt/req-amt.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { BookEventComponent } from './book-event/book-event.component';
import { DonateComponent } from './donate/donate.component';
import { RegvolComponent } from './regvol/regvol.component';
import { FormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewVolComponent } from './view-vol/view-vol.component';
import { VregComponent } from './vreg/vreg.component';
import { DontComponent } from './dont/dont.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    VolunteerComponent,
    AdminComponent,
    RegisterComponent,
    HomeComponent,
    CalenderComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserTypeComponent,
    ReqAmtComponent,
    ForgotpassComponent,
    BookEventComponent,
    DonateComponent,
    RegvolComponent,
    VerifyEmailComponent,
    ViewUserComponent,
    ViewVolComponent,
    VregComponent,
    DontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
  apiKey: "AIzaSyC4oScU20sW9CKYo9dj-g0IjSbM_Be2xmY",
  authDomain: "charity-123.firebaseapp.com",
  projectId: "charity-123",
  storageBucket: "charity-123.appspot.com",
  messagingSenderId: "144081565173",
  appId: "1:144081565173:web:41ef8c050dfb36e581dcbc"
  })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}