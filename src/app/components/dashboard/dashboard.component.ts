import { Component, OnInit } from '@angular/core';
import { StocksInterface, StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stocks: Array<StocksInterface> = [];
  symbols: Array<string> = [];

  constructor(private service: StocksService) {
    this.symbols = service.get()
  }


  ngOnInit(): void {
    this.service.load(this.symbols).subscribe(s => this.stocks = s);
  }

}
