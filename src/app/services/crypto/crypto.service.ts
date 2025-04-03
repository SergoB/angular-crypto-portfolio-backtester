import { Injectable } from '@angular/core';
import {CryptoAsset} from "../../models/crypto-asset.model";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private CRYPTO_DATA_KEY = 'cryptoAssets'

  private cryptos: CryptoAsset[] = [];

  constructor() {
    this.load();
  }

  searchCryptosNotAllocatedByNameMatchingValue(value : string, existingAllocations: string[]) {
    return this.cryptos
      .filter(crypto =>
        !existingAllocations.includes(crypto.name.toLowerCase())
        && crypto.name.toLowerCase().includes(value.toLowerCase())
      );
  }

  getAvailableCryptos() {
    return this.cryptos;
  }

  findCryptoByName(value: string) {
    return this.cryptos.find(crypto => crypto.name.toLowerCase() === value.toLowerCase());
  }

  private save() {
    localStorage.setItem(this.CRYPTO_DATA_KEY, JSON.stringify(this.cryptos));
    console.log("crypto saved in localStorage");
  }

  private load() {
    if (typeof localStorage !== 'undefined') {
      const cryptos = localStorage.getItem(this.CRYPTO_DATA_KEY);
      if (cryptos) {
        this.cryptos = JSON.parse(cryptos);
        console.log(this.cryptos);
      } else {
        this.init();
        this.save();
      }
    } else {
      this.init();
    }
  }

  private init() {
    this.cryptos = [
      new CryptoAsset('Bitcoin'),
      new CryptoAsset('Ethereum'),
      new CryptoAsset('Solana'),
      new CryptoAsset('Cardano'),
      new CryptoAsset('Dogecoin')
    ];
  }

}
