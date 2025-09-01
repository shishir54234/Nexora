import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText, Brain, Database } from "lucide-react";

function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-black font-mono">
            {/* Hero Section */}
            <header className="border-b-4 border-black p-8 flex flex-col items-center text-center">
                <h1 className="text-6xl font-bold uppercase tracking-tight mb-4">
                    Nexora
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed">
                    In today's data-driven world, privacy compliance is critical. Nexora
                    provides a seamless, automated solution to protect sensitive data and
                    meet regulations like GDPR.
                </p>
                <button className="mt-6 px-8 py-4 text-lg font-bold border-4 border-black rounded-none bg-yellow-300 hover:bg-yellow-400">
                    Try It Now
                </button>
            </header>

            {/* What it does */}
            <section className="p-10 border-b-4 border-black">
                <h2 className="text-3xl font-bold uppercase mb-6">What It Does</h2>
                <p className="max-w-3xl">
                    Nexora extracts text from documents using Azure AI Computer Vision,
                    scans for sensitive data with Azure AI Language Services, and replaces
                    PII with placeholders. Compare original vs sanitized documents side by
                    side. Securely stored in Azure Blob Storage.
                </p>
            </section>

            {/* Features Grid */}
            <section className="p-10 border-b-4 border-black grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-4 border-black rounded-none p-6">
                    <Shield className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                    <p>PII redaction with high precision to meet GDPR compliance.</p>
                </div>
                <div className="border-4 border-black rounded-none p-6">
                    <FileText className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Seamless Comparison</h3>
                    <p>View original and sanitized documents side by side.</p>
                </div>
                <div className="border-4 border-black rounded-none p-6">
                    <Brain className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Powered by AI</h3>
                    <p>OCR + PII detection using Azure AI services.</p>
                </div>
                <div className="border-4 border-black rounded-none p-6">
                    <Database className="w-10 h-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
                    <p>All redacted files stored in Azure Blob Storage.</p>
                </div>
            </section>

            {/* Roadmap */}
            <section className="p-10 border-b-4 border-black">
                <h2 className="text-3xl font-bold uppercase mb-6">What's Next</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Support more file types like DOCX and TXT.</li>
                    <li>Enhanced data scrubbing with higher precision.</li>
                    <li>Analytics dashboard for trends in scrubbed data.</li>
                    <li>User authentication for access control.</li>
                </ul>
            </section>

            {/* Built With */}
            <section className="p-10 border-b-4 border-black">
                <h2 className="text-3xl font-bold uppercase mb-6">Built With</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-bold text-center">
                    <div className="border-4 border-black p-4">React</div>
                    <div className="border-4 border-black p-4">FastAPI</div>
                    <div className="border-4 border-black p-4">Azure AI</div>
                    <div className="border-4 border-black p-4">Azure Blob Storage</div>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-6 text-center border-t-4 border-black text-sm">
                © {new Date().getFullYear()} Nexora — Privacy Made Simple
            </footer>
        </div>
    );
}

export default LandingPage;
