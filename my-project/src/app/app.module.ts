import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LyHeaderComponent } from './ly-header/ly-header.component';
import { LyContentComponent } from './ly-content/ly-content.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';



@NgModule({
  declarations: [
    AppComponent,
    LyHeaderComponent,
    LyContentComponent,
    CarouselBasicComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
