import { Component } from '@angular/core';
import {ProductDataService} from './services/product-data.service';// 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FetchAPICard';
  cards:any;

  constructor(private cardData: ProductDataService){
    cardData.cards().subscribe((data)=>{
      console.warn("data",data);
      this.cards=data
    });

  }
}
