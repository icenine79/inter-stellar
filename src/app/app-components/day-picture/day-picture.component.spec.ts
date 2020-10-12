import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPictureComponent } from './day-picture.component';

describe('DayPictureComponent', () => {
  let component: DayPictureComponent;
  let fixture: ComponentFixture<DayPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
