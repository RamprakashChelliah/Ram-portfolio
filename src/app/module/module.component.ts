import { Component, OnInit } from '@angular/core';
import { ModuleDetail } from './module-detail';
import { ModuleOverview } from './module-overview';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  projectName: "";
  moduleOverview: ModuleOverview[];
  activeModule: ModuleOverview;

  constructor(private route: ActivatedRoute) {
    this.activeModule = null;
    this.moduleOverview = [];
    this.getModules();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.projectName = params['projectName'];
    });
  }

  getModules() {
    this.moduleOverview.push(this.getEmployeeModule())
    this.moduleOverview.push(this.getLeaveModule())
    this.moduleOverview.push(this.getAttendanceModule())
    this.moduleOverview.push(this.getTimesheetModule())
    this.moduleOverview.push(this.getPayrollModule())
    this.moduleOverview.push(this.getPerformanceModule())
    this.moduleOverview.push(this.getOrganizationSettingsModule())
    this.moduleOverview.push(this.getTenantManagementModule())
    this.moduleOverview.push(this.getApprovalWorkflowModule())
  }

  getEmployeeModule(): ModuleOverview {
    let employeeModule: ModuleOverview = {
      name: "Employee",
      icon: "assets/Icons/employee.svg",
      backgroudColor: "#ebf8ffff",
      popUpDetail: null
    };

    return employeeModule;
  }

  getPayrollModule(): ModuleOverview {
    let payrollModule: ModuleOverview = {
      name: "Payroll",
      icon: "assets/Icons/money-bill-wave.svg",
      backgroudColor: "#ebf7ff",
      popUpDetail: null
    };

    return payrollModule;
  }

  getLeaveModule(): ModuleOverview {
    let leaveModule: ModuleOverview = {
      name: "Leave tracker",
      icon: "assets/Icons/leave.svg",
      backgroudColor: "#fff0ebff",
      popUpDetail: null
    };

    return leaveModule;
  }

  getAttendanceModule(): ModuleOverview {
    let attendanceModule: ModuleOverview = {
      name: "Attendance tracker",
      icon: "assets/Icons/attendance.svg",
      backgroudColor: "#fcebff",
      popUpDetail: null
    };

    return attendanceModule;
  }

  getTimesheetModule(): ModuleOverview {
    let timesheetModule: ModuleOverview = {
      name: "Timesheet",
      icon: "assets/Icons/timesheet-entry.svg",
      backgroudColor: "#ebffec",
      popUpDetail: null
    };

    return timesheetModule;
  }

  getPerformanceModule(): ModuleOverview {
    let performaceModule: ModuleOverview = {
      name: "Performance",
      icon: "assets/Icons/performance.svg",
      backgroudColor: "#ebffec",
      popUpDetail: null
    };

    return performaceModule;
  }

  getApprovalWorkflowModule(): ModuleOverview {
    let approvalWfModule: ModuleOverview = {
      name: "Approval workflow",
      icon: "assets/Icons/approval.svg",
      backgroudColor: "#fff6ebff",
      popUpDetail: null
    };

    return approvalWfModule;
  }

  getOrganizationSettingsModule(): ModuleOverview {
    let organizationSettingsModule: ModuleOverview = {
      name: "Organization level global settings",
      icon: "assets/Icons/organization-settings.svg",
      backgroudColor: "#ebf7ff",
      popUpDetail: null
    };

    return organizationSettingsModule;
  }

  getTenantManagementModule(): ModuleOverview {
    let organizationSettingsModule: ModuleOverview = {
      name: "Tenant management",
      icon: "assets/Icons/tenant-management.svg",
      backgroudColor: "#ffebfcff",
      popUpDetail: null
    };

    return organizationSettingsModule;
  }

  getModuleDetail(module: ModuleOverview) {
    switch (module.name) {
      case "Payroll":
        module.popUpDetail = this.addPayrollDetail();
        this.activeModule = module;
        break;
      case "Leave tracker":
        module.popUpDetail = this.addLeaveTrackerDetail();
        this.activeModule = module;
        break;
      case "Attendance tracker":
        module.popUpDetail = this.addAttendanceTrackerDetail();
        this.activeModule = module;
        break;
      case "Employee":
        module.popUpDetail = this.addEmployeeDetail();
        this.activeModule = module;
        break;
      case "Timesheet":
        module.popUpDetail = this.addTimeSheetDetail();
        this.activeModule = module;
        break;
      case "Performance":
        module.popUpDetail = this.addPerformanceDetail();
        this.activeModule = module;
        break;
      case "Organization level global settings":
        module.popUpDetail = this.addOrganizatoinSettingDetail();
        this.activeModule = module;
        break;
      case "Tenant management":
        module.popUpDetail = this.addTenantManagementDetail();
        this.activeModule = module;
        break;
      case "Approval workflow":
        module.popUpDetail = this.addApprovalWorkflowDetail();
        this.activeModule = module;
        break;
    }
  }

  addEmployeeDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "I have solid experience in managing the Employee Information System (HR Core/Employee Master), which serves as the foundation for all HR, payroll, leave, and attendance processes. My responsibilities involved employee data creation and management, reporting hierarchy setup, termination handling, portal access control, emergency contact handling, bulk operations, and approval process integration.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Employee Creation & Information Management",
          description: [
            "Managed employee onboarding process through detailed information capture, including:",
            "   Personal details (name, DOB, address, contact info)",
            "   Employment details (designation, department, location, joining date)",
            "   Compensation details (salary structure, benefits, pay cycle)",
            "   Statutory details (PAN, Aadhaar, PF, ESI, tax information)",
            "   Bank details (for salary disbursement)",
            "Ensured accuracy and completeness of employee records for downstream processes like payroll, attendance, and compliance."
          ]
        },
        {
          heading: "Reporting Hierarchy & Approvals",
          description: [
            "Configured and maintained reporting hierarchies for employees to establish approval workflows across modules (leave, payroll, attendance, expense, etc.).",
            "Supported replacement of reporting managers/authorizers during employee deactivation, ensuring uninterrupted approval processes for reportees.",
            "Maintained flexibility to reassign approvals during organizational restructuring."
          ]
        },
        {
          heading: "Notice Period & Termination Handling",
          description: [
            "Configured notice period rules (customizable by role, designation, or location).",
            "Managed termination processes including:",
            "   Notice period tracking",
            "   Clearance process",
            "   Portal access disabling to restrict system usage after termination",
            "Integrated with Full & Final (F&F) settlement workflows for payroll closure."
          ]
        },
        {
          heading: "Employee Activation & Inactivation",
          description: [
            "Enabled employee activation/inactivation processes with proper status updates across modules.",
            "Ensured smooth reassignment of responsibilities, approvals, and reporting structures upon inactivation.",
            "Restricted inactive employees from accessing systems while retaining historical records for compliance."
          ]
        },
        {
          heading: "Emergency Contact Information Management",
          description: [
            "Captured and maintained emergency contact details for each employee.",
            "Ensured availability of contact information during urgent situations for employee welfare and safety compliance."
          ]
        },
        {
          heading: "Bulk Import & Export Operations",
          description: [
            "Implemented employee import functionality to create multiple employee records simultaneously using standardized templates.",
            "Streamlined employee export process with filtering options (by department, location, designation, etc.) for reporting and compliance purposes.",
            "Ensured secure handling of bulk data during transfer to maintain confidentiality."
          ]
        },
        {
          heading: "Portal Access & Security",
          description: [
            "Managed portal access rights for employees based on employment status and role.",
            "Ensured access was automatically revoked upon termination or inactivation, strengthening security.",
            "Integrated employee data with authentication systems to maintain seamless HRMS access."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addPayrollDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "I have extensive experience in managing and automating end-to-end payroll processes, covering diverse employment types such as permanent employees, contractors, and consultants. My work involved not only payroll execution but also compliance management, system configuration, and approval workflows, ensuring accuracy, transparency, and compliance with statutory regulations.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Earnings & Allowances Management",
          description: [
            "Designed and maintained earning components including Basic Pay, HRA, Special Allowances, Incentives, Overtime, and Bonus.",
            "Configured component rules for various employment categories and ensured correct mapping with salary structures.",
            "Automated eligibility and calculation rules to reduce manual errors and improve efficiency"
          ]
        },
        {
          heading: "Earnings & Allowances Management",
          description: [
            "Designed and maintained earning components including Basic Pay, HRA, Special Allowances, Incentives, Overtime, and Bonus.",
            "Configured component rules for various employment categories and ensured correct mapping with salary structures.",
            "Automated eligibility and calculation rules to reduce manual errors and improve efficiency"
          ]
        },
        {
          heading: "Statutory & Compliance Handling",
          description: [
            "Managed statutory components such as PF, ESI, Professional Tax, TDS, and Gratuity in alignment with government regulations.",
            "Ensured timely statutory deductions and contributions, along with accurate record-keeping for audits.",
            "Processed and generated Form-16 for employees, ensuring compliance with Income Tax rules, accurate computation of taxable income, and seamless year-end reporting."
          ]
        },
        {
          heading: "Organization-Level Tax Configuration",
          description: [
            "Configured organization-wide tax settings, including slab definitions, exemptions, and deductions, in line with evolving government tax structures.",
            "Maintained consistency in tax application across multiple employee types and locations.",
            "Supported management with tax forecasting and compliance reporting."
          ]
        },
        {
          heading: "Loan & Expense Reimbursement Management",
          description: [
            "Implemented workflows for employee loan requests (advance, travel, personal, etc.) with automated EMI recovery in payroll.",
            "Processed expense reimbursements such as travel, medical, LTA, and other allowances as per organizational policy.",
            "Ensured timely disbursement with approval-driven processing."
          ]
        },
        {
          heading: "Salary Management",
          description: [
            "Maintained individual salary details and structures with dynamic updates.",
            "Streamlined salary revision processes with multi-level approvals and automatic retroactive adjustments.",
            "Ensured accurate salary processing after revision, reducing payroll discrepancies."
          ]
        },
        {
          heading: "Pay Run & Pay Schedule Configuration",
          description: [
            "Executed regular monthly pay runs, as well as special runs for arrears, bonuses, and corrections.",
            "Managed Full & Final (F&F) settlements for exiting employees, including leave encashment, loan recoveries, reimbursements, and statutory deductions.",
            "Configured pay schedules at the organizational level to define payroll frequency, cut-off dates, and disbursement timelines.",
            "Generated payslip and TDS sheet for all type of employment"
          ]
        },
        {
          heading: "Reporting & Audit",
          description: [
            "Generated detailed payroll reports for management insights, statutory filings, and internal audits.",
            "Conducted regular reconciliations of payroll, tax, and statutory contributions to maintain 100% accuracy.",
            "Supported audit teams with data validation, compliance records, payroll summaries, EPF & ESI summaries, Slary revision history, Payroll cost summary, and Salary revision status summary"
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addLeaveTrackerDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "I have comprehensive experience in designing, configuring, and managing end-to-end Leave Management Systems. My work included policy definition, accrual processing, calendar and holiday configuration, carry forward/encashment handling, reporting, and approval workflows. This ensured accuracy, compliance, and flexibility across multiple employee categories and locations.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Leave Type Configuration",
          description: [
            "Configured multiple leave types based on organizational needs, including:",
            "   Daily-based leaves (annual leave, sick leave, casual leave, etc.)",
            "   Hourly-based leaves (short leave, late coming, early going, etc.)",
            "Ensured flexibility in policy setup to handle varied employee categories and business requirements."
          ]
        },
        {
          heading: "Leave Accrual Management",
          description: [
            "Designed and implemented leave accrual processes with multiple frequency options:",
            "   Annual, Half-Yearly, Quarterly, Monthly, Bi-Monthly, and Bi-Weekly.",
            "Automated accrual rules to align with company policies and employee tenure.",
            "Supported pro-rata accruals for new joiners and special cases."
          ]
        },
        {
          heading: "Calendar & Location Settings",
          description: [
            "Configured leave calendars for both global (organization-wide) and specific locations.",
            "Managed day-off settings such as weekends, alternate weekends, and custom weekly offs.",
            "Supported multi-location setup to handle regional policies and work schedules."
          ]
        },
        {
          heading: "Holiday Management",
          description: [
            "Configured multiple holiday types:",
            "   Normal holidays (fixed official holidays)",
            "   Restricted holidays (optional employee-chosen holidays)",
            "   Recursive holidays (annually recurring holidays like Diwali, Independence Day).",
            "Enabled both import and export options for holiday lists, simplifying large-scale setup."
          ]
        },
        {
          heading: "Manual Leave Adjustments",
          description: [
            "Provided flexibility for manual customization of leave balances, including both increments and decrements.",
            "Supported HR/Admin teams in resolving exceptions and special approval cases."
          ]
        },
        {
          heading: "Special Leave Policies",
          description: [
            "Configured Maternity Leave and Paternity Leave policies with proper accrual and approval workflows.",
            "Ensured compliance with statutory rules and organizational policies."
          ]
        },
        {
          heading: "Leave Carry Forward & Encashment",
          description: [
            "Implemented carry-forward processes for unused leaves into the next calendar year.",
            "Defined rules for leave encashment, ensuring correct payout calculations during year-end or Full & Final settlement.",
            "Integrated multi-level approval workflows for both carry-forward requests and encashment requests to maintain compliance and transparency."
          ]
        },
        {
          heading: "Leave Application & Approval Process",
          description: [
            "Developed workflows for leave applications, covering both:",
            "   Self-service leave applications (employees applying for their own leaves).",
            "   Subordinate leave requests (managers approving/rejecting team members’ leaves).",
            "Configured role-based action privileges to ensure proper authorization at each approval level.",
            "Integrated notifications and tracking for transparency."
          ]
        },
        {
          heading: "Reporting & Analytics",
          description: [
            "Created multiple reports for effective monitoring and decision-making:",
            "   Applied Leave Summary – overview of all leave applications with status.",
            "   Available Leave Summary – real-time view of leave balances.",
            "   Accrued Leave Summary – detailed breakdown of system-generated leave accruals.",
            "   Carry Forward & Encashment Summary – comprehensive reports for year-end processing and audit.",
            "Supported export-ready reports for Finance, HR, and Management teams."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addAttendanceTrackerDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "I have extensive experience in designing and managing Attendance Management Systems, ensuring seamless integration with payroll, leave, and compliance processes. My work involved shift management, calendar and day-off settings, attendance tracking, geo-fencing validation, and reporting, along with role-based privileges for secure and transparent operations.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Calendar & Location Settings",
          description: [
            "Configured attendance calendars for both organization-wide and individual locations.",
            "Integrated calendars with leave, holiday, and day-off policies to ensure accurate daily attendance records.",
            "Enabled flexible day-off configurations (weekly offs, alternate offs, custom offs) aligned with shifts."
          ]
        },
        {
          heading: "Shift Configuration & Assignment",
          description: [
            "Configured multiple types of shifts including:",
            "   Daily shifts",
            "   Hourly shifts",
            "   Night shifts",
            "Assigned shifts to employees individually or in bulk, with automatic reminders for employees and managers.",
            "Implemented a job process for auto-checkout based on shift timing to handle missed punch-outs."
          ]
        },
        {
          heading: "Grace Period Management",
          description: [
            "Designed shift-based grace period configurations for handling late arrivals, early check-outs, and short working hours.",
            "Defined rules for grace period failures, which could automatically:",
            "   Count as an absence",
            "   Reduce working hours",
            "   Impact payroll during pay run processing",
            "Enabled flexible policies for different employee categories."
          ]
        },
        {
          heading: "Attendance Tracking Methods",
          description: [
            "Supported multiple modes of employee check-in/check-out:",
            "   Manual entry (admin/HR correction)",
            "   Web portal login",
            "   Mobile app check-in/out",
            "   Biometric devices integration",
            "   Monitoring-based systems",
            "Allowed marking of day-off status and manual adjustments for exceptions."
          ]
        },
        {
          heading: "Geo-Fencing Configuration",
          description: [
            "Configured geo-fencing policies with multiple location fences and different rules.",
            "Integrated geo-fencing with attendance, enabling location-based validation of employee check-in/out.",
            "Implemented validation logic to verify whether employees marked attendance within the permitted range.",
            "Generated exception reports for geo-fencing failures."
          ]
        },
        {
          heading: "Role-Based Access & Privileges",
          description: [
            "Configured roles and privileges to manage attendance data securely.",
            "Enabled managers to approve/reject manual entries, day-off adjustments, or exception cases.",
            "Restricted sensitive actions to HR/Admin roles for compliance and audit readiness."
          ]
        },
        {
          heading: "Attendance Adjustments & Integrations",
          description: [
            "Enabled real-time updates in attendance screens to reflect leave, holiday, and day-off changes.",
            "Integrated attendance with payroll systems so that absent counts, grace period failures, and late/early marks could directly impact salary processing."
          ]
        },
        {
          heading: "Reporting & Analytics",
          description: [
            "Designed and implemented multiple reports for decision-making and monitoring:",
            "   Grace Period Failure Report – track employees violating shift timing rules.",
            "   Employee Attendance Summary – consolidated view of attendance across locations and shifts.",
            "   Geo-Fencing Failure Report – employees attempting check-in/out outside defined geo-fence.",
            "   Manual Entry Report – overview of all admin/HR-modified attendance entries for audit purposes.",
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addTimeSheetDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "I have hands-on experience in managing Timesheet and Project Management systems, encompassing project creation, task tracking, work item management, automated timesheet entries, approval workflows, and reporting. My work focused on project dashboards, board/task configurations, time tracking, task recurrence, approval processes, and role-based access control.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Project & Dashboard Management",
          description: [
            "Created and managed projects with detailed attributes including cost, project manager, contributors, and timelines.",
            "Configured multiple boards per project, with board types set as private or public based on project requirements.",
            "Assigned specific contributors to boards and marked important boards as favorites for quick access.",
            "Managed board columns (e.g., New, In Progress, Done) and added multiple custom columns per board."
          ]
        },
        {
          heading: "Work Item Configuration",
          description: [
            "Created work item types including Task, Bug, Field Task.",
            "Configured work item details: description, assigned members, start and end date with time, and attachments.",
            "Supported parent-child relationships between work items for dependency tracking.",
            "Enabled cover pictures and multiple attachments for each work item."
          ]
        },
        {
          heading: "Task Assignment & Tracking",
          description: [
            "Assigned work items to multiple contributors with clear responsibilities.",
            "Tracked all work item activities, including status changes, updates, and comments.",
            "Enabled location tracking for field tasks using destination addresses on maps.",
            "Supported status updates, allowing tasks to be moved across columns within a board or to other boards within the same project."
          ]
        },
        {
          heading: "Task Recurrence & Timesheet Integration",
          description: [
            "Implemented task recurrence for automated task creation based on schedules: daily, weekly, monthly, yearly, or specific working days.",
            "Configured end dates to automatically pause recurring tasks after a specified period.",
            "Enabled task timers for start and end times; upon completion, tasks were automatically added to the timesheet, even if they spanned multiple weeks.",
            "Allowed contributors to fill timesheets daily, including project-specific descriptions."
          ]
        },
        {
          heading: "Approval Workflow",
          description: [
            "Configured timesheet approval workflows based on organizational roles and hierarchy.",
            "Submitted timesheets were routed automatically for approval, ensuring compliance and accountability.",
            "Role-based access control ensured secure and restricted operations across projects, boards, and work items."
          ]
        },
        {
          heading: "Reporting & Analytics",
          description: [
            "Generated comprehensive reports for project and resource management:",
            "   Timesheet Summary Report – overview of logged hours and task completion",
            "   Task Summary Report – detailed view of task statuses, overdue tasks, and recurring tasks.",
            "   Project Summary Report – insights on project progress, cost, and team contribution.",
            "Supported data-driven decision-making and resource planning for managers and stakeholders."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addApprovalWorkflowDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "I have extensive experience in designing and managing Approval Workflow Systems that enable automated and multi-level approvals across HR and project management processes. My work focused on configurable approval rules, role-based access, notifications, escalation management, and integration with payroll, leave, attendance, and timesheet modules.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Approval Configuration & Options",
          description: [
            "Designed flexible approval workflows with module-specific configurations (Payroll, Leave, Timesheet, Attendance).",
            "Configured four main approval strategies:",
            "   Auto Reject – requests matching specified criteria are automatically rejected.",
            "   Auto Approve – requests matching criteria are automatically approved.",
            "   Superiors – multi-level approval routing up to 10 levels of reporting managers.",
            "   Manual Approver – custom approval setup specifying role, project manager, or specific employee at each level."
          ]
        },
        {
          heading: "Multi-Level Approval Handling",
          description: [
            "Configured sequential multi-level approvals:",
            "   Requests proceed to the next level only after the previous level approver takes action.",
            "   Early rejection at any level immediately marks the request as rejected and stops further routing.",
            "Enabled revocation of requests at any approval level before final action."
          ]
        },
        {
          heading: "Escalation & Failed Approver Management",
          description: [
            "Implemented deadline-based escalation for each level:",
            "   If no action is taken within the configured timeline, the request can be routed to a failed level approver.",
            "   If the failed approver also takes no action, the request is forwarded to admin-role employees, who do not have deadlines.",
            "Ensured timely resolution and minimal bottlenecks in critical workflows."
          ]
        },
        {
          heading: "Notifications & Communication",
          description: [
            "Configured notifications to ensure transparency and accountability:",
            "   Current level approver receives action notifications.",
            "   Next level approver is notified only when the previous approver takes action.",
            "   Requestor is kept informed of approval/rejection and escalations.",
            "Notifications are role and subscription-based, ensuring only relevant users are notified according to access rights."
          ]
        },
        {
          heading: "Integration with Core Modules",
          description: [
            "Applied approval workflows across multiple modules including:",
            "   Payroll – salary revisions, loan approvals, F&F settlements",
            "   Leave – leave requests, carry-forward approvals, encashment approvals",
            "   Timesheet – timesheet submissions and timesheet approvals",
            "   Attendance – manual attendance adjustments, day-off approvals, grace period exceptions",
            "Ensured seamless integration with role-based access control, subscription management, and module-specific rules."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addOrganizatoinSettingDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "The global settings module was designed to manage core organizational configurations, subscription plans, and master data that act as the backbone for all other modules.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Subscription Management",
          description: [
            "Configured multiple subscription types such as Standard, Premium, and Elite.",
            "Supported creation of custom subscription types to meet specific organizational needs.",
            "Implemented add-on based subscriptions, which function as stand-alone features independent of primary subscription plans.",
            "Defined subscription pricing dynamically based on total licenses purchased."
          ]
        },
        {
          heading: "Role & Privilege Configuration",
          description: [
            "Designed role-based access control across modules (e.g., Admin, Manager, Employee roles).",
            "Assigned role actions per module to ensure secure and controlled access."
          ]
        },
        {
          heading: "Master Data Configuration",
          description: [
            "Created and maintained global master data such as job titles, departments, employment types, and locations.",
            "Ensured these master data sets were reusable across all modules for consistency."
          ]
        },
        {
          heading: "Technical Implementation",
          description: [
            "Enabled global settings and master data to be accessed anytime via cache mechanisms, DLL methods, or GET calls, ensuring high availability and performance."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addTenantManagementDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "The Tenant Module is designed to manage client organizations (tenants) under a multi-tenant SaaS architecture. I have worked extensively on its design, configuration, and administration, ensuring that both base tenants and sub-tenants are seamlessly onboarded and effectively managed. This module is especially critical for subscription-based platforms, as it governs client setup, licensing, feature access, and lifecycle management.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Tenant Creation & Initialization",
          description: [
            "Ability to create a new tenant (client organization) from the base tenant.",
            "While creating, configure essential details including:",
            "   Subscription Plan (Standard, Premium, Elite, or custom plans).",
            "   License Count and Pricing model based on the selected subscription.",
            "   Account Owner Information (name and email).",
            "On account owner configuration, the system automatically:",
            "   Creates the tenant environment.",
            "   Registers the account owner as an employee under the Admin role.",
            "   Initializes default configurations and master data across modules, tailored to the chosen subscription plan.",
          ]
        },
        {
          heading: "Subscription & Add-on Management",
          description: [
            "Supports base subscription features bundled within a subscription type.",
            "Enables configuration of add-on (standalone) features that do not belong to any subscription plan.",
            "Each add-on can be assigned independent licenses and pricing models.",
            "Tenants can subscribe to multiple add-ons simultaneously, enhancing flexibility and scalability.",
            "Pricing dynamically adapts based on the subscription and add-ons combined."
          ]
        },
        {
          heading: "Tenant Lifecycle Management",
          description: [
            "Tenants can be categorized as:",
            "   Paid Clients – fully licensed, production-ready accounts.",
            "   Trial Accounts – time-limited evaluation accounts.",
            "Ability to activate or deactivate tenants based on their subscription status, compliance, or business decisions.",
            "Facilitates smooth transition from trial to paid accounts with license upgrades and feature enablement."
          ]
        },
        {
          heading: "Base Tenant Governance",
          description: [
            "The base tenant retains administrative oversight over sub-tenants.",
            "Provides access to a limited but critical set of configurations within sub-tenants for monitoring and compliance.",
            "Ensures centralized governance while allowing sub-tenant independence in their internal operations."
          ]
        },
                {
          heading: "Business & Technical Impact",
          description: [
            "Simplifies client onboarding by automating setup of tenants with pre-configured defaults.",
            "Enables flexible revenue models with subscription tiers and optional add-ons.",
            "Supports scalability, allowing multiple clients and diverse business requirements to be handled simultaneously.",
            "Ensures security and access control by enforcing role-based privileges (e.g., Admin, Manager, Employee).",
            "Provides multi-tenant architecture benefits such as data isolation, configurability, and centralized oversight."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addCallTrackerDetail(): ModuleDetail {

    return null;
  }

  addPerformanceDetail(): ModuleDetail {
    let popUpDetail: ModuleDetail = {
      overview: "The performance module was designed to streamline employee evaluation cycles, goal-setting, and review processes while ensuring transparency and role-based control.",
      subHeading: "Key Areas of Expertise",
      detail: [
        {
          heading: "Performance Cycle Configuration",
          description: [
            "Supported cycle setup as yearly, half-yearly, quarterly, or monthly.",
            "Allowed multiple cycles to be configured independently for different groups or locations."
          ]
        },
        {
          heading: "Evaluation Questionnaires",
          description: [
            "Created customizable performance questions for both employees and managers.",
            "Configured question sets individually for each cycle to match business requirements."
          ]
        },
        {
          heading: "Review & Rating Workflow",
          description: [
            "Employees can self-submit performance inputs during the cycle.",
            "Managers can validate, adjust ratings, and publish final results.",
            "Ensured transparency while maintaining confidentiality across review stages."
          ]
        },
        {
          heading: "Goal Management",
          description: [
            "Enabled configuration of goals within each cycle and outside of cycles.",
            "Supported both self-defined and manager-assigned goals, aligned with organizational objectives."
          ]
        },
        {
          heading: "Role-Based Control",
          description: [
            "All actions (submission, validation, publishing) worked strictly under role and privilege settings.",
            "Ensured data security, proper authorization, and structured approval flows."
          ]
        }
      ]
    }

    return popUpDetail;
  }

  addLocationTrackerDetail(): ModuleDetail {

    return null;
  }

  onCloseActiveModule() {
    this.activeModule = null;
  }
}
