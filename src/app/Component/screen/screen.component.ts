import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  isSelect!: boolean;
  delPrompt!: boolean;
  isEdit!: boolean;

  addName!: string;
  addAmount!: string;
  addEnergy!: number;
  addWeight!: number;
  index!:number

  editElement!: Model;
  itemArr: Model[] = [
    {
      name: 'Egg',
      energy: 134,
    },
    {
      name: 'Broccoli',
      energy: 25,
      weight: 100,
    },
    {
      name: 'Cheese',
      energy: 140,
      weight: 55,
    },
    {
      name: 'Bread',
      energy: 95,
    },
    {
      name: 'Coffee with Milk',
      amount: 'Cup',
    },
  ];

  day = new Date();
  hr = this.day.getHours();
  min = this.day.getMinutes();
  hour = this.hr % 12;

  Delete(i: number) {
    this.delPrompt = !this.delPrompt;
    this.itemArr.splice(i, 1);
    console.log(this.day.toLocaleTimeString());
  }

  add() {
    if (this.addName) {
      this.itemArr.push({
        name: this.addName,
        energy: this.addEnergy,
        weight: this.addWeight,
        amount: this.addAmount,
      });
      this.isSelect = !this.isSelect;
      let inp: any = document.querySelector('.inp') as HTMLFormElement;
      inp.reset();
    } else {
      alert('Enter the Name');
    }
  }

  edit( i: Model,index:number) {
    this.isEdit = true;
    this.editElement = i;
    this.index= index;
  }

  editi() {
    this.itemArr[this.index] = this.editElement;
    this.isEdit=!this.isEdit
    // this.isSelect = !this.isSelect
  }
}

export interface Model {
  name: string;
  energy?: number;
  weight?: number;
  amount?: string;
}
