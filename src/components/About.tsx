import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Target, Globe, Award, Shield } from "lucide-react";

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
      title: "Commitment to the Vulnerable",
      description: "We are committed to the poor and the vulnerable, to relieving their suffering and promoting transformation to the conditions of life."
    },
    {
      icon: Globe,
      title: "Respect and Collaboration",
      description: "We value and respect all our stakeholders and collaborate with other organizations. We act in ways that respect the dignity, spirituality, uniqueness and intrinsic worth of every person."
    },
    {
      icon: Award,
      title: "Equality and Participation",
      description: "We work with the vulnerable as active participants emphasizing equality, impartiality and non-discrimination."
    },
    {
      icon: Shield,
      title: "Professionalism and Accountability",
      description: "We believe in professionalism, sustainability of our resources and the environment, transparency and accountability in our work."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <History className="w-4 h-4 mr-2" />
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hope Agency for Relief and Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            HARD is a National South Sudanese NGO established in 1995 at the height of civil war to support communities in the then Southern Sudan region. From providing humanitarian support to IDPs, we have systematically grown into implementing comprehensive emergency and long-term development programmes.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            <strong>Our Geographic Focus:</strong> We currently operate in Warrap State (Gogrial East, Tonj North) and Western Bahr el Ghazal State, with offices in Wau (Head Office), Juba, and Aweil.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-background rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An empowered South Sudan where all individuals operating to its full potential in all aspects of human life in gender-just, inclusive and equitable society.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To transform the communities in South Sudan by promoting gender-equality, safeguarding rights, and facilitating sustainable development through inclusive access to Education, health, agriculture and economic opportunities.
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

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Thematic Areas */}
        <div className="bg-background rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">Thematic Areas of Intervention</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span>Food Security and Livelihoods</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span>Health and Nutrition</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span>Education and Adult Literacy</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span>Peace Building & Human Rights</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span>WASH</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span>Emergency Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;