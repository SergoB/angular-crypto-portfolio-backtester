import {Component, computed, effect, inject, input, InputSignal, signal} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CryptoAllocation} from "../../models/crypto-allocation.model";
import {SimulationService} from "../../services/simulation/simulation.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-backtesting-result',
  standalone: true,
  templateUrl: './backtesting-result.component.html',
  imports: [
    MatTableModule,
    AsyncPipe
  ],
  styleUrl: './backtesting-result.component.scss'
})
export class BacktestingResultComponent {
  simulationService: SimulationService = inject(SimulationService);

  allocations: InputSignal<CryptoAllocation[]> = input.required();

  results = computed(() =>{
    return this.allocations().map((allocation) => ({
      position: 0,
      name: allocation.name,
      performance: this.simulationService.getCryptoPerformance(allocation.name)
    }));
  });

  displayedColumns: string[] = ['position', 'name', 'performance_percentage'];

  getCryptoPerformance(crypto : string): Observable<number> {
    return this.simulationService.getCryptoPerformance(crypto);
  }
}
