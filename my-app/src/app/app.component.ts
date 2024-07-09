import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  name: String;
  email: String;
  webpage: String;
  hobbies: String[];

  constructor(){
    console.log("Contructor executing...");
    this.name = "Max Ramirez"
    this.email = "mramirezcc@unsa.edu.pe";
    this.webpage = "http://unsa.edu.pe";
    this.hobbies = ["Videojuegos", "Música", "Dormir"];
  }

  showHobbies(){
    return true;
  }
}
