import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Recipie } from './recipies/recipie.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
