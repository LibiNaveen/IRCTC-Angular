import { Component } from '@angular/core';
import { PassengerDetailsService } from '../passenger-details.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  passengerForm:any = [
    // {
    //   name: '',
    //   age: '',
    //   gender: '',
    //   loc: '',
    //   prefer: ''
    // }
  ];

  amount = 0;

  constructor(private passenger:PassengerDetailsService){}
  ngOnInit(){
    this.getPassenger()
  
  }
 
  getPassenger(){
    let passenger = this.passenger.getPassengerDetails();
    for (let item of passenger){
    this.passengerForm.push(item);
    this.amount += 250;
  } 
}

}


