import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageCircle, Shield, User, MapPin } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    icon: User,
    questions: [
      {
        question: "How do I report a lost item?",
        answer: "Click on 'Report Lost Item' button, fill out the detailed form with description, location, date, and your contact information. The more details you provide, the better chance of recovery."
      },
      {
        question: "How do I report a found item?",
        answer: "Use the 'Report Found Item' button to submit details about what you found. Include as much information as possible about the item and where you found it."
      },
      {
        question: "Do I need to create an account?",
        answer: "Currently, you can submit reports without an account. However, creating an account helps track your items and receive notifications about matches."
      }
    ]
  },
  {
    category: "Safety & Privacy",
    icon: Shield,
    questions: [
      {
        question: "How do you protect my personal information?",
        answer: "We only share contact information when there's a potential match. Your personal details are never publicly displayed and are encrypted in our system."
      },
      {
        question: "Is it safe to meet someone about a found item?",
        answer: "Always meet in public places, bring a friend if possible, and verify item details before meeting. We recommend video calls first to establish trust."
      },
      {
        question: "What if someone tries to claim an item that isn't theirs?",
        answer: "Ask for specific details only the real owner would know. Don't hand over items unless you're certain. Report suspicious activity to our support team."
      }
    ]
  },
  {
    category: "Using the Platform",
    icon: Search,
    questions: [
      {
        question: "How does the matching system work?",
        answer: "Our system compares lost and found reports based on item descriptions, categories, locations, and dates to suggest potential matches."
      },
      {
        question: "Can I edit my report after submitting?",
        answer: "Yes, you can update your reports with additional information or mark items as found/returned through your dashboard."
      },
      {
        question: "How long do reports stay active?",
        answer: "Reports remain active for 6 months by default. You can manually close them earlier or extend them if needed."
      }
    ]
  },
  {
    category: "Communication",
    icon: MessageCircle,
    questions: [
      {
        question: "How do I contact someone about their lost item?",
        answer: "Use the contact information provided in the report. Always be respectful and provide proof that you have their item."
      },
      {
        question: "What should I include when contacting someone?",
        answer: "Mention specific details about the item, where you found it, and suggest a safe meeting location. Be patient as people may be cautious."
      },
      {
        question: "What if the owner doesn't respond?",
        answer: "Try different contact methods if provided. If no response after a week, you can report the item to local authorities or keep it safely."
      }
    ]
  },
  {
    category: "Locations & Areas",
    icon: MapPin,
    questions: [
      {
        question: "What areas does FindIt cover?",
        answer: "FindIt works in any location! Users can specify any city, neighborhood, or landmark where items were lost or found."
      },
      {
        question: "Can I search for items in specific areas?",
        answer: "Yes, use our location filter to search for lost and found items in specific neighborhoods, cities, or near landmarks."
      },
      {
        question: "Should I include exact addresses?",
        answer: "For privacy and safety, use general areas like 'near Central Park' or 'Downtown Mall' rather than specific addresses."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about using FindIt
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredFAQs.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.category} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-white rounded-lg p-2">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription>
                        {category.questions.length} questions
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.category}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try different search terms or browse through our categories above.
            </p>
          </div>
        )}

        {/* Still need help */}
        <Card className="mt-12 bg-gradient-hero text-white shadow-soft max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-white/90 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Support
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-white/10 border-white/30 text-white">
                <HelpCircle className="h-4 w-4 mr-2" />
                Live Chat
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;