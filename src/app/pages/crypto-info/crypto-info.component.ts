import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CryptoService} from "../../services/crypto/crypto.service";
import {CryptoAsset} from "../../models/crypto-asset.model";

@Component({
  selector: 'app-crypto-info',
  standalone: true,
  imports: [],
  templateUrl: './crypto-info.component.html',
  styleUrl: './crypto-info.component.scss'
})
export class CryptoInfoComponent implements OnInit{

  cryptoService : CryptoService = inject(CryptoService);

  private route = inject(ActivatedRoute);

  crypto = signal<CryptoAsset | undefined>(undefined);

  ngOnInit() : void {
    const cryptoName = this.route.snapshot.params['name'];
    console.log(`Found in param ${cryptoName}`);
    if(cryptoName) {
      this.crypto.set(this.cryptoService.findCryptoByName(cryptoName));
    }
    console.log(this.crypto());
  }
}
