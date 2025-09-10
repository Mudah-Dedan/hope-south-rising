import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Target, Globe, Award } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      description: "Established during civil war to provide humanitarian support to Southern Sudan communities"
    },
    {
      year: "2000s",
      title: "Expansion",
      description: "Systematically increased capacity and expanded operations across the region"
    },
    {
      year: "2010s", 
      title: "Development Focus",
      description: "Transitioned from purely humanitarian aid to long-term development programs"
    },
    {
      year: "Today",
      title: "Self-Sufficiency",
      description: "Empowering communities to become self-reliant through sustainable development"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to facilitating community self-sufficiency and sustainable development"
    },
    {
      icon: Globe,
      title: "Regional Impact", 
      description: "Operating across South Sudan and Kenya with deep local understanding"
    },
    {
      icon: Award,
      title: "Proven Experience",
      description: "28+ years of transforming humanitarian challenges into development opportunities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <History className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About HARD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from necessity during conflict, grown through commitment to communities. 
            HARD represents hope, resilience, and the power of sustainable development.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-background rounded-2xl p-8 md:p-12 mb-16 shadow-medium">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To facilitate communities in becoming self-sufficient and self-reliant by contributing to 
              agricultural production, access to education, healthcare, and sustainable development 
              initiatives across South Sudan and Kenya.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="text-accent font-bold text-2xl mb-2">{milestone.year}</div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;