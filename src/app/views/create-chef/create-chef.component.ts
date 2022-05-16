import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {

  @Output() formClose = new EventEmitter()

  chefForm : FormGroup | undefined

  constructor(private builder : FormBuilder,
    private chefservice:ChefService) { }

  ngOnInit(): void {
    this.chefForm = this.builder.group({
      Reference:[''],
      Description:[''],
      Fourinisser:[''],
      Prixdachat:[''],
      Statut:[''],
      PrixPublique:['']
    })
  }

  addChef(){
    this.chefservice.createChef(this.chefForm?.value)
    this.formClose.emit()
  }
}
