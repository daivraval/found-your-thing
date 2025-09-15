import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ItemsList from "@/components/ItemsList";
import ItemForm from "@/components/ItemForm";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockItems = [
  {
    id: "1",
    title: "iPhone 13 Pro",
    description: "Space gray iPhone 13 Pro with a blue case. Lost near Central Park.",
    category: "Electronics",
    location: "Central Park, NY",
    date: "2024-01-15",
    contact: "john@email.com",
    type: "lost"
  },
  {
    id: "2",
    title: "Diamond Ring",
    description: "Small diamond ring found in the restroom at Starbucks on Main Street.",
    category: "Jewelry",
    location: "Starbucks, Main Street",
    date: "2024-01-14",
    contact: "sarah@email.com",
    type: "found"
  },
  {
    id: "3",
    title: "Brown Leather Wallet",
    description: "Brown leather wallet containing credit cards and driver's license.",
    category: "Accessories",
    location: "University Campus",
    date: "2024-01-13",
    contact: "(555) 123-4567",
    type: "lost"
  },
  {
    id: "4",
    title: "Car Keys",
    description: "Found a set of Toyota car keys with a red keychain near the parking garage.",
    category: "Keys",
    location: "Downtown Parking Garage",
    date: "2024-01-12",
    contact: "mike@email.com",
    type: "found"
  }
];

const Index = () => {
  const [items, setItems] = useState<Item[]>(mockItems);
  const [showLostForm, setShowLostForm] = useState(false);
  const [showFoundForm, setShowFoundForm] = useState(false);
  const { toast } = useToast();

  const handleAddItem = (newItem: Omit<Item, "id">) => {
    const item: Item = {
      ...newItem,
      id: Date.now().toString()
    };
    setItems(prev => [item, ...prev]);
    
    toast({
      title: "Item reported successfully!",
      description: `Your ${newItem.type} item has been added to the database.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onShowLostForm={() => setShowLostForm(true)}
        onShowFoundForm={() => setShowFoundForm(true)}
      />
      
      <Hero 
        onShowLostForm={() => setShowLostForm(true)}
        onShowFoundForm={() => setShowFoundForm(true)}
      />
      
      <ItemsList items={items} />
      
      {showLostForm && (
        <ItemForm
          type="lost"
          onClose={() => setShowLostForm(false)}
          onSubmit={handleAddItem}
        />
      )}
      
      {showFoundForm && (
        <ItemForm
          type="found"
          onClose={() => setShowFoundForm(false)}
          onSubmit={handleAddItem}
        />
      )}
    </div>
  );
};

export default Index;