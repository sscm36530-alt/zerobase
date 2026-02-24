import React, { useState } from 'react';
import { UserPlus, Microscope, CheckCircle2, ShieldCheck, ArrowRight, Package, Hammer, ArrowUpRight, ChevronLeft, ChevronRight, Layers, X, FileText, Calendar, Award, Fingerprint } from 'lucide-react';

interface RegistrationProcessProps {
  onRegisterClick?: () => void;
}

interface Product {
  id: number;
  name: string;
  company: string;
  category: string;
  footprint: string;
  image: string;
  tagColor: string;
  date: string;
  standard: string;
  verifier: string;
  description: string;
  certId?: string;
}

export const RegistrationProcess: React.FC<RegistrationProcessProps> = ({ onRegisterClick }) => {
  const steps = [
    {
      id: 1,
      num: "01",
      title: "企业注册与资质认证",
      desc: "资质提交 · 实名核验\n建立专属碳资产账户",
      icon: UserPlus,
    },
    {
      id: 2,
      num: "02",
      title: "产品减碳量化评价",
      desc: "数据上传 · 自动核算\n生成碳足迹数据报告",
      icon: Microscope,
    },
    {
      id: 3,
      num: "03",
      title: "认证审核与证书生成",
      desc: "三方审核 · 权威认证\n生成链上数字凭证",
      icon: CheckCircle2,
    },
    {
      id: 4,
      num: "04",
      title: "碳资产确权与登记",
      desc: "资产登记 · 唯一编号\n支持资产转移与入账",
      icon: ShieldCheck,
    }
  ];

  const products: Product[] = [
    { 
      id: 1, 
      name: "固废再生物流托盘", 
      company: "山东******环保科技有限公司", 
      category: "", 
      footprint: "1.25", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      tagColor: "blue",
      date: "2026-03-10",
      standard: "无废低碳产品评价技术规范 再生塑料托盘-CEC 150-2026",
      verifier: "中环联合(北京)认证中心有限公司",
      description: "该产品采用100%回收塑料制成，通过先进的改性技术增强了材料的强度和耐用性。相比传统木质托盘，碳足迹减少了60%以上，且使用寿命延长了3倍。适用于物流运输、仓储周转等场景。",
      certId: "XR-2026-0891"
    },
    { 
      id: 2, 
      name: "废纺再生户外地板", 
      company: "浙江******节能环保科技有限公司", 
      category: "绿色建材", 
      footprint: "2.10", 
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
      tagColor: "emerald",
      date: "2026-03-10",
      standard: "PAS 2050:2011",
      verifier: "中环联合(北京)认证中心有限公司",
      description: "利用废旧纺织品与再生塑料复合而成，具有防水、防腐、防虫蛀等特性。产品表面纹理自然，触感舒适，广泛应用于公园栈道、庭院露台等户外场所。全生命周期碳排放显著低于传统防腐木。"
    },
    { 
      id: 3, 
      name: "工业尾料循环制造瓷砖", 
      company: "福建******建材有限公司", 
      category: "建筑装饰", 
      footprint: "0.85", 
      image: "https://images.unsplash.com/photo-1620216447823-380d60d3d68f?auto=format&fit=crop&q=80&w=800",
      tagColor: "purple",
      date: "2026-03-10",
      standard: "ISO 14040/44",
      verifier: "中环联合(北京)认证中心有限公司",
      description: "通过回收利用陶瓷生产过程中的废渣、废料，经高温烧制而成。产品硬度高、吸水率低，且色泽丰富。生产过程中采用了余热回收技术，进一步降低了能源消耗和碳排放。"
    },
    { 
      id: 4, 
      name: "再生PET聚酯切片", 
      company: "江苏******化纤有限公司", 
      category: "纺织原料", 
      footprint: "1.08", 
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800",
      tagColor: "cyan",
      date: "2026-03-10",
      standard: "GRS 4.0",
      verifier: "中环联合(北京)认证中心有限公司",
      description: "以废旧PET瓶片为原料，经过清洗、熔融、造粒等工序制成。产品粘度稳定，色相好，可用于生产涤纶长丝、短纤、瓶坯等。实现了塑料资源的闭环循环利用。"
    },
    { 
      id: 5, 
      name: "生物质颗粒燃料", 
      company: "安徽******新能源有限公司", 
      category: "清洁能源", 
      footprint: "0.05", 
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
      tagColor: "green",
      date: "2026-03-10",
      standard: "NY/T 2909-2016",
      verifier: "中环联合(北京)认证中心有限公司",
      description: "利用农林废弃物（如秸秆、木屑等）压缩成型，具有燃烧效率高、灰分低、清洁环保等特点。可替代煤炭、重油等化石燃料，广泛应用于工业锅炉、民用取暖等领域。"
    },
    { 
      id: 6, 
      name: "再生铝合金锭", 
      company: "广东******金属资源有限公司", 
      category: "金属材料", 
      footprint: "1.80", 
      image: "https://images.unsplash.com/photo-1535050804459-066469a98d13?auto=format&fit=crop&q=80&w=800",
      tagColor: "gray",
      date: "2026-03-10",
      standard: "GB/T 8733-2016",
      verifier: "中环联合(北京)认证中心有限公司",
      description: "以废铝为原料，经过分选、熔炼、精炼、铸造等工艺制成。产品成分均匀，性能优良，可满足汽车、航空、电子等行业的高标准要求。相比原生铝，节能减排效果显著。"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const nextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % 3); // Only cycle through first 3 for the carousel
  };

  const prevProduct = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
  };

  // Modern 3D Card Style Logic
  const getCardStyle = (index: number) => {
    const total = 3; // Only show 3 in carousel
    // Calculate relative index to center active item
    let relativeIndex = index - activeIndex;
    
    // Handle wrap-around logic for infinite-like feel with 3 items
    if (relativeIndex > 1) relativeIndex -= total;
    if (relativeIndex < -1) relativeIndex += total;

    const isActive = relativeIndex === 0;
    
    // 3D Transform Configuration
    const xOffset = relativeIndex * 65; // Percentage separation
    const scale = isActive ? 1 : 0.85;
    const rotateY = isActive ? 0 : -relativeIndex * 25; // Rotate inwards
    const zIndex = isActive ? 30 : 10;
    const opacity = isActive ? 1 : 0.5;
    const blur = isActive ? 0 : 2;

    return {
      transform: `translateX(${xOffset}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex: zIndex,
      opacity: opacity,
      filter: `blur(${blur}px)`,
      transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth physics-like transition
    };
  };

  return (
    <section id="process" className="py-28 relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-white font-sans">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:60px_60px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: PROCESS FLOW (Unchanged) --- */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
              再生资源工厂的<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">碳价值转化引擎</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              让每一吨固废再利用都转化为可确权、可计量、可流转的碳资产
              <br className="hidden md:block"/>实现环保行为与经济价值的直接连接。
            </p>
          </div>

          {/* Unified Panel */}
          <div className="relative bg-gradient-to-br from-blue-800 to-slate-900 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl border border-white/10 group perspective-1000">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                 <defs>
                   <radialGradient id="particle-glow" cx="50%" cy="50%" r="50%">
                     <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                     <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                   </radialGradient>
                 </defs>
                 {[...Array(35)].map((_, i) => (
                   <circle
                     key={i}
                     cx={`${Math.random() * 100}%`}
                     cy={`${Math.random() * 100}%`}
                     r={Math.random() * 3 + 1}
                     fill="url(#particle-glow)"
                     className="animate-pulse"
                     opacity={Math.random() * 0.6 + 0.1}
                   >
                     <animate
                       attributeName="cy"
                       from="110%"
                       to="-10%"
                       dur={`${10 + Math.random() * 25}s`}
                       repeatCount="indefinite"
                       begin={`-${Math.random() * 20}s`}
                     />
                   </circle>
                 ))}
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse duration-[5000ms] pointer-events-none mix-blend-screen"></div>

            {/* Connecting Line */}
            <div className="hidden md:block absolute top-32 left-[10%] right-[10%] h-[2px] bg-white/5 z-0 transform -translate-y-1/2 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent w-full animate-[shimmer_3s_infinite_linear]"></div>
                <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[4px] animate-[shimmer_2s_infinite_linear] opacity-90"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 mt-8">
              {steps.map((step, idx) => (
                <div key={step.id} className="relative group/step flex flex-col items-center text-center">
                  {idx < steps.length - 1 && (
                    <div className="md:hidden absolute top-16 bottom-[-32px] w-[2px] bg-gradient-to-b from-blue-500/20 to-transparent left-1/2 -translate-x-1/2"></div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center mb-6 group-hover/step:scale-110 group-hover/step:shadow-[0_0_25px_rgba(56,189,248,0.4)] group-hover/step:bg-blue-600/90 group-hover/step:border-blue-400/50 transition-all duration-500 relative backdrop-blur-md overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/step:animate-shine"></div>
                      <step.icon size={24} className="text-blue-200 group-hover/step:text-white transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover/step:text-cyan-300 transition-colors">
                          {step.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover/step:text-slate-300 transition-colors whitespace-pre-line">
                          {step.desc}
                      </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center relative z-10">
              <button 
                onClick={onRegisterClick}
                className="bg-white hover:bg-blue-50 text-blue-900 px-12 py-4 rounded-full font-bold shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2"
              >
                <span>立即注册息壤</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>


        {/* --- PART 2: MODERN 3D PRODUCT SHOWCASE --- */}
        <div className="relative pt-0">
          
          <div className="flex flex-col items-center mb-2 mt-56">
             <h3 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">已上链认证产品</h3>
          </div>

          <div className="relative max-w-7xl mx-auto h-[500px] flex items-center justify-center">
            
            {/* Center Glow Effect behind Active Card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Navigation Controls */}
            <button 
              onClick={prevProduct}
              className="absolute left-4 md:left-10 z-50 p-4 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-xl backdrop-blur-sm border border-slate-100 transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextProduct}
              className="absolute right-4 md:right-10 z-50 p-4 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-xl backdrop-blur-sm border border-slate-100 transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* The Stage */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {products.slice(0, 3).map((product, index) => {
                const style = getCardStyle(index);
                
                return (
                  <div 
                    key={product.id} 
                    onClick={() => setSelectedProduct(product)}
                    style={style}
                    className="absolute w-[340px] md:w-[500px] h-[255px] md:h-[375px] rounded-2xl bg-slate-200 shadow-2xl overflow-hidden cursor-pointer will-change-transform border border-slate-100/50"
                  >
                    {/* Full Height Image with Gradient Overlay */}
                    <div className="absolute inset-0 h-full w-full">
                       <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-110" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                       {/* Top Shine */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Floating Glassmorphism Content Panel - Compact Layout */}
                    <div className="absolute bottom-3 left-3 right-3 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg flex items-center justify-between">
                        
                        {/* Left Info */}
                        <div className="flex-1 min-w-0 pr-4">
                            <h3 className="text-lg font-bold leading-tight mb-1 text-shadow-sm truncate">{product.name}</h3>
                            <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5 opacity-90 truncate">
                                {product.company}
                            </p>
                        </div>

                        {/* Right Metrics */}
                        <div className="flex items-center gap-3 shrink-0 pl-4 border-l border-white/10">
                            <div className="text-right">
                                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">PCF</div>
                                <div className="flex items-baseline gap-1 justify-end">
                                    <span className="text-xl font-black text-white tracking-tight">{product.footprint}</span>
                                    <span className="text-xs font-medium text-slate-400">kg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Verified Badge (Top Right) */}
                    <div className="absolute top-6 right-6 bg-emerald-500/90 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-400/50 shadow-lg flex items-center gap-1">
                        <CheckCircle2 size={10} /> 已认证
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {products.slice(0, 3).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-blue-400'}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
             <button 
                onClick={() => setShowAllProducts(true)}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-all group"
             >
                查看更多 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

      </div>

      {/* --- MODALS --- */}

      {/* 1. All Products Modal (Large Window) */}
      {showAllProducts && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={() => setShowAllProducts(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
            
            {/* Header - Modified to match Product Detail close button positioning */}
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 relative">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">已上链认证产品库</h3>
              </div>
              <button 
                onClick={() => setShowAllProducts(false)} 
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors border border-slate-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Grid Content */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50/30">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.slice(0, 3).map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="aspect-[4/3] h-auto overflow-hidden relative bg-slate-200">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <CheckCircle2 size={10} /> 已认证
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                      <p className="text-xs text-slate-500 mb-4 line-clamp-1">{product.company}</p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-end">
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">碳足迹 (PCF)</p>
                          <p className="text-xl font-black text-slate-800">{product.footprint} <span className="text-xs font-medium text-slate-400">kgCO2e</span></p>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row">
            
            {/* Left: Image Gallery Section - Full Height with Centered Image */}
            <div className="w-full md:w-[45%] bg-slate-50 relative flex items-center justify-center p-6 md:p-8 shrink-0 border-r border-slate-100">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
              
              {/* Image Container with Fixed 4:3 Ratio */}
              <div className="relative w-full aspect-[4/3] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden bg-white ring-1 ring-slate-900/5 z-10 group">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 backdrop-blur-md transition-colors md:hidden z-20 shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-[55%] p-8 md:p-10 overflow-y-auto bg-white relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors hidden md:block"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <CheckCircle2 size={10} /> 已认证
                  </span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">{selectedProduct.name}</h2>
                <p className="text-slate-500 font-medium text-lg">{selectedProduct.company}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <FileText size={14} />
                    <span className="text-xs font-bold uppercase">碳足迹数值</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    {selectedProduct.footprint} <span className="text-sm font-medium text-slate-500">kgCO2e/unit</span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Award size={14} />
                    <span className="text-xs font-bold uppercase">认证标准</span>
                  </div>
                  <div className="text-sm font-normal text-slate-900 break-words" title={selectedProduct.standard}>
                    {selectedProduct.standard}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Layers size={14} className="text-blue-500"/> 产品描述
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">认证信息</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">核查机构</span>
                      <span className="font-medium text-slate-900">{selectedProduct.verifier}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">发证日期</span>
                      <span className="font-medium text-slate-900">{selectedProduct.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">证书编号</span>
                      <span className="font-mono font-medium text-slate-900">
                        {selectedProduct.certId || `XR-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};