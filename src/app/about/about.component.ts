import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges{
  
  isMobileScreen: boolean = false;
  screenWidth: number = 0;

  ngOnInit(): void {
    this.screenWidth = window.screen.width

    if(this.screenWidth <= 375){
      this.isMobileScreen = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.screenWidth = window.screen.width

    if(this.screenWidth <= 375){
      this.isMobileScreen = true;
    }
  }
  
}