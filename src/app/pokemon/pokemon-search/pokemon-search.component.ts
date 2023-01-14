import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styles: [
  ]
})
export class PokemonSearchComponent implements OnInit {

  searchTerms = new Subject<string>();

  pokemons$: Observable<Pokemon[]>;

  constructor (private router: Router) {}

  ngOnInit(): void {
    
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
