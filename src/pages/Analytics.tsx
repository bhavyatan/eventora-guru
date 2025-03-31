
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart } from "recharts";
import { 
  BarChart2, 
  LineChart as LineChartIcon, 
  Download, 
  Calendar, 
  Users, 
  Clock, 
  MessageSquare, 
  Activity,
  FileText,
  Share2,
  ThumbsUp,
  ThumbsDown,
  BarChart3
} from "lucide-react";

const Analytics = () => {
  // Sample data for the charts
  const attendanceData = [
    { name: "Sept 5", value: 45 },
    { name: "Sept 12", value: 75 },
    { name: "Sept 19", value: 60 },
    { name: "Sept 26", value: 120 },
    { name: "Oct 3", value: 80 },
    { name: "Oct 10", value: 95 },
  ];

  const engagementData = [
    { name: "Sept 5", questions: 12, comments: 35 },
    { name: "Sept 12", questions: 24, comments: 45 },
    { name: "Sept 19", questions: 18, comments: 30 },
    { name: "Sept 26", questions: 36, comments: 78 },
    { name: "Oct 3", questions: 24, comments: 55 },
    { name: "Oct 10", questions: 30, comments: 65 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics & Insights</h2>
        <p className="text-muted-foreground">
          AI-generated insights to improve your events
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Total Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Total Attendees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Avg. Engagement</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Event Analysis</TabsTrigger>
          <TabsTrigger value="feedback">Attendee Feedback</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Attendance Trends
                </CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full" />
                <div className="mt-2 flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Engagement Metrics
                </CardTitle>
                <LineChartIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full" />
                <div className="mt-2 flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                AI-Generated Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border bg-muted/40 p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Observations</h4>
                    <ul className="list-disc space-y-1 pl-5 text-sm">
                      <li>Tuesday webinars consistently have 20% higher attendance than other days</li>
                      <li>Q&A sessions lasting 15+ minutes show 35% higher engagement rates</li>
                      <li>Events with pre-shared materials have 28% more post-event engagement</li>
                      <li>Technical workshops have the highest attendee satisfaction scores (4.8/5)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Recommendations</h4>
                    <ul className="list-disc space-y-1 pl-5 text-sm">
                      <li>Schedule high-priority events on Tuesdays at 2pm for maximum attendance</li>
                      <li>Extend Q&A portions to at least 15 minutes for better engagement</li>
                      <li>Share preparatory materials at least 48 hours before each event</li>
                      <li>Consider increasing technical workshop offerings based on satisfaction scores</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Full Report
                </Button>
                <Button className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Insights
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="events" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="font-medium">Select Event</div>
                  <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <option>All Events</option>
                    <option>Marketing Webinar (Oct 12)</option>
                    <option>Developer Workshop (Oct 18)</option>
                    <option>AI Product Launch (Oct 15)</option>
                  </select>
                </div>
                
                <div className="p-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-4 font-medium">Attendee Demographics</h4>
                      <div className="h-[250px] w-full" />
                    </div>
                    <div>
                      <h4 className="mb-4 font-medium">Engagement by Session</h4>
                      <div className="h-[250px] w-full" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="mb-4 font-medium">Key Metrics</h4>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Avg. Watch Time</div>
                        <div className="text-xl font-bold">42 min</div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Questions Asked</div>
                        <div className="text-xl font-bold">24</div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Response Rate</div>
                        <div className="text-xl font-bold">92%</div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="text-sm text-muted-foreground">Satisfaction</div>
                        <div className="text-xl font-bold">4.7/5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="feedback" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendee Feedback Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium">Sentiment Analysis</h4>
                    <div className="flex items-center rounded-md border p-4">
                      <div className="flex flex-1 items-center gap-3">
                        <ThumbsUp className="h-5 w-5 text-green-500" />
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Positive</div>
                          <div className="text-2xl font-bold">78%</div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-center gap-3">
                        <ThumbsDown className="h-5 w-5 text-red-500" />
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Negative</div>
                          <div className="text-2xl font-bold">22%</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[200px] w-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Common Themes</h4>
                    <div className="rounded-md border p-4">
                      <div className="space-y-3">
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>Content Quality</span>
                            <span className="text-green-600">Positive (92%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 w-[92%] rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>Q&A Sessions</span>
                            <span className="text-green-600">Positive (85%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 w-[85%] rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>Technical Issues</span>
                            <span className="text-red-600">Negative (68%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 w-[68%] rounded-full bg-red-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>Session Length</span>
                            <span className="text-amber-600">Mixed (50%)</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-2 w-[50%] rounded-full bg-amber-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-4 font-medium">Key Feedback Comments</h4>
                  <div className="space-y-3">
                    <div className="rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-500" />
                        <p className="text-sm">"The AI-powered Q&A moderation was excellent - all questions were relevant and well-organized."</p>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4 text-green-500" />
                        <p className="text-sm">"Loved the automatic summary feature - made it easy to share key points with my team afterward."</p>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <ThumbsDown className="h-4 w-4 text-red-500" />
                        <p className="text-sm">"Experienced some audio issues during the first 10 minutes of the presentation."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Feedback Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
