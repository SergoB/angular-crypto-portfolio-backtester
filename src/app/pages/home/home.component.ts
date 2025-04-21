import {Component, model} from '@angular/core';
import {BacktestingResultComponent} from "../../components/backtesting-result/backtesting-result.component";
import {CryptoAllocationComponent} from "../../components/crypto-allocation/crypto-allocation.component";
import {CryptoAllocation} from "../../models/crypto-allocation.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BacktestingResultComponent,
    CryptoAllocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Crypto portfolio backtester';
  allocations  = model<CryptoAllocation[]>([]);
}
