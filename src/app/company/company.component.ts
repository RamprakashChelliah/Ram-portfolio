import { Component } from '@angular/core';
import { CompanyDetail } from './company-detail';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  companyDetails: CompanyDetail[];

  constructor(){
    this.companyDetails = [];
    let awariousDetail = this.addAwariousDetail();
    this.companyDetails.push(awariousDetail)
  }

  addAwariousDetail(): CompanyDetail{

    let descriptions: string[] = [];

    descriptions.push("Designed and developed scalable RESTful APIs for core business modules, including Payroll, Leave Management, Attendance Tracking, Timesheet Management, Approval Workflow, Workitem-Flow (similar to Azure Dashboard), Master Data Management, Call Tracker, and Location Tracker, ensuring robust backend functionality.");
    descriptions.push("Architected the project structure following CQRS (Command Query Responsibility Segregation) and Domain-Driven Design (DDD) principles. Created and optimized database schemas to support scalable and maintainable systems.");
    descriptions.push("Integrated notification systems for email and mobile alerts, enhancing user engagement and operational communication.");
    descriptions.push("Deep understanding of microservices communication using event-driven and command-based messaging patterns, ensuring decoupled and reliable service orchestration.");
    descriptions.push("Actively contributed to Saga orchestration and compensation logic to maintain data consistency across distributed transactions in microservices.");
    descriptions.push("Improved performance and stability of the application by leveraging in-depth debugging, profiling, and code refactoring techniques.");
    descriptions.push("Handled both JSON-based data exchange and event/command-driven messaging, including the integration of third-party APIs for real-time, dynamic reporting dashboards.");
    descriptions.push("Worked collaboratively with cross-functional teams, leveraging asynchronous programming patterns (async/await) to optimize throughput and responsiveness in concurrent systems.");
    descriptions.push("Strong experience in writing unit tests for Command and Query Handlers, ensuring high code quality, test coverage, and maintainability.");

    let companyDetail: CompanyDetail = {
      name: "Awarious Technology Solution",
      jobTitle: "Software Engineer",
      dateOfEmployment: "Aug-2021 to Present",
      description: descriptions
    };

    return companyDetail;
  }
}
