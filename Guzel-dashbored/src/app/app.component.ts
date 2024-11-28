import { Component } from '@angular/core';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { environment } from './environments/environment';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
// app.component.ts
import { BrowserModule } from '@angular/platform-browser';
import { Firestore, collection,CollectionReference,FirestoreModule ,collectionData, getDocs} from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { CategoryComponent } from './category/category.component';
import { DashboredComponent } from "./dashbored/dashbored.component";
import { enviroment } from './enviroments/enviroment.prod';
// app.component.ts
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule,
    FirestoreModule, RouterOutlet, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Guzel-dashbored';


  // async loadCategories() {
  //   const categoriesCollection = collection(this.firestore, 'categoriesdata');
  //   const snapshot = await getDocs(categoriesCollection);
  //   snapshot.forEach(doc => {
  //     console.log(doc.id, doc.data());
  //   });
  // }
  items$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const coll = collection(this.firestore, 'your-collection-name');
    this.items$ = collectionData(coll);
  }
}
