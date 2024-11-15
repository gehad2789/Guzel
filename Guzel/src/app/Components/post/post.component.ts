import { Component } from '@angular/core';
import { CommentFormComponent } from "../../Comments/comment-form/comment-form.component";
import { CommentListComponent } from "../../Comments/comment-list/comment-list.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommentFormComponent, CommentListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
