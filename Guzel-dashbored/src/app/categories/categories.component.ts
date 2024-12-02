import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(){}
    ngOnInit():void{

    }
    
    onSubmit(formdata :NgForm){ //all data about form
      console.log(formdata.value); //return {category: 'hader'} to accses to value[hader only use .category]

      let categoryData={
        category: formdata.value.category || '', // Ensure category is not undefined
      }

    }
  

}
