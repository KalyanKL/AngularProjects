import { Component } from '@angular/core';

@Component({
  selector: 'app-update-reciepe-form',
  templateUrl: './update-reciepe-form.component.html',
  styleUrl: './update-reciepe-form.component.scss'
})
export class UpdateReciepeFormComponent {
  reciepeItem:any={
    title:"",
    description:"",
    foodType:'',
    image:''
  }
}
