import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BacktestingResultComponent} from "./components/backtesting-result/backtesting-result.component";
import {CryptoAllocationComponent} from "./components/crypto-allocation/crypto-allocation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BacktestingResultComponent, CryptoAllocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Crypto portfolio backtester';
}
