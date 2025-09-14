import { Component } from '@angular/core';
import { ProjectDetail } from './project-detail';
import { ProjectOverview } from './project-overview';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projectOverview: ProjectOverview[];
  activeProject: ProjectOverview;

  constructor(private router: Router) {
    this.activeProject = null;
    this.projectOverview = [];
    this.getProjects();
  }

  getProjects() {
    this.projectOverview.push(this.getHRMSProject())
  }

  getHRMSProject(): ProjectOverview {
    let hrmsProject: ProjectOverview = {
      name: "HR Management System",
      icon: "assets/Icons/hrms-logo.png",
      backgroudColor: "#e5f4feff",
      popUpDetail: null
    };

    return hrmsProject;
  }

  // addPayrollDetail(): ProjectDetail {
  //   let popUpDetail: ProjectDetail = {
  //     overview: "I have extensive experience in managing and automating end-to-end payroll processes, covering diverse employment types such as permanent employees, contractors, and consultants. My work involved not only payroll execution but also compliance management, system configuration, and approval workflows, ensuring accuracy, transparency, and compliance with statutory regulations.",
  //     subHeading: "Key Areas of Expertise",
  //     detail: [
  //       {
  //         heading: "Earnings & Allowances Management",
  //         description: [
  //           "Designed and maintained earning components including Basic Pay, HRA, Special Allowances, Incentives, Overtime, and Bonus.",
  //           "Configured component rules for various employment categories and ensured correct mapping with salary structures.",
  //           "Automated eligibility and calculation rules to reduce manual errors and improve efficiency"
  //         ]
  //       },
  //       {
  //         heading: "Earnings & Allowances Management",
  //         description: [
  //           "Designed and maintained earning components including Basic Pay, HRA, Special Allowances, Incentives, Overtime, and Bonus.",
  //           "Configured component rules for various employment categories and ensured correct mapping with salary structures.",
  //           "Automated eligibility and calculation rules to reduce manual errors and improve efficiency"
  //         ]
  //       },
  //       {
  //         heading: "Statutory & Compliance Handling",
  //         description: [
  //           "Managed statutory components such as PF, ESI, Professional Tax, TDS, and Gratuity in alignment with government regulations.",
  //           "Ensured timely statutory deductions and contributions, along with accurate record-keeping for audits.",
  //           "Processed and generated Form-16 for employees, ensuring compliance with Income Tax rules, accurate computation of taxable income, and seamless year-end reporting."
  //         ]
  //       },
  //       {
  //         heading: "Organization-Level Tax Configuration",
  //         description: [
  //           "Configured organization-wide tax settings, including slab definitions, exemptions, and deductions, in line with evolving government tax structures.",
  //           "Maintained consistency in tax application across multiple employee types and locations.",
  //           "Supported management with tax forecasting and compliance reporting."
  //         ]
  //       },
  //       {
  //         heading: "Loan & Expense Reimbursement Management",
  //         description: [
  //           "Implemented workflows for employee loan requests (advance, travel, personal, etc.) with automated EMI recovery in payroll.",
  //           "Processed expense reimbursements such as travel, medical, LTA, and other allowances as per organizational policy.",
  //           "Ensured timely disbursement with approval-driven processing."
  //         ]
  //       },
  //       {
  //         heading: "Salary Management",
  //         description: [
  //           "Maintained individual salary details and structures with dynamic updates.",
  //           "Streamlined salary revision processes with multi-level approvals and automatic retroactive adjustments.",
  //           "Ensured accurate salary processing after revision, reducing payroll discrepancies."
  //         ]
  //       },
  //       {
  //         heading: "Pay Run & Pay Schedule Configuration",
  //         description: [
  //           "Executed regular monthly pay runs, as well as special runs for arrears, bonuses, and corrections.",
  //           "Managed Full & Final (F&F) settlements for exiting employees, including leave encashment, loan recoveries, reimbursements, and statutory deductions.",
  //           "Configured pay schedules at the organizational level to define payroll frequency, cut-off dates, and disbursement timelines.",
  //           "Generated payslip and TDS sheet for all type of employment"
  //         ]
  //       },
  //       {
  //         heading: "Reporting & Audit",
  //         description: [
  //           "Generated detailed payroll reports for management insights, statutory filings, and internal audits.",
  //           "Conducted regular reconciliations of payroll, tax, and statutory contributions to maintain 100% accuracy.",
  //           "Supported audit teams with data validation, compliance records, payroll summaries, EPF & ESI summaries, Slary revision history, Payroll cost summary, and Salary revision status summary"
  //         ]
  //       }
  //     ]
  //   }

  //   return popUpDetail;
  // }

  onCloseActiveProject() {
    this.activeProject = null;
  }

  onClickProjectDetail(project: ProjectOverview){
    this.router.navigate(
      ['/modules'],
      { queryParams: { projectName: 'HRMS' } }
    );

  }
}
