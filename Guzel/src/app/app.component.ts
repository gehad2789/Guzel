import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Layouts/header/header.component";
import { CatNavComponent } from "./Layouts/cat-nav/cat-nav.component";
import { FooterComponent } from "./Layouts/footer/footer.component";
import { PostCardComponent } from "./Layouts/post-card/post-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CatNavComponent, FooterComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Guzel';
}
