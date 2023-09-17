import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Education } from '../models/education.model';

const query = gql`
query {
  educations {
    title,
    schoolName,
    startDate,
    endDate
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private apollo: Apollo) { }

  get(): Observable<Education[]> {
    return this.apollo
      .watchQuery<any>({
        query: query
      })
      .valueChanges
      .pipe(map((result) => result.data.educations));
  }
}
