import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSoldesComponent } from './articles-soldes.component';

describe('ArticlesSoldesComponent', () => {
  let component: ArticlesSoldesComponent;
  let fixture: ComponentFixture<ArticlesSoldesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesSoldesComponent]
    });
    fixture = TestBed.createComponent(ArticlesSoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
