// components
import { Component }                           from '@angular/core';

// firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private af: AngularFire) {

  }
}