import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMovieComponent } from './base-movie.component';

describe('BaseMovieComponent', () => {
  let component: BaseMovieComponent;
  let fixture: ComponentFixture<BaseMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
