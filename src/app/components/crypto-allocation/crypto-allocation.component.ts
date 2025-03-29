import { Component } from '@angular/core';
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
  allocations : CryptoAllocation[] = [];
  totalPercentage: number = 100;

  constructor() {
    this.allocations.push(new CryptoAllocation("Bitcoin", 0))
    this.allocations.push(new CryptoAllocation("Ethereum", 0))
  }

  getTotalAmount(): number {
    return this.allocations.reduce((sum, allocation) => sum + allocation.amount, 0);
  }

}
