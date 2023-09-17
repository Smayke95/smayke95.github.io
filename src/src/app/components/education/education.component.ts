import { Component } from '@angular/core';
import { Education } from 'src/app/core/models/education.model';
import { Experience } from 'src/app/core/models/experience.model';
import { EducationService } from 'src/app/core/services/education.service';
import { ExperienceService } from 'src/app/core/services/experience.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educations: Education[] = [];
  experiences: Experience[] = [];

  constructor(
    private educationService: EducationService,
    private experienceService: ExperienceService) {

    educationService.get().subscribe(result => {
      this.educations = result;
    })

    experienceService.get().subscribe(result => {
      this.experiences = result;
    })
  }
}
