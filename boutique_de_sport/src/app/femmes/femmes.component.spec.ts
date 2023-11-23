import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemmesComponent } from './femmes.component';

describe('FemmesComponent', () => {
  let component: FemmesComponent;
  let fixture: ComponentFixture<FemmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FemmesComponent]
    });
    fixture = TestBed.createComponent(FemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
