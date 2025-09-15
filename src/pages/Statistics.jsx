import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, MapPin, Clock, Search, Heart, Award } from "lucide-react";

const Statistics = () => {
  const [timeframe, setTimeframe] = useState("month");

  const stats = {
    totalItems: 1247,
    successfulReturns: 892,
    activeUsers: 5432,
    averageReturnTime: "3.2 days",
    returnRate: 71.5,
    topCategories: [
      { name: "Keys & IDs", count: 289, percentage: 23 },
      { name: "Electronics", count: 234, percentage: 19 },
      { name: "Other Items", count: 187, percentage: 15 },
      { name: "Clothing", count: 156, percentage: 13 },
      { name: "Documents", count: 134, percentage: 11 }
    ],
    topLocations: [
      { name: "Downtown Area", count: 145 },
      { name: "University Campus", count: 98 },
      { name: "Shopping Mall", count: 87 },
      { name: "Central Park", count: 76 },
      { name: "Train Station", count: 65 }
    ],
    recentActivity: [
      { type: "return", item: "iPhone 13", time: "2 hours ago" },
      { type: "found", item: "Blue Wallet", time: "4 hours ago" },
      { type: "lost", item: "Car Keys", time: "6 hours ago" },
      { type: "return", item: "Diamond Ring", time: "8 hours ago" },
      { type: "found", item: "Laptop Bag", time: "12 hours ago" }
    ]
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Platform Statistics</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our community is making a difference in reuniting lost items with their owners
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Items</p>
                  <p className="text-2xl font-bold">{stats.totalItems.toLocaleString()}</p>
                </div>
                <Search className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% this month
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Successful Returns</p>
                  <p className="text-2xl font-bold">{stats.successfulReturns.toLocaleString()}</p>
                </div>
                <Heart className="h-8 w-8 text-success" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  <Award className="h-3 w-3 mr-1" />
                  {stats.returnRate}% success rate
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% this week
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Return Time</p>
                  <p className="text-2xl font-bold">{stats.averageReturnTime}</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Improving daily
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Top Categories</TabsTrigger>
            <TabsTrigger value="locations">Popular Locations</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories" className="mt-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Most Reported Item Categories</CardTitle>
                <CardDescription>
                  See which types of items are most commonly lost and found
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.topCategories.map((category, index) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {category.count} items
                        </span>
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          {category.percentage}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="locations" className="mt-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Popular Locations</CardTitle>
                <CardDescription>
                  Areas where items are most frequently lost and found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.topLocations.map((location, index) => (
                    <div key={location.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{location.name}</span>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {location.count} items
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activity" className="mt-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Platform Activity</CardTitle>
                <CardDescription>
                  Latest lost and found reports and successful returns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'return' ? 'bg-success' :
                        activity.type === 'found' ? 'bg-accent' : 'bg-destructive'
                      }`} />
                      <div className="flex-1">
                        <span className="font-medium">
                          {activity.type === 'return' ? '✅ Returned:' :
                           activity.type === 'found' ? '🔍 Found:' : '❗ Lost:'}
                        </span>
                        <span className="ml-2">{activity.item}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-12 bg-gradient-hero text-white shadow-soft">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Be Part of Our Success Story</h2>
            <p className="text-white/90 mb-6">
              Join thousands of community members helping reunite lost items with their owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                Report Lost Item
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Report Found Item
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;