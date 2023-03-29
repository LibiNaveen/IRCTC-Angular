import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
date: any;
timeDate:any;

constructor(){
setInterval(() => {
this.date = new Date();
var yy = this.date.getFullYear()
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var MM = months[this.date.getMonth()]
var dd = this.date.getDate()
var hh = this.date.getHours()
var mn = this.date.getMinutes()
var ss = this.date.getSeconds()
this.timeDate = dd + "-" + MM + "-" + yy + " " + "[" + hh + ":" + mn + ":" + ss + "]"
}, 1000);
}

}

