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
import { FormsModule } from '@angular/forms';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EndPageComponent } from './end-page/end-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';



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
    BookingDetailsComponent,
    PassengerdetailsComponent,
    ContactUsComponent,
    EndPageComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
