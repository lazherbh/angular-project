import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OffreService } from '@app/_services/offre.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.less'],

})
export class JobDetailComponent {
  job: any;

  constructor(private route: ActivatedRoute,  router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.job = JSON.parse(params['job']);
    });
  }

  postuler(){
  }
}
