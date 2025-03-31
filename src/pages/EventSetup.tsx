
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Clock, Users, MapPin, Calendar, Plus } from "lucide-react";

const EventSetup = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Event Setup</h2>
        <p className="text-muted-foreground">
          Create and configure your virtual events
        </p>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Event Details</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="invites">Invitations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="event-name" className="text-sm font-medium">Event Name</label>
                  <Input id="event-name" placeholder="Enter event name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="event-type" className="text-sm font-medium">Event Type</label>
                  <select 
                    id="event-type" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="webinar">Webinar</option>
                    <option value="conference">Conference</option>
                    <option value="workshop">Workshop</option>
                    <option value="meetup">Meetup</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <Textarea id="description" placeholder="Describe your event" rows={4} />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2 rounded-lg border border-input p-3">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Date</div>
                    <div className="text-muted-foreground">Not set</div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Set
                  </Button>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-input p-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Time</div>
                    <div className="text-muted-foreground">Not set</div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Set
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Event Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="gap-2" variant="outline">
                <Calendar className="h-4 w-4" />
                Generate Schedule with AI
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                Let our AI assist you in planning your event, creating an agenda, and suggesting optimal timings.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedule" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="p-4 font-medium">Timeline</div>
                  <div className="border-t p-4">
                    <p className="text-muted-foreground">No schedule items yet</p>
                    <Button variant="outline" size="sm" className="mt-4 gap-1">
                      <Plus className="h-4 w-4" />
                      Add Schedule Item
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our AI can analyze your event type and attendee preferences to suggest optimal session lengths and breaks.
                    </p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Get AI Recommendations
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="invites" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input placeholder="Email address" className="flex-1" />
                  <Button>Add</Button>
                </div>
                
                <div className="rounded-md border">
                  <div className="p-4 font-medium">Attendee List</div>
                  <div className="border-t p-4">
                    <p className="text-muted-foreground">No attendees yet</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="mb-2 font-medium">Smart Invite System</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI can automatically send calendar invites and track RSVPs.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Enable Smart Invites
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventSetup;
