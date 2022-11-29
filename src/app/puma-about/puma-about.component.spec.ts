import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaAboutComponent } from './puma-about.component';

describe('PumaAboutComponent', () => {
  let component: PumaAboutComponent;
  let fixture: ComponentFixture<PumaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
