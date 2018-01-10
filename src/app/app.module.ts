import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CmcGlobalComponent } from './cmc-global.component';
import { CmcGlobalService } from  './cmc-global.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
@NgModule({
  declarations: [
    AppComponent,
    CmcGlobalComponent,
    FavoriteComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CmcGlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
