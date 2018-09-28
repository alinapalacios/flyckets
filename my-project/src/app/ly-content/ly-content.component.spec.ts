import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyContentComponent } from './ly-content.component';

describe('LyContentComponent', () => {
  let component: LyContentComponent;
  let fixture: ComponentFixture<LyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
