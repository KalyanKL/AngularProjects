import { Component } from '@angular/core';

@Component({
  selector: 'app-create-reciepe-form',
  templateUrl: './create-reciepe-form.component.html',
  styleUrl: './create-reciepe-form.component.scss'
})
export class CreateReciepeFormComponent {

  reciepeItem:any={
    title:"",
    description:"",
    foodType:'',
    image:''
  }

  onSubmit(){
    console.log("values",this.reciepeItem)
  }
}
