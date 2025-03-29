import {Component} from '@angular/core';
import {AllocationRowComponent} from "../allocation-row/allocation-row.component";
import {CryptoAllocation} from "../../models/crypto-allocation.model";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-crypto-allocation',
    standalone: true,
  imports: [
    AllocationRowComponent, CommonModule
  ],
    templateUrl: './crypto-allocation.component.html',
    styleUrl: './crypto-allocation.component.scss'
})
export class CryptoAllocationComponent {

  allocations: CryptoAllocation[] = [
    new CryptoAllocation("Bitcoin", 0),
    new CryptoAllocation("Ethereum", 0)
  ];

  totalPercentage: number = 100;


  getTotalAmount(): number {
    return this.allocations.reduce((sum, allocation) => sum + Number(allocation.amount), 0);
  }

  addAllocation() {
    this.allocations.push(new CryptoAllocation("", 0));
  }

}
