import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Handshake, Mail, DollarSign, UserCheck } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Your financial support directly funds our programs and helps us reach more communities in need.",
      actions: ["One-time donation", "Monthly giving", "Program-specific funding"],
      color: "bg-success",
      buttonText: "Donate Now",
      buttonVariant: "success" as const
    },
    {
      icon: UserCheck,
      title: "Volunteer With Us",
      description: "Share your skills and time to make a direct impact in our programs and community initiatives.",
      actions: ["Field volunteering", "Professional skills", "Remote support"],
      color: "bg-primary",
      buttonText: "Join as Volunteer",
      buttonVariant: "default" as const
    },
    {
      icon: Handshake,
      title: "Partner With HARD",
      description: "Collaborate with us to amplify impact through strategic partnerships and joint initiatives.",
      actions: ["Corporate partnerships", "NGO collaboration", "Government liaison"],
      color: "bg-accent",
      buttonText: "Explore Partnerships",
      buttonVariant: "accent" as const
    }
  ];

  const impactLevels = [
    {
      amount: "$25",
      impact: "Provides agricultural seeds for one family's garden",
      supporters: "148 supporters"
    },
    {
      amount: "$50", 
      impact: "Funds school supplies for 10 children for one month",
      supporters: "89 supporters"
    },
    {
      amount: "$100",
      impact: "Supports healthcare training for one community health worker",
      supporters: "67 supporters"
    },
    {
      amount: "$250",
      impact: "Establishes a small community water point",
      supporters: "23 supporters"
    }
  ];

  return (
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Get Involved
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Support Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Together, we can create lasting change. Join our community of supporters and 
            help us build self-sufficient, thriving communities across South Sudan and Kenya.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-large transition-smooth overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center mb-4 shadow-soft`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {option.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {action}
                    </li>
                  ))}
                </ul>

                <Button variant={option.buttonVariant} className="w-full" size="lg" asChild>
                  <a href="#contact">{option.buttonText}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Support;