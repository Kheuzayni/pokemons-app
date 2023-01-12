export class Pokemon {
    name: string;
    hp: number;
    cp: number;    
    picture: string;
    types: string[];
    created: Date;

    constructor (
      name: string = 'Enter name....',
      hp: number = 100,
      cp: number = 10, 
      picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png', 
      types: string[]= ['normal'],
      created: Date = new Date(),
      )
    {
      this.name = name;
      this.hp = hp;
      this.cp = cp;
      this.picture = picture;
      this.types = types;
      this.created = created;
    }
  }