import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sprout, GraduationCap, Heart, Shield, ArrowRight, Users, Droplet } from "lucide-react";

const Programs = () => {
  const programCategories = [
    {
      icon: GraduationCap,
      title: "Education",
      color: "bg-primary",
      projects: [
        {
          name: "Girls' Education South Sudan (GESS)",
          duration: "May 2019 – March 2024",
          donors: "FCDO/UKAID, Global Affairs Canada, European Union, Sweden, Norwegian Embassy, Government of South Sudan",
          description: "Transform the life chances of South Sudanese children—particularly girls—by improving enrolment, retention, and learning outcomes through behaviour change communication, cash transfers, capitation grants, and teacher professional development.",
          highlights: [
            "972,559 girls supported nationwide with cash transfers",
            "297 primary and 33 secondary schools supported in WBeG",
            "Enhanced teaching quality and school governance",
            "Strengthened education systems with reliable data"
          ]
        },
        {
          name: "Geared for Success (GFS)",
          duration: "2022 – 2028 (6 years)",
          donors: "Global Affairs Canada via War Child and Oxfam",
          description: "Enhance equitable and inclusive learning outcomes for refugee, internally displaced, and host community children and youth—particularly girls—by strengthening CBOs and advancing gender-responsive education.",
          highlights: [
            "286,770 people reached (56,100 direct beneficiaries, 62% female)",
            "Six CBO partners supported in South Sudan and Uganda",
            "WASH facilities and learning spaces rehabilitated",
            "Policy influence through Together for Learning campaign"
          ]
        }
      ]
    },
    {
      icon: Sprout,
      title: "Food Security & Livelihoods / WASH",
      color: "bg-success",
      projects: [
        {
          name: "Multi-Sectoral Emergency Response & Resilience (ICSP)",
          duration: "2023 – 2027 (5 years)",
          donors: "Ireland's Civil Society Programme",
          description: "Enhance opportunities, protection, and voice for women and girls while strengthening the resilience of IDPs and host communities in Gogrial East and Tonj North through cash assistance, water rehabilitation, and agricultural support.",
          highlights: [
            "Multi-purpose cash assistance for vulnerable households",
            "Boreholes rehabilitated with trained water user committees",
            "Agricultural inputs and agro-ecological practices promoted",
            "Community action groups trained for disaster risk management"
          ]
        },
        {
          name: "Welthungerhilfe Anticipatory Action Facility (WAHAFA)",
          duration: "March 2024 – March 2025",
          donors: "German Federal Foreign Office via Welthungerhilfe",
          description: "Strengthen community preparedness and response to climate-induced hazards (floods and droughts) through development and piloting of Early Action Protocols guided by scientific forecasts and traditional indicators.",
          highlights: [
            "Over 300 individuals engaged in EAP development",
            "Draft flood and drought EAPs developed and submitted",
            "Enhanced community-government collaboration",
            "SIMEX multipurpose cash transfer simulation conducted"
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: "Emergency Response",
      color: "bg-destructive",
      projects: [
        {
          name: "Safe and Dignified Transitions (SADiT)",
          duration: "October 2024 – November 2025",
          donors: "PRM via Concern World Wide",
          description: "Decrease morbidity and mortality and improve dignity among refugees, returnees, and host communities affected by the Sudan conflict through gender-sensitive health, nutrition, and protection services.",
          highlights: [
            "26,280 people reached with health services",
            "1,200 pregnant/lactating women supported with cash for nutrition",
            "MUAC screening for children 6-59 months",
            "Survivors connected to psychosocial, legal, and health services"
          ]
        }
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sprout className="w-4 h-4 mr-2" />
            Our Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From emergency humanitarian support to long-term development initiatives, 
            our programs are designed to create lasting positive change in communities.
          </p>
        </div>

        {/* Programs by Category */}
        <div className="space-y-8 mb-12">
          {programCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="bg-gradient-subtle">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center shadow-soft`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-foreground">{category.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-1">{category.projects.length} Active {category.projects.length === 1 ? 'Project' : 'Projects'}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {category.projects.map((project, projectIndex) => (
                    <AccordionItem key={projectIndex} value={`item-${categoryIndex}-${projectIndex}`} className="border-b last:border-b-0">
                      <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                        <div className="flex flex-col items-start text-left">
                          <h4 className="font-semibold text-lg text-foreground">{project.name}</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.duration}
                            </Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="space-y-4 pt-2">
                          <div>
                            <h5 className="font-semibold text-sm text-foreground mb-1">Donors</h5>
                            <p className="text-sm text-muted-foreground">{project.donors}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm text-foreground mb-2">Overview</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm text-foreground mb-2">Key Highlights</h5>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, highlightIndex) => (
                                <li key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Make a Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in creating sustainable change. Whether through donations, volunteering, 
            or partnerships, your support helps us build stronger, more resilient communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Heart className="w-5 h-5" />
              Support Our Programs
            </Button>
            <Button variant="outline" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;