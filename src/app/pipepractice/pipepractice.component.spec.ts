import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipepracticeComponent } from './pipepractice.component';

describe('PipepracticeComponent', () => {
  let component: PipepracticeComponent;
  let fixture: ComponentFixture<PipepracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipepracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
