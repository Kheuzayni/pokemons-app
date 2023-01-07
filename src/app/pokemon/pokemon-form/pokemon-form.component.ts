import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {

  constructor(private pokemonService : PokemonService){}

  types: string[] ;

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType() {

  }

  selectType() {

  }

  onSubmit() {
    
  }



}
