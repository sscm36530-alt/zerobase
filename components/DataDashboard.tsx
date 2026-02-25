import React, { useState, useEffect } from 'react';
import { FileCheck, Leaf, Recycle, TrendingDown, Users, FileText, MapPin, Activity, RotateCcw } from 'lucide-react';
import { StatMetric } from '../types';

const platformStats: StatMetric[] = [
  { label: '累计减碳排放量', value: '24,500,000', unit: 'tco2e', icon: Leaf },
  { label: '减少废弃物总量', value: '865,000', unit: 't', icon: Recycle },
  { label: '避免温室气体排放', value: '4,203,000', unit: 'tco2e', icon: TrendingDown },
  { label: '产品评价数量', value: '18,542', unit: 'items', icon: FileCheck },
  { label: '入驻企业数', value: '560+', unit: 'firms', icon: Users },
  { label: '已发证书数', value: '3,200+', unit: 'certs', icon: FileText },
];

const provinceData = [
  { id: 'heilongjiang', name: '黑龙江', x: 82, y: 15 },
  { id: 'jilin', name: '吉林', x: 84, y: 22 },
  { id: 'liaoning', name: '辽宁', x: 79, y: 28 },
  { id: 'hebei', name: '河北', x: 70, y: 32 },
  { id: 'beijing', name: '北京', x: 72, y: 30, special: true },
  { id: 'tianjin', name: '天津', x: 74, y: 31 },
  { id: 'shanxi', name: '山西', x: 65, y: 36 },
  { id: 'shaanxi', name: '陕西', x: 60, y: 45 },
  { id: 'gansu', name: '甘肃', x: 48, y: 40 },
  { id: 'qinghai', name: '青海', x: 38, y: 45 },
  { id: 'xinjiang', name: '新疆', x: 20, y: 30 },
  { id: 'ningxia', name: '宁夏', x: 55, y: 38 },
  { id: 'neimenggu', name: '内蒙古', x: 62, y: 25 },
  { id: 'shandong', name: '山东', x: 75, y: 38 },
  { id: 'henan', name: '河南', x: 66, y: 44 },
  { id: 'jiangsu', name: '江苏', x: 78, y: 48 },
  { id: 'anhui', name: '安徽', x: 72, y: 50 },
  { id: 'hubei', name: '湖北', x: 66, y: 54 },
  { id: 'zhejiang', name: '浙江', x: 80, y: 56 },
  { id: 'shanghai', name: '上海', x: 83, y: 52, special: true },
  { id: 'fujian', name: '福建', x: 76, y: 66 },
  { id: 'jiangxi', name: '江西', x: 70, y: 62 },
  { id: 'hunan', name: '湖南', x: 64, y: 60 },
  { id: 'guizhou', name: '贵州', x: 56, y: 64 },
  { id: 'sichuan', name: '四川', x: 48, y: 54 },
  { id: 'chongqing', name: '重庆', x: 58, y: 56 },
  { id: 'yunnan', name: '云南', x: 46, y: 74 },
  { id: 'guangdong', name: '广东', x: 68, y: 74 },
  { id: 'guangxi', name: '广西', x: 58, y: 74 },
  { id: 'hainan', name: '海南', x: 62, y: 86 },
  { id: 'xizang', name: '西藏', x: 20, y: 58 },
  { id: 'taiwan', name: '台湾', x: 84, y: 70 },
  { id: 'hongkong', name: '香港', x: 72, y: 78 },
  { id: 'macau', name: '澳门', x: 69, y: 78 },
];

const activityLogs = [
  "浙江**纺织有限公司 上传了新的碳足迹报告",
  "江苏**新能源科技 完成了产品碳足迹核查",
  "上海**汽车部件 获得了绿色工厂认证",
  "广东**包装材料 更新了范围三排放数据",
  "北京**环保科技 申请了产品碳标签",
  "浙江**新材料 注册了新产品：rPET切片",
  "安徽**光伏股份 发布了年度 ESG 报告",
  "湖北**化工集团 接入了实时电能监测系统",
];

const FallingAtoms: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; speed: number; size: number; opacity: number; initialOpacity: number }[] = [];
    let resizeTimeout: NodeJS.Timeout;

    const initParticles = () => {
      if (!canvas) return;
      particles = [];
      // Optimized density for performance: divisor changed to 8000 (fewer particles)
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000); 
      for (let i = 0; i < particleCount; i++) {
        const initialOpacity = 0.05 + Math.random() * 0.15;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5, 
          speed: 0.5 + Math.random() * 1.0, 
          size: 0.5 + Math.random() * 1.0,
          opacity: initialOpacity,
          initialOpacity: initialOpacity
        });
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const fadeStart = canvas.height * 0.1; 
      const fadeEnd = canvas.height * 0.4;   

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        p.y += p.speed;

        if (p.y < fadeStart) {
            p.opacity = p.initialOpacity;
        } else if (p.y >= fadeStart && p.y < fadeEnd) {
            const progress = (p.y - fadeStart) / (fadeEnd - fadeStart);
            p.opacity = p.initialOpacity * (1 - progress);
        } else {
            p.opacity = 0;
        }

        if (p.y > fadeEnd) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
          p.opacity = p.initialOpacity;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', onResize);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export const DataDashboard: React.FC = () => {
  const [viewScope, setViewScope] = useState<string>('全国');
  const [tickerY, setTickerY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerY((prev) => (prev - 30)); 
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (Math.abs(tickerY) >= activityLogs.length * 30) {
      setTickerY(0);
    }
  }, [tickerY]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.floor(num));
  };

  const getCurrentValue = (originalValue: string, index: number) => {
    if (viewScope === '全国') return originalValue;
    const baseNum = parseInt(originalValue.replace(/,/g, ''));
    const seed = viewScope.length + viewScope.charCodeAt(0) + index;
    const ratio = 0.03 + (seed % 10) / 100; 
    return formatNumber(baseNum * ratio);
  };

  return (
    <section id="dashboard" className="relative py-16 text-white overflow-hidden font-sans scroll-mt-24">
      
      {/* Background - Dark Gradient */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#020617]"></div>
      
      {/* Falling Atoms Effect */}
      <FallingAtoms />

      {/* Decorative Elements - Subtle Glows - Added will-change-transform */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen will-change-transform"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen will-change-transform"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              {viewScope === '全国' ? '碳资产驾驶舱' : `${viewScope}属地数据`}
            </h2>
          </div>
          {viewScope !== '全国' && (
            <button 
              onClick={() => setViewScope('全国')}
              className="flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white bg-white/5 hover:bg-blue-600/80 px-4 py-2 rounded-full transition-all duration-300 border border-white/10 shadow-sm backdrop-blur-sm"
            >
              <RotateCcw size={12} /> 返回全国概览
            </button>
          )}
        </div>

        {/* UNIFIED GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          
            {/* 6 Stats Cards - Now integrated into the main grid */}
            {platformStats.map((stat, idx) => {
              const currentValue = getCurrentValue(stat.value, idx);
              // Optimized: Even lighter background for better visibility
              const cardStyle = 'bg-slate-700/60 border-white/10 hover:bg-slate-600/70 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]';
              
              const iconColors = [
                  'text-blue-400 bg-blue-500/10 border-blue-500/20',
                  'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
                  'text-purple-400 bg-purple-500/10 border-purple-500/20',
                  'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
                  'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
                  'text-orange-400 bg-orange-500/10 border-orange-500/20',
              ];

              const iconColor = iconColors[idx % iconColors.length];

              return (
                  <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 group flex flex-col justify-between h-full min-h-[160px] ${cardStyle}`}>
                      <div>
                        <div className="flex justify-between items-start">
                            <div className="text-slate-400 text-sm font-bold leading-relaxed line-clamp-2 pr-2 group-hover:text-slate-200 transition-colors">
                              {stat.label}
                            </div>
                            {stat.icon && (
                              <div className={`p-2 rounded-xl ${iconColor} border transition-transform group-hover:scale-110 shadow-sm`}>
                                  <stat.icon size={18} className="transition-all shrink-0" />
                              </div>
                            )}
                        </div>
                        <div className="flex items-end justify-between mt-4">
                            <span className="text-3xl lg:text-4xl font-black text-white tracking-tight transition-colors truncate drop-shadow-sm">
                                {currentValue}
                            </span>
                            <span className="text-xs text-slate-500 font-bold lowercase tracking-wider mb-1.5 group-hover:text-slate-400">
                                {stat.unit}
                            </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5 pt-3 border-t border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                        <span className="text-[10px] text-slate-500 font-medium scale-90 origin-left whitespace-nowrap group-hover:text-slate-400">链上实时同步数据</span>
                      </div>
                  </div>
              );
            })}

            {/* Map Container - Spans 2 Columns and 2 Rows on Desktop */}
            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1 relative bg-slate-700/60 rounded-2xl shadow-2xl border border-white/10 p-4 w-full h-full flex flex-col overflow-hidden hover:border-white/20 transition-colors">
              
              {/* Controls Layer */}
              <div className="absolute top-4 left-4 z-20">
                  <button 
                    onClick={() => setViewScope('全国')}
                    className={`px-3 py-1.5 rounded-lg font-bold text-[10px] backdrop-blur-md transition-all duration-300 border flex items-center gap-1.5 shadow-sm ${
                      viewScope === '全国' 
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30' 
                      : 'bg-white/80 text-slate-500 border-slate-200 hover:text-blue-600 hover:border-blue-200'
                    }`}
                  >
                    <MapPin size={10} /> 全国视图
                  </button>
              </div>

              {viewScope !== '全国' && (
                  <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-xl border border-blue-100 p-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] max-w-[150px] animate-in fade-in slide-in-from-bottom-2 z-30">
                    <div className="text-[10px] text-blue-500 font-bold uppercase mb-1 flex items-center gap-1"><Activity size={10}/> 已选区域</div>
                    <div className="text-lg font-black text-slate-800">{viewScope}</div>
                  </div>
              )}

              {/* Centered Map Content */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                  <div className="relative w-full h-full max-h-full aspect-[1.3] flex items-center justify-center">
                    {/* Optimized Map Image: Removed heavy filter chain, used CSS opacity/blending for performance */}
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/China_administrative_divisions_map_zh-cn.svg/1024px-China_administrative_divisions_map_zh-cn.svg.png" 
                      alt="China Map" 
                      className="w-full h-full object-contain drop-shadow-xl transform scale-105 opacity-60 mix-blend-luminosity"
                      style={{ 
                        // Simplified filter
                        filter: 'brightness(1.2) contrast(1.1)' 
                      }}
                    />
                    
                    {/* Dots Overlay */}
                    <div className="absolute inset-0 w-full h-full">
                      {provinceData.map((prov) => (
                        <div 
                          key={prov.id}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-all duration-500"
                          style={{ left: `${prov.x}%`, top: `${prov.y}%` }}
                          onClick={() => setViewScope(prov.name)}
                        >
                          <div className="relative flex flex-col items-center justify-center w-8 h-8 group-hover/dot">
                            {viewScope === prov.name && (
                              <>
                                <div className="absolute w-12 h-12 rounded-full bg-blue-400/30 animate-ping"></div>
                                <div className="absolute w-6 h-6 rounded-full bg-blue-400/40"></div>
                              </>
                            )}
                            <div className={`rounded-full transition-all duration-300 border-2 border-white shadow-md ${
                              viewScope === prov.name 
                                  ? 'w-3 h-3 bg-blue-500 scale-110 shadow-blue-500/50' 
                                  : 'w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:scale-150 group-hover:from-cyan-400 group-hover:to-blue-500'
                            }`}></div>
                            <div className={`absolute top-4 whitespace-nowrap text-[10px] font-medium transition-all duration-300 px-2 py-0.5 rounded-full ${
                              viewScope === prov.name 
                                ? 'text-white bg-blue-600 z-20 font-bold scale-110 shadow-lg' 
                                : 'text-slate-600 bg-white/70 backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 hover:bg-white scale-90 group-hover:scale-100'
                            }`}>
                              {prov.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>

            {/* Real-time Ticker - Spans 2 Columns and 1 Row (3rd row) on Desktop */}
            <div className="lg:col-span-2 lg:col-start-3 lg:row-start-3 bg-slate-700/60 rounded-2xl border border-white/10 p-5 h-full min-h-[160px] flex flex-col relative overflow-hidden w-full transition-all duration-300 hover:bg-slate-600/70 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between mb-3 z-10 relative">
                <span className="text-slate-400 text-sm font-bold leading-relaxed">实时动态</span>
                <div className="p-2 rounded-xl text-blue-400 bg-blue-500/10 shadow-sm border border-white/5">
                    <Activity size={18} className="animate-pulse" />
                </div>
              </div>
              
              <div className="relative flex-1 overflow-hidden mask-image-b">
                <div 
                  className="absolute left-0 w-full transition-transform duration-500 ease-in-out will-change-transform"
                  style={{ transform: `translateY(${tickerY}px)` }}
                >
                  {[...activityLogs, ...activityLogs].map((log, i) => (
                    <div key={i} className="h-[30px] flex items-center text-[12px] text-slate-400 mb-0 truncate group cursor-default hover:bg-white/5 px-2 rounded-lg transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                      <span className="mr-3 text-slate-600 font-mono text-[10px]">{new Date().getHours()}:{String(new Date().getMinutes()).padStart(2,'0')}</span>
                      <span className="group-hover:text-blue-300 transition-colors truncate font-medium">{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

        </div>

      </div>
    </section>
  );
};