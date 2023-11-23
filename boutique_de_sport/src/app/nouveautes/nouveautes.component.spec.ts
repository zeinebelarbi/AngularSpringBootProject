import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveautesComponent } from './nouveautes.component';

describe('NouveautesComponent', () => {
  let component: NouveautesComponent;
  let fixture: ComponentFixture<NouveautesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveautesComponent]
    });
    fixture = TestBed.createComponent(NouveautesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
