import { Component,Input,Output,OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent implements OnChanges{
  @Input() productName:string='';
  eventMessage:string='';
  @Output() productSelect:EventEmitter<string>=new EventEmitter<string>;

  ngOnChanges(): void {
    this.eventMessage=this.productName
  }

  buyProduct():void{
    this.productSelect.emit(`Product ${this.eventMessage} is added to the Cart!`)
  }
}
