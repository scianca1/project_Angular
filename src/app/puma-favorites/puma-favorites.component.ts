import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Product } from '../product-list/Product';
import { ProductfavoritesService } from '../productfavorites.service';

@Component({
  selector: 'app-puma-favorites',
  templateUrl: './puma-favorites.component.html',
  styleUrls: ['./puma-favorites.component.scss']
})
export class PumaFavoritesComponent implements OnInit {

  favoritesList$: Observable<Product[]>;
  constructor(private favorites:ProductfavoritesService) { 
    // favorites.favoritesList.subscribe((observable)=>this.favoritesList=observable);
    this.favoritesList$= favorites.favoritesList.asObservable();
  }

  ngOnInit(): void {
  }

}
