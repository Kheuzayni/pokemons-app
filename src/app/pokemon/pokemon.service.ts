import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService {

  constructor (private http: HttpClient) {}

  // getPokemonList(): Pokemon[] {
  //   return POKEMONS;
  // }

  // getPokemonById(pokemonId: number): Pokemon|undefined {
  //   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  // }

    /*
        ///////////////////////API Methods
            getPokemonList(): Observable<Pokemon[]> {
              return this.http.get<Pokemon[]>('api/pokemons').pipe( //api/pokemons: route de l'api
                tap((pokemonList) => console.table(pokemonList)),         //A chaque fois on log la réponse
                catchError((error) => {                             //S'il y a Erreur on le log
                  console.log(error);
                  return of([]);                                    //retourné un tableau de pokemon vide pour empecher que l'appli crache
                })
              )
            }

            getPokemonById(pokemonId: number): Observable <Pokemon|undefined> {
              return this.http.get<Pokemon>('api/pokemonns/${pokemonId').pipe(
                tap((pokemonList) => console.table(pokemonList)),
                catchError((error) => { 
                  console.log(error);
                  return of(undefined);
                })
              )
            }
      //////////////////////API Methods
    */

  //////Des fonctions de refactoring API methods
    getPokemonList(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      )
    }

    getPokemonById(pokemonId: number): Observable <Pokemon|undefined> {
      return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
      )
    }

    //Pour la modification de pokemon afin de commniquer automatiquement avec l'API
        // updatePokemon(pokemon : Pokemon): Observable <Pokemon|undefined> {
          
        //   const httpOptions = {
        //     headers : new HttpHeaders({'content-type': 'application/json'})
        //   };

        //   return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
        //     tap((response) => this.log(response)),
        //     catchError((error) => this.handleError(error, undefined))
        //   );
        // }
    updatePokemon(pokemon : Pokemon): Observable <null> {
      
      const httpOptions = {
        headers : new HttpHeaders({'content-type': 'application/json'})
      };

      return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
      );
    }

    private log(response: Pokemon[]|Pokemon|undefined|any){
      console.table(response);
    }

    private handleError(error: Error, errorValue: any){
      console.error(error);
      return of(errorValue);
    }
  
  //////Des fonctions de refactoring API methods

  getPokemonTypeList(): string []{
      return ['Planete','Feu','Eau','Insecte','Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'combat', 'Psy'];
    }
}
