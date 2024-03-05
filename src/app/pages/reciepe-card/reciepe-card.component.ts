import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateReciepeFormComponent } from '../update-reciepe-form/update-reciepe-form.component';

@Component({
  selector: 'app-reciepe-card',
  templateUrl: './reciepe-card.component.html',
  styleUrl: './reciepe-card.component.scss'
})
export class ReciepeCardComponent {

  constructor(public dialog:MatDialog){}

  handleOpenEditReciepeForm(){
    this.dialog.open(UpdateReciepeFormComponent)
  }
 
}
