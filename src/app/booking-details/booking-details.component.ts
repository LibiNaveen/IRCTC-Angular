import { Component } from '@angular/core';
import { InputDetailsService } from '../input-details.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
  fromPlace: string = "";
  toPlace: string = "";
  date:string = "";
  general: string = ""
  classes: string = ""
  cb1: any;
  cb2: any;
  cb3: any;
  cb4: any;
  
  constructor(private details:InputDetailsService){}
  
  ngOnInit(){
    this.fromPlace = this.details.getFrom();
    this.toPlace = this.details.getTo();
    this.date = this.details.getDate();
    this.general = this.details.getGeneral();
    this.classes = this.details.getClasses();
    this.cb1 = this.details.getCb1();
    this.cb2 = this.details.getCb2();
    this.cb3 = this.details.getCb3();
    this.cb4 = this.details.getCb4();
  }
  
}
