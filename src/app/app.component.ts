import { Component, OnInit } from '@angular/core';3
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
   templateUrl : 'app.component.html'
})

export class AppComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon : Pokemon){
    console.log (`Vous avez cliqué sur le pokomon ${pokemon.name}`);
  }
  
}