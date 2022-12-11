import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
   template: ` <h1>Bienvenue {{ pokemonList[1] }}!</h1>`
})

export class AppComponent implements OnInit{

  pokemonList = ['pokemon1', 'pokemon2', 'pokemon3'];

  ngOnInit() {
    console.log(this.pokemonList);
  }
  
}