import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  isSelect!: boolean;
  addName!:string;
  addEnergy!:number;
  addWeight!:number;
  itemArr: Model[] = [
    {
      name: 'Egg',
      energy:134,
    },
    {
      name: 'Broccoli',
      energy:25,
      weight:100,
    },
    {
      name: 'Cheese',
      energy:140,
      weight:55,
    },
    {
      name: 'Bread',
      energy:95,

    },
    {
      name: 'Coffee with Milk',
    },
  ];

  day = new Date();
  hr = this.day.getHours();
  min = this.day.getMinutes();
  // m=this.day.
  hour = this.hr % 12;

  Delete(i:number){
    alert('Are you sure ?')
    this.itemArr.splice(i,1)
    console.log(this.day.toLocaleTimeString());

  }

  add(){
    this.itemArr.push({
      name: this.addName,
      energy:this.addEnergy,
      weight:this.addWeight,
    });
    this.isSelect = !this.isSelect;

  }
}



export interface Model {
  name: string;
  energy?: number;
  weight?:number;
}
