import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeComponent } from './refree.component';

describe('RefreeComponent', () => {
  let component: RefreeComponent;
  let fixture: ComponentFixture<RefreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
