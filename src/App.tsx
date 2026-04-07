import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Shield, 
  Users, 
  FileText, 
  BarChart3, 
  Search, 
  Database, 
  Layers, 
  Clock, 
  Zap,
  Menu,
  X,
  ClipboardList,
  Home,
  Droplets,
  ShieldCheck,
  Calculator,
  Leaf,
  Globe,
  Award,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { Section, Card, Button } from './components/UI';
import { CITIES, DLIS, METHODOLOGY_STEPS, TEAM, INSTRUMENTS, OUTPUTS, TOR_COMPLIANCE } from './constants';

// --- Sub-components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Project', href: '#project' },
    { name: 'Cities', href: '#cities' },
    { name: 'DLIs', href: '#dlis' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">PICP <span className="text-accent">Consultancy</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="px-6 py-2 text-sm">Contact Us</Button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" className="w-full">Contact Us</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]" />
    </div>
    
    <div className="section-container relative z-10">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-accent text-sm font-semibold mb-8">
            <Award className="w-4 h-4" />
            World Bank Funded Initiative
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 gradient-text">
            Independent Verification of DLIs & E&S Monitoring
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
            A premium methodology for the Punjab Inclusive Cities Program (PICP), ensuring transparency, accountability, and excellence in urban governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#methodology">Explore Methodology</Button>
            <Button variant="outline" href="#cities">View Covered Cities</Button>
          </div>
        </motion.div>
      </div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute right-0 bottom-0 w-1/2 h-4/5 hidden lg:block pointer-events-none"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-200 rounded-full opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-slate-200 rounded-full opacity-60" />
        
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
            <CheckCircle2 className="text-green-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verification Status</p>
            <p className="text-lg font-bold text-slate-900">100% Evidence Based</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
            <MapPin className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coverage</p>
            <p className="text-lg font-bold text-slate-900">16 ULGs in Punjab</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const ProjectAtAGlance = () => (
  <Section id="project" subtitle="The Mandate" title="Project at a Glance">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: MapPin, title: '16 ULGs', text: 'Comprehensive coverage of Municipal Committees across Punjab.' },
        { icon: Activity, title: '6 DLIs', text: 'Verification of Disbursement Linked Indicators for program funding.' },
        { icon: Clock, title: 'Annual IVA / APA', text: 'Systematic annual verification cycle for performance assessment.' },
        { icon: Shield, title: 'Quarterly E&S', text: 'Third-party monitoring of Environmental & Social Management.' },
        { icon: Database, title: 'Evidence-Based', text: 'Rigorous triangulation of data from multiple primary and secondary sources.' },
        { icon: Zap, title: 'Tech-Enabled', text: 'Mobile-based data capture and geo-tagged verification for accuracy.' },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="h-full">
            <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mb-6">
              <item.icon className="text-accent w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const CitiesCoverage = () => (
  <Section id="cities" subtitle="Geographic Scope" title="16 Participating ULGs" className="bg-slate-50">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {CITIES.map((city, i) => (
        <motion.div
          key={city.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className={`p-6 rounded-2xl border transition-all duration-300 group ${city.isPPPFocus ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' : 'bg-white border-slate-100 hover:border-accent/30 text-slate-900'}`}>
            <div className="flex justify-between items-start mb-4">
              <MapPin className={`w-5 h-5 ${city.isPPPFocus ? 'text-white/80' : 'text-accent'}`} />
              {city.isPPPFocus && <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded">PPP Focus</span>}
            </div>
            <h4 className="font-bold text-lg">{city.name}</h4>
            <p className={`text-xs mt-2 ${city.isPPPFocus ? 'text-white/70' : 'text-slate-400'}`}>
              {city.isPPPFocus ? 'Special focus on PPP transactions in WSS sector.' : 'Participating Municipal Committee.'}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const DLIStory = () => {
  const [activeDLI, setActiveDLI] = useState<number | null>(null);

  return (
    <Section id="dlis" subtitle="Performance Indicators" title="The 6 DLIs">
      <div className="space-y-6">
        {DLIS.map((dli, i) => (
          <motion.div
            key={dli.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div 
              onClick={() => setActiveDLI(activeDLI === dli.id ? null : dli.id)}
              className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer group ${activeDLI === dli.id ? 'bg-primary text-white border-primary shadow-2xl' : 'bg-white border-slate-100 hover:border-accent'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${activeDLI === dli.id ? 'bg-accent' : 'bg-accent-soft'}`}>
                    <span className={`font-bold text-lg ${activeDLI === dli.id ? 'text-white' : 'text-accent'}`}>{dli.id}</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{dli.title}</h3>
                    <p className={`text-lg transition-colors ${activeDLI === dli.id ? 'text-white/70' : 'text-slate-600'}`}>{dli.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {dli.fieldValidation && (
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${activeDLI === dli.id ? 'bg-white/10 text-white' : 'bg-green-50 text-green-600'}`}>Field Validation</span>
                  )}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 ${activeDLI === dli.id ? 'bg-white/10 rotate-90' : 'bg-slate-50'}`}>
                    <ChevronRight className={`w-5 h-5 ${activeDLI === dli.id ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {activeDLI === dli.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-12 mt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div>
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Evidence Sources</h4>
                        <ul className="space-y-3">
                          {dli.evidence.map(item => (
                            <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Assigned Experts</h4>
                        <div className="flex flex-wrap gap-2">
                          {dli.roles.map(role => (
                            <span key={role} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-white/90 border border-white/10">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Expected Output</h4>
                        <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                          <p className="text-sm font-medium text-white">{dli.output}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const MethodologyJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="methodology" subtitle="The Process" title="Methodology Journey" className="bg-slate-50">
      <div className="relative">
        {/* Desktop Journey Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />
        
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 gap-8 lg:gap-0">
          {METHODOLOGY_STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center group">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveStep(i)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${activeStep === i ? 'bg-accent border-accent-soft text-white shadow-xl shadow-accent/30' : 'bg-white border-slate-100 text-slate-400 hover:border-accent/30'}`}
              >
                <span className="font-bold text-sm">{i + 1}</span>
              </motion.button>
              <span className={`mt-4 text-xs font-bold uppercase tracking-widest transition-colors hidden lg:block ${activeStep === i ? 'text-accent' : 'text-slate-400'}`}>
                {step.title.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                    <span className="text-white text-3xl font-bold">{activeStep + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{METHODOLOGY_STEPS[activeStep].title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {METHODOLOGY_STEPS[activeStep].description}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Key Activities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {METHODOLOGY_STEPS[activeStep].details?.map(detail => (
                      <div key={detail} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-6 rounded-2xl bg-accent-soft border border-accent/10 flex items-start gap-4">
                    <AlertCircle className="text-accent w-6 h-6 shrink-0" />
                    <p className="text-sm text-slate-700 italic">
                      "No finding is reported without documentary support, specialist validation, and internal QA review before submission."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

const EvidenceTriangulation = () => (
  <Section subtitle="Rigorous Verification" title="Evidence Triangulation">
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[500px] h-[500px] border-2 border-accent rounded-full animate-pulse" />
        <div className="absolute w-[350px] h-[350px] border-2 border-accent rounded-full" />
      </div>
      
      <div className="relative z-10 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {[
              { title: 'ULG Records', icon: FileText },
              { title: 'PMDFC Records', icon: Database },
              { title: 'MIS Outputs', icon: Activity },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4"
              >
                <item.icon className="text-accent w-6 h-6" />
                <span className="font-bold">{item.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-2xl relative"
            >
              <div className="absolute inset-0 rounded-full border-4 border-accent animate-ping opacity-20" />
              <ShieldCheck className="w-12 h-12 mb-2" />
              <span className="text-center font-bold text-sm px-4 leading-tight">Verified Claim</span>
            </motion.div>
          </div>

          <div className="space-y-8">
            {[
              { title: 'Field Observations', icon: MapPin },
              { title: 'Stakeholder Feedback', icon: Users },
              { title: 'Contract Documents', icon: Layers },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4"
              >
                <item.icon className="text-accent w-6 h-6" />
                <span className="font-bold">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const VerificationTools = () => {
  const [activeTool, setActiveTool] = useState(INSTRUMENTS[0]);
  const iconMap: Record<string, any> = {
    FileCheck, ClipboardList, Home, Droplets, ShieldCheck, BarChart3, Calculator, Leaf, Database, FileText
  };

  return (
    <Section subtitle="Infrastructure" title="Verification Instruments" className="bg-slate-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {INSTRUMENTS.map((tool, i) => {
          const Icon = iconMap[tool.icon] || FileText;
          return (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                onClick={() => setActiveTool(tool)}
                className={`flex flex-col items-center text-center p-6 h-full group cursor-pointer transition-all ${
                  activeTool.title === tool.title ? 'border-accent shadow-lg shadow-accent/10' : ''
                }`}
              >
                <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Icon className="text-accent w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{tool.title}</h4>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTool.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Selected Instrument Template</p>
                <h3 className="text-2xl font-bold mb-3">{activeTool.templateTitle}</h3>
                <p className="text-slate-600">{activeTool.objective}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-bold uppercase tracking-wider">
                {activeTool.title}
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeTool.sections.map((section) => (
                <div key={section} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-slate-700">{section}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

const TechEnabledVerification = () => (
  <Section subtitle="Modern Approach" title="Technology-Enabled Verification">
    <div className="relative py-12">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {[
          { title: 'Field Team', icon: Users, desc: 'Trained surveyors on ground' },
          { title: 'Geo-tagged Capture', icon: MapPin, desc: 'GPS & photo evidence' },
          { title: 'Central Repository', icon: Database, desc: 'Secure evidence storage' },
          { title: 'Validation', icon: ShieldCheck, desc: 'Specialist verification' },
          { title: 'Reporting', icon: FileText, desc: 'Automated output generation' },
        ].map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-xl text-accent">
              <step.icon className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">{step.title}</h4>
            <p className="text-xs text-slate-500">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: 'Offline Forms', text: 'Data capture even in remote areas without connectivity.' },
        { title: 'Audit Trail', text: 'Complete traceability from field entry to final report.' },
        { title: 'Progress Tracking', text: 'Real-time monitoring of verification status across 16 cities.' },
      ].map(item => (
        <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <CheckCircle2 className="text-accent w-4 h-4" />
            {item.title}
          </h4>
          <p className="text-sm text-slate-600">{item.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

const AnnualCycle = () => (
  <Section subtitle="Workstream 1" title="Annual IVA / APA Cycle" className="bg-primary text-white">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="space-y-8">
          {[
            'Verification Planning',
            'Desk Review',
            'Validation',
            'Field Verification',
            'Indicator Assessment',
            'Scoring & Allocation',
            'Final Reporting'
          ].map((step, i) => (
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors">
                <span className="text-sm font-bold">{i + 1}</span>
              </div>
              <span className="text-xl font-medium text-white/90">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-3xl p-12 border border-white/10">
        <h3 className="text-2xl font-bold mb-8">Deep-Dive Focus</h3>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'WASH Connections', icon: Droplets },
            { label: 'SWM Systems', icon: Activity },
            { label: 'MAC / PM Scoring', icon: Award },
            { label: 'Revenue Growth', icon: Calculator },
            { label: 'PPP Transactions', icon: Globe },
          ].map(item => (
            <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3">
              <item.icon className="text-accent w-8 h-8" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const QuarterlyCycle = () => (
  <Section subtitle="Workstream 2" title="Quarterly E&S Cycle">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: 'Framework Review', desc: 'Review of ESCF and safeguard instruments.' },
        { title: 'Systems Review', desc: 'Assessment of institutional safeguard systems.' },
        { title: 'Site Inspections', desc: 'Physical monitoring of project sites.' },
        { title: 'Stakeholder Validation', desc: 'Consultations and GRM assessment.' },
        { title: 'Compliance Classification', desc: 'Categorizing findings by severity.' },
        { title: 'Quarterly Reporting', desc: 'Submission of monitoring outputs.' },
      ].map((item, i) => (
        <Card key={item.title} className="relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
          <p className="text-slate-600 mb-6">{item.desc}</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-green-50 text-green-600 text-[10px] font-bold uppercase">Compliant</span>
            <span className="px-2 py-1 rounded bg-yellow-50 text-yellow-600 text-[10px] font-bold uppercase">Partial</span>
            <span className="px-2 py-1 rounded bg-red-50 text-red-600 text-[10px] font-bold uppercase">Critical</span>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const TeamStructure = () => (
  <Section id="team" subtitle="The Experts" title="Consultant Team Structure" className="bg-slate-50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {TEAM.map((member, i) => (
        <motion.div
          key={member.role}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <Card className="h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <Users className="text-slate-400 w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${member.category === 'Key' ? 'bg-accent text-white' : 'bg-slate-200 text-slate-600'}`}>
                {member.category} Expert
              </span>
            </div>
            <h4 className="font-bold text-lg mb-2 leading-tight">{member.role}</h4>
            <p className="text-xs text-slate-500 mb-6 flex-grow">{member.description}</p>
            <div className="mb-4 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest">
              {member.count && <span className="px-2 py-1 rounded bg-slate-100 text-slate-600">Count: {member.count}</span>}
              {member.personMonths && <span className="px-2 py-1 rounded bg-blue-50 text-blue-700">PM: {member.personMonths}</span>}
            </div>
            <div className="space-y-2">
              {member.responsibilities?.map(resp => (
                <div key={resp} className="flex items-center gap-2 text-[10px] font-medium text-slate-700">
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  {resp}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-16 p-10 rounded-3xl bg-white border border-slate-100 shadow-xl max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-8 text-center">Client Interface & Reporting</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {['LG&CDD', 'PMDFC', 'PSC', 'World Bank'].map(client => (
          <div key={client} className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
              <span className="font-bold text-slate-400">{client}</span>
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{client}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const TorComplianceMatrix = () => (
  <Section subtitle="TOR Alignment" title="Requirement to Implementation Matrix">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {TOR_COMPLIANCE.map((item) => (
        <Card key={item.torRequirement} className="h-full border-l-4 border-l-accent">
          <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">TOR Requirement</h3>
          <p className="text-slate-800 font-medium mb-5">{item.torRequirement}</p>
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">How This Proposal Implements It</h4>
          <p className="text-slate-600">{item.implementation}</p>
        </Card>
      ))}
    </div>
  </Section>
);

const QualityAssurance = () => (
  <Section subtitle="Excellence" title="Quality Assurance Process">
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10">
          {[
            { title: 'Field Data', icon: MapPin },
            { title: 'Supervisor Review', icon: Users },
            { title: 'Technical Validation', icon: ShieldCheck },
            { title: 'Back-checks', icon: Search },
            { title: 'Reconciliation', icon: Layers },
            { title: 'Final Sign-off', icon: CheckCircle2 },
          ].map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white border-2 border-slate-50 rounded-2xl flex items-center justify-center mb-4 shadow-lg text-accent"
              >
                <step.icon className="w-8 h-8" />
              </motion.div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-24 p-12 rounded-[40px] bg-accent text-white text-center relative overflow-hidden shadow-2xl shadow-accent/30"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          “No finding is reported without documentary support, specialist validation, and internal QA review before submission.”
        </h3>
        <p className="text-white/70 font-medium tracking-widest uppercase text-sm relative z-10">Our Commitment to Integrity</p>
      </motion.div>
    </div>
  </Section>
);

const ReportingOutputs = () => (
  <Section subtitle="Deliverables" title="Reporting & Outputs" className="bg-slate-50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {OUTPUTS.map((output, i) => (
        <motion.div
          key={output.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="h-full border-l-4 border-l-accent">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="text-accent w-6 h-6" />
              <h3 className="text-xl font-bold">{output.title}</h3>
            </div>
            <p className="text-slate-600 mb-6">{output.description}</p>
            {output.timeline && (
              <p className="text-xs font-semibold text-slate-500 mb-3">
                Timeline: {output.timeline}
              </p>
            )}
            <div className="flex items-center gap-2 mb-6">
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${output.hardCopy ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                Hard Copy: {output.hardCopy ? 'Yes' : 'No'}
              </span>
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${output.softCopy ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                Soft Copy: {output.softCopy ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Timeline = () => (
  <Section subtitle="Schedule" title="Delivery Rhythm">
    <div className="relative py-12">
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
        {[
          { month: 'Jul–Aug', title: 'Mobilization', desc: 'Inception & tool finalization' },
          { month: 'Aug–Sep', title: 'Preparation', desc: 'Document requests & training' },
          { month: 'Year-round', title: 'E&S Monitoring', desc: 'Quarterly safeguard audits' },
          { month: 'Nov–Apr', title: 'APA Window', desc: 'Main DLI verification cycle' },
          { month: 'Mar–May', title: 'Reporting', desc: 'Drafting & reconciliation' },
          { month: 'Jun', title: 'Budget Support', desc: 'Allocation link support' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="w-12 h-12 bg-white border-2 border-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-lg text-accent font-bold text-xs">
              {item.month}
            </div>
            <h4 className="font-bold mb-2">{item.title}</h4>
            <p className="text-xs text-slate-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-primary text-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Rigorous. Credible. <br />Implementation-Ready.
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            Our methodology is designed to provide the World Bank and Government of Punjab with absolute confidence in DLI verification and E&S compliance.
          </p>
          <Button variant="primary">Download Full Proposal</Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
          <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl">Consultancy Excellence</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-8">
              "We don't just verify data; we build the evidence base for sustainable urban reform in Punjab."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-700 rounded-full" />
              <div>
                <p className="font-bold text-sm">Project Management Cell</p>
                <p className="text-xs text-white/40">Lead Consulting Firm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Activity className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">PICP <span className="text-accent">Consultancy</span></span>
        </div>
        <p className="text-white/40 text-sm">© 2026 Punjab Inclusive Cities Program. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectAtAGlance />
      <CitiesCoverage />
      <DLIStory />
      <MethodologyJourney />
      <EvidenceTriangulation />
      <VerificationTools />
      <TechEnabledVerification />
      <AnnualCycle />
      <QuarterlyCycle />
      <TeamStructure />
      <TorComplianceMatrix />
      <QualityAssurance />
      <ReportingOutputs />
      <Timeline />
      <Footer />
    </div>
  );
}
