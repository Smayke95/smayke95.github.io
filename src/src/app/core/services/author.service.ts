import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Author } from '../models/author.model';

const query = gql`
query {
  authors {
    name
    role
    picture {
      url
    }
    shortBio
    longBio
    gitHub
    linkedIn
    nuget
    facebook
    instagram
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private apollo: Apollo) { }

  get(): Observable<Author[]> {
    return this.apollo
      .watchQuery<any>({
        query: query
      })
      .valueChanges
      .pipe(map((result) => result.data.authors));
  }
}
