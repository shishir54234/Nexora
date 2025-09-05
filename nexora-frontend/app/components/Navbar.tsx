import { useState } from "react";
import { Upload, BarChart3, FileText, Settings, Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Upload, label: "UPLOAD", href: "upload" },
    { icon: FileText, label: "DOCS", href: "documents" },
    { icon: BarChart3, label: "STATS", href: "analytics" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#9E9E9E] border-b-4 border-blue-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-400 border-3 border-blue-950 rotate-45 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-950 -rotate-45" />
              </div>
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 border-2 border-blue-950"></div> */}
            </div>
            <div className="relative">
              <span className="text-2xl font-black text-blue-100 uppercase tracking-wider">
                NEXORA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={`/${item.href}`}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-300 transform translate-x-1 translate-y-1 border-3 border-blue-950"></div>
                <div className="relative flex items-center gap-2 px-5 py-3 bg-blue-100 border-3 border-blue-950 font-bold text-blue-950 uppercase text-sm tracking-wide group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-150">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="relative group">
              <div className="absolute inset-0 bg-blue-950 transform translate-x-1 translate-y-1"></div>
              <div className="relative px-6 py-3 bg-transparent border-3 border-blue-400 text-blue-100 font-bold uppercase text-sm tracking-wide group-hover:bg-blue-400 group-hover:text-blue-950 group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-150">
                SIGN IN
              </div>
            </button>
            
            <button className="relative group">
              <div className="absolute inset-0 bg-blue-950 transform translate-x-2 translate-y-2"></div>
              <div className="relative px-6 py-3 bg-blue-400 border-3 border-blue-950 text-blue-950 font-black uppercase text-sm tracking-wide group-hover:bg-blue-300 group-hover:transform group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-150">
                GET STARTED
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-blue-950 transform translate-x-1 translate-y-1"></div>
            <div className="relative w-12 h-12 bg-blue-400 border-3 border-blue-950 flex items-center justify-center group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-150">
              {isOpen ? <X className="w-6 h-6 text-blue-950" /> : <Menu className="w-6 h-6 text-blue-950" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t-3 border-blue-400">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideIn 0.4s ease-out forwards'
                  }}
                >
                  <div className="absolute inset-0 bg-blue-300 transform translate-x-2 translate-y-2 border-3 border-blue-950"></div>
                  <a
                    href={item.href}
                    className="relative flex items-center gap-4 px-6 py-4 bg-blue-100 border-3 border-blue-950 text-blue-950 font-bold text-lg uppercase tracking-wide group-hover:transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                  </a>
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <button className="relative group w-full">
                  <div className="absolute inset-0 bg-blue-950 transform translate-x-1 translate-y-1"></div>
                  <div className="relative w-full px-6 py-4 bg-transparent border-3 border-blue-400 text-blue-100 font-bold uppercase text-lg tracking-wide group-hover:bg-blue-400 group-hover:text-blue-950 group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-150">
                    SIGN IN
                  </div>
                </button>
                
                <button className="relative group w-full">
                  <div className="absolute inset-0 bg-blue-950 transform translate-x-2 translate-y-2"></div>
                  <div className="relative w-full px-6 py-4 bg-blue-400 border-3 border-blue-950 text-blue-950 font-black uppercase text-lg tracking-wide group-hover:bg-blue-300 group-hover:transform group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-150">
                    GET STARTED
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      
    </nav>
  );
};

export default Navbar;