import { Button } from "@/components/ui/button";
import { Heart, Users, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl text-white">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold">Since 1995</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Hope,
            <span className="text-accent block">Empowering Communities</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Hope Agency for Relief and Development (HARD) has been transforming lives in South Sudan 
            and Kenya for over 28 years, fostering self-sufficiency through agriculture, education, and healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#programs">
                <Users className="w-5 h-5" />
                Our Programs
              </a>
            </Button>
            <Button variant="accent" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#contact">
                <Heart className="w-5 h-5" />
                Support Our Mission
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-accent mb-1">28+</div>
              <div className="text-sm text-white/80">Years of Service</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-accent mb-1">2</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-accent mb-1">∞</div>
              <div className="text-sm text-white/80">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <Sprout className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;