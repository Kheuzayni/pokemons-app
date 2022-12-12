import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
   template: ` <h1>Bienvenue {{ pokemonList[1] }}!</h1>`
})

export class AppComponent implements OnInit{

  pokemonList = ['pokemon1', 'pokemon2', 'pokemon3'];

  ngOnInit() {
    console.log(this.pokemonList);
    this.selectPokemon('pokemon3');
  }

  selectPokemon(pokemonName : string){
    console.log (`Vous avez cliqué sur le pokomon ${pokemonName}`);
  }
  
}