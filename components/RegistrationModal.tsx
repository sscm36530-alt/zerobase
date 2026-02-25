import React, { useState, useEffect } from 'react';
import { X, Factory, ShoppingCart, Check, Phone, ArrowRight, ArrowLeft, Building2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'manufacturer' | 'purchaser' | null>(null);
  const [countdown, setCountdown] = useState(0);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setRole(null);
        setCountdown(0);
      }, 300); // Wait for fade out
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // SMS Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSendCode = () => {
    if (countdown === 0) setCountdown(60);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop - Click to close REMOVED */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"></div>

      {/* Modal Container - Matches Product Detail Modal Size & Layout */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row ring-1 ring-slate-900/5">
        
        {/* Left Panel - Decorative/Info (Matches Product Detail Left Side) */}
        <div className="hidden md:flex w-[45%] bg-gradient-to-br from-slate-50 via-blue-50 to-white relative items-center justify-center overflow-hidden border-r border-slate-100 shrink-0">
             
             {/* Content */}
             <div className="relative z-10 p-12 text-slate-900 max-w-md">
                 <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8">
                    <Building2 size={32} className="text-emerald-600" />
                 </div>
                 <h2 className="text-3xl font-black mb-6 leading-tight text-slate-900">开启您的<br/>碳资产账户</h2>
                 <p className="text-slate-600 leading-relaxed text-lg mb-10 font-medium">
                     无论是生产企业还是采购品牌，<br/>在这里生成、接收、管理真实减碳资产。
                 </p>
                 <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <strong className="block text-slate-900 text-base mb-1">权威方法学支撑</strong>
                            <span className="text-slate-500 text-sm">减碳量可核算、可认证、可审计</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <strong className="block text-slate-900 text-base mb-1">数字资产自动生成</strong>
                            <span className="text-slate-500 text-sm">生产与采购数据实时存证</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <strong className="block text-slate-900 text-base mb-1">绿色供应链协同</strong>
                            <span className="text-slate-500 text-sm">实现供需匹配与碳数据协同管理</span>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Right Panel - Form Content */}
        <div className="w-full md:w-[55%] flex flex-col h-full bg-white relative">
            
            {/* Header with Navigation */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-4">
                    {step > 1 && (
                        <button 
                            onClick={() => setStep(step - 1)} 
                            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                            title="返回上一步"
                        >
                            <ArrowLeft size={20} />
                        </button>
                    )}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                            {step === 1 && '选择注册身份'}
                            {step === 2 && '填写企业信息'}
                            {step === 3 && '安全验证'}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-2">
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-8 bg-emerald-500' : 'w-3 bg-slate-200'}`}></div>
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-8 bg-emerald-500' : 'w-3 bg-slate-200'}`}></div>
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? 'w-8 bg-emerald-500' : 'w-3 bg-slate-200'}`}></div>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={24} />
                </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar flex-1">
                
                {/* STEP 1: Role Selection */}
                {step === 1 && (
                    <div className="flex flex-col h-full justify-center w-full">
                        <div className="text-center mb-8">
                            <p className="text-slate-500 text-base">请根据您的企业类型选择对应的注册通道</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6 h-full max-h-[500px]">
                            {/* Manufacturer Card */}
                            <button 
                                onClick={() => { setRole('manufacturer'); setStep(2); }}
                                className="group relative p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/30 transition-all duration-300 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full"
                            >
                                <div className="flex flex-col items-center gap-5 mb-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-sm">
                                        <Factory size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 tracking-tight">我是生产企业</h4>
                                </div>
                                
                                <div className="space-y-3 mb-8 relative z-10 flex-1 w-full text-left px-2">
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                        <span>开展产品减碳量化与第三方认证</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                        <span>自动生成碳资产编号</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                        <span>支持资产确权与转移确认</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                        <span>构建企业碳资产管理体系</span>
                                    </div>
                                </div>

                                <div className="mt-auto w-full py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all flex items-center justify-center gap-2 relative z-10">
                                    立即注册 <ArrowRight size={16} />
                                </div>
                            </button>

                            {/* Purchaser Card */}
                            <button 
                                onClick={() => { setRole('purchaser'); setStep(2); }}
                                className="group relative p-8 rounded-2xl border border-slate-200 hover:border-blue-500 bg-white hover:bg-blue-50/30 transition-all duration-300 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full"
                            >
                                <div className="flex flex-col items-center gap-5 mb-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                                        <ShoppingCart size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 tracking-tight">我是采购商 / 品牌</h4>
                                </div>

                                <div className="space-y-3 mb-8 relative z-10 flex-1 w-full text-left px-2">
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        <span>追踪供应商减碳数据</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        <span>接收采购对应减碳量资产</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        <span>完成线上转入确认</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        <span>支撑ESG披露与双碳目标</span>
                                    </div>
                                </div>

                                <div className="mt-auto w-full py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center gap-2 relative z-10">
                                    立即注册 <ArrowRight size={16} />
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: Basic Info */}
                {step === 2 && (
                    <form className="space-y-6 max-w-lg mx-auto py-4" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                        
                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-8 flex items-start gap-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                                <Building2 size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-blue-900 mb-1">企业资质认证</h4>
                                <p className="text-xs text-blue-700/80 leading-relaxed">请确保信息与营业执照一致，我们将通过国家企业信用信息公示系统进行自动核验。</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">企业全称 <span className="text-red-500">*</span></label>
                                <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="请输入完整企业名称" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">统一社会信用代码 <span className="text-red-500">*</span></label>
                                <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="18位代码" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">联系人姓名 <span className="text-red-500">*</span></label>
                                <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="填写真实姓名" />
                            </div>

                            {/* Role Specific Fields */}
                            {role === 'manufacturer' ? (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">主要产品类型 (选填)</label>
                                    <div className="relative">
                                        <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-medium text-slate-700 text-sm appearance-none cursor-pointer">
                                            <option value="">请选择产品类别...</option>
                                            <option>再生塑料粒子/切片</option>
                                            <option>再生纺织纤维</option>
                                            <option>再生金属 (铝/铜/钢)</option>
                                            <option>生物基材料</option>
                                            <option>其他</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <ArrowRight size={14} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                 <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">预计年采购量 (选填)</label>
                                    <input type="number" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-medium text-slate-800 text-sm placeholder:font-normal" placeholder="例如: 500 (吨)" />
                                </div>
                            )}
                        </div>

                        <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 group">
                            下一步 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                )}

                {/* STEP 3: Verification (SMS) */}
                {step === 3 && (
                    <form className="space-y-6 max-w-lg mx-auto py-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">手机号码 <span className="text-red-500">*</span></label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <input required type="tel" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="请输入11位手机号" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">短信验证码 <span className="text-red-500">*</span></label>
                                <div className="flex gap-3">
                                    <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm text-center tracking-widest placeholder:tracking-normal placeholder:font-normal" placeholder="6位数字" maxLength={6} />
                                    <button 
                                        type="button" 
                                        onClick={handleSendCode}
                                        disabled={countdown > 0}
                                        className={`shrink-0 w-36 rounded-xl text-xs font-bold border transition-all ${
                                            countdown > 0 
                                                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                                                : 'bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-sm'
                                        }`}
                                    >
                                        {countdown > 0 ? `${countdown}s 后重试` : '获取验证码'}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">设置登录密码 <span className="text-red-500">*</span></label>
                                 <input required type="password" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="8-20位，需包含字母和数字" />
                            </div>
                        </div>

                         <div className="pt-4">
                            <label className="flex items-start gap-3 cursor-pointer group p-3 -ml-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <div className="relative flex items-center mt-0.5">
                                    <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 shadow-sm checked:border-emerald-500 checked:bg-emerald-500 transition-all" />
                                    <Check size={12} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                                </div>
                                <span className="text-xs text-slate-500 font-medium group-hover:text-slate-700 transition-colors leading-relaxed">
                                    我已阅读并同意 <a href="#" className="text-emerald-600 font-bold hover:underline">《息壤平台服务协议》</a> 与 <a href="#" className="text-emerald-600 font-bold hover:underline">《隐私政策》</a>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] mt-2">
                            立即提交入驻申请
                        </button>
                    </form>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};