import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendancesComponent } from './tendances.component';

describe('TendancesComponent', () => {
  let component: TendancesComponent;
  let fixture: ComponentFixture<TendancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TendancesComponent]
    });
    fixture = TestBed.createComponent(TendancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
