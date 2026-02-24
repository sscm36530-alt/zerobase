import React from 'react';
import { ArrowRight, RefreshCw, TrendingUp, Map, ShieldCheck, CheckCircle2, Network, Banknote, Activity, Globe, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: "供需智能匹配",
    desc: "汇集供需信息，智能精准匹配，自动生成流转数据。",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "市场行情洞察",
    desc: "实时更新资源价格，提供趋势分析，辅助交易决策。",
    color: "emerald"
  },
  {
    icon: Map,
    title: "物流全程追溯",
    desc: "记录运输轨迹，形成完整链路，支撑减碳核算。",
    color: "purple"
  },
  {
    icon: ShieldCheck,
    title: "交易权益保障",
    desc: "保障买卖权益，生成交易记录，作为碳资产凭证。",
    color: "orange"
  }
];

export interface WasteExchangeProps {
  onRegisterClick?: () => void;
}

export const WasteExchange: React.FC<WasteExchangeProps> = ({ onRegisterClick }) => {
  return (
    <section id="exchange" className="py-24 bg-[#0B1120] relative overflow-hidden font-sans border-t border-white/5">
      <style>{`
        @keyframes scrollY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-y {
          animation: scrollY 20s linear infinite;
        }
        .animate-scroll-y:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Background - Matching TrustedInfrastructure */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#172033_0%,_#0f172a_50%,_#020617_100%)]"></div>
      
      {/* Starfield Effect */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 animate-[pulse_4s_infinite]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1.5px, transparent 1.5px)', backgroundSize: '90px 90px', backgroundPosition: '20px 20px' }}></div>
      
      {/* Cyber Grid Horizon */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      {/* Nebula Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-[5000ms]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: Narrative & Features */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">
              再生资源<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">供需协同</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              连接回收企业与生产工厂，<br/>
              让每一次资源流转都可量化为减碳价值。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               {features.map((feature, idx) => (
                 <div key={idx} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-${feature.color}-500/20 text-${feature.color}-400 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-1 ring-${feature.color}-500/30`}>
                       <feature.icon size={20} />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Data Terminal / Dashboard */}
          <div className="relative group h-full">
             {/* Glow Effect */}
             <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             
             <div className="relative bg-[#0F172A]/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-full backdrop-blur-md">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5 shrink-0">
                   <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                         <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                         <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      </div>
                   </div>
                </div>

                {/* Data Content - Split Layout */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow min-h-0">
                   
                   {/* Supply Section Box */}
                   <div className="flex flex-col h-full min-h-0">
                      <div className="bg-slate-900/50 rounded-xl border border-white/5 p-4 flex-grow mb-4 flex flex-col min-h-0">
                          <div className="flex items-center justify-between mb-3 shrink-0">
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <ArrowUpRight size={14} className="text-orange-500" /> 供应队列
                             </h4>
                          </div>
                          <div className="h-[240px] overflow-hidden relative">
                             <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-slate-900/80 to-transparent z-10"></div>
                             <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                             <div className="animate-scroll-y">
                                <div className="space-y-2 pb-2">
                                {[
                                  { tag: '供应', title: '废旧纺织品原料', amount: '200吨', loc: '浙江·杭州', time: '25m ago' },
                                  { tag: '供应', title: '废铝切片', amount: '50吨', loc: '山东·临沂', time: '1h ago' },
                                  { tag: '供应', title: 'HDPE 颗粒', amount: '300吨', loc: '广东·佛山', time: '2h ago' },
                                  { tag: '供应', title: '废纸板打包料', amount: '150吨', loc: '江苏·南京', time: '3h ago' },
                                  { tag: '供应', title: 'PET 瓶片 (B级)', amount: '80吨', loc: '安徽·合肥', time: '4h ago' },
                                  { tag: '供应', title: '废旧轮胎胶粉', amount: '120吨', loc: '河北·沧州', time: '5h ago' },
                                  { tag: '供应', title: '再生PP颗粒', amount: '60吨', loc: '福建·厦门', time: '6h ago' },
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/10 transition-all cursor-default group/item">
                                     <div className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover/item:shadow-[0_0_8px_rgba(249,115,22,0.5)] transition-shadow"></span>
                                        <div>
                                           <div className="text-sm font-bold text-slate-200 group-hover/item:text-white">{item.title}</div>
                                           <div className="text-[10px] text-slate-500 font-medium group-hover/item:text-slate-400">{item.amount} · {item.loc}</div>
                                        </div>
                                     </div>
                                     <span className="text-[10px] font-mono text-slate-600 group-hover/item:text-slate-500">{item.time}</span>
                                  </div>
                                ))}
                                </div>
                                <div className="space-y-2 pb-2">
                                {[
                                  { tag: '供应', title: '废旧纺织品原料', amount: '200吨', loc: '浙江·杭州', time: '25m ago' },
                                  { tag: '供应', title: '废铝切片', amount: '50吨', loc: '山东·临沂', time: '1h ago' },
                                  { tag: '供应', title: 'HDPE 颗粒', amount: '300吨', loc: '广东·佛山', time: '2h ago' },
                                  { tag: '供应', title: '废纸板打包料', amount: '150吨', loc: '江苏·南京', time: '3h ago' },
                                  { tag: '供应', title: 'PET 瓶片 (B级)', amount: '80吨', loc: '安徽·合肥', time: '4h ago' },
                                  { tag: '供应', title: '废旧轮胎胶粉', amount: '120吨', loc: '河北·沧州', time: '5h ago' },
                                  { tag: '供应', title: '再生PP颗粒', amount: '60吨', loc: '福建·厦门', time: '6h ago' },
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/10 transition-all cursor-default group/item">
                                     <div className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover/item:shadow-[0_0_8px_rgba(249,115,22,0.5)] transition-shadow"></span>
                                        <div>
                                           <div className="text-sm font-bold text-slate-200 group-hover/item:text-white">{item.title}</div>
                                           <div className="text-[10px] text-slate-500 font-medium group-hover/item:text-slate-400">{item.amount} · {item.loc}</div>
                                        </div>
                                     </div>
                                     <span className="text-[10px] font-mono text-slate-600 group-hover/item:text-slate-500">{item.time}</span>
                                  </div>
                                ))}
                                </div>
                             </div>
                          </div>
                      </div>
                      <button 
                         onClick={onRegisterClick}
                         className="w-full shrink-0 group relative overflow-hidden rounded-xl bg-emerald-600 p-[1px] transition-all hover:bg-emerald-500 shadow-md hover:shadow-lg">
                         <div className="relative h-full w-full bg-white rounded-[11px] px-4 py-3 transition-all group-hover:bg-emerald-50">
                            <div className="flex items-center justify-center gap-2">
                               <span className="text-sm font-bold text-emerald-700">我是回收企业</span>
                               <ArrowRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                         </div>
                      </button>
                   </div>

                   {/* Demand Section Box */}
                   <div className="flex flex-col h-full min-h-0">
                      <div className="bg-slate-900/50 rounded-xl border border-white/5 p-4 flex-grow mb-4 flex flex-col min-h-0">
                          <div className="flex items-center justify-between mb-3 shrink-0">
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <ArrowUpRight size={14} className="text-blue-500 rotate-180" /> 求购队列
                             </h4>
                          </div>
                          <div className="h-[240px] overflow-hidden relative">
                             <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-slate-900/80 to-transparent z-10"></div>
                             <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                             <div className="animate-scroll-y">
                                <div className="space-y-2 pb-2">
                                {[
                                  { tag: '求购', title: '再生PET瓶片 (A级)', amount: '500吨', loc: '江苏·苏州', time: '10m ago' },
                                  { tag: '求购', title: 'HDPE 破碎料', amount: '1000吨', loc: '广东·东莞', time: '32m ago' },
                                  { tag: '求购', title: '废铜线', amount: '20吨', loc: '浙江·宁波', time: '1.5h ago' },
                                  { tag: '求购', title: '废旧轮胎胶粉', amount: '300吨', loc: '河北·唐山', time: '2h ago' },
                                  { tag: '求购', title: 'PP 再生颗粒', amount: '100吨', loc: '福建·泉州', time: '3h ago' },
                                  { tag: '求购', title: '废纸板', amount: '200吨', loc: '山东·青岛', time: '4h ago' },
                                  { tag: '求购', title: 'ABS 破碎料', amount: '50吨', loc: '广东·深圳', time: '5h ago' },
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all cursor-default group/item">
                                     <div className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-shadow"></span>
                                        <div>
                                           <div className="text-sm font-bold text-slate-200 group-hover/item:text-white">{item.title}</div>
                                           <div className="text-[10px] text-slate-500 font-medium group-hover/item:text-slate-400">{item.amount} · {item.loc}</div>
                                        </div>
                                     </div>
                                     <span className="text-[10px] font-mono text-slate-600 group-hover/item:text-slate-500">{item.time}</span>
                                  </div>
                                ))}
                                </div>
                                <div className="space-y-2 pb-2">
                                {[
                                  { tag: '求购', title: '再生PET瓶片 (A级)', amount: '500吨', loc: '江苏·苏州', time: '10m ago' },
                                  { tag: '求购', title: 'HDPE 破碎料', amount: '1000吨', loc: '广东·东莞', time: '32m ago' },
                                  { tag: '求购', title: '废铜线', amount: '20吨', loc: '浙江·宁波', time: '1.5h ago' },
                                  { tag: '求购', title: '废旧轮胎胶粉', amount: '300吨', loc: '河北·唐山', time: '2h ago' },
                                  { tag: '求购', title: 'PP 再生颗粒', amount: '100吨', loc: '福建·泉州', time: '3h ago' },
                                  { tag: '求购', title: '废纸板', amount: '200吨', loc: '山东·青岛', time: '4h ago' },
                                  { tag: '求购', title: 'ABS 破碎料', amount: '50吨', loc: '广东·深圳', time: '5h ago' },
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all cursor-default group/item">
                                     <div className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-shadow"></span>
                                        <div>
                                           <div className="text-sm font-bold text-slate-200 group-hover/item:text-white">{item.title}</div>
                                           <div className="text-[10px] text-slate-500 font-medium group-hover/item:text-slate-400">{item.amount} · {item.loc}</div>
                                        </div>
                                     </div>
                                     <span className="text-[10px] font-mono text-slate-600 group-hover/item:text-slate-500">{item.time}</span>
                                  </div>
                                ))}
                                </div>
                             </div>
                          </div>
                      </div>
                      <button 
                         onClick={onRegisterClick}
                         className="w-full shrink-0 group relative overflow-hidden rounded-xl bg-blue-600 p-[1px] transition-all hover:bg-blue-500 shadow-md hover:shadow-lg">
                         <div className="relative h-full w-full bg-white rounded-[11px] px-4 py-3 transition-all group-hover:bg-blue-50">
                            <div className="flex items-center justify-center gap-2">
                               <span className="text-sm font-bold text-blue-700">我是生产工厂</span>
                               <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                         </div>
                      </button>
                   </div>

                </div>

                <div className="px-6 pb-4 shrink-0">
                   <p className="text-center text-slate-400 text-[10px] font-medium">需要注册认证后方可发布资源信息</p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};