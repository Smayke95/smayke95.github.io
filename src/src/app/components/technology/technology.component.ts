import { Component } from '@angular/core';
import { Technology } from 'src/app/core/models/technology.model';
import { TechnologyService } from 'src/app/core/services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  technologies: Technology[] = [];

  constructor(
    private technologyService: TechnologyService) {

    technologyService.get().subscribe(result => {
      console.log(result);
      this.technologies = result;
    })
  }
}
