
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Calendar, 
  Users, 
  Clock, 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Brain,
  Calendar as CalendarIcon,
  Mic,
  MessageSquareText,
  FileText,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateNewEvent = () => {
    navigate("/setup");
    toast.success("New event creation initiated");
  };

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Product Launch",
      date: "Oct 15, 2023",
      time: "2:00 PM",
      attendees: 120,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Developer Workshop",
      date: "Oct 18, 2023",
      time: "10:00 AM",
      attendees: 45,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Marketing Webinar",
      date: "Oct 12, 2023",
      time: "3:30 PM",
      attendees: 75,
      status: "live",
    },
  ];

  // Features list for the three main phases
  const features = [
    {
      phase: "Event Setup",
      icon: CalendarIcon,
      description: "Pre-event planning and scheduling",
      color: "bg-blue-100 text-blue-700",
      features: ["AI Event Planner", "Smart Invite System"]
    },
    {
      phase: "Live Event",
      icon: Mic,
      description: "Real-time event management tools",
      color: "bg-green-100 text-green-700",
      features: ["Speech-to-Text", "Q&A Moderation", "Live Summarization"]
    },
    {
      phase: "Post-Event",
      icon: BarChart3,
      description: "Analytics and follow-up actions",
      color: "bg-purple-100 text-purple-700",
      features: ["Insights & Analytics", "Report Generation", "Feedback Collection"]
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Manage your virtual events with AI assistance
          </p>
        </div>
        <Button className="gap-2" onClick={handleCreateNewEvent}>
          <Calendar className="h-4 w-4" />
          Schedule New Event
        </Button>
      </div>

      {/* AI Agent Status */}
      <Card className="bg-gradient-to-r from-event-600 to-event-800 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6" />
            AI Assistant Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse-gentle"></div>
              <span>AI Event Manager Online</span>
            </div>
            <Button variant="secondary" className="text-event-800 sm:ml-auto">
              Configure AI Agents
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Event Phases Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, i) => (
          <Card key={i} className="event-card">
            <div className="event-card-gradient"></div>
            <CardHeader className="relative">
              <div className={`rounded-full p-2 w-fit ${feature.color}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <CardTitle className="mt-4">{feature.phase}</CardTitle>
              <CardDescription>
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2">
                {feature.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Upcoming Events</h3>
          <Button variant="ghost" className="gap-1 text-sm">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="event-card">
              <CardHeader className="relative">
                <div className="absolute right-4 top-4">
                  {event.status === "live" ? (
                    <Badge className="bg-red-500 animate-pulse-gentle">
                      <div className="mr-1 h-2 w-2 rounded-full bg-white"></div>
                      Live Now
                    </Badge>
                  ) : (
                    <Badge variant="outline">Upcoming</Badge>
                  )}
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{event.attendees} attendees</span>
                </div>
                <div className="flex gap-2">
                  {event.status === "live" ? (
                    <Button className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Join Now
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" className="flex-1">
                        Edit
                      </Button>
                      <Button className="flex-1">Details</Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h3 className="mb-4 text-xl font-bold">AI-Powered Features</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="feature-icon w-fit">
                <Brain className="h-5 w-5" />
              </div>
              <CardTitle className="mt-2">Smart Event Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI automatically schedules events based on availability and generates agendas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="feature-icon w-fit">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <CardTitle className="mt-2">AI Q&A Moderation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Filters spam and suggests relevant questions for speakers during live events.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="feature-icon w-fit">
                <FileText className="h-5 w-5" />
              </div>
              <CardTitle className="mt-2">Automated Summaries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Generates key takeaways during events and provides comprehensive post-event reports.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
