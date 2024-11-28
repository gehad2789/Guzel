import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //call it when category-npm i ngx=toasterform is valid 
  constructor(private asf: Firestore,private toastr:ToastrService) {}

  saveData(categoryData: any) {
    const categoriesCollection = collection(this.asf, 'category');

    // Add a new category
    addDoc(categoriesCollection, categoryData)
      .then((docRef) => {
        console.log('Category added successfully: ', docRef.id);
        this.toastr.success('data added succsesfully')
      })
      .catch((error) => {
        console.error('Error adding category: ', error);
      });
  }
}
