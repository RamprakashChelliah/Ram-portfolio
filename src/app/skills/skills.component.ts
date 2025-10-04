import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillOverview } from './skill-overview';
import { SkillType } from './skill-type';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  projectName: "";
  skillOverview: SkillOverview[];
  skillTypes: SkillType[];
  activeSkill: string;
  shouldUseSkillIcon: boolean;

  constructor(private route: ActivatedRoute) {
    this.skillOverview = [];
    this.skillTypes = [];
    this.shouldUseSkillIcon = false;
    this.getSkillTypes();
    this.getSkills();
  }

  ngOnInit() {
    this.onResize();
    this.activeSkill = "All skills";
    this.route.queryParams.subscribe(params => {
      this.projectName = params['projectName'];
    });
  }

  getSkillTypes() {
    this.skillTypes.push(this.getAllSkillType())
    this.skillTypes.push(this.getBackEndSkillType())
    this.skillTypes.push(this.getFrontEndSkillType())
    this.skillTypes.push(this.getSoftSkillType())
  }

  getAllSkillType(): SkillType{
    let allSkill : SkillType = {
      name: "All skills",
      icon: "assets/skill-type-logo/soft-skill1.png"
    }

    return allSkill;
  }

  getFrontEndSkillType(): SkillType{
    let allSkill : SkillType = {
      name: "Front-end skills",
      icon: "assets/skill-type-logo/ui-ux.png"
    }

    return allSkill;
  }

  getBackEndSkillType(): SkillType{
    let allSkill : SkillType = {
      name: "Back-end skills",
      icon: "assets/skill-type-logo/backend.png"
    }

    return allSkill;
  }

  getSoftSkillType(): SkillType{
    let allSkill : SkillType = {
      name: "Soft skills",
      icon: "assets/skill-type-logo/soft-skill.png"
    }

    return allSkill;
  }

  getSkills() {
    this.skillOverview.push(this.getCSharpSkill())
    this.skillOverview.push(this.getDotNetSkill())
    this.skillOverview.push(this.getMongodbSkill())
    this.skillOverview.push(this.getLinqSkill())
    this.skillOverview.push(this.getHtmlSkill())
    this.skillOverview.push(this.getCSSSkill())
    this.skillOverview.push(this.getJavaScriptSkill())
    this.skillOverview.push(this.getAngularSkill())
    this.skillOverview.push(this.getProblemSolvingSkill())
    this.skillOverview.push(this.getCreativeThinkingSkill())
    this.skillOverview.push(this.getLeadershipSkill())
    this.skillOverview.push(this.getTeamWorkSkill())
    this.skillOverview.push(this.getTimeManagementSkill())
    this.skillOverview.push(this.getCriticalThinkingSkill())
    this.skillOverview.push(this.getAdaptabilitySkill())
  }

  getCSharpSkill(): SkillOverview {
    let cSharpSkill: SkillOverview = {
      name: "C#",
      icon: "assets/skill-logo/Csharp.png",
      backgroudColor: "#ffebfdff",
      description: "Object-oriented programming for robust applications and enterprise solutions",
      skillType: "Back-end skills"
    };

    return cSharpSkill;
  }

  getDotNetSkill(): SkillOverview {
    let dotNetSkill: SkillOverview = {
      name: "Dot net core",
      //icon: "assets/skill-logo/NETcore.png",
      icon: "assets/skill-logo/.net-logo.svg",
      backgroudColor: "#ffebffff",
      description: "Advanced concepts with Dot net core (v3.1, v8), CQRS, DDD, Event sourcing",
      skillType: "Back-end skills"
    };

    return dotNetSkill;
  }

  getMongodbSkill(): SkillOverview {
    let mongoDBSkill: SkillOverview = {
      name: "Mongo DB",
      icon: "assets/skill-logo/MongoDB.png",
      backgroudColor: "#ebffec",
      description: "NoSQL database for flexible, scalable data storage and retrieval",
      skillType: "Back-end skills"
    };

    return mongoDBSkill;
  }

  getLinqSkill(): SkillOverview {
    let linqSkill: SkillOverview = {
      name: "LINQ",
      icon: "assets/skill-logo/linq.png",
      backgroudColor: "#eaeaeaff",
      description: "Language-integrated query for efficient data manipulation in .NET",
      skillType: "Back-end skills"
    };

    return linqSkill;
  }

  getHtmlSkill(): SkillOverview {
    let htmlSkill: SkillOverview = {
      name: "HTML",
      icon: "assets/skill-logo/html-logo.svg",
      backgroudColor: "#ffebebff",
      description: "Semantic markup for structuring web content and accessibility",
      skillType: "Front-end skills"
    };

    return htmlSkill;
  }

  getCSSSkill(): SkillOverview {
    let cssSkill: SkillOverview = {
      name: "CSS",
      icon: "assets/skill-logo/css-logo.svg",
      backgroudColor: "#ebedffff",
      description: "Styling and layout for responsive, visually appealing interfaces",
      skillType: "Front-end skills"
    };

    return cssSkill;
  }

  getJavaScriptSkill(): SkillOverview {
    let javascriptSkill: SkillOverview = {
      name: "Javascript",
      icon: "assets/skill-logo/javascript-logo.svg",
      backgroudColor: "#fdfde6ff",
      description: "Dynamic scripting for interactive web experiences and logic",
      skillType: "Front-end skills"
    };

    return javascriptSkill;
  }

  getAngularSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Angular",
      icon: "assets/skill-logo/angularjs-logo.svg",
      backgroudColor: "#ffebfcff",
      description: "Framework for building scalable single-page applications",
      skillType: "Front-end skills"
    };

    return angularSkill;
  }

  getProblemSolvingSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Problem solving",
      icon: "assets/skill-logo/problem-solving-logo.svg",
      backgroudColor: "#e8f8ffff",
      description: "Creative and effective solutions to complex challenges",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

    getCreativeThinkingSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Creative Thinking",
      icon: "assets/skill-logo/creative-thinking-logo.svg",
      backgroudColor: "#ffffebff",
      description: "Innovative ideas and approaches to projects",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

  getLeadershipSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Leadership",
      icon: "assets/skill-logo/leadership-logo.svg",
      backgroudColor: "#e8f8ffff",
      description: "Guiding teams and managing projects successfully",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

  getTeamWorkSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Team Work",
      icon: "assets/skill-logo/teamwork-logo.svg",
      backgroudColor: "#fff3e8ff",
      description: "Collaborative and effective communication with teams",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

   getTimeManagementSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Time Management",
      icon: "assets/skill-logo/time-management-logo.svg",
      backgroudColor: "rgba(235, 255, 236, 1)",
      description: "Efficient prioritization and task completion",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

  getCriticalThinkingSkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Critical Thinking",
      icon: "assets/skill-logo/critical-thinking-logo.svg",
      backgroudColor: "rgba(254, 235, 255, 1)",
      description: "Analyzing facts to form sound judgments and decisions",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

  getAdaptabilitySkill(): SkillOverview {
    let angularSkill: SkillOverview = {
      name: "Adaptability",
      icon: "assets/skill-logo/adaptability-logo.svg",
      backgroudColor: "#e3fff5ff",
      description: "Flexibility to adjust to new conditions and challenges",
      skillType: "Soft skills"
    };

    return angularSkill;
  }

  setActiveSkill(skillType: string) {
    this.skillOverview = [];
    this.getSkills();
    if (skillType === this.activeSkill) {
      skillType = "All skills";
    }

    if (skillType !== "All skills") {
      this.skillOverview = this.skillOverview.filter(x => x.skillType === skillType);
    }
    this.activeSkill = skillType;
  }

   @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    let screenWidth = window.innerWidth; // current width always
    console.log('Screen width:', screenWidth);

    if (screenWidth <= 768) {
      this.shouldUseSkillIcon = true;
    } else {
      this.shouldUseSkillIcon = false;
    }
  }
}
