import React from 'react';
import { Database, Fingerprint, ShieldCheck, ScanLine, Lock } from 'lucide-react';

export const TrustedInfrastructure: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-[#0B1120] relative overflow-hidden font-sans border-t border-white/5 scroll-mt-24">
      
      {/* --- Richer Background System --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#172033_0%,_#0f172a_50%,_#020617_100%)]"></div>
      
      {/* 2. Starfield Effect (Static + Pulse) */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 animate-[pulse_4s_infinite]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1.5px, transparent 1.5px)', backgroundSize: '90px 90px', backgroundPosition: '20px 20px' }}></div>
      
      {/* 3. Cyber Grid Horizon (Bottom) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      {/* 4. Nebula Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen animate-pulse duration-[5000ms]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 relative z-20 text-left">
            <h2 className="text-3xl md:text-[2.75rem] font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 mb-6 leading-[1.1] tracking-tight drop-shadow-lg whitespace-nowrap">
              可信碳数据基础设施
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-8">
              从源头数据采集开始，通过标准化减碳量化规则，结合区块链存证与隐私计算技术，构建可信碳数据底层网络。确保每一份减碳数据可核算、可验证、可确权。
            </p>
          </div>

          {/* Right Side: Rotating Network Topology */}
          <div className="lg:col-span-8 relative h-[600px] w-full flex items-center justify-center perspective-1000">
             
             {/* Circular Constraint Container: Ensures orbit is always circular regardless of screen width */}
             <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">

                {/* Center Node: Trusted Ledger */}
                {/* Updated: Increased size for circle (w-36/h-36 to w-44/h-44) and text */}
                <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#0F172A] border border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.5)] group cursor-pointer transition-transform duration-500 hover:scale-105">
                    {/* Core Glow */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse"></div>
                    
                    {/* Rings */}
                    <div className="absolute inset-[-10px] rounded-full border border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-[-2px] rounded-full border border-t-cyan-400/60 border-transparent animate-[spin_3s_linear_infinite]"></div>
                    <div className="absolute inset-[4px] rounded-full border border-b-indigo-400/60 border-transparent animate-[spin_5s_linear_infinite_reverse]"></div>
                    
                    {/* Updated: Smaller logo size */}
                    <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center text-white mb-2 shadow-inner ring-1 ring-white/20">
                      <Lock size={20} className="drop-shadow-md" />
                    </div>
                    {/* Updated: Larger text */}
                    <h3 className="text-sm sm:text-base font-bold text-blue-100 tracking-widest uppercase relative z-10 text-shadow-sm">可信账本</h3>
                </div>

                {/* Orbiting System Container - Rotating slowly */}
                {/* Updated: Added will-change-transform for smoother animation */}
                <div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite] will-change-transform">
                    
                    {/* Inward Data Flow Particles Layer (Multi-trajectory) */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 800 800" overflow="visible">
                            {/* --- TOP NODE STREAMS (Blue) --- */}
                            <g>
                              {/* Central Stream - Reduced to 3 particles */}
                              {[...Array(3)].map((_, i) => (
                                  <circle key={`t-c-${i}`} r={Math.random() * 1.5 + 1} fill="#60A5FA">
                                    <animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" path="M 400 180 Q 400 280 400 340" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;1;0" dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Left Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`t-l-${i}`} r={Math.random() * 1.5 + 1} fill="#3B82F6">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 360 200 Q 320 280 380 350" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Right Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`t-r-${i}`} r={Math.random() * 1.5 + 1} fill="#93C5FD">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 440 200 Q 480 280 420 350" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                            </g>

                            {/* --- RIGHT NODE STREAMS (Emerald) --- */}
                            <g>
                              {/* Central Stream - Reduced to 3 particles */}
                              {[...Array(3)].map((_, i) => (
                                  <circle key={`r-c-${i}`} r={Math.random() * 1.5 + 1} fill="#34D399">
                                    <animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" path="M 620 400 Q 520 400 460 400" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;1;0" dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Up Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`r-u-${i}`} r={Math.random() * 1.5 + 1} fill="#10B981">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 600 360 Q 520 320 450 380" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Down Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`r-d-${i}`} r={Math.random() * 1.5 + 1} fill="#6EE7B7">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 600 440 Q 520 480 450 420" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                            </g>

                            {/* --- BOTTOM NODE STREAMS (Orange) --- */}
                            <g>
                              {/* Central Stream - Reduced to 3 particles */}
                              {[...Array(3)].map((_, i) => (
                                  <circle key={`b-c-${i}`} r={Math.random() * 1.5 + 1} fill="#F97316">
                                    <animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" path="M 400 620 Q 400 520 400 460" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;1;0" dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Left Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`b-l-${i}`} r={Math.random() * 1.5 + 1} fill="#FB923C">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 360 600 Q 320 520 380 450" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Right Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`b-r-${i}`} r={Math.random() * 1.5 + 1} fill="#EA580C">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 440 600 Q 480 520 420 450" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                            </g>

                            {/* --- LEFT NODE STREAMS (Purple) --- */}
                            <g>
                              {/* Central Stream - Reduced to 3 particles */}
                              {[...Array(3)].map((_, i) => (
                                  <circle key={`l-c-${i}`} r={Math.random() * 1.5 + 1} fill="#A855F7">
                                    <animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" path="M 180 400 Q 280 400 340 400" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;1;0" dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Up Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`l-u-${i}`} r={Math.random() * 1.5 + 1} fill="#C084FC">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 200 360 Q 280 320 350 380" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                              {/* Down Curve Stream - Reduced to 2 particles */}
                              {[...Array(2)].map((_, i) => (
                                  <circle key={`l-d-${i}`} r={Math.random() * 1.5 + 1} fill="#9333EA">
                                    <animateMotion dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" path="M 200 440 Q 280 480 350 420" begin={`-${Math.random() * 5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" />
                                    <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + Math.random() * 2}s`} repeatCount="indefinite" />
                                  </circle>
                              ))}
                            </g>
                        </svg>
                    </div>

                    {/* Node 1 (Top) - Blue - Equal distance (16% from edge) */}
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]">
                        <div className="animate-[spin_60s_linear_infinite_reverse] will-change-transform translate-z-0">
                          <div className="relative bg-[#0F172A] border border-blue-500/40 p-4 rounded-2xl shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform duration-300 h-[130px] flex flex-col justify-center">
                              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl"></div>
                              <div className="flex items-center gap-2.5 mb-1.5 relative z-10">
                                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                      <Database size={16} />
                                  </div>
                                  <h4 className="text-white font-bold text-sm tracking-wide">原生数据上链</h4>
                              </div>
                              <p className="text-blue-200/60 text-[11px] leading-relaxed font-medium relative z-10">
                                生产与交易数据实时上链，形成不可篡改的数字记录
                              </p>
                          </div>
                        </div>
                    </div>

                    {/* Node 2 (Right) - Emerald - Equal distance (16% from edge) */}
                    <div className="absolute top-1/2 right-[10%] translate-x-1/2 -translate-y-1/2 w-[200px]">
                        <div className="animate-[spin_60s_linear_infinite_reverse] will-change-transform translate-z-0">
                          <div className="relative bg-[#0F172A] border border-emerald-500/40 p-4 rounded-2xl shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform duration-300 h-[130px] flex flex-col justify-center">
                              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-2xl"></div>
                              <div className="flex items-center gap-2.5 mb-1.5 relative z-10">
                                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 ring-1 ring-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                      <Fingerprint size={16} />
                                  </div>
                                  <h4 className="text-white font-bold text-sm tracking-wide">不可篡改存证</h4>
                              </div>
                              <p className="text-emerald-200/60 text-[11px] leading-relaxed font-medium relative z-10">
                                通过哈希指纹与多方共识机制，生成具备时间戳与链上编号的存证记录
                              </p>
                          </div>
                        </div>
                    </div>

                    {/* Node 3 (Bottom) - Orange - Equal distance (16% from edge) */}
                    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/2 w-[200px]">
                        <div className="animate-[spin_60s_linear_infinite_reverse] will-change-transform translate-z-0">
                          <div className="relative bg-[#0F172A] border border-orange-500/40 p-4 rounded-2xl shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] hover:scale-105 transition-transform duration-300 h-[130px] flex flex-col justify-center">
                              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent rounded-2xl"></div>
                              <div className="flex items-center gap-2.5 mb-1.5 relative z-10">
                                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 ring-1 ring-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                      <ScanLine size={16} />
                                  </div>
                                  <h4 className="text-white font-bold text-sm tracking-wide">全链路溯源</h4>
                              </div>
                              <p className="text-orange-200/60 text-[11px] leading-relaxed font-medium relative z-10">
                                为产品生成专属数字碳账本，记录从生产到流转的全过程数据
                              </p>
                          </div>
                        </div>
                    </div>

                    {/* Node 4 (Left) - Purple - Equal distance (16% from edge) */}
                    <div className="absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 w-[200px]">
                        <div className="animate-[spin_60s_linear_infinite_reverse] will-change-transform translate-z-0">
                          <div className="relative bg-[#0F172A] border border-purple-500/40 p-4 rounded-2xl shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] hover:scale-105 transition-transform duration-300 h-[130px] flex flex-col justify-center">
                              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl"></div>
                              <div className="flex items-center gap-2.5 mb-1.5 relative z-10">
                                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 ring-1 ring-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                      <ShieldCheck size={16} />
                                  </div>
                                  <h4 className="text-white font-bold text-sm tracking-wide">隐私计算</h4>
                              </div>
                              <p className="text-purple-200/60 text-[11px] leading-relaxed font-medium relative z-10">
                                在不暴露商业敏感数据的前提下，完成减碳量核算与交叉验证
                              </p>
                          </div>
                        </div>
                    </div>

                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};