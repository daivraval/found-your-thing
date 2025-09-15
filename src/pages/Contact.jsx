import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  For general inquiries and support
                </p>
                <p className="font-semibold">support@findit.com</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-success" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Monday - Friday, 9 AM - 6 PM EST
                </p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Innovation Drive<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-white shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Need immediate help?</h3>
                <p className="text-white/90 mb-4">
                  Check out our FAQ section for quick answers to common questions.
                </p>
                <Button variant="secondary">
                  Visit FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;