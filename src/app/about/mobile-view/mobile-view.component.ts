import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent {
  @Input() totalExperience : string;

  constructor(private router: Router){
    
  }
  
  navigateToProjects(){
    this.router.navigateByUrl('projects');
  }

  navigateToCompanies(){
    this.router.navigateByUrl('companies');
  }
  
}
