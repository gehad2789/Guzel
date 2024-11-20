import { Routes } from '@angular/router';
import { DashboredComponent } from './dashbored/dashbored.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    {path:'' , component:DashboredComponent},
    {path:'categories' , component:CategoriesComponent},


];
