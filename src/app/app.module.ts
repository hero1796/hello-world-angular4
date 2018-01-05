import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CmcGlobalComponent } from './cmc-global.component';
import { UseCliComponent } from './use-cli/use-cli.component';
import { CmcGlobalService } from  './cmc-global.service';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CmcGlobalComponent,
    UseCliComponent
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
