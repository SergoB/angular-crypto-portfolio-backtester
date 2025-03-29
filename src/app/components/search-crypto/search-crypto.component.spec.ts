import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCryptoComponent } from './search-crypto.component';

describe('SearchCryptoComponent', () => {
  let component: SearchCryptoComponent;
  let fixture: ComponentFixture<SearchCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
