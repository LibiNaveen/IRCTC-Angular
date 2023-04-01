import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassengerDetailsService {
  passengerForm:any = [
    // {
    //   name: '',
    //   age: '',
    //   gender: '',
    //   loc: '',
    //   prefer: ''
    // }
  ];
  constructor() { }
  
  setPassengerDetails(arr: { name: string; age: string; gender: string; loc: string; prefer: string; }[]){
    for (let item of arr){
    this.passengerForm.push(item);
    console.log(this.passengerForm);
}
  }

getPassengerDetails(){
  return this.passengerForm;
}
}