import { Component } from '@angular/core';
import { CommentFormComponent } from "../../Comments/comment-form/comment-form.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommentFormComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
