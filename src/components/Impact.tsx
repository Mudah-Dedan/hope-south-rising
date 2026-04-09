import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, MapPin, Calendar } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Calendar,
      value: "28+",
      label: "Years of Service",
      description: "Serving communities since 1995"
    },
    {
      icon: MapPin,
      value: "2",
      label: "Countries",
      description: "South Sudan & Kenya"
    },
    {
      icon: Users,
      value: "1000s",
      label: "Lives Transformed",
      description: "Families empowered annually"
    },
    {
      icon: TrendingUp,
      value: "∞",
      label: "Sustainable Impact",
      description: "Communities now self-reliant"
    }
  ];


  const achievements = [
    "Transitioned from humanitarian aid to sustainable development",
    "Built local capacity for long-term community resilience",
    "Established partnerships across South Sudan and Kenya",
    "Created self-sufficient agricultural communities",
    "Improved access to education and healthcare services",
    "Empowered thousands of families toward self-reliance"
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Transforming Lives, Building Futures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For nearly three decades, HARD has been creating lasting change in communities 
            across South Sudan and Kenya. Here's the impact we've made together.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Key Achievements */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Key Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Join Our Mission</h4>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Every donation, every partnership, every act of support helps us create 
                  more success stories like these. Together, we can build a future where 
                  every community thrives.
                </p>
                <Button variant="accent" size="lg" className="w-full">
                  Make an Impact Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;