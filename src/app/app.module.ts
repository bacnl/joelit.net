import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { FacebookComponent } from './facebook/facebook.component';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
