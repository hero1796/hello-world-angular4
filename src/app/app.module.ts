import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CmcGlobalComponent } from './cmc-global.component';
import { UseCliComponent } from './use-cli/use-cli.component';
import { CmcGlobalService } from  './cmc-global.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component'
@NgModule({
  declarations: [
    AppComponent,
    CmcGlobalComponent,
    UseCliComponent,
    FavoriteComponent
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
