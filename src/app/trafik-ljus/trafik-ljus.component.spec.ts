import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafikLjusComponent } from './trafik-ljus.component';

describe('TrafikLjusComponent', () => {
  let component: TrafikLjusComponent;
  let fixture: ComponentFixture<TrafikLjusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafikLjusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafikLjusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
