import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl : 'app.component.html'
})

  export class AppComponent {}












// export class AppComponent implements OnInit{

//   pokemonList: Pokemon[] = POKEMONS;
//   pokemonSelected: Pokemon|undefined;

//   ngOnInit() {
//     console.table(this.pokemonList);
//    //s this.selectPokemon(this.pokemonList[0]);
//    console.log  (`Test`);
//   }

//    selectPokemon(pokemon : Pokemon){
//      console.log (`Vous avez cliqué sur le pokomon ${pokemon.name}`);
//    }

//    selectPokemonNumber(event: MouseEvent){
//      const index: number = +(event.target as HTMLInputElement).value;          //signe + permet de convertir la value en nombre
//      console.log (`Vous avez cliqué sur le pokomon ${this.pokemonList[index].name}`);
//    }
  

//   selectPokemonTrois(pokemonId: string){
//     const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);          //signe + permet de convertir la value en nombre
    
//     if (pokemon) {
//       console.log (`Vous avez cliqué sur le pokomon ${pokemon.name}`);
//       this.pokemonSelected = pokemon;
//     }else {
//       console.log (`Vous avez demandé un pokemon qui n'existe pas`);
//       this.pokemonSelected = pokemon;
//     }
//   }
  
// }