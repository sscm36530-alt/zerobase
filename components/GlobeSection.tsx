import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { X } from 'lucide-react';

// Full list of provinces for the selector
const PROVINCES = [
  { name: '北京', location: [39.9042, 116.4074] },
  { name: '天津', location: [39.0842, 117.2009] },
  { name: '河北', location: [38.0371, 114.5149] },
  { name: '山西', location: [37.8706, 112.5489] },
  { name: '内蒙古', location: [40.8426, 111.7519] },
  { name: '辽宁', location: [41.8057, 123.4315] },
  { name: '吉林', location: [43.8171, 125.3235] },
  { name: '黑龙江', location: [45.8038, 126.5349] },
  { name: '上海', location: [31.2304, 121.4737] },
  { name: '江苏', location: [32.0603, 118.7969] },
  { name: '浙江', location: [30.2674, 120.1528] },
  { name: '安徽', location: [31.8206, 117.2272] },
  { name: '福建', location: [26.0745, 119.2965] },
  { name: '江西', location: [28.6820, 115.8579] },
  { name: '山东', location: [36.6512, 117.1201] },
  { name: '河南', location: [34.7466, 113.6253] },
  { name: '湖北', location: [30.5928, 114.3055] },
  { name: '湖南', location: [28.2282, 112.9388] },
  { name: '广东', location: [23.1291, 113.2644] },
  { name: '广西', location: [22.8170, 108.3665] },
  { name: '海南', location: [20.0174, 110.3492] },
  { name: '重庆', location: [29.5630, 106.5516] },
  { name: '四川', location: [30.5728, 104.0668] },
  { name: '贵州', location: [26.6470, 106.6302] },
  { name: '云南', location: [25.0389, 102.7183] },
  { name: '西藏', location: [29.6525, 91.1721] },
  { name: '陕西', location: [34.3416, 108.9398] },
  { name: '甘肃', location: [36.0611, 103.8343] },
  { name: '青海', location: [36.6171, 101.7782] },
  { name: '宁夏', location: [38.4872, 106.2309] },
  { name: '新疆', location: [43.8256, 87.6168] },
  { name: '香港', location: [22.3193, 114.1694] },
  { name: '澳门', location: [22.1987, 113.5439] },
  { name: '台湾', location: [25.0330, 121.5654] },
];

// Use provinces as markers
const GLOBE_MARKERS = PROVINCES.map(p => ({ ...p, size: 0.1 }));

// Generate dummy data for each region
const REGION_DATA: Record<string, any> = {
  '全国': {
    carbonReduction: '24,500,000',
    wasteReduction: '865,000',
    avoidedEmissions: '4,203,000',
    productReviews: '18,542',
    firms: '560+',
    certs: '3,200+'
  }
};

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

PROVINCES.forEach(loc => {
  REGION_DATA[loc.name] = {
    carbonReduction: (Math.random() * 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    wasteReduction: (Math.random() * 50000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    avoidedEmissions: (Math.random() * 200000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    productReviews: (Math.random() * 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    firms: (Math.random() * 50).toFixed(0),
    certs: (Math.random() * 200).toFixed(0)
  };
});

export const GlobeSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef(false);
  const pointerStartX = useRef(0);
  const pointerStartY = useRef(0);
  const phiRef = useRef(2.8);
  const thetaRef = useRef(0.2);
  const phiTarget = useRef(2.8);
  const thetaTarget = useRef(0.2);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [selectedRegion, setSelectedRegion] = useState('全国');
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.8, 0.1],
      glowColor: [1, 1, 1],
      scale: 1.1,
      markers: [], // No WebGL markers, using DOM markers for perfect interaction
      onRender: (state) => {
        // No auto-rotation
        
        // Spring/Damping effect
        state.phi = phiRef.current + (phiTarget.current - phiRef.current) * 0.1;
        state.theta = thetaRef.current + (thetaTarget.current - thetaRef.current) * 0.1;
        
        // Update refs for next frame
        phiRef.current = state.phi;
        thetaRef.current = state.theta;

        state.width = width * 2;
        state.height = width * 2;

        const cx = width / 2;
        const cy = width / 2;

        GLOBE_MARKERS.forEach((loc, i) => {
          const el = labelRefs.current[i];
          if (!el) return;

          const phi = state.phi;
          const theta = state.theta;
          const lat = loc.location[0] * (Math.PI / 180);
          const lon = loc.location[1] * (Math.PI / 180);

          const lonRotated = lon + phi;

          const x = Math.cos(lat) * Math.sin(lonRotated);
          const y = Math.sin(lat);
          const z = Math.cos(lat) * Math.cos(lonRotated);

          const yRotated = y * Math.cos(theta) - z * Math.sin(theta);
          const zRotated = y * Math.sin(theta) + z * Math.cos(theta);

          if (zRotated > 0) {
             el.style.opacity = '1';
             const scale = state.scale || 1;
             const r = (width / 2) * scale * 0.99; // Adjusted to 0.99 to be tighter to surface
             
             const screenX = cx + x * r;
             const screenY = cy - yRotated * r;

             el.style.transform = `translate(${screenX}px, ${screenY}px) translate(-50%, -50%)`;
             el.style.pointerEvents = 'auto';
             el.style.zIndex = (1000 + Math.floor(zRotated * 1000)).toString();
          } else {
             el.style.opacity = '0';
             el.style.pointerEvents = 'none';
          }
        });
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

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

  const currentData = REGION_DATA[selectedRegion] || REGION_DATA['全国'];

  return (
    <section className="relative w-full bg-[#f8f9fa] py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto min-h-[800px] flex items-center justify-center overflow-hidden">
          
          {/* Globe Wrapper - Ensures Canvas and Markers share exact coordinate space */}
          <div className="relative w-full max-w-[800px] aspect-square">
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%', cursor: 'grab' }}
              className="opacity-90 transition-opacity duration-1000 ease-in-out"
              onPointerDown={(e) => {
                pointerInteracting.current = true;
                pointerStartX.current = e.clientX;
                pointerStartY.current = e.clientY;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
              }}
              onPointerUp={() => {
                pointerInteracting.current = false;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
              }}
              onPointerOut={() => {
                pointerInteracting.current = false;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current) {
                  const deltaX = e.clientX - pointerStartX.current;
                  const deltaY = e.clientY - pointerStartY.current;
                  // Faster sensitivity (30 instead of 75)
                  phiTarget.current = phiRef.current + deltaX / 30;
                  thetaTarget.current = thetaRef.current + deltaY / 30;
                  pointerStartX.current = e.clientX;
                  pointerStartY.current = e.clientY;
                }
              }}
              onTouchStart={(e) => {
                if (e.touches[0]) {
                  pointerInteracting.current = true;
                  pointerStartX.current = e.touches[0].clientX;
                  pointerStartY.current = e.touches[0].clientY;
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current && e.touches[0]) {
                  const deltaX = e.touches[0].clientX - pointerStartX.current;
                  const deltaY = e.touches[0].clientY - pointerStartY.current;
                  // Faster sensitivity (30 instead of 75)
                  phiTarget.current = phiRef.current + deltaX / 30;
                  thetaTarget.current = thetaRef.current + deltaY / 30;
                  pointerStartX.current = e.touches[0].clientX;
                  pointerStartY.current = e.touches[0].clientY;
                }
              }}
              onTouchEnd={() => {
                pointerInteracting.current = false;
              }}
            />
            
            {/* Labels Container - Visible DOM Markers */}
            <div className="absolute inset-0 pointer-events-none z-50">
              {GLOBE_MARKERS.map((loc, i) => (
                <div
                  key={loc.name}
                  ref={(el) => { labelRefs.current[i] = el; }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent drag start
                    setSelectedRegion(loc.name);
                    setIsSelectorOpen(true);
                  }}
                  className="absolute flex items-center justify-center cursor-pointer group pointer-events-auto"
                  style={{ opacity: 0, left: 0, top: 0 }}
                >
                  {/* Visual Dot */}
                  <div className="relative flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20 relative"></div>
                      <div className="absolute w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 scale-50 group-hover:scale-100"></div>
                  </div>
                  {/* Label (Visible on hover) */}
                  <div className="absolute left-4 text-xs font-bold text-white shadow-black drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                      {loc.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Carbon Asset Cockpit & Province Selector Container */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 pb-0 z-40 pointer-events-none">
          {/* Main Card Wrapper - Handles Shape & Shadow */}
          <div className="relative pointer-events-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden transition-all duration-300">
            
            {/* Cockpit Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#ccff00] rounded-lg flex items-center justify-center">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3V21H21" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 9L14 14L10 10L7 13" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-slate-900 text-xl">碳资产驾驶舱</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {selectedRegion}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedRegion !== '全国' && (
                    <button 
                      onClick={() => setSelectedRegion('全国')}
                      className="text-xs font-medium text-slate-600 hover:text-emerald-600 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full transition-colors"
                    >
                      返回全国数据
                    </button>
                  )}
                  <div className="text-[10px] text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    链上实时同步数据
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-x-12 mb-6">
                
                {/* Metric 1 */}
                <div className="flex flex-col">
                  <div className="text-xs text-slate-500 mb-1">累计减碳排放量</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight transition-all duration-500">{currentData.carbonReduction}</span>
                    <span className="text-xs font-medium text-slate-400">tco2e</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col">
                  <div className="text-xs text-slate-500 mb-1">减少废弃物总量</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight transition-all duration-500">{currentData.wasteReduction}</span>
                    <span className="text-xs font-medium text-slate-400">t</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col">
                  <div className="text-xs text-slate-500 mb-1">避免温室气体排放</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight transition-all duration-500">{currentData.avoidedEmissions}</span>
                    <span className="text-xs font-medium text-slate-400">tco2e</span>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col">
                  <div className="text-xs text-slate-500 mb-1">产品评价数量</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight transition-all duration-500">{currentData.productReviews}</span>
                    <span className="text-xs font-medium text-slate-400">items</span>
                  </div>
                </div>

                {/* Metric 5 */}
                <div className="flex flex-col">
                  <div className="text-xs text-slate-500 mb-1">入驻企业数</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight transition-all duration-500">{currentData.firms}</span>
                    <span className="text-xs font-medium text-slate-400">firms</span>
                  </div>
                </div>

                {/* Metric 6 */}
                <div className="flex flex-col">
                  <div className="text-xs text-slate-500 mb-1">已发证书数</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight transition-all duration-500">{currentData.certs}</span>
                    <span className="text-xs font-medium text-slate-400">certs</span>
                  </div>
                </div>

              </div>

              {/* Real-time Ticker */}
              <div className="border-t border-slate-100 pt-4 mt-2">
                <div className="relative h-[30px] overflow-hidden">
                  <div 
                    className="absolute left-0 w-full transition-transform duration-500 ease-in-out will-change-transform"
                    style={{ transform: `translateY(${tickerY}px)` }}
                  >
                    {[...activityLogs, ...activityLogs].map((log, i) => (
                      <div key={i} className="h-[30px] flex items-center text-xs text-slate-500 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 shrink-0"></span>
                        <span className="mr-3 text-slate-400 font-mono text-[10px]">{new Date().getHours()}:{String(new Date().getMinutes()).padStart(2,'0')}</span>
                        <span className="truncate font-medium">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Province Selector Overlay - Exactly matches parent size */}
            {isSelectorOpen && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-emerald-500 rounded-full"></div>
                    <h3 className="font-bold text-slate-800 text-lg">选择区域</h3>
                  </div>
                  <button 
                    onClick={() => setIsSelectorOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-800"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6 md:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-3">
                    <button
                      onClick={() => {
                        setSelectedRegion('全国');
                        setIsSelectorOpen(false);
                      }}
                      className={`px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                        selectedRegion === '全国'
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                          : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700'
                      }`}
                    >
                      全国
                    </button>
                    {PROVINCES.map((prov) => (
                      <button
                        key={prov.name}
                        onClick={() => {
                          setSelectedRegion(prov.name);
                          setIsSelectorOpen(false);
                        }}
                        className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedRegion === prov.name
                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                            : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700'
                        }`}
                      >
                        {prov.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      </div>
    </section>
  );
};
