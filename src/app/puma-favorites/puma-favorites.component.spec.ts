import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaFavoritesComponent } from './puma-favorites.component';

describe('PumaFavoritesComponent', () => {
  let component: PumaFavoritesComponent;
  let fixture: ComponentFixture<PumaFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumaFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumaFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
