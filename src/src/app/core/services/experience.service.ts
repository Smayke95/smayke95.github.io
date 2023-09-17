import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { Experience } from '../models/experience.model';

const query = gql`
query {
  experiences (orderBy: startDate_DESC) {
    title,
    companyName,
    startDate,
    endDate
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private apollo: Apollo) { }

  get(): Observable<Experience[]> {
    return this.apollo
      .watchQuery<any>({
        query: query
      })
      .valueChanges
      .pipe(map((result) => result.data.experiences));
  }
}
