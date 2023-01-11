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
      tap((pokemonList) => console.table(pokemonList)),         //A chaque fois on log la réponse
      catchError((error) => {                             //S'il y a Erreur on le log
        console.log(error);
        return of([]);                                    //retourné un tableau de pokemon vide pour empecher que l'appli crache
      })
    )
  }

  // getPokemonById(pokemonId: number): Pokemon|undefined {
  //   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  // }

  getPokemonById(pokemonId: number): Observable <Pokemon|undefined> {
    return this.http.get<Pokemon>('api/pokemonns/${pokemonId').pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => { 
        console.log(error);
        return of(undefined);
      })
    )
  }

  getPokemonTypeList(): string []{
    return ['Planete','Feu','Eau','Insecte','Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'combat', 'Psy'];
  }

}
