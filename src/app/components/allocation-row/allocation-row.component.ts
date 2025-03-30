import {Component, computed, input, InputSignal, model} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CryptoAllocation} from "../../models/crypto-allocation.model";
import {SearchCryptoComponent} from "../search-crypto/search-crypto.component";

@Component({
    selector: 'app-allocation-row',
    standalone: true,
  imports: [
    FormsModule,
    SearchCryptoComponent
  ],
    templateUrl: './allocation-row.component.html',
    styleUrl: './allocation-row.component.scss'
})
export class AllocationRowComponent {
  cryptoAllocation = model.required<CryptoAllocation>();

  totalAmount: InputSignal<number> = input.required();

  percentage = computed(() => {
    let totalAmount = this.totalAmount();
    let percentage = totalAmount === 0 ? 0 : this.cryptoAllocation().amount / totalAmount * 100
    return Number(percentage.toFixed(2));
  })

  updateCryptoName(cryptoName: string) {
    this.cryptoAllocation().name = cryptoName;
  }
}
