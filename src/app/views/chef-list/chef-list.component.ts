import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';
import { Chef } from '../../interfaces/chef';

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

  

}
