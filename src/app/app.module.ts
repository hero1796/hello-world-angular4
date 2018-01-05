import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CmcGlobalComponent } from './cmc-global.component';
import { UseCliComponent } from './use-cli/use-cli.component';
import { CmcGlobalService } from  './cmc-global.service';
 
@NgModule({
  declarations: [
    AppComponent,
    CmcGlobalComponent,
    UseCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CmcGlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
