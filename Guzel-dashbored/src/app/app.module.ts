import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth'; // Optional for Firebase Authentication
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FirestoreModule} from '@angular/fire/firestore';

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
    AngularFireModule
   
  ],
  providers: [],
  bootstrap: [],
  exports:[]
})
export class AppModule {}
