import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export interface StocksInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: string[]) {
    return this.http.get<Array<StocksInterface>>(`${service}/stocks/snapshot?symbols=${symbols.join()}`)
  }
}
