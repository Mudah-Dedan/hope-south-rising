import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Heart } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const quickLinks = [
    { label: "About HARD", href: "#about" },
    { label: "Our Programs", href: "#programs" },
    { label: "Impact Stories", href: "#impact" },
    { label: "Get Involved", href: "#support" }
  ];

  const programs = [
    { label: "Agricultural Development", href: "#programs" },
    { label: "Education Access", href: "#programs" },
    { label: "Healthcare Services", href: "#programs" },
    { label: "Emergency Response", href: "#programs" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "South Sudan Office",
      details: ["Juba, South Sudan", "Regional Headquarters"]
    },
    {
      icon: MapPin,
      title: "Kenya Office", 
      details: ["Nairobi, Kenya", "Operations Center"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hardsouthsudan.org", "partnerships@hardsouthsudan.org"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+211 XXX XXX XXX", "+254 XXX XXX XXX"]
    }
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Contact Form Section */}
        <div className="mb-16">
          <ContactForm />
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HARD</h3>
                <p className="text-xs text-primary-foreground/80">Hope Agency for Relief & Development</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Since 1995, we've been empowering communities in South Sudan and Kenya 
              through sustainable development programs that create lasting change.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm mb-1">{contact.title}</div>
                    {contact.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-primary-foreground/80 text-sm">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-primary-foreground/80">
            <span>© 2024 Hope Agency for Relief and Development (HARD). All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <span>for communities in South Sudan & Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;