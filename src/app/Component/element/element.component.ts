import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Model } from '../screen/screen.component';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
 @Input() Item!:Model;
 @Output() delete = new EventEmitter();

 Delete(){
  this.delete.emit(this.Item)
 }

}
