import { Component } from '@angular/core';
import{MatDialog} from'@angular/material/dialog';
import { CreateReciepeFormComponent } from '../create-reciepe-form/create-reciepe-form.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  reciepes= [1,1,1, 1, 1, 1,1,1,1]

  constructor(public dialog:MatDialog){

  }
  handleOpenCreateReciepeForm(){

    this.dialog.open(CreateReciepeFormComponent)
  }
}
