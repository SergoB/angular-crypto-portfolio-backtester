import {Component, HostListener, inject, input, InputSignal, model} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CryptoService} from "../../services/crypto/crypto.service";
import {CryptoAsset} from "../../models/crypto-asset.model";
import {CryptoAllocation} from "../../models/crypto-allocation.model";

@Component({
  selector: 'app-search-crypto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-crypto.component.html',
  styleUrl: './search-crypto.component.scss'
})
export class SearchCryptoComponent {

  cryptoService : CryptoService = inject(CryptoService);
  allocations: InputSignal<CryptoAllocation[]> = input.required();
  filteredCrypto: CryptoAsset[] = [];

  selectedCrypto= model<string>('');
  showDropdown: boolean = false;

  searchCrypto(search : string) {
    this.showDropdown = true;
    let existingAllocations = this.allocations().map(allocation => allocation.name.toLowerCase());
    this.filteredCrypto = this.cryptoService.searchCryptosNotAllocatedByNameMatchingValue(search, existingAllocations);
  }

  selectCrypto(crypto: string) {
    this.selectedCrypto.set(crypto);
    this.filteredCrypto = [];
    this.showDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-container')) {
      this.showDropdown = false;
    }
  }

}
