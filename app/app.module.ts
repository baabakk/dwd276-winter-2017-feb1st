import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { PersonRowComponent } from './person-row/person-row.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    PersonRowComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
