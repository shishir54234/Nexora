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
    { icon: Database, label: "SECURE STORAGE" },
  ];
  const compliances = [
    "ENTERPRISE READY",
    "GDPR COMPLIANT",
    "SOC2 CERTIFIED",
    "HIPAA READY",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-screen">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          We remove your {" "}
          <span className="bg-accent px-2 py-1 border-2 border-black inline-block">
            PIIs
          </span>{" "}
          from your documents.
        </h1>

        <p className="text-lg md:text-xl text-black/80 mb-12 max-w-2xl mx-auto font-mono leading-relaxed">
          We transform your documents and hide your private data from view.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            className="bg-accent border-2 border-black rounded-none px-6 py-3 hover:translate-y-1 transition-transform"
          >
            Read the docs →
          </Button>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-blue-400 border-2 border-black shadow-[4px_4px_0px_#000] p-6"
            >
              <feature.icon className="w-8 h-8 text-black mb-3 mx-auto" />
              <span className="block text-black font-bold text-sm uppercase tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* Compliance marquee */}
        <Marquee items={compliances} />
      </div>
    </section>
  );
};

export default Home;
