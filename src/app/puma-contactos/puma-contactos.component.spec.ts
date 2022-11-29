import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaContactosComponent } from './puma-contactos.component';

describe('PumaContactosComponent', () => {
  let component: PumaContactosComponent;
  let fixture: ComponentFixture<PumaContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumaContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
