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

const applySteps = (jobTitle: string) => [
  "Submit a typed cover letter explaining your motivation and suitability",
  "Include a comprehensive CV, copies of academic/professional testimonials, and contact details of at least two traceable professional referees",
  "Email to: info@hardsouthsudan.org",
  "Copy to: andreaamet@hardsouthsudan.org; wmudah@hardsouthsudan.org; oscarodhiambo@hardsouthsudan.org; williamdeng@hardsouthsudan.org",
  `Subject line: "${jobTitle} – EFASS"`,
  "Open to South Sudanese nationals only. No hand-delivered or hardcopy applications will be accepted.",
];

const DEADLINE = "11 September 2026 at 5:00 PM CAT";
const PROJECT = "Education for All South Sudan (EFASS)";
const START = "15th September 2026";

const vacancies: Vacancy[] = [
  {
    title: "Education Coordinator",
    location: "Roving – Jur River County and Wau County, WBeGS",
    positions: "One (1)",
    reportsTo: "Programme Manager",
    startDate: START,
    project: PROJECT,
    education:
      "Master's or Bachelor's degree in Education, Educational Planning, Curriculum and Instruction or a closely related field.",
    experience: [
      "Substantial experience in education programming in South Sudan or similar contexts.",
      "Experience working with formal schools, alternative education/ALP and out-of-school children programming.",
      "Demonstrated understanding of foundational literacy and numeracy and learning-recovery approaches.",
      "Experience in teacher training and continuous professional development, including coaching, mentoring and school-based professional development.",
      "Experience with Structured Pedagogy, Teaching at the Right Level (TaRL), ALP or similar evidence-based approaches is highly desirable.",
    ],
    languages: [
      "English – fluent",
      "Arabic – strong working proficiency highly desirable",
      "Local languages of Wau and Jur River Counties – added advantage",
    ],
    skills: [
      "Deep knowledge of South Sudan's education system, policies and curriculum",
      "Strong understanding of classroom pedagogy, with the ability to observe lessons and recommend practical improvements",
      "Strong knowledge of foundational literacy and numeracy",
      "Strong understanding of learner assessment, competency-based grouping and differentiated learning",
      "Strong coordination, representation and report-writing skills",
    ],
    responsibilities: [
      "Provide overall technical leadership for planning, implementation and monitoring of HARD's EFASS education interventions",
      "Translate EFASS strategies and technical standards into county, school and classroom-level implementation",
      "Lead preparation of work plans, implementation schedules and technical priorities",
      "Provide day-to-day technical guidance to School Officers and Community Mobilisers",
      "Lead learning recovery approaches: Structured Pedagogy, remedial TaRL and TaRL-infused ALP",
      "Oversee learner screening, assessment, placement and progression into appropriate learning pathways",
      "Coordinate teacher training, coaching and mentorship for teachers, facilitators and headteachers",
      "Represent HARD with SMoGEI, County Education Departments, IRC and consortium technical forums",
      "Maintain quality assurance, adaptive management and timely reporting",
    ],
    deadline: DEADLINE,
    howToApply: applySteps("EDUCATION COORDINATOR"),
  },
  {
    title: "School Officer",
    location: "Jur River County (4) and Wau County (4), WBeGS",
    positions: "Eight (8)",
    reportsTo: "Education Coordinator",
    startDate: START,
    project: PROJECT,
    education:
      "Bachelor's degree in Education from a recognised university preferred. Additional training in TaRL, ALP, learner assessment, inclusive education or teacher development is an added advantage.",
    experience: [
      "Practical experience working with schools, teachers and learners.",
      "Good understanding of the South Sudan education system and curriculum.",
      "Experience in classroom teaching, teacher support, coaching or school supervision is desirable.",
      "Experience with formal schools, ALP or out-of-school children programming is an advantage.",
      "Experience working with PTAs, SMCs, communities and education authorities is an advantage.",
    ],
    languages: [
      "English – good spoken and written",
      "Arabic – working knowledge desirable",
      "Local languages of Wau and Jur River Counties – added advantage",
    ],
    skills: [
      "Ability to observe lessons and give practical feedback to teachers",
      "Good communication, facilitation and interpersonal skills",
      "Basic report-writing and data-collection skills",
      "Understanding of gender equality, disability inclusion and child safeguarding",
      "Willingness to be based in the Payams where schools are located",
      "Motorcycle riding skills with a valid licence is required",
    ],
    responsibilities: [
      "Support day-to-day implementation of EFASS activities in assigned schools and communities",
      "Conduct regular school and classroom visits and support teachers",
      "Support Structured Pedagogy, TaRL, remedial learning and ALP approaches",
      "Support learner assessment, grouping, placement, attendance and progression",
      "Support teacher training, coaching, mentoring and Teacher Learning Circles",
      "Support identification and enrolment of out-of-school and marginalised children",
      "Promote girls' education and inclusion of children with disabilities",
      "Work closely with headteachers, PTAs, SMCs and Payam/County education authorities",
      "Collect and submit accurate programme and education data and field reports",
    ],
    deadline: DEADLINE,
    howToApply: applySteps("SCHOOL OFFICER"),
  },
  {
    title: "Disability Inclusion Officer",
    location: "Roving – Jur River County and Wau County, WBeGS",
    positions: "One (1)",
    reportsTo: "Program Manager",
    startDate: START,
    project: PROJECT,
    education:
      "Bachelor's degree in Special Needs Education, Education, Social Work, Educational Psychology, Social Sciences or a closely related field.",
    experience: [
      "At least 3 years of relevant experience in disability inclusion, inclusive education or special needs education.",
      "Practical experience working with children with disabilities is essential.",
      "Experience working in schools and with teachers is highly desirable.",
      "Experience in humanitarian, development or NGO programming is desirable.",
    ],
    languages: [
      "English – good spoken and written",
      "Arabic – working knowledge desirable",
      "Local languages of Wau and Jur River Counties – added advantage",
    ],
    skills: [
      "Good understanding of disability-inclusive education and barriers in South Sudan",
      "Ability to support teachers to make classrooms more inclusive",
      "Good understanding of child safeguarding and protection",
      "Strong community mobilisation and facilitation skills",
      "Ability to train, coach and mentor teachers and programme staff",
      "Basic computer skills, including Microsoft Word and Excel",
    ],
    responsibilities: [
      "Lead disability-inclusion activities under the EFASS programme",
      "Identify children with disabilities and barriers to their access and participation",
      "Support assessment and identification of reasonable accommodations for learners",
      "Support teachers to apply inclusive classroom practices and adapted materials",
      "Support identification and referral of children requiring specialised services",
      "Work with PTAs, SMCs, parents and community leaders to address stigma and discrimination",
      "Support collection and confidential analysis of disability-disaggregated data",
      "Monitor participation and learning outcomes of children with disabilities",
      "Contribute to programme reports, work plans and monitoring activities",
    ],
    deadline: DEADLINE,
    howToApply: applySteps("DISABILITY INCLUSION OFFICER"),
  },
  {
    title: "Data Entry Supervisor",
    location: "Roving – Jur River County and Wau County, WBeGS",
    positions: "One (1)",
    reportsTo: "Program Manager",
    startDate: START,
    project: PROJECT,
    education:
      "Bachelor's degree in Statistics, Monitoring and Evaluation, Information Technology, Data Analytics, Data Science, Management Information Systems, Economics, Applied Mathematics, Social Sciences or a related field.",
    experience: [
      "At least 5 years of relevant experience in data management, M&E, data entry or programme monitoring.",
      "Experience managing large datasets and maintaining databases.",
      "Experience using digital data-collection tools, particularly Kobo, is highly desirable.",
      "Experience in education data management information systems is an advantage.",
    ],
    languages: [
      "English – good spoken and written",
      "Arabic – working knowledge desirable",
      "Local languages of Wau and Jur River Counties – added advantage",
    ],
    skills: [
      "Strong Microsoft Excel and Access skills",
      "Ability to clean, verify, organise and analyse data",
      "Strong attention to detail and accuracy",
      "Ability to produce clear data summaries and reports",
      "Ability to maintain confidentiality of sensitive information",
      "Ability to work under pressure and meet reporting deadlines",
    ],
    responsibilities: [
      "Serve as the MEAL and data focal point for HARD's EFASS implementation",
      "Coordinate data collection, entry, cleaning, verification and reporting",
      "Maintain accurate databases for learners, teachers, schools, activities and indicators",
      "Track enrolment, attendance, assessment, retention, progression and transition",
      "Conduct regular Data Quality Assessments and field verification visits",
      "Manage Kobo Collect and other approved digital data systems; support EMIS and SSSAMS alignment",
      "Prepare data summaries, dashboards and performance reports for donor and consortium reporting",
      "Ensure compliance with data protection, safeguarding and informed consent requirements",
      "Train field staff on data tools, reporting standards and data quality",
    ],
    deadline: DEADLINE,
    howToApply: applySteps("DATA ENTRY SUPERVISOR"),
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
