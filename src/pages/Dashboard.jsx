import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarContent, AvatarFallback } from "@/components/ui/avatar";
import { Edit, Settings, Bell, Eye, MessageCircle, CheckCircle, Clock, X } from "lucide-react";

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 2024",
    itemsReported: 5,
    itemsReturned: 3,
    reputation: 98
  });

  const [userItems] = useState([
    {
      id: "1",
      title: "iPhone 13 Pro",
      type: "lost",
      status: "active",
      date: "2024-01-15",
      views: 23,
      messages: 2
    },
    {
      id: "2",
      title: "Brown Leather Wallet",
      type: "found",
      status: "returned",
      date: "2024-01-10",
      views: 45,
      messages: 8
    },
    {
      id: "3",
      title: "Car Keys with Toyota Keychain",
      type: "lost",
      status: "active",
      date: "2024-01-08",
      views: 12,
      messages: 1
    }
  ]);

  const [notifications] = useState([
    {
      id: "1",
      type: "match",
      message: "Potential match found for your iPhone 13 Pro",
      time: "2 hours ago",
      unread: true
    },
    {
      id: "2",
      type: "message",
      message: "New message about your wallet",
      time: "1 day ago",
      unread: true
    },
    {
      id: "3",
      type: "success",
      message: "Your reported item has been marked as returned",
      time: "3 days ago",
      unread: false
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "bg-blue-500";
      case "returned": return "bg-green-500";
      case "expired": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active": return "Active";
      case "returned": return "Returned";
      case "expired": return "Expired";
      default: return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Manage your lost and found reports</p>
        </div>

        {/* User Profile Summary */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-xl bg-primary text-white">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
                <p className="text-muted-foreground mb-3">{user.email}</p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary">
                    Member since {user.joinDate}
                  </Badge>
                  <Badge variant="outline">
                    {user.itemsReported} items reported
                  </Badge>
                  <Badge variant="outline">
                    {user.itemsReturned} successful returns
                  </Badge>
                  <Badge className="bg-success text-white">
                    {user.reputation}% reputation
                  </Badge>
                </div>
              </div>
              
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="items" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="items">My Items</TabsTrigger>
            <TabsTrigger value="notifications">
              Notifications
              {notifications.filter(n => n.unread).length > 0 && (
                <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">
                  {notifications.filter(n => n.unread).length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="items" className="mt-6">
            <div className="space-y-4">
              {userItems.map((item) => (
                <Card key={item.id} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <Badge variant={item.type === "lost" ? "destructive" : "default"}>
                            {item.type === "lost" ? "Lost" : "Found"}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`} />
                            <span className="text-sm text-muted-foreground">
                              {getStatusText(item.status)}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">
                          Reported on {item.date}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {item.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {item.messages} messages
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        {item.status === "active" && (
                          <Button variant="outline" size="sm">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark as Returned
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card key={notification.id} className={`shadow-card ${notification.unread ? 'border-primary' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-primary' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <p className={`${notification.unread ? 'font-semibold' : ''}`}>
                            {notification.message}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {notification.unread && (
                          <Button variant="ghost" size="sm">
                            Mark as Read
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent actions on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium">Item successfully returned</p>
                      <p className="text-sm text-muted-foreground">Brown Leather Wallet • 3 days ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">New message received</p>
                      <p className="text-sm text-muted-foreground">About iPhone 13 Pro • 1 day ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Item reported as lost</p>
                      <p className="text-sm text-muted-foreground">Car Keys with Toyota Keychain • 1 week ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;