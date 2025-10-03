import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyExchange } from './money-exchange';

describe('MoneyExchange', () => {
  let component: MoneyExchange;
  let fixture: ComponentFixture<MoneyExchange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyExchange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyExchange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
