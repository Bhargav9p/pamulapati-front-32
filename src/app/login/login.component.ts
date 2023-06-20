import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  
  constructor() { }

  ngOnInit() {    
    }
    onSubmit() {
      // Here, you can implement the logic to authenticate the user
      // For example, you can use Angular's HttpClient to make an HTTP POST request
      // to your server with the login credentials and handle the server's response.
      // This is just a placeholder to show the basic structure.
      console.log(this.user);
    }
}
