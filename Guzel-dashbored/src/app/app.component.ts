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

  constructor() {
  }

  // async loadCategories() {
  //   const categoriesCollection = collection(this.firestore, 'categoriesdata');
  //   const snapshot = await getDocs(categoriesCollection);
  //   snapshot.forEach(doc => {
  //     console.log(doc.id, doc.data());
  //   });
  // }
}
