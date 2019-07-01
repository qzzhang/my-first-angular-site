// src/app/app.module.ts 
// The main Angular module that registers modules and components and everything else that are 
// building blocks being put together to build our app.
// The main AppModule is our applications main place we register all the parts of this site.
// The Angular CLI automatically registers in app.module.ts, the new components created by
// `ng generate Component component-name`.
// Section `declarations` is where we put any components that we have created.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

// decorator adds the meta data to the class to tell what the class is going to use
@NgModule({
  declarations: [ // components we are importing
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [ // ES6 modules we are importing
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [], // services
  bootstrap: [AppComponent] // where to start our application
})
export class AppModule { }
