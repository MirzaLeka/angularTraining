import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars = [
    {name: 'Golf', age: 1994 },
    {name: 'Ford', age: 1995 },
    {name: 'Mazda', age: 1996 },
    {name: 'Hyundai', age: 1997 },
    {name: 'Ferrari', age: 1998 },
    {name: 'Polo', age: 1999 },
    {name: 'Yugo', age: 1945 },
    {name: 'Hummer', age: 2000 },
    {name: 'Renault', age: 1999 }
  ]
  

}
