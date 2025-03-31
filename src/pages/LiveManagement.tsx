
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mic, 
  MessageSquare, 
  FileText, 
  Video, 
  Users, 
  Clock, 
  PlayCircle,
  Brain,
  MessageCircle
} from "lucide-react";

const LiveManagement = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Live Event Management</h2>
        <p className="text-muted-foreground">
          Manage ongoing events with AI assistance
        </p>
      </div>
      
      {/* Demo Event Card */}
      <Card className="bg-gradient-to-r from-event-600 to-event-800 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge className="bg-red-500 animate-pulse-gentle">
              <div className="mr-1 h-2 w-2 rounded-full bg-white"></div>
              Live Demo
            </Badge>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">00:45:30</span>
            </div>
          </div>
          <CardTitle className="mt-2 text-2xl">Marketing Webinar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>75 attendees</span>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="secondary" className="text-event-800">
                <PlayCircle className="mr-1 h-4 w-4" />
                Join Stream
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="transcription">Transcription</TabsTrigger>
          <TabsTrigger value="qa">Q&A Moderation</TabsTrigger>
          <TabsTrigger value="summary">Live Summary</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">STT Agent</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status:</span>
                    <Badge variant="outline" className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Accuracy</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Q&A Moderator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status:</span>
                    <Badge variant="outline" className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    3 questions in queue
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Summary Agent</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status:</span>
                    <Badge variant="outline" className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Last updated 2 mins ago
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Orchestration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>System Load</span>
                    <span>Medium</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Button variant="outline" className="gap-2">
                    <Video className="h-4 w-4" />
                    Allocate More Resources
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Mic className="h-4 w-4" />
                    Adjust Speech Recognition
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="transcription" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="h-5 w-5" />
                Live Transcription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md border border-input bg-card p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Speaker: John (Host)</div>
                    <p>Welcome everyone to our marketing webinar! Today we'll be discussing the latest trends in digital marketing.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Speaker: Sarah (Presenter)</div>
                    <p>Thank you John. I'm excited to share some insights on how AI is transforming content marketing strategies.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Speaker: John (Host)</div>
                    <p>Before we dive in, let me remind everyone that we'll have a Q&A session at the end. Feel free to submit your questions anytime.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Speaker: Sarah (Presenter)</div>
                    <p>Let's start with the numbers. Our research shows that companies using AI in their marketing efforts saw a 40% increase in engagement.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-4">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Export Transcript
                </Button>
                <div className="flex items-center rounded-md border px-3 py-1 text-sm">
                  <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Live transcription enabled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="qa" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Q&A Moderation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Questions Queue</h4>
                  <div className="rounded-md border">
                    <div className="border-b p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">How does AI impact privacy concerns?</span>
                        <Badge>Suggested</Badge>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">From: alex@example.com</div>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" variant="outline">Dismiss</Button>
                        <Button size="sm">Present</Button>
                      </div>
                    </div>
                    <div className="border-b p-3">
                      <div className="font-medium">What tools do you recommend for small businesses?</div>
                      <div className="mt-1 text-sm text-muted-foreground">From: jamie@example.com</div>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" variant="outline">Dismiss</Button>
                        <Button size="sm">Present</Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="font-medium">Can you share case studies?</div>
                      <div className="mt-1 text-sm text-muted-foreground">From: taylor@example.com</div>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" variant="outline">Dismiss</Button>
                        <Button size="sm">Present</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">AI Moderation Settings</h4>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label htmlFor="spam-filter" className="text-sm">Spam Filtering</label>
                          <select 
                            id="spam-filter" 
                            className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                          >
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="suggestion-threshold" className="text-sm">Suggestion Threshold</label>
                          <select 
                            id="suggestion-threshold" 
                            className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                          >
                            <option>High Relevance</option>
                            <option>Medium Relevance</option>
                            <option>All Questions</option>
                          </select>
                        </div>
                        
                        <Textarea 
                          placeholder="Add context for the AI moderator (optional)"
                          className="h-[120px]"
                        />
                        
                        <Button className="w-full">Update AI Preferences</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="summary" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Live Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">Key Points So Far</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Companies using AI in marketing see 40% increase in engagement</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Content personalization is the top trend for 2023</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Small businesses can leverage affordable AI tools for competitive advantage</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Privacy concerns remain important when implementing AI solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">Discussion Themes</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>Content Strategies</span>
                        <span>35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>AI Tools & Technologies</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>Case Studies</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>Implementation Strategies</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="gap-2" variant="outline">
                    <FileText className="h-4 w-4" />
                    Export Summary
                  </Button>
                  <Button className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Share with Attendees
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

export default LiveManagement;
