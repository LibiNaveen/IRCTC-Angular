import { Component } from '@angular/core';
import { InputDetailsService } from '../input-details.service';
import { PassengerDetailsService } from '../passenger-details.service';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent {
  fromPlace: string = "";
  toPlace: string = "";
  date: string = "";
  general: string = "";
  classes: string = "";
  isPassengersFull = false;

  passengerForm = [
    {
      name: '',
      age: '',
      gender: '',
      loc: '',
      prefer: ''
    }
  ];

  constructor(private details: InputDetailsService,private passenger:PassengerDetailsService) { }

  ngOnInit() {
    this.fromPlace = this.details.getFrom();
    this.toPlace = this.details.getTo();
    this.date = this.details.getDate();
    this.general = this.details.getGeneral();
    this.classes = this.details.getClasses();
  }

  addForm() {
    if (this.passengerForm.length == 6) {
      // document.write("Only 6 passengers allowed")
      this.isPassengersFull = true;
      return
    }
    this.passengerForm.push({
      name: '',
      age: '',
      gender: '',
      loc: '',
      prefer: ''
    })
    
  }

 setPassenger(){
 this.passenger.setPassengerDetails(this.passengerForm)
 console.log(this.passengerForm);
}

}
