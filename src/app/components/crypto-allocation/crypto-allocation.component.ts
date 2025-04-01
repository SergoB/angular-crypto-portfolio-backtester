import {Component} from '@angular/core';
import {AllocationRowComponent} from "../allocation-row/allocation-row.component";
import {CryptoAllocation} from "../../models/crypto-allocation.model";
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
    selector: 'app-crypto-allocation',
    standalone: true,
  imports: [
    AllocationRowComponent, CommonModule, MatButton, MatCardModule
  ],
    templateUrl: './crypto-allocation.component.html',
    styleUrl: './crypto-allocation.component.scss'
})
export class CryptoAllocationComponent {

  allocations: CryptoAllocation[] = [];

  totalPercentage: number = 100;


  getTotalAmount(): number {
    return this.allocations.reduce((sum, allocation) => sum + Number(allocation.amount), 0);
  }

  addAllocation() {
    this.allocations.push(new CryptoAllocation("", 0));
  }

}
