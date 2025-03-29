import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktestingResultComponent } from './backtesting-result.component';

describe('BacktestingResultComponent', () => {
  let component: BacktestingResultComponent;
  let fixture: ComponentFixture<BacktestingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktestingResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacktestingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
