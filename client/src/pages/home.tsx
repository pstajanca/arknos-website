import { ArrowRight, BarChart3, Eye, Zap } from "lucide-react";
import ContactForm from "@/components/contact-form";
import logoPath from "@assets/logo_4_1755037461749.png";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logoPath} 
                alt="Arknos Technologies Logo" 
                className="h-10 w-auto" 
                data-testid="img-logo"
              />
            </div>
            <div className="hidden md:block">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-navy-900 hover:bg-navy-800 transition-all duration-200 transform hover:scale-105"
                data-testid="button-contact-header"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-slate-100 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="gradient-text">Progress starts</span>
              <br />
              <span className="text-navy-900">with data</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Turning the physical world into actionable insight through advanced sensing and monitoring solutions
            </p>
            
            <div className="mt-12 animate-slide-up">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-navy-900 hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-testid="button-contact-hero"
              >
                Have a measurement challenge?
                <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Understanding Through Data
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-900 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg prose-slate mx-auto text-center">
            <p className="text-xl leading-relaxed text-slate-700 mb-8">
              We believe that all meaningful progress begins with understanding — and understanding begins with data. We help you capture it.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Arknos Technologies develops advanced sensing and monitoring solutions to turn the physical world into actionable insight.
            </p>
          </div>

          {/* Capability highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Advanced Sensing</h3>
              <p className="text-slate-600">Cutting-edge sensors that capture critical data with precision and reliability.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Real-time Monitoring</h3>
              <p className="text-slate-600">Continuous monitoring systems that provide instant insights and alerts.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Actionable Insights</h3>
              <p className="text-slate-600">Transform raw data into meaningful intelligence that drives decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Let's Solve Your Measurement Challenge
            </h2>
            <p className="text-xl text-slate-600">
              Ready to turn your data into actionable insights? Get in touch with our team.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src={logoPath} 
              alt="Arknos Technologies" 
              className="h-8 w-auto mx-auto mb-4 filter brightness-0 invert" 
              data-testid="img-logo-footer"
            />
            <p className="text-slate-400 mb-4">
              Advanced sensing and monitoring solutions
            </p>
            <p className="text-sm text-slate-500">
              © 2024 Arknos Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
