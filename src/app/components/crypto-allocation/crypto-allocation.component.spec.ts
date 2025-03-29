import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAllocationComponent } from './crypto-allocation.component';

describe('CryptoAllocationComponent', () => {
  let component: CryptoAllocationComponent;
  let fixture: ComponentFixture<CryptoAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoAllocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
