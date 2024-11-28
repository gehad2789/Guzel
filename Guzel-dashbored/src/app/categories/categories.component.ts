import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    
    onSubmit(formdata :any){ //all data about form
      console.log(formdata.value); //return {category: 'hader'} to accses to value[hader only use .category]

      let categoryData={
        category:formdata.value.category,
      }

    }
  

}
