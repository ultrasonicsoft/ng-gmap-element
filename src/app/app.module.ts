import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GmapComponent } from './gmap/gmap.component';


@NgModule({
  declarations: [
    GmapComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    GmapComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(GmapComponent, { injector: this.injector });
    
    customElements.define('ng-google-map', el);
   }
 }
