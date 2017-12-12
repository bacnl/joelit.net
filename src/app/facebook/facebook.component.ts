import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(private fb : FacebookService) { 
    fb.init({
      appId: '1727270377601580',
      xfbml: true,
      version: 'v2.8'
    });
  }

  ngOnInit() {
  }

  loginWithFacebook(): void {    
        this.fb.login()
         .then((response: LoginResponse) => console.log(response))
         .catch((error: any) => console.error(error));    
     }
}
