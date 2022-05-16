import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';
import { chefs } from 'src/assets/mock';
import { Chef } from '../../interfaces/chef';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit {

  chefs : Chef[] = []
  
  
  constructor(private chefservice:ChefService) { }

  ngOnInit(): void {
    this.getChefs()
  }

  private getChefs(){
    this.chefs = this.chefservice.getPenddingChef()
  }
  

  show(){
    console.log(chefs);
    
  }
  
 
}

