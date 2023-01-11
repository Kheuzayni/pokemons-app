import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon

  constructor(
    private pokemonService : PokemonService,
    private router: Router
    ){}

  types: string[] ;

  ngOnInit() {
    //initialisation à tous les pokemons disponible dans le projet
    this.types = this.pokemonService.getPokemonTypeList();
  }

  //Vérifier si un pokemon a un type ou pas ce qui permet de cocher les cases à l'initialisation du formulaire
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  //Mise à jour avec l'interaction des cases à coché
  selectType($event: Event, type:string) {
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    }else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  //Cocheer les cases
  isTypesValid(type : string) : boolean {

    if (this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

//Soumettre le formulaire et le rediriger vers le pokemon modifié
  //Avant l'api
  // onSubmit() {
  //   console.log('formulaire soumis');
  //   this.router.navigate(['/pokemon', this.pokemon.id]);
  // }

  //Avec l'api
  onSubmit() {
    this.pokemonService.updatePokemon(this.pokemon).
    subscribe(() =>  this.router.navigate(['/pokemon', this.pokemon.id]));
    
  }



}
