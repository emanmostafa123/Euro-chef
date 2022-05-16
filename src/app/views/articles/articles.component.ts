import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/interfaces/chef';
import { ChefService } from 'src/app/services/chef.service';
import { chefs } from 'src/assets/mock';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  showCreateChef = false
  chefs: Chef[] = []
  links = ['new tab']
  nameOfTab : any
  showData = false
  constructor(private chefservice:ChefService) { }

  ngOnInit(): void {
    this.getChefs()
  }

  private getChefs(){
    this.chefs = this.chefservice.getPenddingChef()
  }

  onCloseCreate(){
    this.showCreateChef = false
    this.getChefs()
  }

  addTab() {
    this.links.push('new tab');
  }
 

  getItems(){
    console.log
    return this.chefs.filter((chef) => chef.Identifiant === this.links.length );

  }
}
