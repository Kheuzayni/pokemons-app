import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService {

  constructor (private http: HttpClient) {}

  // getPokemonList(): Pokemon[] {
  //   return POKEMONS;
  // }
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe( //api/pokemons: route de l'api
      tap((response) => console.table(response)),
      catchError((error) => {
        console.log(error);
        return of([]);        
      })
    )
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string []{
    return ['Planete','Feu','Eau','Insecte','Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'combat', 'Psy'];
  }

}
