import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboredComponent } from './dashbored/dashbored.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: DashboredComponent },

  { path: 'cat', component: CategoryComponent },
  { path: 'dash', component: DashboredComponent},

  // other routes
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
