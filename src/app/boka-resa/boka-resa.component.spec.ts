import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokaResaComponent } from './boka-resa.component';

describe('BokaResaComponent', () => {
  let component: BokaResaComponent;
  let fixture: ComponentFixture<BokaResaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokaResaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokaResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
