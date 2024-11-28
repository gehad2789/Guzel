import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
 
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AngularFireModule,
    /*used in the root module (typically app. module. ts) of the Angular application to configure services, routes, and other settings that are shared across the entire application. It is responsible for providing services and configuring routes globally*/
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [],
  exports:[]
})
export class AppModule {}
