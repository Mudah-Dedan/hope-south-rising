import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sprout, GraduationCap, Heart, Shield, Clock, Users } from "lucide-react";

// Import program images
import gess1 from "@/assets/programs/gess-1.jpg";
import gess2 from "@/assets/programs/gess-2.jpg";
import gess3 from "@/assets/programs/gess-3.jpg";
import gfs1 from "@/assets/programs/gfs-1.jpg";
import gfs2 from "@/assets/programs/gfs-2.jpg";
import gfs3 from "@/assets/programs/gfs-3.jpg";
import icsp1 from "@/assets/programs/icsp-1.jpg";
import icsp2 from "@/assets/programs/icsp-2.jpg";
import icsp3 from "@/assets/programs/icsp-3.jpg";
import sadit1 from "@/assets/programs/sadit-1.jpg";
import sadit2 from "@/assets/programs/sadit-2.jpg";
import sadit3 from "@/assets/programs/sadit-3.jpg";
import wahafa1 from "@/assets/programs/wahafa-1.jpg";
import wahafa2 from "@/assets/programs/wahafa-2.jpg";
import wahafa3 from "@/assets/programs/wahafa-3.jpg";

const Programs = () => {
  const ongoingPrograms = [
    {
      icon: GraduationCap,
      title: "Education",
      color: "bg-primary",
      projects: [
        {
          name: "Girls' Education South Sudan (GESS)",
          duration: "Ongoing - GESS 1: 2014-2018, GESS 2: 2019-Present",
          donors: "FCDO/UKAID, Global Affairs Canada, European Union, Sweden, Norwegian Embassy, Government of South Sudan",
          description: "Transform the life chances of South Sudanese children—particularly girls—by improving enrolment, retention, and learning outcomes through behaviour change communication, cash transfers, capitation grants, and teacher professional development in Western Bahr el Ghazal.",
          highlights: [
            "21,571 eligible girls and boys with disabilities receiving cash transfers in WBG",
            "297 primary and 33 secondary schools supported in WBeG",
            "Enhanced teaching quality and school governance",
            "Strengthened education systems with reliable data"
          ],
          images: [gess1, gess2, gess3]
        },
        {
          name: "Geared for Success (GFS)",
          duration: "2022 – 2028 (6 years)",
          donors: "Global Affairs Canada via War Child and Oxfam",
          description: "Enhance equitable and inclusive learning outcomes for refugee, internally displaced, and host community children and youth—particularly girls—by strengthening CBOs and advancing gender-responsive education.",
          highlights: [
            "286,770 people reached (56,100 direct beneficiaries, 62% female)",
            "Six CBO partners supported in South Sudan",
            "WASH facilities and learning spaces rehabilitated",
            "Policy influence through Together for Learning campaign"
          ],
          images: [gfs1, gfs2, gfs3]
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
          ],
          images: [icsp1, icsp2, icsp3]
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
          ],
          images: [wahafa1, wahafa2, wahafa3]
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
          ],
          images: [sadit1, sadit2, sadit3]
        }
      ]
    }
  ];

  const pastPrograms = [
    {
      name: "European Union (EU) Projects",
      duration: "Completed",
      description: "Implemented various humanitarian and development interventions across South Sudan focusing on emergency response and community resilience.",
      areas: ["Emergency Response", "Community Development"]
    },
    {
      name: "Christian Aid - UKAM Project",
      duration: "Completed",
      description: "Collaborated with Christian Aid on initiatives promoting sustainable livelihoods and community empowerment in targeted regions.",
      areas: ["Livelihoods", "Capacity Building"]
    },
    {
      name: "CORDAID Projects",
      duration: "Completed",
      description: "Partnership projects with CORDAID focusing on food security, health, and protection services for vulnerable communities.",
      areas: ["Food Security", "Health", "Protection"]
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
            our programs create lasting positive change in communities across South Sudan.
          </p>
        </div>

        {/* Ongoing Programs */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Current Programs</h3>
          </div>
          
          <div className="space-y-8">
            {ongoingPrograms.map((category, categoryIndex) => (
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
                      <AccordionItem key={projectIndex} value={`ongoing-${categoryIndex}-${projectIndex}`} className="border-b last:border-b-0">
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
                            {/* Image Gallery */}
                            {project.images && project.images.length > 0 && (
                              <div className="mb-6">
                                <h5 className="font-semibold text-sm text-foreground mb-3">Project Gallery</h5>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {project.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-smooth aspect-video">
                                      <img 
                                        src={image} 
                                        alt={`${project.name} - Image ${imgIndex + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

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
        </div>

        {/* Past Programs */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Past Key Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{program.duration}</Badge>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">{program.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.areas.map((area, areaIndex) => (
                      <Badge key={areaIndex} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Heart className="w-5 h-5" />
                Support Our Programs
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Partner With Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
