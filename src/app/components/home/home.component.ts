import {Component} from '@angular/core';
import {CryptoAllocationComponent} from "../crypto-allocation/crypto-allocation.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CryptoAllocationComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
}
