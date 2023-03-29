import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputDetailsService {
  fromPlace: string="";
  toPlace: string="";
  date: string="";
  general: string="";
  classes: string="";
  cb1: any;
  cb2: any;
  cb3: any; 
  cb4: any;
  setFrom(data: any){
    this.fromPlace = data
  }
  getFrom(){
    return this.fromPlace
  }

  setTo(data: any){
    this.toPlace = data
  }
  getTo(){
    return this.toPlace
  }

  setDate(data: any){
    this.date = data
  }
  getDate(){
    return this.date
  }

  
  setClasses(data: any){
    this.classes = data
  }
  getClasses(){
    return this.classes
  }

  setGeneral(data: any){
    this.general = data
  }
  getGeneral(){
    return this.general
  }

  
  setCb1(data: any){
    this.cb1 = data
  }
  getCb1(){
    return this.cb1
  }

  setCb2(data: any){
    this.cb2 = data
  }
  getCb2(){
    return this.cb2
  }

  setCb3(data: any){
    this.cb3 = data
  }
  getCb3(){
    return this.cb3
  }

  setCb4(data: any){
    this.cb4 = data
  }
  getCb4(){
    return this.cb4
  }
  constructor() { }
}
