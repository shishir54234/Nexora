import { useState } from "react";
import { Eye, EyeOff, Download, Share } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";

const ComparisonViewer = () => {
  const [showRedacted, setShowRedacted] = useState(true);

  return (
    <section className="py-20 px-4 bg-background border-2 border-dashed border-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4 text-foreground">
            Before & After Comparison
          </h2>
          <p className="text-lg text-muted-foreground">
            See how RedactAI automatically identifies and redacts sensitive information
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center mb-8">
          <div className="card-brutal bg-card p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Original</span>
              </div>
              <Switch
                checked={showRedacted}
                onCheckedChange={setShowRedacted}
                className="data-[state=checked]:bg-primary"
              />
              <div className="flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Redacted</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Original Document */}
          <Card className="card-brutal bg-card">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Original Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border border-border min-h-96 font-mono text-sm">
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="font-bold">EMPLOYMENT CONTRACT</h3>
                    <p className="text-xs text-gray-600">Confidential Document</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p><strong>Employee Name:</strong> <span className={!showRedacted ? "bg-red-200" : ""}>John Smith</span></p>
                    <p><strong>Social Security:</strong> <span className={!showRedacted ? "bg-red-200" : ""}>123-45-6789</span></p>
                    <p><strong>Email:</strong> <span className={!showRedacted ? "bg-yellow-200" : ""}>john.smith@email.com</span></p>
                    <p><strong>Phone:</strong> <span className={!showRedacted ? "bg-yellow-200" : ""}>(555) 123-4567</span></p>
                    <p><strong>Address:</strong> <span className={!showRedacted ? "bg-blue-200" : ""}>123 Main St, Anytown, ST 12345</span></p>
                  </div>

                  <div className="pt-4">
                    <p><strong>Salary:</strong> $75,000 annually</p>
                    <p><strong>Start Date:</strong> January 15, 2024</p>
                    <p><strong>Department:</strong> Engineering</p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p><strong>Emergency Contact:</strong></p>
                    <p className="ml-4">Name: <span className={!showRedacted ? "bg-red-200" : ""}>Jane Smith</span></p>
                    <p className="ml-4">Phone: <span className={!showRedacted ? "bg-yellow-200" : ""}>(555) 987-6543</span></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Redacted Document */}
          <Card className="card-brutal bg-card">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-primary" />
                Redacted Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border border-border min-h-96 font-mono text-sm">
                <div className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="font-bold">EMPLOYMENT CONTRACT</h3>
                    <p className="text-xs text-gray-600">Confidential Document</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p><strong>Employee Name:</strong> <span className="bg-black text-white px-2 py-0.5 rounded">█████████</span></p>
                    <p><strong>Social Security:</strong> <span className="bg-black text-white px-2 py-0.5 rounded">███-██-████</span></p>
                    <p><strong>Email:</strong> <span className="bg-black text-white px-2 py-0.5 rounded">████████████████</span></p>
                    <p><strong>Phone:</strong> <span className="bg-black text-white px-2 py-0.5 rounded">(███) ███-████</span></p>
                    <p><strong>Address:</strong> <span className="bg-black text-white px-2 py-0.5 rounded">███████████████████████</span></p>
                  </div>

                  <div className="pt-4">
                    <p><strong>Salary:</strong> $75,000 annually</p>
                    <p><strong>Start Date:</strong> January 15, 2024</p>
                    <p><strong>Department:</strong> Engineering</p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p><strong>Emergency Contact:</strong></p>
                    <p className="ml-4">Name: <span className="bg-black text-white px-2 py-0.5 rounded">██████████</span></p>
                    <p className="ml-4">Phone: <span className="bg-black text-white px-2 py-0.5 rounded">(███) ███-████</span></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button className="btn-brutal">
            <Download className="w-4 h-4 mr-2" />
            Download Redacted
          </Button>
          <Button variant="outline" className="btn-brutal-secondary">
            <Share className="w-4 h-4 mr-2" />
            Share Securely
          </Button>
        </div>

        {/* Redaction Summary */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="card-brutal bg-accent/20">
            <CardHeader>
              <CardTitle className="font-display text-center">Redaction Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-display font-bold text-destructive">3</div>
                  <div className="text-sm text-muted-foreground">Names</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-warning">3</div>
                  <div className="text-sm text-muted-foreground">Phone Numbers</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">SSN</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-accent">2</div>
                  <div className="text-sm text-muted-foreground">Addresses</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonViewer;