import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowgenComponent } from './flowgen.component';

describe('FlowgenComponent', () => {
  let component: FlowgenComponent;
  let fixture: ComponentFixture<FlowgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowgenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
