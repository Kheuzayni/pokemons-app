import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;
  redirectUrl: string;
  constructor() { }

  login (){}

  logout(){
    this.isLogged = false;
  }
}
