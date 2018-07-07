import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToasterComponent } from './toaster.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
