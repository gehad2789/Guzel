import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, orderBy,doc ,updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category'; // Assuming a Category model is available

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private asf: Firestore) {}

  // Method to save data to Firestore
  saveData(categoryData: any) {
    const categoriesCollection = collection(this.asf, 'category');

    // Add a new category to the Firestore collection
    addDoc(categoriesCollection, categoryData)
      .then((docRef) => {
        console.log('Category added successfully: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding category: ', error);
      });
  }

  // Method to get real-time updates for categories

  getCategories(): Observable<{ id: string, category: string }[]> {
    const categoriesCollection = collection(this.asf, 'category');

    return collectionData(categoriesCollection, { idField: 'id' }).pipe(
      map((categories: any[]) => categories.map((category) => ({
        id: category.id,
        category: category.category, // Assuming Firestore has a 'category' field
      })))
    );
  }

 
  
  

  // Alternative method using query to get sorted categories (example)
  updateData(cat:string,id:string){

  }
}



  



  

