import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Search, Filter, MapPin, Calendar, SlidersHorizontal } from "lucide-react";
import ItemCard from "@/components/ItemCard.jsx";

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
  },
  {
    id: "5",
    title: "Blue Backpack",
    description: "Navy blue Nike backpack with laptop compartment. Contains textbooks.",
    category: "Bags",
    location: "University Library",
    date: "2024-01-11",
    contact: "student@uni.edu",
    type: "lost"
  },
  {
    id: "6",
    title: "Gold Watch",
    description: "Vintage gold watch found on bench in Washington Square Park.",
    category: "Jewelry",
    location: "Washington Square Park",
    date: "2024-01-10",
    contact: "finder@email.com",
    type: "found"
  }
];

const categories = [
  "All Categories",
  "Electronics",
  "Jewelry", 
  "Keys",
  "Documents",
  "Clothing",
  "Bags",
  "Accessories",
  "Books",
  "Sports Equipment",
  "Other"
];

const locations = [
  "All Locations",
  "Downtown Area",
  "University Campus", 
  "Central Park",
  "Shopping Mall",
  "Train Station",
  "Library",
  "Coffee Shops",
  "Parking Areas"
];

const AdvancedSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [itemType, setItemType] = useState("all");
  const [dateRange, setDateRange] = useState([7]); // Days ago
  const [showRewardOnly, setShowRewardOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || item.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || item.location.includes(selectedLocation.replace("All Locations", ""));
    const matchesType = itemType === "all" || item.type === itemType;
    
    // Date filtering (mock implementation)
    const itemDate = new Date(item.date);
    const daysAgo = dateRange[0];
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
    const matchesDate = itemDate >= cutoffDate;

    return matchesSearch && matchesCategory && matchesLocation && matchesType && matchesDate;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "title":
        return a.title.localeCompare(b.title);
      case "location":
        return a.location.localeCompare(b.location);
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedLocation("All Locations");
    setItemType("all");
    setDateRange([7]);
    setShowRewardOnly(false);
    setSortBy("date");
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Advanced Search</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use our powerful search filters to find exactly what you're looking for
          </p>
        </div>

        {/* Search Header */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search for items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {showFilters && <Badge variant="secondary" className="ml-1">Active</Badge>}
                </Button>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Advanced Filters
              </CardTitle>
              <CardDescription>
                Narrow down your search with specific criteria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="type">Item Type</Label>
                  <Select value={itemType} onValueChange={setItemType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Items</SelectItem>
                      <SelectItem value="lost">Lost Items</SelectItem>
                      <SelectItem value="found">Found Items</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Date Range: Last {dateRange[0]} days</Label>
                  <div className="mt-2">
                    <Slider
                      value={dateRange}
                      onValueChange={setDateRange}
                      max={30}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>1 day</span>
                      <span>30 days</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="sort">Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date (Newest First)</SelectItem>
                      <SelectItem value="title">Title (A-Z)</SelectItem>
                      <SelectItem value="location">Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="reward-only"
                  checked={showRewardOnly}
                  onCheckedChange={setShowRewardOnly}
                />
                <Label htmlFor="reward-only">Show only items with rewards</Label>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Search Results</h2>
            <p className="text-muted-foreground">
              Found {sortedItems.length} items matching your criteria
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {sortedItems.filter(item => item.type === "lost").length} Lost • {" "}
            {sortedItems.filter(item => item.type === "found").length} Found
          </Badge>
        </div>

        {sortedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Card className="shadow-card text-center py-12">
            <CardContent>
              <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or clearing some filters.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearch;