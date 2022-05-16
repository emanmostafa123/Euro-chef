import { Injectable } from '@angular/core';
import { Chef } from '../interfaces/chef';
import { chefs } from '../../assets/mock'

@Injectable({
  providedIn: 'root'
})
export class ChefService {


  private chefs : Chef[] = chefs


  constructor() { }

  getPenddingChef() : Chef[] {
    return this.chefs.filter(chef => 
      !chef.completed
      )
  }

  createChef(chef : Chef){
    chef.Identifiant = this.chefs.length + 1
    this.chefs.push(chef)
  }
}
