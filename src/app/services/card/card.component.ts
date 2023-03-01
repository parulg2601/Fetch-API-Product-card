import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  cards:any;

  // constructor(private cardData: ProductDataService){
  //   cardData.cards().subscribe((data)=>{
  //     console.warn("data",data);
  //     this.cards=data
  //   });

  // }
}
