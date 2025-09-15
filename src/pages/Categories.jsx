import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Package, Smartphone, Key, Shirt, Book, Camera, Watch } from "lucide-react";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    count: 45,
    color: "bg-blue-500",
    items: ["Phones", "Tablets", "Laptops", "Headphones", "Cameras"]
  },
  {
    id: "jewelry",
    name: "Jewelry",
    icon: Watch,
    count: 23,
    color: "bg-purple-500",
    items: ["Rings", "Necklaces", "Watches", "Bracelets", "Earrings"]
  },
  {
    id: "keys",
    name: "Keys & IDs",
    icon: Key,
    count: 67,
    color: "bg-green-500",
    items: ["House Keys", "Car Keys", "ID Cards", "Wallets", "Keychains"]
  },
  {
    id: "clothing",
    name: "Clothing",
    icon: Shirt,
    count: 34,
    color: "bg-red-500",
    items: ["Jackets", "Bags", "Shoes", "Accessories", "Hats"]
  },
  {
    id: "documents",
    name: "Documents",
    icon: Book,
    count: 28,
    color: "bg-yellow-500",
    items: ["Passports", "Licenses", "Cards", "Papers", "Certificates"]
  },
  {
    id: "other",
    name: "Other Items",
    icon: Package,
    count: 89,
    color: "bg-gray-500",
    items: ["Toys", "Tools", "Sports Equipment", "Miscellaneous", "Personal Items"]
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Browse by Category</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find lost items or see what's been found organized by category
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Category Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className="hover:shadow-card transition-all duration-300 hover:scale-105 shadow-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`${category.color} text-white rounded-lg p-2`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-xl">{category.name}</CardTitle>
                        </div>
                        <Badge variant="secondary">
                          {category.count} items
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        Most common items in this category:
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.items.slice(0, 3).map((item) => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full">
                        <Search className="h-4 w-4 mr-2" />
                        Browse {category.name}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="detailed" className="mt-8">
            <div className="space-y-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`${category.color} text-white rounded-lg p-2`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.name}</CardTitle>
                            <CardDescription>
                              {category.count} items reported in this category
                            </CardDescription>
                          </div>
                        </div>
                        <Button variant="outline">
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {category.items.map((item) => (
                          <Badge key={item} variant="secondary" className="justify-center py-2">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-12 bg-gradient-hero text-white shadow-soft">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find your category?</h2>
            <p className="text-white/90 mb-6">
              Don't worry! You can still report your item and we'll help categorize it properly.
            </p>
            <Button variant="secondary" size="lg">
              Report Any Item
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Categories;