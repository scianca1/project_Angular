import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaHomeComponent } from './puma-home.component';

describe('PumaHomeComponent', () => {
  let component: PumaHomeComponent;
  let fixture: ComponentFixture<PumaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
