import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HommesComponent } from './hommes.component';

describe('HommesComponent', () => {
  let component: HommesComponent;
  let fixture: ComponentFixture<HommesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HommesComponent]
    });
    fixture = TestBed.createComponent(HommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
