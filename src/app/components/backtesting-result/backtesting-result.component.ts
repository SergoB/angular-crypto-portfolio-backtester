import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-backtesting-result',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './backtesting-result.component.html',
  styleUrl: './backtesting-result.component.scss'
})
export class BacktestingResultComponent {

}
