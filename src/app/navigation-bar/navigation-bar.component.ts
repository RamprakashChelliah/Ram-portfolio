import { Component, Input } from '@angular/core';
import { NavigationBarService } from '../service/navigation-bar.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Input() isHomeScreen : boolean = false;
   isAboutActive = false;

    constructor(private routeState: NavigationBarService) {
    this.routeState.aboutActive$.subscribe(isActive => {
      this.isAboutActive = isActive;
    });
  }
}
