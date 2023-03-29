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
  captcha:any;


  constructor(private auth: AuthServiceService) {}

  ngOnInit() {
   this.captcha = capGenerate()
}

  onSubmit() {
    let userId = this.auth.login(this.formData.name, this.formData.password);
    if (!userId) {
      this.errorMessage = 'InValid Account!';
    } else {
      this.errorMessage = '';
      this.auth.storeToken(userId);
      this.auth.canAccess();
    }
  }
}




