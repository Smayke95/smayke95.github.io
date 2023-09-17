import { Component } from '@angular/core';
import { Author } from 'src/app/core/models/author.model';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  author: Author = new Author();

  constructor(private authorService: AuthorService) {
    authorService.get().subscribe(result => {
      this.author = result[0];
    })
  }
}
