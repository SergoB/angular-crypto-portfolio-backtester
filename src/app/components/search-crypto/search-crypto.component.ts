import {Component, computed, inject, input, InputSignal, model, ModelSignal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CryptoService} from "../../services/crypto/crypto.service";
import {CryptoAsset} from "../../models/crypto-asset.model";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {CryptoAllocation} from "../../models/crypto-allocation.model";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-search-crypto',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormField, MatInput, MatLabel, MatAutocompleteTrigger, ReactiveFormsModule, MatAutocomplete, MatOption],
  templateUrl: './search-crypto.component.html',
  styleUrl: './search-crypto.component.scss'
})
export class SearchCryptoComponent {
  cryptoService : CryptoService = inject(CryptoService);
  selectedCrypto: ModelSignal<string> = model('');
  cryptoCtrl= new FormControl(this.selectedCrypto());
  cryptos: CryptoAsset[];
  filteredCrypto$: Observable<CryptoAsset[]>;

  allocations: InputSignal<CryptoAllocation[]> = input.required();
  availableCryptos = computed(() => {
    let alreadyAllocated = this.allocations().map(alloc => alloc.name);
    return this.cryptos.filter(crypto => !alreadyAllocated.includes(crypto.name));
  })

  constructor() {
    this.cryptos = this.cryptoService.getAvailableCryptos();
    this.filteredCrypto$ = this.cryptoCtrl.valueChanges.pipe(
      startWith(''),
      map(crypto =>
        crypto ? this._filterCryptos(crypto) : this.availableCryptos().slice()
      )
    );
  }

  private _filterCryptos(value: string): CryptoAsset[] {
    return this.availableCryptos().filter(crypto =>
      crypto.name.toLowerCase().includes(value.toLowerCase()));
  }

  onCryptoSelected(value: string) {
    this.selectedCrypto.set(value);
  }


}
