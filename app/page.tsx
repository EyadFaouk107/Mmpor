"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, Play, Pause, Volume2, VolumeX, Mail, User, Sliders, 
  ArrowRight, Sparkles, TrendingUp, CheckCircle2, ChevronRight,
  TrendingDown, Star, MessageSquare, Flame, Zap, Award, 
  SlidersHorizontal, Check, Clock, Globe, Film, Scissors, Eye, 
  MessageCircle, ArrowUpRight, Send, X, AlertCircle, HelpCircle, 
  ChevronDown, Layers, BarChart3, Smartphone, Laptop
} from "lucide-react";

// Case Studies Dataset
const caseStudies = [
  {
    id: "case-1",
    client: "Saed Al-Otaibi",
    role: "Saudi Tech Founder",
    type: "Reels/TikToks",
    title: "How We Scaled a Saudi Tech Founder's Reels to 1.4M Views",
    metricValue: "+340%",
    metricLabel: "Viewer Retention",
    goal: "Increase organic visual engagement and drive qualified inbound leads for a B2B SaaS startup founder based in Riyadh.",
    challenge: "Deeply technical content was turning average viewers off quickly. Drop-off in the first 3 seconds was 78% due to slow, unformatted hooks.",
    process: "We implemented dynamic cinematic captions, imported structured high-quality B-roll, edited tight 1.5s visual cuts, and curated high-retention audio cues with custom sound engineering.",
    result: "Accumulated over 1.4 Million organic views on LinkedIn and TikTok in 45 days. Average completion rate jumped to 42%, generating 14 direct qualified client inquiries.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-working-at-a-multiscreen-video-editing-desk-41525-large.mp4",
    poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    tags: ["High-Retention Editing", "Typographic Overlays", "Sound Design", "A/B Hook Testing"]
  },
  {
    id: "case-2",
    client: "Oasis Oud Dubai",
    role: "Premium Perfume Brand",
    type: "Ads",
    title: "4.8x ROAS Overhaul for Emirati Luxury Fragrance Campaign",
    metricValue: "4.8x",
    metricLabel: "Campaign ROAS",
    goal: "Supercharge sales conversions on Meta & TikTok ads using existing premium cinematic project assets.",
    challenge: "The original edits were slow, artistic, and cinematic—but they lacked sales psychology. Viewers dropped off before even seeing the bottle and product offer.",
    process: "We re-engineered the ad to place the 'Oud Bottle Burst' sequence in frame 1 as a hook. Added high-tempo ASMR sound design (wood splitting, glass clinking, splash). Added premium glowing text callouts outlining key unique features.",
    result: "Slashed the client's Cost Per Acquisition (CPA) by 54% and increased their ROAS to 4.8x. Over $12,000 in ad revenue was generated within the initial week of testing.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-editor-using-keyboards-and-mouse-41528-large.mp4",
    poster: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    tags: ["Conversion Architecture", "Sound FX ASMR", "Thumb-stopper Hook", "E-commerce Optimization"]
  },
  {
    id: "case-3",
    client: "The Cairo Builder",
    role: "YouTube Documentary Channel",
    type: "Brand Films",
    title: "Increasing Retention by 45% for a Premium Historic Docu-Series",
    metricValue: "820K+",
    metricLabel: "Views in 30 Days",
    goal: "Turn dry, long-form documentary footage into an immersive, cinematic history series focused on Egypt's architectural legacy.",
    challenge: "Raw files consisted of a 3-hour long slow-paced podcast interview with minimal visual depth or narrative momentum.",
    process: "We crafted a tight 3-act narrative script, layered customized soundscapes, color graded the flat LOG profile into rich cinematic tones, and stylized historic archival maps with fluid multi-plane motion mapping.",
    result: "The first video gained 820K views in 30 days. Average view duration surged from a baseline of 4 minutes up to 9 minutes—a massive 45% increase in total-watch-time weight on YouTube.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-production-studio-with-screens-and-lights-41530-large.mp4",
    poster: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cinematic Grading", "Docu-Style Pacing", "Advanced Soundscapes", "Archival Animation"]
  },
  {
    id: "case-4",
    client: "Riyadh Finance Hub",
    role: "Premium Podcast Studio",
    type: "Brand Films",
    title: "Symphonic Audio & Cinematic Multi-Cam Edit Overhaul",
    metricValue: "2.1M",
    metricLabel: "Total Show Reach",
    goal: "Broaden financial media consumption to young premium investors in the GCC region through cinematic short clips and highly polished full-length podcasts.",
    challenge: "Traditional vertical flat multi-cam podcast edits lacked pacing, visual interest, and had poor, echoing room audio.",
    process: "We implemented sophisticated dynamic multi-cam auto-switching based on speech volume, customized responsive title overlays, applied heavy compression sound design, and colored for a premium late-night high-contrast brand aesthetic.",
    result: "Sourced over 2.1 Million platform-wide short-clip impressions in less than 30 days. Full-length audio retention increased from an average of 12% to over 34%.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-working-at-a-multiscreen-video-editing-desk-41525-large.mp4",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Multi-Cam Assembly", "Pro-Compressor Mastering", "Speech-Reactive Assembly", "GCC Trend Optimization"]
  }
];

// Interactive Retention Nodes Data
const retentionPoints = [
  {
    time: "0s - 3s (The Hook)",
    standard: 100,
    optimized: 100,
    title: "Thumb-Stopping Hook Strategy",
    desc: "Average videos drop 60% of their audience in the first 3 seconds. To prevent this, we slash long verbal greetings. Instead, we open exactly with a localized high-stakes question, stylized 3D keyframe title card animations, and crisp, micro-sound effects.",
    keyMetrics: "Sustains 85%+ Viewer Density",
    deliverable: "Visual title card, vocal cut pacing adjustment"
  },
  {
    time: "5s - 15s (The Setup)",
    standard: 40,
    optimized: 82,
    title: "Dynamic Jump-Cut Progression",
    desc: "A stagnant screen is the death of viewer attention. We enforce strict visual pattern interrupts every 1.5 to 2.2 seconds. Custom color-graded stock assets, kinetic text popups, and smart zoom ins make content feel constantly evolving.",
    keyMetrics: "Halves cognitive text fatigue",
    deliverable: "Dual-scale tracking, frame crops"
  },
  {
    time: "20s - 40s (Visual Core)",
    standard: 25,
    optimized: 74,
    title: "B-Roll Narrative Interleaving",
    desc: "Flat speech is backed with premium thematic layers. We dig through structured cinematic library stock or premium custom assets to match the speech topics with flawless color-grade matching and atmospheric SFX.",
    keyMetrics: "Keeps dropoffs below 5% per 10s",
    deliverable: "Custom contextual visual assets overlay"
  },
  {
    time: "45s - 55s (Aural Boost)",
    standard: 18,
    optimized: 68,
    title: "ASMR Audio Overmasting",
    desc: "Sound represents 60% of perceived cinematic quality. We apply deep compression mastering on the microphone source, extract annoying ambient echoes, and blend low-frequency ambient drone loops with high-frequency sound textures.",
    keyMetrics: "Triggers ASMR sensory feedback",
    deliverable: "Premium sound libraries integration"
  },
  {
    time: "60s (The CTA)",
    standard: 12,
    optimized: 62,
    title: "Inbound Pipeline Conversion",
    desc: "Instead of saying 'link in bio' with a boring slide, we curate a cohesive, animated high-retention call-to-action prompt. Sound cues and on-screen arrows drive active swipe decisions and generate actual leads.",
    keyMetrics: "Increases profile clicks by up to 4.5x",
    deliverable: "Branded animated CTA overlay templates"
  }
];

// FAQ Spec Questions Dataset
const faqs = [
  {
    question: "How do I send you large 4K RAW video footage?",
    answer: "We make file sharing completely seamless. Upon onboarding, we establish a private shared folder on Frame.io and Google Drive (10TB plan). You upload raw tracks directly from your camera, phone, or computer. Our system automatically processes your clips and notifies our DaVinci workstation to sync immediately."
  },
  {
    question: "What is the turnaround time for my videos?",
    answer: "For our standard Growth Retainer, standard deliverables are shipped within 24 to 48 hours from footage delivery. For urgent overnight campaigns, we offer priority enterprise rendering services that ensure draft delivery within 12 hours."
  },
  {
    question: "How do revisions work? What if I want major changes?",
    answer: "We work inside Frame.io, allowing you to click directly on the video player frame to drop comments at exact timestamps. These annotations stream directly to our DaVinci timelines. We offer unlimited micro-revisons on our Growth Retainer packages to ensure 100% aesthetic approval."
  },
  {
    question: "Do you provide custom script advice and hook templates?",
    answer: "Yes, visual post-production is only half of the solution. We analyze your niche weekly and hand over 3 customized high-retention hook script recommendations based on current viral trends. We review your draft scripts before you record to save hours of raw studio time."
  },
  {
    question: "What editing software and workspace gear are used?",
    answer: "We operate entirely in DaVinci Resolve Studio and Adobe After Effects for maximum cinematic output with advanced node-based tracking. Work is performed on a dedicated Apple M3 Max hardware station paired with professional Neumann audio monitoring to ensure flawless spectral balance."
  }
];

export default function Home() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // Filter control
  const [activeFilter, setActiveFilter] = useState("All");

  // Drawer case study selection
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  // Image slider drag state
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(896);

  useEffect(() => {
    if (!sliderRef.current) return;
    const updateWidth = () => {
      setContainerWidth(sliderRef.current?.getBoundingClientRect().width || 896);
    };
    updateWidth();
    
    if (typeof window !== "undefined" && typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(sliderRef.current);
      return () => observer.disconnect();
    }
  }, []);

  // Active retention chart node selection
  const [selectedRetentionIdx, setSelectedRetentionIdx] = useState(0);

  // Cinema Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLightboxMuted, setIsLightboxMuted] = useState(false);
  const [isLightboxPlaying, setIsLightboxPlaying] = useState(true);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  // FAQ Accordion State
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  // Intake Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    budget: "$1,000 - $2,500",
    volume: "3 - 5 videos / month",
    deadline: "Within 2 weeks",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle visual before/after slider drag
  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handlePointerDown = () => setIsDragging(true);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      handleSliderMove(clientX);
    };

    const handlePointerUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("mouseup", handlePointerUp);
      window.addEventListener("touchmove", handlePointerMove);
      window.addEventListener("touchend", handlePointerUp);
    }

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging]);

  // Handle Form Submission
  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      localStorage.setItem("nour_lead_improved", JSON.stringify(formState));
    }, 1200);
  };

  const toggleLightboxPlay = () => {
    if (lightboxVideoRef.current) {
      if (isLightboxPlaying) {
        lightboxVideoRef.current.pause();
      } else {
        lightboxVideoRef.current.play().catch(err => console.log("Video fail", err));
      }
      setIsLightboxPlaying(!isLightboxPlaying);
    }
  };

  const toggleLightboxMute = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.muted = !isLightboxMuted;
      setIsLightboxMuted(!isLightboxMuted);
    }
  };

  const activeCS = caseStudies.find(cs => cs.id === activeCaseStudyId);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0071e3] selection:text-white relative font-sans leading-normal antialiased">
      
      {/* Absolute Header Gradients */}
      <div className="absolute top-0 left-0 w-full h-[55rem] bg-[radial-gradient(circle_at_50%_-10%,rgba(0,113,227,0.06),transparent_65%)] -z-10 pointer-events-none" />
      <div className="absolute top-[80rem] right-0 w-full h-[45rem] bg-[radial-gradient(circle_at_80%_30%,rgba(0,113,227,0.04),transparent_50%)] -z-10 pointer-events-none" />

      {/* HEADER NAV - APPLE SIGNATURE FROSTED GLASS BAR */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-[#e5e5ea] px-6 py-2.5">
        <div id="nav-container" className="max-w-5xl mx-auto flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="h-7 w-7 rounded-md bg-[#1d1d1f] flex items-center justify-center font-bold tracking-tighter text-white text-xs shadow-sm group-hover:bg-[#0071e3] transition-colors">
              AN
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[12.5px] tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors leading-none">
                AHMED NOUR
              </span>
              <span className="text-[7.5px] font-mono text-[#86868b] tracking-widest font-semibold uppercase leading-none mt-1">
                Post-Production Studio
              </span>
            </div>
          </a>

          {/* Clean minimal navbar with Apple grey links */}
          <nav className="hidden md:flex items-center gap-7 text-[11.5px] font-semibold text-[#515154]">
            <a href="#showreel" className="hover:text-[#1d1d1f] transition-colors">Showreel</a>
            <a href="#comparer" className="hover:text-[#1d1d1f] transition-colors">Before/After</a>
            <a href="#retention" className="hover:text-[#1d1d1f] transition-colors">Retention Chart</a>
            <a href="#portfolio" className="hover:text-[#1d1d1f] transition-colors">Featured Cases</a>
            <a href="#pricing" className="hover:text-[#1d1d1f] transition-colors">Retainers</a>
            <a href="#faq" className="hover:text-[#1d1d1f] transition-colors">Specs FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors leading-none tracking-tight shadow-xs"
            >
              Get Free Audit <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <button 
              onClick={() => setIsMobileMenu(!isMobileMenu)}
              className="md:hidden p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#1d1d1f] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenu ? <X className="w-4.5 h-4.5" /> : <SlidersHorizontal className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMobileMenu && (
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute top-full left-0 w-full bg-white border-b border-[#e5e5ea] px-6 py-5 flex flex-col gap-2.5 shadow-lg z-50 md:hidden"
            >
              <a href="#showreel" onClick={() => setIsMobileMenu(false)} className="text-xs font-semibold py-1.5 border-b border-gray-100 text-[#515154] hover:text-[#1d1d1f]">Showreel</a>
              <a href="#comparer" onClick={() => setIsMobileMenu(false)} className="text-xs font-semibold py-1.5 border-b border-gray-100 text-[#515154] hover:text-[#1d1d1f]">Before / After edit</a>
              <a href="#retention" onClick={() => setIsMobileMenu(false)} className="text-xs font-semibold py-1.5 border-b border-gray-100 text-[#515154] hover:text-[#1d1d1f]">Retention architecture</a>
              <a href="#portfolio" onClick={() => setIsMobileMenu(false)} className="text-xs font-semibold py-1.5 border-b border-gray-100 text-[#515154] hover:text-[#1d1d1f]">Featured work</a>
              <a href="#pricing" onClick={() => setIsMobileMenu(false)} className="text-xs font-semibold py-1.5 border-b border-gray-100 text-[#515154] hover:text-[#1d1d1f]">Pricing plans</a>
              <a href="#contact" onClick={() => setIsMobileMenu(false)} className="inline-flex justify-center items-center gap-1 px-5 py-2.5 rounded-full text-[11px] font-bold bg-[#0071e3] text-white uppercase text-center mt-2 shadow-xs">
                Inquire Slot <Zap className="w-3.5 h-3.5 fill-white" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


      {/* HERO SECTION - SLEEK & SPACIOUS */}
      <section id="hero" className="relative pt-16 pb-20 px-6 max-w-5xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#d2d2d7] rounded-full mb-8 shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3] animate-pulse" />
          <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#75757a] font-mono leading-none">
            Onboarding 3 Retainers for Q3 (Egypt · KSA · UAE)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-6 leading-[1.08]">
          I edit videos that <br />
          <span className="bg-gradient-to-r from-black via-[#0071e3] to-gray-600 bg-clip-text text-transparent">
            drive sales and views.
          </span>
        </h1>

        <p className="text-[#86868b] text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-semibold">
          Short-form reels, high-ROAS ad creatives, and documentaries engineered precisely for high retention and actual pipeline scaling. Simple, flat-rate retainer delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto mb-12">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs tracking-wide uppercase bg-[#0071e3] text-white hover:bg-[#0077ed] flex items-center justify-center gap-1.5 shadow-sm active:scale-97 transition-all"
          >
            Apply Online <Zap className="w-3.5 h-3.5 fill-white" />
          </a>
          <button 
            onClick={() => setIsLightboxOpen(true)}
            className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs tracking-wide uppercase bg-white border border-[#d2d2d7] hover:bg-[#f5f5f7] text-[#1d1d1f] flex items-center justify-center gap-1.5 shadow-xs active:scale-97 transition-all cursor-pointer"
          >
            Play Showreel <Play className="w-3.5 h-3.5 fill-current text-[#0071e3]" />
          </button>
        </div>

        {/* Brand stats */}
        <div className="flex items-center justify-center gap-3 bg-white border border-[#e5e5ea] py-2 px-3.5 rounded-full max-w-[260px] mx-auto shadow-xs">
          <div className="flex -space-x-2.5 overflow-hidden">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
            ].map((url, idx) => (
              <div key={idx} className="relative h-6.5 w-6.5 rounded-full border-2 border-white overflow-hidden">
                <Image
                  className="object-cover"
                  src={url}
                  alt="Partner avatar"
                  fill
                  sizes="26px"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start leading-none gap-0.5">
            <span className="text-[10px] font-extrabold text-[#1d1d1f]">45+ Brands Partnered</span>
            <span className="text-[7.5px] font-mono text-[#86868b] uppercase tracking-wide font-bold">Top 1% GCC Retention</span>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: CINEMATIC LIGHTBOX SHOWREEL BUTTON CONTAINER */}
      <section id="showreel" className="px-6 pb-20 max-w-4xl mx-auto scroll-mt-24">
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="relative group rounded-3xl overflow-hidden border border-[#d2d2d7] bg-[#e5e5ea] shadow-xl aspect-video cursor-pointer"
        >
          {/* Loop image card as teaser trigger */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
              alt="Ahmed Nour Video Workspace Studio Teaser"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              sizes="(max-w-4xl) 100vw, 896px"
              priority
            />
          </div>
          
          <div className="absolute inset-0 bg-neutral-900/35 group-hover:bg-neutral-900/45 transition-colors duration-300" />
          
          {/* Decorative Waveforms & Hover Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono px-2 py-0.5 bg-black/60 border border-white/10 text-white uppercase font-bold rounded">
                Showreel HD High Fidelity
              </span>
              <span className="h-5 w-5 bg-white/20 border border-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <Film className="w-3 h-3" />
              </span>
            </div>

            {/* Huge Play Trigger Button */}
            <div className="mx-auto flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white text-[#1d1d1f] hover:bg-[#0071e3] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-105 active:scale-95">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <span className="text-white text-xs font-bold tracking-wider uppercase font-mono bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full border border-white/5 shadow-xs">
                Launch 1-Min Cinematic Demo
              </span>
            </div>

            <div className="flex items-center justify-between text-white/70 text-[10px] bg-black/40 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/5 shadow-sm max-w-sm mx-auto w-full">
              <div className="flex items-center gap-2 font-mono">
                <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>DA VINCI RESOLVE GRADE</span>
              </div>
              <span className="font-bold underline group-hover:text-white">Watch Director&apos;s Cut</span>
            </div>
          </div>
        </div>
      </section>


      {/* NEW SECTION 2: INTERACTIVE BEFORE/AFTER SLIDER (VISUAL PROOF) */}
      <section id="comparer" className="py-20 bg-white border-y border-[#e5e5ea] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0071e3] font-bold block mb-1">
              Interactive Comparer
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
              Before / After Production Value
            </h2>
            <p className="text-[#86868b] text-xs sm:text-sm font-medium">
              Drag the physical slider interface to inspect how raw, unedited footage (grey flat LOG) is transformed into our signature high-retention, color-graded sales machine.
            </p>
          </div>

          {/* Interactive Slider Container */}
          <div 
            ref={sliderRef}
            className="relative h-[250px] sm:h-[420px] rounded-3xl overflow-hidden border border-[#d2d2d7] bg-gray-100 shadow-lg select-none cursor-ew-resize"
            onMouseMove={(e) => isDragging && handleSliderMove(e.clientX)}
            onTouchMove={(e) => isDragging && handleSliderMove(e.touches[0].clientX)}
          >
            {/* BACKGROUND: Finished Side (Vivid, saturation, caption text, overlays) */}
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80"
                alt="Finished premium color graded grade edit"
                fill
                className="object-cover transition-all"
                sizes="(max-w-4xl) 100vw, 896px"
                priority
              />
              
              {/* Finished Side Custom Badging Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              
              {/* Premium Title Accent */}
              <div className="absolute top-4 right-4 bg-[#0071e3] border border-[#0071e3]/20 py-1 px-3 rounded-full text-[9px] font-extrabold text-white uppercase shadow-sm tracking-wide font-mono z-10 pointer-events-none">
                Ahmed Nour Edit
              </div>

              {/* Fake Kinetic Caption Overlay */}
              <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 text-center max-w-xs bg-black/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-lg text-white pointer-events-none z-10">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#0071e3] uppercase block mb-0.5">Custom Caption Injected</span>
                <p className="text-sm font-heading font-extrabold tracking-tight leading-dense">
                  &quot;If you aren&apos;t grading your <span className="text-[#0071e3] underline">LOG tracks</span> properly, you&apos;re leaving views on the table!&quot;
                </p>
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="h-1 bg-[#0071e3] w-6 rounded-full" />
                  <span className="text-[7.5px] font-mono text-gray-300">DaVinci 3D Grading Applied</span>
                </div>
              </div>

              {/* Waveform indicator */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1 z-10 bg-white/90 border border-[#d2d2d7] py-1 px-3.5 rounded-full text-[9px] text-[#1d1d1f] font-mono font-bold uppercase shadow-sm pointer-events-none">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Hi-Fi Dynamic Audio Wave</span>
              </div>
            </div>

            {/* FOREGROUND CLIP SECTION: Raw / Dull Side (Low sat, low contrast, grey) */}
            <div 
              className="absolute left-0 top-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div 
                className="absolute left-0 top-0 h-full"
                style={{ width: `${containerWidth}px` }}
              >
                {/* Visual Image with greyscale filters to perfectly simulate camera raw flat footage */}
                <div className="relative w-full h-full grayscale brightness-[1.05] contrast-[0.7] opacity-80 saturate-[0.25]">
                  <Image 
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80"
                    alt="Raw unedited video footage vlog camera segment"
                    fill
                    className="object-cover"
                    sizes="(max-w-4xl) 100vw, 896px"
                  />
                </div>
                
                {/* Raw Side Badge overlay */}
                <div className="absolute top-4 left-4 bg-gray-200/90 border border-gray-300 py-1 px-3 rounded-full text-[9px] font-extrabold text-[#515154] uppercase tracking-wide font-mono z-10 pointer-events-none">
                  Raw Source (Flat LOG Feed)
                </div>

                {/* Broken/No Audio cue */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 z-10 bg-black/60 border border-white/5 py-1 px-3 rounded-full text-[9px] text-white/80 font-mono uppercase shadow-sm pointer-events-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  <span>Echoing Room sound</span>
                </div>

                {/* Flat Dull Text Info */}
                <div className="absolute bottom-6 left-6 max-w-[200px] bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200 shadow-sm text-left pointer-events-none z-10 hidden sm:block">
                  <span className="text-[8px] font-mono text-[#86868b] uppercase block font-bold">Unoptimised Format</span>
                  <p className="text-xs text-[#1d1d1f] leading-normal mt-1">
                    Zero captions, low volume hooks, and slow pauses drive viewers away instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* DRAGGABLE PHYSICAL HANDLEBAR */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-[#0071e3] border-4 border-white text-white flex items-center justify-center cursor-pointer shadow-lg active:scale-95 transition-all"
                onPointerDown={handlePointerDown}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

          {/* Helper caption slider */}
          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#86868b] px-2 font-medium">
            <span>← RAW CAMERA LOG</span>
            <span className="font-sans font-bold bg-[#0071e3]/5 text-[#0071e3] px-3 py-1 rounded-full border border-[#0071e3]/10">Hold &amp; Drag split-handle horizontally</span>
            <span>AHMED NOUR GRADED + OPTIMISED →</span>
          </div>

        </div>
      </section>


      {/* NEW SECTION 3: INTERACTIVE RETENTION OPTIMISER CHART (SCIENCE FIRST) */}
      <section id="retention" className="py-20 max-w-4xl mx-auto px-6 scroll-mt-24">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#0071e3] font-bold block mb-1">
            Retention Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
            Audiences Retained 4.5x Longer
          </h2>
          <p className="text-[#86868b] text-xs sm:text-sm font-medium">
            Retention-first editing isn&apos;t art—it is math. Click the interactive checkpoints along our performance curve to see how post-production elements prevent drops.
          </p>
        </div>

        {/* Dynamic visual graph bento element */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual SVG Graph Box (7 Cols) */}
          <div className="md:col-span-8 p-6 rounded-3xl bg-white border border-[#d2d2d7] shadow-sm flex flex-col justify-between">
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[9.5px] font-mono uppercase font-bold text-[#86868b]">
                60s Retention Progression Curve
              </span>
              <div className="flex items-center gap-3 text-[9px] font-mono font-bold">
                <span className="flex items-center gap-1 text-[#0071e3]">
                  <span className="h-1.5 w-6 bg-[#0071e3] rounded-full" /> Optimized
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <span className="h-1.5 w-6 bg-gray-300 rounded-full" /> No-formula standard
                </span>
              </div>
            </div>

            {/* Custom SVG line-chart simulator with node plot pointers */}
            <div className="relative w-full h-[180px] sm:h-[220px] bg-gray-50 rounded-2xl border border-gray-100 p-4">
              
              {/* Y-axis percent guidelines */}
              <div className="absolute inset-y-0 left-0 pl-2.5 flex flex-col justify-between text-[7px] font-mono font-bold text-gray-400 py-3 pointer-events-none">
                <span>100% (density)</span>
                <span>80%</span>
                <span>50%</span>
                <span>20%</span>
                <span>0% Duration</span>
              </div>

              {/* Grid guide rules */}
              <div className="absolute inset-0 pl-14 pr-4 py-3 flex flex-col justify-between pointer-events-none opacity-40">
                <div className="border-b border-dashed border-gray-200 w-full" />
                <div className="border-b border-dashed border-gray-200 w-full" />
                <div className="border-b border-dashed border-gray-200 w-full" />
                <div className="border-b border-dashed border-gray-200 w-full" />
              </div>

              {/* Actual Vector Chart SVG block */}
              <svg className="absolute inset-y-0 left-12 right-4 h-full w-[calc(100%-48px)] px-2 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Standard curve (crashes to 12%) */}
                <path 
                  d="M 0,0 C 1,30 2,40 5,60 C 10,75 25,80 50,85 C 75,88 90,89 100,90 font-mono outline-dotted border" 
                  fill="none" 
                  stroke="#d1d5db" 
                  strokeWidth="2.5"
                  className="stroke-gray-300"
                />

                {/* Ahmed Nour optimized curve (starts at 100, stays at 82, wraps at 62) */}
                <path 
                  d="M 0,0 C 5,10 8,18 15,18 C 25,18 40,25 60,30 C 80,33 90,38 100,38" 
                  fill="none" 
                  stroke="#0071e3" 
                  strokeWidth="3.5"
                  className="stroke-[#0071e3] drop-shadow-[0_2px_10px_rgba(0,113,227,0.15)]"
                />

                {/* Plot Pointers Interactive Anchor Circles */}
                {[
                  { x: 0, y: 0, idx: 0 },   // 0s hook
                  { x: 15, y: 18, idx: 1 }, // 5-15s jump cuts
                  { x: 50, y: 28, idx: 2 }, // 20-40s B-rolls
                  { x: 80, y: 33, idx: 3 }, // 45-55s audio
                  { x: 100, y: 38, idx: 4 } // 60s CTA
                ].map((pt) => (
                  <circle 
                    key={pt.idx}
                    cx={`${pt.x}%`} 
                    cy={`${pt.y}%`} 
                    r={selectedRetentionIdx === pt.idx ? "4.5" : "3"} 
                    className={`cursor-pointer transition-all ${
                      selectedRetentionIdx === pt.idx 
                        ? "fill-[#0071e3] stroke-white stroke-[2.5]" 
                        : "fill-white stroke-[#0071e3] hover:r-4 stroke-2"
                    }`}
                    onClick={() => setSelectedRetentionIdx(pt.idx)}
                  />
                ))}
              </svg>

              {/* Plot timestamp titles overlay */}
              <div className="absolute bottom-2 left-12 right-4 flex justify-between px-2 text-[7px] font-mono font-extrabold text-[#86868b] pointer-events-none">
                <span>0s (HOOK)</span>
                <span>15s (STORY)</span>
                <span>40s (PROOF)</span>
                <span>60s (CTA ACTION)</span>
              </div>
            </div>

            {/* Selector trigger bar buttons */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 mt-5 pt-3 border-t border-gray-100">
              {retentionPoints.map((pt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setSelectedRetentionIdx(pIdx)}
                  className={`px-3 py-1 bg-gray-50 rounded-full text-[9px] font-mono uppercase font-bold transition-all ${
                    selectedRetentionIdx === pIdx 
                      ? "bg-[#0071e3]/10 text-[#0071e3] border border-[#0071e3]/20 shadow-2xs" 
                      : "text-gray-500 hover:text-[#1d1d1f] border border-gray-200"
                  }`}
                >
                  {pIdx + 1}. {pt.time.split(" ")[0]}
                </button>
              ))}
            </div>

          </div>

          {/* Details Response Panel (5 Cols) */}
          <div className="md:col-span-4 flex flex-col justify-between bg-[#f5f5f7] border border-[#d2d2d7] p-6 rounded-3xl shadow-xs">
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#0071e3] font-extrabold uppercase tracking-widest flex items-center gap-1.5 bg-white border border-[#d2d2d7] py-1 px-3 rounded-full w-fit leading-none shadow-3xs">
                <BarChart3 className="w-3.5 h-3.5" /> Retention Hack Details
              </span>

              <div>
                <h4 className="text-sm font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-1">
                  {retentionPoints[selectedRetentionIdx].title}
                </h4>
                <span className="text-[9px] font-mono uppercase text-emerald-600 font-bold block bg-white border border-[#d2d2d7] py-0.5 px-2 rounded w-fit my-1.5">
                  KPI Goal: {retentionPoints[selectedRetentionIdx].keyMetrics}
                </span>
                <p className="text-xs text-[#515154] leading-relaxed mt-1">
                  {retentionPoints[selectedRetentionIdx].desc}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200/80">
              <span className="text-[8.5px] font-mono text-[#86868b] uppercase tracking-wider block font-bold mb-1">What we deploy</span>
              <div className="flex items-center gap-1 bg-white border border-[#d2d2d7] rounded-xl px-2.5 py-1.5 shadow-3xs">
                <Check className="w-4 h-4 text-[#0071e3] shrink-0" />
                <span className="text-[9.5px] font-extrabold text-[#1d1d1f] leading-none">
                  {retentionPoints[selectedRetentionIdx].deliverable}
                </span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* SELECTED PORTFOLIO (CASE STUDIES) */}
      <section id="portfolio" className="py-20 max-w-5xl mx-auto px-6 border-t border-[#e5e5ea] scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#0071e3] font-bold block mb-1">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
            Case Studies &amp; Campaign Results
          </h2>
          <p className="text-[#86868b] text-xs sm:text-sm font-medium">
            Detailed client case histories showing how we transform raw logs into scaling direct pipeline numbers across UAE, Egypt, and Saudi Arabia.
          </p>

          {/* Filtering tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 max-w-xs sm:max-w-md mx-auto bg-gray-100 p-1.5 rounded-full">
            {["All", "Reels/TikToks", "Ads", "Brand Films"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-extrabold transition-all duration-300 cursor-pointer ${
                  activeFilter === tab 
                    ? "bg-white text-[#1d1d1f] shadow-xs scale-102" 
                    : "text-[#515154] hover:text-[#1d1d1f]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies
            .filter((item) => activeFilter === "All" || item.type === activeFilter)
            .map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl overflow-hidden border border-[#d2d2d7] bg-white hover:bg-white hover:shadow-xl hover:scale-[1.01] transition-all duration-350 flex flex-col justify-between shadow-3xs cursor-pointer"
                onClick={() => setActiveCaseStudyId(item.id)}
              >
                {/* Image poster section */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-[#e5e5ea]">
                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    sizes="(max-w-md) 100vw, 440px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-white/95 border border-gray-200 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase font-mono font-bold text-[#1d1d1f]">
                    {item.type}
                  </span>

                  <div className="absolute bottom-4 right-4 bg-white border border-[#d2d2d7] backdrop-blur-md py-1 px-3 rounded-full text-[10px] font-bold text-emerald-600 flex items-center gap-1 shadow-xs font-mono">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metricValue} {item.metricLabel}</span>
                  </div>

                  {/* Hover action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/35 pointer-events-none">
                    <div className="px-5 py-2 rounded-full bg-white text-[#1d1d1f] font-bold text-[10.5px] tracking-wide flex items-center gap-1 shadow-md uppercase">
                      Inspect Mechanics <ArrowUpRight className="w-3.5 h-3.5 text-[#0071e3]" />
                    </div>
                  </div>
                </div>

                {/* Info and briefs */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5 text-[10px] text-[#86868b] font-mono uppercase tracking-wider font-bold">
                      <span>{item.role}</span>
                      <span className="text-[#0071e3] font-bold">{item.client}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-extrabold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors leading-tight mb-4">
                      {item.title}
                    </h3>

                    {/* Brief summaries in light theme panels */}
                    <div className="space-y-3.5 mb-5 border-y border-gray-100 py-3.5 text-left">
                      <div>
                        <span className="text-[9px] font-mono uppercase text-[#515154] font-bold flex items-center gap-1 mb-1">
                          <Check className="w-3.5 h-3.5 text-[#0071e3]" /> Campaign Goal
                        </span>
                        <p className="text-xs text-[#515154] leading-relaxed font-semibold pl-4">
                          {item.goal}
                        </p>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono uppercase text-emerald-600 font-bold flex items-center gap-1 mb-1">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> Result Metrics:
                        </span>
                        <p className="text-xs text-[#1d1d1f] leading-relaxed pl-4 font-bold">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle grey tag capsules */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[9.2px] font-mono bg-gray-100 border border-gray-200/80 px-2 py-0.5 rounded text-[#515154] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect Link */}
                <div className="px-6 md:px-8 pb-6 pt-3 border-t border-gray-100 bg-[#f5f5f7]/60 flex items-center justify-between text-xs text-[#515154] group-hover:text-[#1d1d1f] transition-colors font-semibold">
                  <span>Explore Case Mechanics</span>
                  <div className="flex items-center gap-0.5 text-[#0071e3]">
                    <span>View Breakdown</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            ))}
        </div>
      </section>


      {/* THE EDITING FORMULA - SPACIOUS WORKFLOW SCROLL */}
      <section id="process" className="py-20 bg-white border-y border-[#e5e5ea] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0071e3] font-bold block mb-1">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
              The Post-Production Formula
            </h2>
            <p className="text-[#86868b] text-xs sm:text-sm font-medium">
              We leverage a structured, extremely reliable feedback and delivery sequence to build view retention.
            </p>
          </div>

          <div className="relative border-l border-gray-200 pl-8 md:pl-16 space-y-12">
            {[
              {
                phase: "Step 01",
                title: "Blueprint Strategy Setup",
                desc: "We analyze competitor video loops, dissect hook tactics, and align precise narrative angles before your record button is pressed.",
                icon: Sliders
              },
              {
                phase: "Step 02",
                title: "Draft dialog & hook advisory",
                desc: "We help frame punchy dialog hooks. Cutting raw studio stutters at the source simplifies rendering later.",
                icon: Film
              },
              {
                phase: "Step 03",
                title: "DaVinci Grading & Assembly",
                desc: "We perform skin-tone matched grading and multi-point audio noise correction to secure raw studio file depth.",
                icon: Scissors
              },
              {
                phase: "Step 04",
                title: "Frame.io Review Protocol",
                desc: "Videos stream directly to your review dashboard. You provide precise timestamp pin annotations for ultimate precision.",
                icon: Laptop
              },
              {
                phase: "Step 05",
                title: "Retainer Slots Deployment",
                desc: "We deliver full high-integrity assets on-time in specialized folder sets, primed to capture leads instantly.",
                icon: Zap
              }
            ].map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative group pl-1">
                  {/* Connected blue indicator circle */}
                  <div className="absolute -left-[49px] md:-left-[81px] top-1.5 flex items-center justify-center">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#0071e3] flex items-center justify-center shadow-xs transition-colors group-hover:bg-[#0071e3] group-hover:text-white">
                      <IconComp className="w-4 h-4 group-hover:scale-105 transition-transform" />
                    </div>
                  </div>

                  {/* Sleek gray spec card */}
                  <div className="p-6 md:p-8 rounded-3xl bg-[#f5f5f7] border border-gray-200/80 hover:border-[#d2d2d7] hover:bg-white transition-all duration-300 shadow-xs">
                    <div className="flex items-center gap-3.5 mb-2">
                      <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 bg-blue-50 border border-blue-200 text-[#0071e3] uppercase rounded">
                        {step.phase}
                      </span>
                      <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#1d1d1f]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#515154] leading-relaxed font-sans mt-3">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* PRICING PLANS - RETAINER DETAILS */}
      <section id="pricing" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#0071e3] font-bold block mb-1">
            Pricing Retainers
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
            Clear Retainer Investments
          </h2>
          <p className="text-[#86868b] text-[#86868b] text-xs sm:text-sm font-medium">
            No unexpected invoices. Fixed, high-integrity flat-rate packages suited to professional scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Starter Plan */}
          <div className="p-8 rounded-3xl bg-white border border-[#d2d2d7] hover:shadow-lg transition-all flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[9px] font-mono text-[#86868b] font-bold uppercase mb-1 block">One-Off Project Pack</span>
              <h3 className="text-lg font-heading font-extrabold text-[#1d1d1f] mb-2">Starter Pack</h3>
              <p className="text-xs text-[#515154] mb-6 leading-relaxed">
                Perfect to test-drive editor integration and visual mechanics on a single premium video campaign before retainer scaling.
              </p>

              <div className="mb-6 flex items-baseline gap-1 bg-gray-100 py-3 px-4 rounded-xl border border-gray-200/50">
                <span className="text-2xl font-bold text-[#1d1d1f]">$250</span>
                <span className="text-xs text-[#86868b] font-medium">/ Flat One-Time</span>
              </div>

              <div className="space-y-3 font-medium">
                {[
                  "1 Premium Video Complete",
                  "Manual DaVinci Color Grading",
                  "Fast-Paced Audio Sound FX ASMR",
                  "2 Full Rounds of Revision Files",
                  "Shared Private Frame.io Dashboard"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#515154]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 bg-white">
              <a href="#contact" className="w-full inline-flex justify-center items-center py-2.5 rounded-full border border-[#d2d2d7] hover:bg-gray-50 text-[11px] font-bold text-[#1d1d1f] uppercase transition-all shadow-3xs text-center font-mono">
                Select Package
              </a>
            </div>
          </div>

          {/* Growth Retainer - Modern Off-Black Card */}
          <div className="p-8 rounded-3xl bg-[#1d1d1f] border-2 border-[#1d1d1f] relative flex flex-col justify-between shadow-xl text-white">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0071e3] px-3.5 py-1 rounded-full text-[9px] font-extrabold text-white uppercase shadow-sm tracking-wide font-mono leading-none">
              Most Popular
            </div>

            <div>
              <span className="text-[9px] font-mono text-blue-400 font-bold uppercase mb-1 block">Monthly Content Engine</span>
              <h3 className="text-xl font-heading font-extrabold text-white mb-2 flex items-center justify-between">
                Growth Plan <Zap className="w-4 h-4 text-[#0071e3] fill-[#0071e3]" />
              </h3>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed font-semibold">
                Full-throttle organic retention retainer for founders, coaches, and creators scaling structured social pipeline lead flows.
              </p>

              <div className="mb-6 flex items-baseline gap-1 bg-white/10 py-3.5 px-4 rounded-xl">
                <span className="text-3xl font-extrabold text-white">$1,200</span>
                <span className="text-xs text-gray-200 font-medium">/ Month Retainer</span>
              </div>

              <div className="space-y-3 font-bold">
                {[
                  "12 Short Videos / Reels / TikToks",
                  "Hook Layout Refinement templates",
                  "HD Deep Audio Noise extraction",
                  "Under 48-Hour Prompt Delivery",
                  "Dedicated Priority Slack Channel",
                  "UNLIMITED Micro Revisions"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#e5e5ea] text-xs">
                    <Check className="w-3.5 h-3.5 text-[#0071e3] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <a href="#contact" className="w-full inline-flex justify-center items-center py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-[#ffffff] font-extrabold text-[11px] uppercase transition-all shadow-sm text-center font-mono">
                Secure Retainer Slot
              </a>
            </div>
          </div>

          {/* Custom Retainer */}
          <div className="p-8 rounded-3xl bg-white border border-[#d2d2d7] hover:shadow-lg transition-all flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[9px] font-mono text-[#86868b] font-bold uppercase mb-1 block">Bespoke Scale Plans</span>
              <h3 className="text-lg font-heading font-extrabold text-[#1d1d1f] mb-2">Custom Scale</h3>
              <p className="text-xs text-[#515154] mb-6 leading-relaxed">
                Tailor-made for agency pools or marketing operations requiring consistent widescreen explainer documents or high creative variation volumes.
              </p>

              <div className="mb-6 flex items-baseline gap-1 bg-gray-100 py-3 px-4 rounded-xl border border-gray-200/50">
                <span className="text-2xl font-bold text-[#1d1d1f]">Bespoke</span>
                <span className="text-xs text-[#86868b] font-medium">/ Custom Deliverables</span>
              </div>

              <div className="space-y-3 font-medium">
                {[
                  "Custom High Volume Output",
                  "Widescreen Explainer Documents",
                  "VFX and Advanced customized graphics",
                  "Included raw project timelines",
                  "Same-Day Priority overnight output",
                  "Monthly campaign performance audits"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#515154]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 bg-white">
              <a href="#contact" className="w-full inline-flex justify-center items-center py-2.5 rounded-full border border-[#d2d2d7] hover:bg-gray-50 text-[11px] font-bold text-[#1d1d1f] uppercase transition-all shadow-3xs text-center font-mono">
                Inquire Customs
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* NEW SECTION 4: FAQ SPEC SHEETS (SUPPORT DESIGN) */}
      <section id="faq" className="py-20 bg-white border-y border-[#e5e5ea] scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0071e3] font-bold block mb-1">
              Onboarding Technical Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#86868b] text-xs sm:text-sm font-medium">
              We focus on total operational transparency. Here is how we manage files, review processes, and deliveries.
            </p>
          </div>

          {/* Interactive accordion board */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-[#f5f5f7] hover:bg-gray-50 transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left font-sans cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-[#1d1d1f] pr-6 group-hover:text-[#0071e3] transition-colors flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#86868b] shrink-0" />
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full bg-white border border-gray-200 text-[#1d1d1f] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-4 h-4 text-[#86868b]" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-gray-200/85 bg-white rounded-b-2xl"
                      >
                        <div className="p-5 text-xs sm:text-sm leading-relaxed text-[#515154] font-medium pl-11">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* MINIMAL CREDENTIAL SUMMARY (ABOUT AHMED) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-4 relative flex justify-center">
            <div className="absolute inset-0 bg-[#0071e3]/10 rounded-3xl blur-md opacity-35" />
            <div className="h-44 w-44 rounded-3xl overflow-hidden border border-[#d2d2d7] relative shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80" 
                alt="Ahmed Nour Video Editor Portrait" 
                fill
                sizes="176px"
                className="object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="md:col-span-8 text-center md:text-left space-y-4">
            <span className="text-[10px] font-mono uppercase text-[#0071e3] font-bold block">About Ahmed Nour</span>
            <h3 className="text-xl md:text-3xl font-heading font-extrabold text-[#1d1d1f]">
              The Editor Behind the Retention
            </h3>
            <p className="text-xs sm:text-sm text-[#515154] leading-relaxed font-semibold">
              Based in Cairo (GMT+2) and serving high-growth brands across Cairo, Dubai, and Riyadh. For 5 years, I have collaborated with corporate teams, SaaS founders, and premium creators to dismantle timeline friction, streamline edits, and unlock organic client pipelines.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-mono text-[#86868b] pt-3.5 border-t border-gray-100 font-bold">
              <span className="flex items-center gap-1">🚀 Retainer Focused</span>
              <span className="flex items-center gap-1">⚡ 24-48h Delivery</span>
              <span className="flex items-center gap-1">🎙️ DaVinci Studio</span>
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT INQUIRY SYSTEM */}
      <section id="contact" className="py-20 bg-gray-100/60 border-t border-[#e5e5ea] scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-[#0071e3] tracking-widest font-bold uppercase block mb-1">
              Secure Placement slot
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1d1d1f] mb-3">
              Apply For Retainer Space
            </h2>
            <p className="text-[#86868b] text-xs sm:text-sm max-w-sm mx-auto">
              I only onboard 3 new premium retainer partners each month. Fill in your details below to apply for review.
            </p>
          </div>

          <div className="p-6 md:p-10 rounded-3xl bg-white border border-[#d2d2d7] shadow-lg relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form key="form" onSubmit={handleIntakeSubmit} className="space-y-6" exit={{ opacity: 0 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-[#1d1d1f] font-bold">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          id="name"
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Saed Al-Otaibi"
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[#0071e3] transition-all font-sans font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-[#1d1d1f] font-bold">Business Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          id="email"
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="saed@otaibitech.com"
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[#0071e3] transition-all font-sans font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="budget" className="text-[10px] font-mono uppercase tracking-wider text-[#1d1d1f] font-bold block">Budget Goal</label>
                      <select 
                        id="budget"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[#0071e3] transition-all cursor-pointer font-sans font-bold"
                      >
                        <option value="$250 - $1,000">$250 - $1,000</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500 (Growth)</option>
                        <option value="$2,500+">$2,500+ (Enterprise)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="volume" className="text-[10px] font-mono uppercase tracking-wider text-[#1d1d1f] font-bold block">Videos/Month</label>
                      <select 
                        id="volume"
                        value={formState.volume}
                        onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[#0071e3] transition-all cursor-pointer font-sans"
                      >
                        <option value="1 - 2 videos / month">1 - 2 videos</option>
                        <option value="3 - 5 videos / month">3 - 5 videos</option>
                        <option value="8 - 15 videos / month">8 - 15 videos</option>
                        <option value="15+ videos / month">15+ videos</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="deadline" className="text-[10px] font-mono uppercase tracking-wider text-[#1d1d1f] font-bold block">Launch Wave</label>
                      <select 
                        id="deadline"
                        value={formState.deadline}
                        onChange={(e) => setFormState({ ...formState, deadline: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[#0071e3] transition-all cursor-pointer font-sans"
                      >
                        <option value="Immediately">Immediately</option>
                        <option value="Within 2 weeks">In 2 weeks</option>
                        <option value="Next month">Next month</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-[#1d1d1f] font-bold">Brief Niche / Channels</label>
                    <textarea 
                      id="message"
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="High-growth B2B SaaS founder, premium beauty cosmetic ad creatives, GCC visual agency..."
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-[#0071e3] transition-all font-sans font-medium"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xs disabled:opacity-50 cursor-pointer text-center font-mono leading-none"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Retainer Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="mt-4 flex items-center justify-center gap-1.5 text-[9.5px] text-[#86868b] text-center font-mono font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#0071e3]" />
                      <span>Ahmed Nour personal response guaranteed within 12 hours.</span>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
                    <Check className="w-6 h-6 font-extrabold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-extrabold text-[#1d1d1f] tracking-tight">
                      Application Under Active Review
                    </h3>
                    <p className="text-[#86868b] text-xs max-w-sm mx-auto mt-2 leading-relaxed font-semibold">
                      Your details have been registered into the queue list. Ahmed Nour will analyze your creative channels and reach out to <span className="text-[#0071e3] font-bold">{formState.email}</span> within 12 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-[10px] font-bold text-[#1d1d1f] uppercase font-mono transition-colors"
                  >
                    Resubmit proposal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6 text-[#515154]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md bg-[#1d1d1f] flex items-center justify-center font-bold text-white text-[11px]">
              AN
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs text-[#1d1d1f] uppercase tracking-wide block">Ahmed Nour</span>
              <p className="text-[8.5px] font-mono text-[#86868b] font-bold">PREMIUM POST-PRODUCTION © 2026</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-[9px] text-[#86868b] font-mono font-bold uppercase tracking-wide">
            <span>Cairo, EG (GMT+2)</span>
            <span>Riyadh, KSA (GMT+3)</span>
            <span>Dubai, UAE (GMT+4)</span>
          </div>

          <div className="flex gap-4">
            {["Instagram", "YouTube", "TikTok", "Frame.io"].map((social, idx) => (
              <a 
                key={idx} 
                href="#contact" 
                className="text-[9.5px] font-mono text-[#86868b] hover:text-[#0071e3] uppercase transition-colors font-bold tracking-tight"
              >
                {social}
              </a>
            ))}
          </div>

        </div>
      </footer>


      {/* DYNAMIC CASE STUDIES SIDE DRAWER SHEET */}
      <AnimatePresence>
        {activeCS && (
          <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
            
            {/* Soft matte transparent grey overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
              onClick={() => setActiveCaseStudyId(null)}
            />

            {/* Sliding sheet */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="w-screen max-w-xl bg-white border-l border-[#d2d2d7] text-[#1d1d1f] flex flex-col justify-between shadow-2xl"
              >
                {/* Header */}
                <div className="px-6 py-4.5 border-b border-[#e5e5ea] bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white border border-[#d2d2d7] rounded-full text-[9px] font-bold text-[#0071e3] uppercase font-mono shadow-3xs leading-none">
                      {activeCS.type}
                    </span>
                    <span className="text-xs font-bold text-[#515154]">
                      Case File: {activeCS.client}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveCaseStudyId(null)}
                    className="p-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-[#1d1d1f] transition-colors"
                    aria-label="Close panel"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Body info */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 bg-white">
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#1d1d1f] leading-tight">
                      {activeCS.title}
                    </h3>
                    <p className="text-[10px] font-mono text-[#86868b] mt-1.5 uppercase font-bold">
                      Campaign Role: <span className="text-[#0071e3] font-bold">{activeCS.role}</span>
                    </p>
                  </div>

                  {/* Top Bottom-Line metric */}
                  <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-gray-200 flex items-center justify-between shadow-3xs">
                    <div>
                      <span className="text-[8.5px] font-mono text-[#86868b] uppercase block font-bold mb-0.5">Bottom-Line Lift Achieved</span>
                      <span className="text-xs font-bold text-[#1d1d1f] block">
                        {activeCS.metricLabel}
                      </span>
                    </div>
                    <div className="text-xl font-heading font-extrabold text-emerald-600 px-3.5 py-1 rounded-xl bg-white border border-gray-200 shadow-3xs">
                      {activeCS.metricValue}
                    </div>
                  </div>

                  {/* Looping video showcase */}
                  <div className="space-y-1.5 text-left">
                    <h4 className="text-[9.5px] font-mono uppercase tracking-wider text-[#0071e3] font-extrabold">
                      Looping Showcase Video
                    </h4>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-black shadow-xs">
                      <video 
                        src={activeCS.videoUrl} 
                        className="w-full h-full object-cover"
                        controls 
                        loop
                        muted 
                        autoPlay
                        poster={activeCS.poster}
                      />
                    </div>
                  </div>

                  {/* Content briefing */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#f5f5f7] border border-gray-200/80">
                        <h4 className="text-xs font-bold text-[#1d1d1f] mb-1 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-[#0071e3]" /> Campaign Goal
                        </h4>
                        <p className="text-xs text-[#515154] leading-relaxed">
                          {activeCS.goal}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-300/30">
                        <h4 className="text-xs font-bold text-amber-700 mb-1 flex items-center gap-1">
                          <TrendingDown className="w-4 h-4 text-amber-600" /> Retention Roadblock
                        </h4>
                        <p className="text-xs text-[#515154] leading-relaxed font-semibold">
                          {activeCS.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f5f5f7] border border-gray-200 space-y-1">
                      <h4 className="text-xs font-bold text-[#0071e3] flex items-center gap-1">
                        <Scissors className="w-4 h-4 text-[#0071e3]" /> Post-Production Mechanics
                      </h4>
                      <p className="text-xs text-[#515154] leading-relaxed">
                        {activeCS.process}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-300/20 space-y-1">
                      <h4 className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-emerald-600" /> Core Result Details
                      </h4>
                      <p className="text-xs text-[#1d1d1f] leading-relaxed font-bold">
                        {activeCS.result}
                      </p>
                    </div>
                  </div>

                  {/* tags */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-[9.5px] font-mono uppercase text-[#0071e3] tracking-wider font-extrabold block">Production Tools Applied</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCS.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9.5px] font-mono bg-gray-100 border border-gray-200/50 px-3 py-1 rounded-full text-[#515154] font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer details */}
                <div className="px-6 py-4.5 border-t border-[#e5e5ea] bg-gray-50 flex items-center justify-between gap-4">
                  <span className="text-[10px] text-[#86868b] font-semibold">Secure views mapped to your pipeline?</span>
                  <a 
                    href="#contact" 
                    onClick={() => setActiveCaseStudyId(null)}
                    className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#0071e3] text-center text-[11px] font-bold uppercase text-white shadow-xs hover:bg-[#0077ed]"
                  >
                    Apply online
                  </a>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      
      {/* NEW COMPONENT 5: SEAMLESS AUDIO LIGHTBOX MODAL TRIGGER */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
            {/* Black velvet background overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsLightboxOpen(false)}
            />

            {/* Immersive Theater Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#030303] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 aspect-video flex flex-col justify-between"
            >
              
              {/* Media element video */}
              <video 
                ref={lightboxVideoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-working-at-a-multiscreen-video-editing-desk-41525-large.mp4"
                className="w-full h-full object-cover absolute inset-0"
                autoPlay={isLightboxPlaying}
                loop
                muted={isLightboxMuted}
                playsInline
              />

              {/* Theater Control UI Overlays */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 space-y-4 font-mono select-none pointer-events-auto">
                
                {/* Visual duration progress */}
                <div className="flex items-center justify-between text-[10px] text-white/70">
                  <span className="font-bold uppercase tracking-wider">Ahmed Nour Director&apos;s Reel</span>
                  <span>0:18 / 1:00</span>
                </div>

                {/* Progress track */}
                <div className="h-1 rounded-full bg-white/20 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#0071e3] transition-all duration-300" style={{ width: "30%" }} />
                </div>

                {/* Control elements */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  
                  {/* Play & Time controls */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={toggleLightboxPlay}
                      className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                    >
                      {isLightboxPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <span className="text-[10px] text-white/80 font-bold hidden sm:inline">GMT+2 DA VINCI CONSOLE FEED</span>
                  </div>

                  {/* Ambient Title bar */}
                  <span className="text-[10.5px] font-sans font-extrabold text-white uppercase tracking-wider hidden md:inline">
                    AHMED NOUR POST-PRODUCTION SHOWCASE
                  </span>

                  {/* Audio Controls */}
                  <div className="flex items-center gap-3.5">
                    
                    <button 
                      onClick={toggleLightboxMute}
                      className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors flex items-center gap-1 px-2.5 cursor-pointer text-[10px] font-bold"
                    >
                      {isLightboxMuted ? (
                        <>
                          <VolumeX className="w-4 h-4" /> <span>UNMUTE REEL</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" /> <span>AUDIO LIVE</span>
                        </>
                      )}
                    </button>

                    <button 
                      onClick={() => setIsLightboxOpen(false)}
                      className="p-1.5 rounded-lg bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors flex items-center gap-1 text-[10px] font-semibold cursor-pointer"
                    >
                      <X className="w-4 h-4" /> CLOSE THEATER
                    </button>

                  </div>

                </div>

              </div>
              
              {/* Close Button at upper corner */}
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/60 hover:bg-black/80 text-white/90 flex items-center justify-center border border-white/10 backdrop-blur-md cursor-pointer transition-all z-20 shadow"
                aria-label="Close active media theater"
              >
                <X className="w-4 h-4" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* MINIMAL FLOATING DIRECT WHATSAPP CHAT */}
      <a 
        href="https://wa.me/201000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-tight text-xs shadow-lg flex items-center gap-2 active:scale-95 transition-all outline-none md:bottom-8 md:right-8 uppercase select-none"
        aria-label="Direct message with Ahmed Nour on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        <span>Chat with Ahmed</span>
      </a>

    </div>
  );
}
