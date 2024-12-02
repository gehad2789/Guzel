import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Firestore, collection, addDoc, doc } from '@angular/fire/firestore';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryArray: { id: string, category: string }[] = []; // Array of objects with 'id' and 'category'
  formdata: any = {}; // Define and initialize the formdata property

  constructor(private firestore: Firestore, private categoryservice: CategoriesService) {}

  ngOnInit(): void {
    this.categoryservice.getCategories().subscribe(val => {
      this.categoryArray = val;
      console.log(this.categoryArray);
    });
  }

  // Send entered data to Firestore
  onSubmit(formdata: NgForm) { // all data about form
    // Generate a unique ID using the doc function
    const newDocRef = doc(collection(this.firestore, 'category'));
    let categoryData: Category = {
      category: formdata.value.category || '', // Ensure category is not undefined
      id: newDocRef.id // Use the generated ID
    };

    console.log(categoryData.category); // return {category: 'hader'} to access the value [hader only use .category]

    // Subcollection to save inside document
    let sub_categoryData = {
      subcategory: "subcategory1",
    };

    // Call service
    this.categoryservice.saveData(categoryData);

    // Uncomment and use the following code if you want to add subcategories directly in this method
    // const categoriesCollection = collection(this.firestore, 'category');
    // addDoc(categoriesCollection, categoryData)
    //   .then((docRef) => {
    //     console.log('Category added successfully: ', docRef.id);
    //     const subcategoriesCollection = collection(docRef, 'subcategories');
    //     addDoc(subcategoriesCollection, sub_categoryData)
    //       .then(() => console.log('Subcategory added successfully'))
    //       .catch(error => console.error('Error adding subcategory: ', error));
    //   })
    //   .catch(error => console.error('Error adding category: ', error));
  }
}
