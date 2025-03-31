
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Settings as SettingsIcon, 
  Webhook, 
  KeyRound, 
  Upload, 
  Save,
  BrainCircuit
} from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Configure your application and AI preferences
        </p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="ai">AI Configuration</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">Application Name</Label>
                <Input id="app-name" value="Eventora Guru" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <select 
                  id="timezone" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>America/New_York (Eastern Time)</option>
                  <option>America/Chicago (Central Time)</option>
                  <option>America/Denver (Mountain Time)</option>
                  <option>America/Los_Angeles (Pacific Time)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <select 
                  id="date-format" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email updates about your events</p>
                </div>
                <Switch id="notifications" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Theme & Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <select 
                  id="theme" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accent-color">Accent Color</Label>
                <div className="grid grid-cols-5 gap-2">
                  <div className="h-8 w-8 cursor-pointer rounded-full bg-blue-500 ring-2 ring-blue-500 ring-offset-2"></div>
                  <div className="h-8 w-8 cursor-pointer rounded-full bg-purple-500"></div>
                  <div className="h-8 w-8 cursor-pointer rounded-full bg-green-500"></div>
                  <div className="h-8 w-8 cursor-pointer rounded-full bg-amber-500"></div>
                  <div className="h-8 w-8 cursor-pointer rounded-full bg-red-500"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5" />
                AI Service Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ai-provider">AI Provider</Label>
                <select 
                  id="ai-provider" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>OpenAI</option>
                  <option>Google Gemini</option>
                  <option>Anthropic Claude</option>
                  <option>Custom Provider</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex gap-2">
                  <Input id="api-key" type="password" placeholder="●●●●●●●●●●●●●●●●" className="flex-1" />
                  <Button variant="outline">
                    <KeyRound className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Your API key is encrypted and stored securely</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="model">Default Model</Label>
                <select 
                  id="model" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>gpt-4</option>
                  <option>gpt-3.5-turbo</option>
                  <option>gemini-pro</option>
                  <option>claude-3-opus</option>
                </select>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Agents Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Speech-to-Text Agent</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="stt-enabled">Enable STT Agent</Label>
                      <Switch id="stt-enabled" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stt-model">STT Model</Label>
                      <select 
                        id="stt-model" 
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>OpenAI Whisper</option>
                        <option>Google Speech-to-Text</option>
                        <option>Azure Speech Services</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Q&A Moderator Agent</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="qa-enabled">Enable Q&A Agent</Label>
                      <Switch id="qa-enabled" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spam-threshold">Spam Detection Threshold</Label>
                      <select 
                        id="spam-threshold" 
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Summarization Agent</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="summary-enabled">Enable Summarization</Label>
                    <Switch id="summary-enabled" defaultChecked />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="summary-interval">Summary Update Interval</Label>
                      <select 
                        id="summary-interval" 
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>Real-time</option>
                        <option>Every 5 minutes</option>
                        <option>Every 15 minutes</option>
                        <option>Every 30 minutes</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="summary-length">Summary Length</Label>
                      <select 
                        id="summary-length" 
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option>Concise</option>
                        <option>Medium</option>
                        <option>Detailed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calendar-provider">Calendar Provider</Label>
                <select 
                  id="calendar-provider" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>Google Calendar</option>
                  <option>Microsoft Outlook</option>
                  <option>Apple Calendar</option>
                </select>
              </div>
              
              <Button variant="outline" className="gap-2">
                <KeyRound className="h-4 w-4" />
                Connect Calendar
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Video Conferencing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="video-provider">Video Provider</Label>
                <select 
                  id="video-provider" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>Zoom</option>
                  <option>Microsoft Teams</option>
                  <option>Google Meet</option>
                  <option>Webex</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-key-video">API Key</Label>
                <Input id="api-key-video" type="password" placeholder="●●●●●●●●●●●●●●●●" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-secret">API Secret</Label>
                <Input id="api-secret" type="password" placeholder="●●●●●●●●●●●●●●●●" />
              </div>
              
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Configuration
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://example.com/webhook" />
              </div>
              
              <div className="space-y-2">
                <Label>Webhook Events</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="event-created" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="event-created">Event Created</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="event-started" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="event-started">Event Started</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="event-ended" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="event-ended">Event Ended</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="attendee-joined" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="attendee-joined">Attendee Joined</Label>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="gap-2">
                <Webhook className="h-4 w-4" />
                Test Webhook
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <Button variant="outline" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Photo
                </Button>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="mfa">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Enable 2FA for additional security</p>
                </div>
                <Switch id="mfa" />
              </div>
              
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
