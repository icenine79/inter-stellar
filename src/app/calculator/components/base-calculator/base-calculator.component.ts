import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-calculator',
  templateUrl: './base-calculator.component.html',
  styleUrls: ['./base-calculator.component.scss']
})
export class BaseCalculatorComponent implements OnInit {
  inp1: number;
  inp2: number;
  result: number;
  symbol: string;
  count: number = 0; //init to prevent NaN output

  ngOnInit() {}

  reset() {
    this.inp1 = +"";
    this.inp2 = +"";
  }

  calculation(inp1, inp2, symbol) {
    this.count++;
    this.inp1 = inp1;
    this.inp2 = inp2;
    this.symbol = symbol;
    switch (symbol) {
      case "+": {
        this.result = inp1 + inp2;
        break;
      }
      case "-": {
        this.result = inp1 - inp2;
        break;
      }
      case "*": {
        this.result = inp1 * inp2;
        break;
      }
      case "/": {
        this.result = inp1 / inp2;
        break;
      }
      default: {
        this.result = 0;
        break;
      }
    }
  }
}
