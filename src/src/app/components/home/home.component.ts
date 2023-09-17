import { Component } from '@angular/core';
import { Author } from 'src/app/core/models/author.model';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  author: Author = new Author();

  constructor(private authorService: AuthorService) {
    authorService.get().subscribe(result => {
      this.author = result[0];
    })
  }
}
