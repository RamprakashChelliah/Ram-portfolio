import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges{
  totalExperience : string;
  isMobileScreen: boolean = false;
  screenWidth: number = 0;


  constructor(private router: Router){

  }

  ngOnInit(): void {

    this.totalExperience = this.getTotalExperience();

    this.screenWidth = window.screen.width

    if(this.screenWidth <= 768){
      this.isMobileScreen = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.screenWidth = window.screen.width

    if(this.screenWidth <= 768){
      this.isMobileScreen = true;
    }
  }

  getTotalExperience() : string{
    const startDate = new Date('2021-08-01');
    const endDate = new Date();

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if(months < 0){
      years--;
      months += 12;
    }

    return years + "." + months;
  }

  navigateToProjects(){
    this.router.navigateByUrl('projects');
  }

  navigateToCompanies(){
    this.router.navigateByUrl('companies');
  }
  
}