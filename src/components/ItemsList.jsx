import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import ItemCard, { type Item } from "./ItemCard";
import lostIcon from "@/assets/lost-icon.jpg";
import foundIcon from "@/assets/found-icon.jpg";

interface ItemsListProps {
  items: Item[];
}

const ItemsList = ({ items }: ItemsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const lostItems = filteredItems.filter(item => item.type === "lost");
  const foundItems = filteredItems.filter(item => item.type === "found");

  const categories = ["all", ...Array.from(new Set(items.map(item => item.category)))];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Browse Items</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search through reported lost and found items. You might find what you're looking for or help someone else find theirs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select onValueChange={setCategoryFilter} defaultValue="all">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Items ({filteredItems.length})</TabsTrigger>
            <TabsTrigger value="lost" className="flex items-center gap-2">
              <img src={lostIcon} alt="Lost" className="w-4 h-4" />
              Lost ({lostItems.length})
            </TabsTrigger>
            <TabsTrigger value="found" className="flex items-center gap-2">
              <img src={foundIcon} alt="Found" className="w-4 h-4" />
              Found ({foundItems.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="lost" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lostItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="found" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemsList;