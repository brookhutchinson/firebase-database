import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // define properties
  private logoText: string;

  constructor() {
    // set properties
    this.logoText = 'Firebase Database'
  }
}