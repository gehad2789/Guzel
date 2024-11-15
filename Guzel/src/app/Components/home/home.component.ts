import { Component } from '@angular/core';
import { PostCardComponent } from "../../Layouts/post-card/post-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
