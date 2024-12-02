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
  cat_form:any='';
  id_form:any='';
  form_status:string='Add';

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

    if(this.form_status=="Add"){
          // Call service
    this.categoryservice.saveData(categoryData);
    formdata.reset();

    }else{
      this.categoryservice.updateData(this.cat_form,this.id_form);
    }

    console.log(categoryData.category); // return {category: 'hader'} to access the value [hader only use .category]

    // Subcollection to save inside document
    let sub_categoryData = {
      subcategory: "subcategory1",
    };


    
  }
  //edit button function
  onEdit(category:string,id:string){
    console.log(category);
    this.cat_form=category;
    this.id_form=id;
    this.form_status='Edit';//make text in btn at table dynamic


  }

  
  
}
