import { FileText, Eye, Download, TrendingUp, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

const Dashboard = () => {
  const recentUploads = [
    {
      id: 1,
      name: "Contract_2024.pdf",
      status: "completed",
      redacted: 12,
      uploadTime: "2 hours ago",
    },
    {
      id: 2,
      name: "Employee_Records.docx",
      status: "processing",
      redacted: 8,
      uploadTime: "5 minutes ago",
    },
    {
      id: 3,
      name: "Customer_Data.pdf",
      status: "completed",
      redacted: 23,
      uploadTime: "1 day ago",
    },
  ];

  const stats = [
    {
      title: "Documents Processed",
      value: "2,847",
      change: "+12%",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "PII Items Redacted",
      value: "18,429",
      change: "+8%",
      icon: Shield,
      color: "text-accent",
    },
    {
      title: "Processing Time Saved",
      value: "342h",
      change: "+23%",
      icon: Clock,
      color: "text-success",
    },
  ];

  return (
    <section className="py-20 px-4 bg-pastel-blue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4 text-foreground">
            Your Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor your document processing and compliance metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="card-brutal bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="text-xs text-success">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Uploads */}
          <Card className="card-brutal bg-card">
            <CardHeader>
              <CardTitle className="font-display">Recent Uploads</CardTitle>
              <CardDescription>
                Your latest document processing activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentUploads.map((upload) => (
                <div
                  key={upload.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">{upload.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {upload.redacted} items redacted • {upload.uploadTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={upload.status === "completed" ? "default" : "secondary"}
                      className={
                        upload.status === "completed"
                          ? "bg-success text-success-foreground"
                          : "bg-warning text-warning-foreground"
                      }
                    >
                      {upload.status}
                    </Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Analytics Preview */}
          <Card className="card-brutal bg-card">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Analytics Integration
              </CardTitle>
              <CardDescription>
                Connect with Tableau for advanced insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-accent p-6 rounded-lg text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-3 text-foreground" />
                <h3 className="font-display font-bold text-foreground mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  View detailed compliance metrics, PII detection trends, and processing insights
                </p>
                <Button className="btn-brutal">
                  Connect Tableau
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">94%</div>
                  <div className="text-xs text-muted-foreground">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">2.3s</div>
                  <div className="text-xs text-muted-foreground">Avg Processing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;