import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent {
  pokemonList : Pokemon[];
  pokemon : Pokemon|undefined;

//Injecter method ActivatedRoute pour rendre le service route disponible dans le composnat
  constructor(
    private route : ActivatedRoute, 
    private router : Router,
    private pokemonService: PokemonService
    ){}

  ngOnInit(){
//Recupérer l'id recherché par le user
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id');

//Si l'id recherché se trouve dans la liste des pokemons alors on l'attriibue au pokemmon qui le correspondant
    if (pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }   

  }

  goToPokomenList(){
    this.router.navigate(['/pokemons']);
    }

}
