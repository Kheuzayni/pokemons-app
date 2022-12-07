import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: ` <h1>Bienvenue {{ title }}</h1>`,
  styles: []
})
export class AppComponent {
  title = 'pokemons-app';
}
