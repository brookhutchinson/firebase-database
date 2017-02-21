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
  // define properties
  private items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    // use AngularFire Service to request data from Firebase Database and store data inside FirebaseListObservable
    this.items = af.database.list('/items');
  }
}