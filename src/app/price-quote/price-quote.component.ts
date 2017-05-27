import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode:string = 'TOT'
  price: number;
  @Output('lastPriceNAME')
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();
  constructor() {
    setInterval(()=>{
      let priceQuote : PriceQuote = new PriceQuote(this.stockCode,100*Math.random());
      this.price=priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote)
    },1000)

  }

  ngOnInit() {
  }

}
export class PriceQuote{
  constructor(
    public  stockCode: string,
    public lastPrice: number
  ){

  }
}
