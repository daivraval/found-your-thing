import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, MapPin, User, MessageCircle, Phone, Mail, Eye, Clock, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ItemDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Mock item data - in real app, fetch by ID
  const [item] = useState({
    id: "1",
    title: "iPhone 13 Pro - Space Gray",
    description: "Lost my iPhone 13 Pro in Space Gray color with a blue protective case. It has a small scratch on the back near the camera. Very important as it contains family photos and work contacts. Last seen near the coffee shop on Main Street around 3 PM. Please contact me if found - willing to offer a reward for its return.",
    category: "Electronics",
    location: "Main Street, Downtown Area",
    date: "2024-01-15",
    contact: "john@email.com",
    phone: "(555) 123-4567",
    type: "lost",
    status: "active",
    images: ["https://via.placeholder.com/400x300?text=iPhone+13+Pro"],
    reward: "$100",
    views: 45,
    reportedBy: {
      name: "John Smith",
      reputation: 98,
      itemsReported: 5,
      joinDate: "January 2024"
    },
    additionalInfo: {
      model: "iPhone 13 Pro",
      color: "Space Gray",
      condition: "Good (small scratch)",
      accessories: "Blue protective case, screen protector"
    }
  });

  const handleContact = () => {
    toast({
      title: "Contact information revealed",
      description: "You can now contact the owner about this item.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "You can now share this item listing.",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-blue-500";
      case "returned": return "bg-green-500";
      case "expired": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Lost & Found</span>
              <span>•</span>
              <span>{item.category}</span>
              <span>•</span>
              <Badge variant={item.type === "lost" ? "destructive" : "default"}>
                {item.type === "lost" ? "Lost Item" : "Found Item"}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">{item.title}</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Images */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>

              {/* Additional Details */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Item Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Model</p>
                      <p className="text-muted-foreground">{item.additionalInfo.model}</p>
                    </div>
                    <div>
                      <p className="font-medium">Color</p>
                      <p className="text-muted-foreground">{item.additionalInfo.color}</p>
                    </div>
                    <div>
                      <p className="font-medium">Condition</p>
                      <p className="text-muted-foreground">{item.additionalInfo.condition}</p>
                    </div>
                    <div>
                      <p className="font-medium">Accessories</p>
                      <p className="text-muted-foreground">{item.additionalInfo.accessories}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Status & Actions */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                    <span className="font-semibold">Active Listing</span>
                  </div>
                  
                  {item.reward && (
                    <div className="mb-4 p-3 bg-success/10 border border-success/20 rounded-lg">
                      <p className="font-semibold text-success">Reward Offered</p>
                      <p className="text-success text-lg">{item.reward}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Button onClick={handleContact} className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Owner
                    </Button>
                    <Button onClick={handleShare} variant="outline" className="w-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share This Listing
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Location & Time */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Date {item.type === "lost" ? "Lost" : "Found"}</p>
                      <p className="text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Eye className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Views</p>
                      <p className="text-muted-foreground">{item.views} people viewed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reporter Info */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reported By</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {item.reportedBy.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{item.reportedBy.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.reportedBy.reputation}% rating
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.reportedBy.itemsReported} reports
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Member since {item.reportedBy.joinDate}
                  </p>
                </CardContent>
              </Card>

              {/* Safety Tips */}
              <Card className="shadow-card bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-lg">Safety Tips</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Meet in public places</p>
                  <p>• Verify item details before meeting</p>
                  <p>• Bring a friend if possible</p>
                  <p>• Trust your instincts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;