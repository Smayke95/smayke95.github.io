import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Technology } from '../models/technology.model';

const query = gql`
query {
  technologies(first: 100) {
    url
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private apollo: Apollo) { }

  get(): Observable<Technology[]> {
    return this.apollo
      .watchQuery<any>({
        query: query
      })
      .valueChanges
      .pipe(map((result) => result.data.technologies));
  }
}
