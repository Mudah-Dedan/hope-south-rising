import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, ChevronDown, ChevronUp, Briefcase, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Vacancy {
  title: string;
  location: string;
  positions: string;
  reportsTo: string;
  startDate: string;
  project: string;
  education: string;
  experience: string[];
  languages: string[];
  skills: string[];
  responsibilities: string[];
  deadline: string;
  howToApply: string[];
}

const vacancies: Vacancy[] = [
  {
    title: "Education Coordinator",
    location: "Roving – Wau County and Raja County, WBGS",
    positions: "One (1)",
    reportsTo: "Program Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "Master's or Bachelor's degree in Education or equivalent qualification.",
    experience: [
      "Minimum 5 years of relevant experience in educational project management, preferably in humanitarian or development settings.",
    ],
    languages: ["English – fluent", "Arabic – fluent", "Local languages in Wau and Raja Counties – added advantage"],
    skills: [
      "Excellent interpersonal, organizational and communication skills",
      "Proficiency in Microsoft Office (Word, Excel, PowerPoint, Outlook)",
      "Motorcycle riding skills with a valid license",
    ],
    responsibilities: [
      "Lead planning, implementation, and monitoring of education programs",
      "Provide technical guidance on ASEP and other learning pathways",
      "Ensure integration of protection, safeguarding, gender, and inclusion",
      "Liaise with education authorities and stakeholders",
      "Represent organization in coordination forums",
      "Ensure adherence to standards and donor requirements",
      "Support MEAL systems and reporting",
      "Train staff, teachers and county education department staff",
      "Prepare reports and project-wide work plans",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for Education Coordinator – P2E"',
    ],
  },
  {
    title: "Education Project Officer",
    location: "Wau County and Raja County, WBGS",
    positions: "Three (3)",
    reportsTo: "Program Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "Bachelor's degree in Education or a related field.",
    experience: [
      "Minimum 4 years of relevant experience in Education, Pedagogy, and Education Policy in South Sudan.",
      "Experience with community-based education, ASEP and other non-formal education pathways.",
    ],
    languages: ["English – fluent", "Arabic – intermediate", "Local languages – added advantage"],
    skills: [
      "Excellent interpersonal, organizational and communication skills",
      "Proficiency in Microsoft Office (Word, Excel, PowerPoint, Outlook)",
      "Motorcycle riding skills with a valid license",
    ],
    responsibilities: [
      "Support ASEP implementation and formal education programming",
      "Coordinate school enrolment campaigns",
      "Facilitate distribution of learning materials with proper documentation",
      "Support teacher and school committee trainings",
      "Promote inclusive and safe learning environments",
      "Work closely with County Education Departments (CED)",
      "Write regular activity reports",
      "Collect data for monitoring project progress",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for Education Project Officer – P2E"',
    ],
  },
  {
    title: "Livelihoods Project Officer",
    location: "Wau County and Raja County, WBGS",
    positions: "Two (2)",
    reportsTo: "Program Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "Bachelor's degree in Business, Economics, Entrepreneurship or a closely related field.",
    experience: [
      "Minimum 4 years of relevant experience in livelihoods and economic empowerment strategies for rural youth populations in WBG-South Sudan.",
      "Experience in youth innovation pathways to develop creative solutions.",
      "Experience in micro-finance management, financial inclusion and linkages strategies.",
    ],
    languages: ["English – fluent", "Arabic – intermediate", "Local languages – added advantage"],
    skills: [
      "Excellent interpersonal, organizational and communication skills",
      "Proficiency in Microsoft Office (Word, Excel, PowerPoint, Outlook)",
      "Motorcycle riding skills with a valid license",
    ],
    responsibilities: [
      "Facilitate life skills and employment-focused soft skills training for youth",
      "Provide career guidance and counselling across ASEP schools, TVET, and tertiary institutions",
      "Organize and implement soft skills workshops and youth boot camps",
      "Coordinate and deliver i-UPSHIFT entrepreneurship training",
      "Support youth selection, innovation challenges, and business pitching",
      "Facilitate access to seed funding and post-funding mentorship",
      "Organize job fairs, job forums, and employer engagement platforms",
      "Facilitate apprenticeship placements and job matching",
      "Support establishment of Youth Savings Groups (VSLAs)",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for Livelihoods Project Officer – P2E"',
    ],
  },
  {
    title: "Gender, Diversity and Inclusion (GDI) Officer",
    location: "Wau County and Raja County / Roving in WBGS",
    positions: "One (1)",
    reportsTo: "Program Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "Bachelor's degree in Gender Studies, Sociology, Social Sciences, Development Studies or similar.",
    experience: [
      "Minimum 5 years of relevant experience in GESI, GBV and protection in NGO Programming.",
      "Experience in Gender Equality and Social Inclusion (GESI), GBV, and protection work.",
    ],
    languages: ["English – fluent", "Arabic – fluent", "Local languages – added advantage"],
    skills: [
      "Excellent interpersonal, organizational and communication skills",
      "Advocacy and activism experience",
      "Strong training and facilitation skills",
      "Motorcycle riding skills with a valid license – added advantage",
    ],
    responsibilities: [
      "Lead GDI integration across project activities",
      "Facilitate community awareness on gender equality and GBV",
      "Support inclusive programming",
      "Conduct trainings for staff and communities",
      "Monitor and report on GDI outputs and outcomes",
      "Support safeguarding and PSEA compliance",
      "Promote participation of vulnerable groups",
      "Conduct gender analysis to inform design",
      "Facilitate feedback and complaints mechanisms",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for GDI Officer – P2E"',
    ],
  },
  {
    title: "Assistant Monitoring & Evaluation (M&E) Officer",
    location: "Wau County and Raja County, WBGS",
    positions: "Two (2)",
    reportsTo: "Program Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "Diploma/Bachelor's degree in Statistics, Data Analysis, Data Science, Mathematics, Economics, Development Studies, Education or a related field.",
    experience: [
      "Minimum 3 years of relevant experience in MEAL in NGO Programming.",
      "Experience in Performance Monitoring Frameworks/Logframes.",
      "Proficiency in data analysis software (SPSS, STATA) and mobile data collection tools (ODK, Kobo Toolbox).",
    ],
    languages: ["English – fluent", "Arabic – intermediate", "Local languages – added advantage"],
    skills: [
      "Excellent interpersonal, organizational and communication skills",
      "Proficiency in Microsoft Office (Word, Excel, PowerPoint, Outlook)",
      "Motorcycle riding skills with a valid license",
    ],
    responsibilities: [
      "Support data collection, verification, and reporting processes",
      "Maintain project databases and tracking tools",
      "Assist in monitoring indicators and progress",
      "Support MEAL system strengthening",
      "Participate in field monitoring visits",
      "Conduct data quality assessments (DQAs)",
      "Support dashboards and analysis reporting",
      "Facilitate feedback and complaints mechanisms",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for Assistant M&E Officer – P2E"',
    ],
  },
  {
    title: "Accountant",
    location: "Wau, WBGS",
    positions: "One (1)",
    reportsTo: "Finance Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "Bachelor's degree in Accounting, Finance, Business Administration, or a related field.",
    experience: [
      "Minimum 3 years of relevant experience in financial management within the NGO sector.",
    ],
    languages: ["English – fluent", "Arabic – intermediate", "Local languages – added advantage"],
    skills: [
      "Knowledge and practical experience with QuickBooks accounting system",
      "Proficiency in Microsoft Office (Word, Excel, PowerPoint, Outlook)",
      "Strong organizational and multitasking abilities",
      "High level of integrity, flexibility, and professionalism",
    ],
    responsibilities: [
      "Assist with preparation and monitoring of annual budgets and financial reports",
      "Implement financial policies and procedures",
      "Maintain appropriate filing of financial records",
      "Prepare bank deposits and perform monthly reconciliations",
      "Prepare requests for cash and reconcile cash advances",
      "Produce invoices and follow up on outstanding payments",
      "Ensure all expenses are approved by appropriate authority",
      "Assist in preparing for financial audits",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for Accountant – P2E"',
    ],
  },
  {
    title: "Finance Assistant",
    location: "Wau, WBGS",
    positions: "One (1)",
    reportsTo: "Finance Manager",
    startDate: "1st May 2026",
    project: "Pathways to Empowerment for Youth (P2E)",
    education: "At least a Bachelor's degree in Accounting, Finance, or a related field.",
    experience: [
      "Minimum 3 years of experience.",
      "Knowledge and practical experience with QuickBooks accounting system is mandatory.",
    ],
    languages: ["English – fluent", "Arabic – intermediate", "Local languages – added advantage"],
    skills: [
      "Strong computer skills (Microsoft Word, Excel, PowerPoint, Outlook)",
      "Detail-oriented with strong organizational and multitasking abilities",
      "Self-driven, proactive, and results-oriented",
      "High level of integrity, flexibility, and professionalism",
    ],
    responsibilities: [
      "Ensure compliance with financial accounting regulations and standards",
      "Support local banking activities and processing accounts payable",
      "Oversee integration and use of accounting software",
      "Maintain secure backups of all financial records",
      "Support project staff in understanding accounting systems",
      "Create, send, and track invoices; check and approve expense claims",
      "Record financial transactions and keep updated databases",
      "Reconcile bank statements and accounts",
      "Assist with preparation of reports and budgeting",
    ],
    deadline: "25th April 2026 at 5:00 PM",
    howToApply: [
      "Submit application letter addressed to the Executive Director, HARD",
      "Include CV, copies of academic certificates, and 3 professional references",
      "Email to: info@hardsouthsudan.org", "Copy to: wmudah@hardsouthsudan.org; williamdeng@hardsouthsudan.org; philip.otieno@hardsouthsudan.org",
      'Subject line: "Application for Finance Assistant – P2E"',
    ],
  },
];

const VacancyCard = ({ vacancy }: { vacancy: Vacancy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-border hover:shadow-md transition-smooth">
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl text-primary">{vacancy.title}</CardTitle>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {vacancy.location}
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} /> {vacancy.positions} position(s)
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Start: {vacancy.startDate}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={14} /> {vacancy.project}
              </span>
            </div>
          </div>
          <div className="text-muted-foreground mt-1">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-6 pt-0">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Responsibilities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {vacancy.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">{vacancy.education}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Reports To</h4>
              <p className="text-sm text-muted-foreground">{vacancy.reportsTo}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Experience Required</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {vacancy.experience.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Languages</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {vacancy.languages.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Skills</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {vacancy.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">How to Apply</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {vacancy.howToApply.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-destructive mt-3">
              Deadline: {vacancy.deadline}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              HARD is an equal opportunity employer. Qualified women and persons with disabilities are strongly encouraged to apply.
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const Vacancies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-1">
                <ArrowLeft size={16} /> Back to Home
              </a>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Current Vacancies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join HARD and make a difference in the lives of communities across South Sudan. 
              All positions are under the <strong>Pathways to Empowerment for Youth (P2E)</strong> project, 
              funded by the Mastercard Foundation in partnership with War Child Canada.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <VacancyCard key={index} vacancy={vacancy} />
            ))}
          </div>

          <div className="text-center mt-12 bg-secondary/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">General Application Information</h3>
            <p className="text-muted-foreground text-sm">
              All applications should be addressed to <strong>info@hardsouthsudan.org</strong> and copied to <strong>wmudah@hardsouthsudan.org</strong>, <strong>williamdeng@hardsouthsudan.org</strong>, and <strong>philip.otieno@hardsouthsudan.org</strong>. 
              Only shortlisted candidates will be contacted. HARD is an equal opportunity employer — 
              qualified women and persons with disabilities are strongly encouraged to apply.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vacancies;
