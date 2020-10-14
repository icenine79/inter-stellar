import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsDetailComponent } from './mars-detail.component';

describe('MarsDetailComponent', () => {
  let component: MarsDetailComponent;
  let fixture: ComponentFixture<MarsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
