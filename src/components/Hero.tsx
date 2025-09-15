import { Button } from "@/components/ui/button";
import { Search, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  onShowLostForm: () => void;
  onShowFoundForm: () => void;
}

const Hero = ({ onShowLostForm, onShowFoundForm }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Lost Something?
              <br />
              <span className="text-white/90">We'll Help You Find It</span>
            </h1>
            <p className="text-xl mb-8 text-white/80 leading-relaxed">
              Connect with your community to reunite lost items with their owners. 
              Report what you've lost or found, and help make someone's day better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={onShowLostForm}
                className="flex items-center gap-2"
              >
                <Search className="h-5 w-5" />
                I Lost Something
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onShowFoundForm}
                className="flex items-center gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Heart className="h-5 w-5" />
                I Found Something
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src={heroImage} 
              alt="Lost and found items illustration"
              className="rounded-lg shadow-soft w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;