import type { Route } from "./+types/home";
import { Shield, Scan, Lock, Database, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import Marquee from "~/components/ui/marquee";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nexora.ai" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Home = () => {
  const features = [
    { icon: Scan, label: "OCR PROCESSING" },
    { icon: Lock, label: "PII DETECTION" },
    { icon: Shield, label: "SMART REDACTION" },
    { icon: Database, label: "SECURE STORAGE" }
  ];
  const compliances = [
    "ENTERPRISE READY","GDPR COMPLIANT",
    "SOC2 CERTIFIED","ENTERPRISE READY",
  ];
  return (
    <section className="relative min-h-screen mt-8 flex items-center justify-center bg-background overflow-hidden scan-lines">
      {/* Brutalist background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent border-4 border-foreground transform rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary border-4 border-foreground transform -rotate-12"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-warning border-4 border-foreground"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="card-brutal bg-background/90 max-w-5xl mx-auto">
          <h1 className="title-brutal text-primary mb-8">
            REDACT.AI
          </h1>
          
          <h2 className="subtitle-brutal text-foreground mb-8">
            PRIVACY-FIRST DOCUMENT SANITIZATION
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto font-mono leading-relaxed">
            TRANSFORM SENSITIVE DOCUMENTS WITH AI-POWERED REDACTION THAT REMOVES PII 
            WHILE MAINTAINING DOCUMENT INTEGRITY. GDPR-COMPLIANT, ENTERPRISE-READY, 
            AND BLAZINGLY FAST.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="btn-brutal">
              <Zap className="mr-2" />
              UPLOAD DOCUMENT
            </Button>
            <Button size="lg" variant="secondary" className="btn-brutal-secondary">
              LEARN MORE
            </Button>
          </div>
          
          {/* Feature highlights in brutalist grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.label} 
                className="card-brutal-small bg-card/80 hover:bg-primary/10 transition-none group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:text-accent" />
                <span className="text-foreground font-bold text-sm uppercase tracking-wide">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Trust indicators in terminal style */}
          <div className="terminal bg-foreground text-background p-6 font-mono text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                
              </div>
              <div className="flex items-center gap-2">
                
              </div>
              <div className="flex items-center gap-2">
                
              </div>
            </div>
          </div>
          <Marquee items={compliances}>


          </Marquee>

        </div>
      </div>
    </section>
  );
}

export default Home;
