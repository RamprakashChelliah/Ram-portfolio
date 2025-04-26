import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements AfterViewInit{
  @ViewChild('lazyDiv') lazyDiv!: ElementRef;
  showFrondEndSkills = false;
  
  backendSkills = [
    {
      image: "assets/skill-logo/linq.png",
      name: "LINQ"
    },
    {
      image: "assets/skill-logo/MongoDB.png",
      name: "Mongo DB"
    },
    {
      image: "assets/skill-logo/NETcore.png",
      name: "Dot net core"
    },
    {
      image: "assets/skill-logo/Csharp.png",
      name: "C#"
    }
  ];

  frontendSkills = [
    {
      image: "assets/skill-logo/js.png",
      name: "Javascript"
    },
    {
      image: "assets/skill-logo/css.png",
      name: "CSS"
    },
    {
      image: "assets/skill-logo/html.png",
      name: "HTML"
    }
  ]

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showFrondEndSkills = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,       
        threshold: 0.1 
      }
    );

    if (this.lazyDiv && this.lazyDiv.nativeElement) {
      observer.observe(this.lazyDiv.nativeElement);
    }
  }
}