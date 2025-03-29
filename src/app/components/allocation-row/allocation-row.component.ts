import {Component, EventEmitter, input, InputSignal, Output} from '@angular/core';
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
  totalAmount: InputSignal<number> = input.required();

  @Output() amountChanged = new EventEmitter<number>();

  notifyChangedAmount() {
    let amount = this.cryptoAllocation().amount;
    console.log(`amount of ${this.cryptoAllocation().name} changed ${amount}`);
    this.amountChanged.emit(amount);
  }

  computePercentage(): number {
    let totalAmount = this.totalAmount();
    return totalAmount === 0 ? 0 : this.cryptoAllocation().amount / totalAmount * 100;
  }

}
