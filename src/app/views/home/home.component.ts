import { Component, OnInit } from '@angular/core';
import { Chef } from 'src/app/interfaces/chef';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showCreateChef = false
  chefs: Chef[] = []

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

}
