import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Heart, Shield, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-foreground">About FindIt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a community-driven platform that helps reunite lost items with their owners through the power of human kindness and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a world where lost items find their way home through community cooperation. 
                We believe that most people want to help others, and technology can make that easier than ever.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-success" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Trust, transparency, and community. We prioritize user privacy, secure communications, 
                and building genuine connections between people who want to help each other.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Items</h3>
              <p className="text-muted-foreground">
                Lost something? Found something? Report it with detailed descriptions and photos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">
                Our platform matches lost and found items, connecting people in the community.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reunite</h3>
              <p className="text-muted-foreground">
                Experience the joy of returning lost items to their grateful owners.
              </p>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-hero text-white shadow-soft">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-6 text-white/90">
              Help make the world a little bit better, one returned item at a time.
            </p>
            <Button variant="secondary" size="lg">
              Get Started Today
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;