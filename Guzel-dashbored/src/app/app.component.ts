import { Component } from '@angular/core';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { DashboredComponent } from "./dashbored/dashbored.component";
import { enviroment } from './enviroments/enviroment.prod';
import {FirestoreModule} from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
// app.component.ts
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, DashboredComponent ,FormsModule, FirestoreModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Guzel-dashbored';
  items$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const coll = collection(this.firestore, 'your-collection-name');
    this.items$ = collectionData(coll);
  }
}
