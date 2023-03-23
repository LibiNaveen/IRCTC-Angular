import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

import { ModifyBookingFormComponent } from './modify-booking-form/modify-booking-form.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { RegisterBasicComponent } from './register-basic/register-basic.component';
import { RegisterPersonalComponent } from './register-personal/register-personal.component';
import { IndexComponent } from './index/index.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    BookingFormComponent,
    ModifyBookingFormComponent,
    RegisterAddressComponent,
    RegisterBasicComponent,
    RegisterPersonalComponent,
    IndexComponent,
    FooterContactComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
