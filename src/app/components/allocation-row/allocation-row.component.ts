import {Component, input, InputSignal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CryptoAllocation} from "../../models/crypto-allocation.model";

@Component({
  selector: 'app-allocation-row',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './allocation-row.component.html',
  styleUrl: './allocation-row.component.scss'
})
export class AllocationRowComponent {
  cryptoAllocation: InputSignal<CryptoAllocation> = input.required();

  percentage: number = 0;

}
