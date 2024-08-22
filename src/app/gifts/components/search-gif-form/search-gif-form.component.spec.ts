import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGifFormComponent } from './search-gif-form.component';

describe('SearchGifFormComponent', () => {
  let component: SearchGifFormComponent;
  let fixture: ComponentFixture<SearchGifFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchGifFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
