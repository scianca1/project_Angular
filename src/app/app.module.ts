import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { PumaHomeComponent } from './puma-home/puma-home.component';
import { PumaAboutComponent } from './puma-about/puma-about.component';
import { PumaFavoritesComponent } from './puma-favorites/puma-favorites.component';
import { PumaContactosComponent } from './puma-contactos/puma-contactos.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PumaHomeComponent,
    PumaAboutComponent,
    PumaFavoritesComponent,
    PumaContactosComponent,
    InputNumberComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
