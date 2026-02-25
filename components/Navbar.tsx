import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, CheckCircle2 } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '数字驾驶舱', href: '#dashboard' },
  { label: '平台能力', href: '#advantages' },
  { label: '碳资产生成', href: '#process' },
  { label: '绿色采购与入账', href: '#cases' },
  { label: '再生资源流通网络', href: '#exchange' },
  { label: '联系我们', href: '#contact' },
];

interface NavbarProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick, onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 导航栏样式
  const navbarClasses = isScrolled 
    ? 'bg-white shadow-sm border-slate-100' 
    : 'bg-transparent border-transparent';

  const textColorClass = isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white';
  const logoTextClass = isScrolled ? 'text-slate-900' : 'text-white';
  
  // 按钮样式
  const buttonClass = isScrolled 
    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
    : 'bg-white text-emerald-700 hover:bg-emerald-50 shadow-white/20';
  
  const mobileMenuIconClass = isScrolled ? 'text-slate-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 border-b transition-colors duration-200 ${navbarClasses}`}>
      {/* 顶部彩虹装饰条 */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group shrink-0">
            
            {/* 1. Left Icon Container: Rounded Square Box */}
            <div className={`relative w-[52px] h-[52px] rounded-xl flex flex-col items-center justify-center transition-all duration-500 shadow-lg overflow-hidden border group-hover:shadow-emerald-500/20 ${
               isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 shadow-blue-200/50' 
                : 'bg-white/10 backdrop-blur-md border-white/20'
            }`}>
                
                {/* Inner Graphic: Circular Proof + Carbon */}
                <div className="relative w-7 h-7 mb-0.5 flex items-center justify-center">
                    {/* Ring representing 'Proof' (Blockchain/Closed Loop) */}
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-emerald-500/40"></div>
                    <div className="absolute inset-0 rounded-full border-t-[1.5px] border-emerald-400 animate-[spin_4s_linear_infinite]"></div>
                    
                    {/* Center Leaf representing 'Carbon Info' */}
                    <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                        <Leaf size={14} className="text-emerald-400 fill-emerald-500/20" strokeWidth={2.5} />
                    </div>

                    {/* Small Check Badge representing 'Verification' */}
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[1px] border border-blue-600 z-20 shadow-sm">
                        <CheckCircle2 size={8} className="text-blue-600 fill-white" />
                    </div>
                </div>

                {/* Inner Text: ZEROBASE - Scaled down to fit perfectly */}
                <div className="w-full flex justify-center">
                    <span className={`text-[5px] font-black tracking-widest font-mono leading-none scale-75 ${
                        isScrolled ? 'text-blue-50' : 'text-white'
                    }`}>
                    ZEROBASE
                    </span>
                </div>

                {/* Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-150%] group-hover:animate-shine pointer-events-none"></div>
            </div>

            {/* 2. Right Text: Chinese Title Only */}
            <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 whitespace-nowrap ${logoTextClass}`}>
              息壤碳信息服务平台
            </span>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-4 mx-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 px-3 py-2 rounded-lg hover:bg-white/10 whitespace-nowrap ${textColorClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Right */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button 
              onClick={onLoginClick}
              className={`text-sm font-bold transition-colors duration-200 ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white hover:text-emerald-200'}`}
            >
              登录
            </button>
            <button 
              onClick={onRegisterClick}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 ${buttonClass}`}
            >
              企业注册
            </button>
          </div>

          {/* Mobile Menu Button - Only visible on small screens (< lg) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${mobileMenuIconClass}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-bold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 last:border-0 flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-2">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLoginClick();
              }}
              className="w-full py-3 border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 transition-colors"
            >
              登录
            </button>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              企业注册
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};