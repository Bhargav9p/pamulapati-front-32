import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // Here, you can implement the logic to send the signup data to the server
    // For example, you can use Angular's HttpClient to make an HTTP POST request
    // and handle the server's response.
    // This is just a placeholder to show the basic structure.
    console.log(this.user);
  }
}
