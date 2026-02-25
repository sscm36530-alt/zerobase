import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { BannerSlide } from '../types';

const slides: BannerSlide[] = [
  {
    id: 1,
    title: "构建可信碳资产流转基础设施",
    subtitle: "基于区块链存证与减碳量化标准，实现碳资产确权、转移、入账全流程闭环",
    ctaText: "立即注册",
    bgClass: "from-slate-900 via-indigo-950 to-blue-950" // Deep Tech Background
  },
  {
    id: 2,
    title: "让减碳成果成为可确权的资产",
    subtitle: "生产数据实时上链存证 · 减碳量可核算/可认证 · 支持资产转移与合规入账",
    ctaText: "查看解决方案",
    // Existing Nature Image
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2560&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "让低碳采购实现合规入账闭环",
    subtitle: "接收真实减碳量 · 完成转入确认 · 支撑双碳与ESG披露",
    ctaText: "了解ESG服务",
    // New ESG/Corporate Compliance Background (Modern Architecture)
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
  }
];

export const Banner: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-play and progress bar logic
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (6000 / 50)); // Update every 50ms
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <section id="home" className="relative h-[680px] w-full overflow-hidden font-sans bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-transform ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Handling */}
          {slide.image ? (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[pulse_20s_ease-in-out_infinite]"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px] mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/60"></div>
            </>
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgClass}`}></div>
              {/* Vibrant Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
              
              {/* High-Key Glows (Cyan & Magenta) */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[5000ms] delay-1000"></div>
                <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] mix-blend-overlay"></div>
              </div>
            </>
          )}

          {/* Content Container */}
          <div className="relative z-20 h-full flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">
              
              <div className="lg:col-span-10 lg:col-start-2 text-center space-y-8">
                
                {/* Decorative Pill REMOVED */}

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow-2xl md:whitespace-nowrap">
                  {slide.title}
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-blue-100 w-full leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 whitespace-normal md:whitespace-nowrap drop-shadow-md">
                  {slide.subtitle}
                </p>
                
                <div className="flex justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  <button 
                    onClick={onRegisterClick}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] flex items-center gap-3 overflow-hidden ring-1 ring-white/20"
                  >
                    <span className="relative z-10">{slide.ctaText}</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar & Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-8 pb-8 pt-24 bg-gradient-to-t from-slate-900 to-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex gap-4">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer flex flex-col gap-2 w-16"
                onClick={() => {
                  setCurrentSlide(idx);
                  setProgress(0);
                }}
              >
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className={`h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all duration-100 ease-linear ${
                      idx === currentSlide ? 'opacity-100' : 'opacity-0 w-0'
                    }`}
                    style={{ width: idx === currentSlide ? `${progress}%` : '0%' }}
                  ></div>
                </div>
                <span className={`text-xs font-bold transition-colors ${idx === currentSlide ? 'text-cyan-400' : 'text-white/40 group-hover:text-white/70'}`}>
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/10 hover:bg-cyan-500/20 text-white transition-all backdrop-blur-sm hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/10 hover:bg-cyan-500/20 text-white transition-all backdrop-blur-sm hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};