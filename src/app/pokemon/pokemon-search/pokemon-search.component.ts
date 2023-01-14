import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styles: [
  ]
})
export class PokemonSearchComponent implements OnInit {

  searchTerms = new Subject<string>();

  pokemons$: Observable<Pokemon[]>;

  constructor (private router: Router, private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe (

      //Émet une notification à partir de la source Observable uniquement après qu'un laps de temps particulier s'est écoulé sans autre émission de source.
      debounceTime(300),

      //Comparaison par defaut : Par défaut, il utilise un opérateur de comparaison simple qui ne vérifie aucune clé, de sorte que les références d'objet doivent correspondre pour qu'un objet soit considéré comme identique.
      distinctUntilChanged(),
      
      //La principale différence entre switchMap et les autres opérateurs d'aplatissement est l'effet d'annulation. A chaque émission, l'observable interne précédent (le résultat de la fonction que vous avez fournie) est annulé et le nouvel observable est souscrit. Tu peux t'en souvenir
      switchMap( (term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search( term : string) {
    //Pousser le terme de recherche qu'il a tapé
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
