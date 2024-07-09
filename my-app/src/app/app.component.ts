import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    console.log("Contructor executing...");
    this.name = "Max Ramirez"
    this.email = "mramirezcc@unsa.edu.pe";
    this.webpage = "http://unsa.edu.pe";
    this.hobbies = ["Videojuegos", "Música", "Dormir"];
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
}
