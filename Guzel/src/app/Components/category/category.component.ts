import { Component } from '@angular/core';
import { PostCardComponent } from "../../Layouts/post-card/post-card.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
