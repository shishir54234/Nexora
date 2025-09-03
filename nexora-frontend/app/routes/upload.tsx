import { useState, useRef } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";

const DocumentUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setIsProcessing(true);
    
    // Simulate processing with progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      setProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 300);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setProgress(0);
    setIsProcessing(false);
  };

  return (
    <section className="py-20 px-4 bg-pastel-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4 text-foreground">
            Upload Your Document
          </h2>
          <p className="text-lg text-muted-foreground">
            Drag and drop your document or click to browse. We support PDF, DOCX, and image files.
          </p>
        </div>

        <div className="card-brutal bg-card">
          {!uploadedFile ? (
            <div
              className={`upload-zone text-center cursor-pointer ${
                isDragOver ? "border-accent bg-accent/20" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-16 h-16 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                Drop your document here
              </h3>
              <p className="text-muted-foreground mb-4">
                or click to browse your files
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded-full">PDF</span>
                <span className="bg-muted px-3 py-1 rounded-full">DOCX</span>
                <span className="bg-muted px-3 py-1 rounded-full">PNG</span>
                <span className="bg-muted px-3 py-1 rounded-full">JPG</span>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Uploaded File Info */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-display font-bold text-foreground">
                      {uploadedFile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-destructive hover:text-destructive"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Processing Progress */}
              {isProcessing && (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing document...</span>
                    <span className="font-bold text-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className={progress > 20 ? "text-success" : "text-muted-foreground"}>
                      OCR Scanning
                    </div>
                    <div className={progress > 60 ? "text-success" : "text-muted-foreground"}>
                      PII Detection
                    </div>
                    <div className={progress > 90 ? "text-success" : "text-muted-foreground"}>
                      Redaction
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {!isProcessing && progress === 100 && (
                <div className="flex gap-3 justify-center">
                  <Button className="btn-brutal">
                    View Results
                  </Button>
                  <Button variant="outline" className="btn-brutal-secondary">
                    Download Redacted
                  </Button>
                </div>
              )}
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.docx,.png,.jpg,.jpeg"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;