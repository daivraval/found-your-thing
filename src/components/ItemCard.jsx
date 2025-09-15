import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User } from "lucide-react";

const ItemCard = ({ item }) => {
  return (
    <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            variant={item.type === "lost" ? "destructive" : "default"}
            className={item.type === "found" ? "bg-success text-success-foreground" : ""}
          >
            {item.type === "lost" ? "Lost" : "Found"}
          </Badge>
          <Badge variant="outline">{item.category}</Badge>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{item.contact}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;