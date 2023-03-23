import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
date: any;
timeDate = "abc";
// date = new Date();


dateTime(){
var date = new Date();
var yy = this.date.getFullYear()
var day = this.date.getDay()
var hh = this.date.getHours()
var mn = this.date.getMinutes()
var ss = this.date.getSeconds()
this.timeDate = "[" + hh + ":" + mn + ":" + ss + "]"
// document.write(timeDate)
}
ngOnInit(){
  setInterval(this.dateTime, 0);
}

}
