import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sprout, GraduationCap, Heart, Shield, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Sprout,
      title: "Agricultural Development",
      description: "Empowering farmers with modern techniques, sustainable practices, and access to resources for increased agricultural productivity and food security.",
      features: [
        "Sustainable farming techniques",
        "Crop diversification programs", 
        "Farmer training workshops",
        "Agricultural equipment support"
      ],
      color: "bg-success",
      badge: "Food Security"
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Building educational infrastructure and programs to ensure children and adults have access to quality education and skill development.",
      features: [
        "School construction & renovation",
        "Teacher training programs",
        "Adult literacy classes", 
        "Vocational skills training"
      ],
      color: "bg-primary",
      badge: "Education"
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Providing essential healthcare services and building community health capacity through training and infrastructure development.",
      features: [
        "Community health programs",
        "Healthcare worker training",
        "Medical equipment support",
        "Preventive care initiatives"
      ],
      color: "bg-accent",
      badge: "Healthcare"
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Rapid response to humanitarian crises, providing immediate relief while building long-term resilience in affected communities.",
      features: [
        "Disaster preparedness",
        "Emergency relief distribution",
        "Crisis response coordination",
        "Community resilience building"
      ],
      color: "bg-destructive",
      badge: "Emergency"
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center shadow-soft`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline">{program.badge}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary-hover">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                </Button>
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