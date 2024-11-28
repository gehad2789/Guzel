import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Firestore, collection, addDoc,doc } from '@angular/fire/firestore';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

// import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  formdata: any = {}; // Define and initialize the formdata property
   
  // constructor(private asf:Firestore ){//AngularFirestore

  //import service to use when form is valid
    constructor( private categoryservice:CategoriesService){//AngularFirestore


  }
  ngOnInit(): void {
    
  }
  


    //send entered data to fire store 
    onSubmit(formdata :NgForm){ //all data about form
        //add category interface type[string]
      let categoryData:Category={
        category:formdata.value.category,
      }

      console.log(categoryData.category); //return {category: 'hader'} to accses to value[hader only use .category]

      //subcollection wanna save inside document
      let sub_categoryData={
        subcategory:"subcategory1",
      }
      //call service 
      this.categoryservice.saveData(categoryData)






// const categoriesCollection = collection(this.asf, 'category');

// // Add a new category
// addDoc(categoriesCollection, categoryData)
//   .then((docRef) => {
//     console.log('Category added successfully: ', docRef.id);

//     // Reference to the subcategories collection under the newly created category
//     const subcategoriesCollection = collection(docRef, 'subcategories');

//     // Add a subcategory
//     addDoc(subcategoriesCollection, sub_categoryData)
//       .then(() => {
//         console.log('Subcategory added successfully');

//       })

      
//       .catch((error) => {
//         console.error('Error adding subcategory: ', error);
//       });


//        // Reference to the subcategories collection under the newly created category
//     // const subcategoriesCollection2 = collection(docRef, 'subcategories2');

//     // Add a subcategory2
//     addDoc(subcategoriesCollection, sub_categoryData)
//       .then(() => {
//         console.log('Subcategory2 added successfully');

//       })

      
//       .catch((error) => {
//         console.error('Error adding subcategory: ', error);
//       });

//       //add subcat3 
//       const subcategoryDocRef3 = doc(this.asf, `categories/${docRef.id}/subcategories/${docRef.id}`);



//   })
//   .catch((error) => {
//     console.error('Error adding category: ', error);
//   });


     

     }



  
  

}
