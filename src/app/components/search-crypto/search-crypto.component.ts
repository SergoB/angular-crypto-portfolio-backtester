import {Component, model} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-crypto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-crypto.component.html',
  styleUrl: './search-crypto.component.scss'
})
export class SearchCryptoComponent {

  cryptos = ['Bitcoin', 'Ethereum', 'Solana'];
  filteredCrypto: string[] = [];

  selectedCrypto= model<string>('');
  showDropdown: boolean = false;

  searchCrypto(search : string) {
    this.showDropdown = true;
    this.filteredCrypto = this.cryptos.filter(crypto => crypto.toLowerCase().includes(search.toLowerCase()));
  }


  selectCrypto(crypto: string) {
    this.selectedCrypto.set(crypto);
    this.filteredCrypto = [];
    this.showDropdown = false;
  }

}
