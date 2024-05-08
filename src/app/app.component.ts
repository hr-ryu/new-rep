import { Component } from '@angular/core';
// import { HeroesComponent } from './heroes/heroes.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour-of-Heroes';
}
