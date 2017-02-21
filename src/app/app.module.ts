// modules
import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';

// components
import { AppComponent }    from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  // modules
  imports: [ BrowserModule, FormsModule, HttpModule ],
  // components
  declarations: [ AppComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}