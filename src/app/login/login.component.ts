import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
declare function  capGenerate():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = { name: '', password: '' };
  errorMessage = '';
  captcha: any;


  constructor(private auth: AuthServiceService) {}

  ngOnInit() {
    console.log(this.captcha);
    console.log("hai");
    this.capGenerate()
    console.log(this.captcha);
}

  capGenerate(){
    console.log("hello")
    // let c = document.getElementById("myCanvas");
   
    // let ctx = (c as HTMLCanvasElement).getContext("2d");
    // ctx.font = "30px Arial";
    
        // captcha=document.getElementById("captcha");
        let uniqueCaptcha=" ";
        let character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx1234567890";
    
        for(let i=0;i<=5;i++){
            uniqueCaptcha += character.charAt(Math.random() * character.length)
        };
        console.log(uniqueCaptcha);
        this.captcha = uniqueCaptcha;
}


  onSubmit() {
    console.log(this.auth.users);
    console.log(this.formData)
    let userId = this.auth.login(this.formData.name, this.formData.password);
    if (!userId) {
      this.errorMessage = 'InValid Account!';
    } else {
      this.errorMessage = '';
      this.auth.storeToken(userId);
      this.auth.canAccess();
    }
    console.log(userId)
  }
}




