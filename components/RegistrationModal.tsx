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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose}></div>

      {/* Modal Container - Increased width for side-by-side layout */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] ring-1 ring-white/50 border border-white/60">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        {/* Header with Navigation */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white/50 backdrop-blur sticky top-0 z-20">
            <div className="flex items-center gap-3">
                {step > 1 && (
                    <button 
                        onClick={() => setStep(step - 1)} 
                        className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                        title="返回上一步"
                    >
                        <ArrowLeft size={20} />
                    </button>
                )}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        {step === 1 && '第一步：选择注册身份'}
                        {step === 2 && '第二步：填写企业信息'}
                        {step === 3 && '第三步：安全验证'}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                        <div className={`h-1 rounded-full transition-all duration-300 ${step >= 1 ? 'w-4 bg-emerald-500' : 'w-2 bg-slate-200'}`}></div>
                        <div className={`h-1 rounded-full transition-all duration-300 ${step >= 2 ? 'w-4 bg-emerald-500' : 'w-2 bg-slate-200'}`}></div>
                        <div className={`h-1 rounded-full transition-all duration-300 ${step >= 3 ? 'w-4 bg-emerald-500' : 'w-2 bg-slate-200'}`}></div>
                    </div>
                </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full bg-slate-50/80 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={20} />
            </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
            
            {/* STEP 1: Role Selection - Side by Side Layout */}
            {step === 1 && (
                <div className="flex flex-col h-full justify-center">
                    <p className="text-slate-500 text-center text-sm mb-8 font-medium">请根据您的企业类型选择对应的注册通道</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button 
                            onClick={() => { setRole('manufacturer'); setStep(2); }}
                            className="group relative p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 bg-white/60 hover:bg-emerald-50/30 transition-all duration-300 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 border border-slate-100 mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                <Factory size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 mb-2">我是生产企业</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6 px-2 h-10">
                                适用于拥有制造能力的工厂。<br/>支持产品碳足迹核算、认证及管理。
                            </p>
                            <div className="mt-auto w-full py-2.5 rounded-lg bg-white border border-slate-200 text-slate-400 text-xs font-bold group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all flex items-center justify-center gap-1 shadow-sm">
                                立即注册 <ArrowRight size={14} />
                            </div>
                        </button>

                        <button 
                            onClick={() => { setRole('purchaser'); setStep(2); }}
                            className="group relative p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-500 bg-white/60 hover:bg-blue-50/30 transition-all duration-300 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 border border-slate-100 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <ShoppingCart size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 mb-2">我是采购商/品牌</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6 px-2 h-10">
                                适用于寻找低碳供应链的品牌方。<br/>支持供应商碳数据追踪与管理。
                            </p>
                            <div className="mt-auto w-full py-2.5 rounded-lg bg-white border border-slate-200 text-slate-400 text-xs font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center gap-1 shadow-sm">
                                立即注册 <ArrowRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 2: Basic Info (Vertical Layout) */}
            {step === 2 && (
                <form className="space-y-5 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                    
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-6 flex items-start gap-3">
                        <Building2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-bold text-blue-900">企业资质认证</h4>
                            <p className="text-xs text-blue-700/80 mt-1">请确保信息与营业执照一致，我们将通过国家企业信用信息公示系统进行自动核验。</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">企业全称 <span className="text-red-500">*</span></label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-white/80 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="请输入完整企业名称" />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">统一社会信用代码 <span className="text-red-500">*</span></label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-white/80 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="18位代码" />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">联系人姓名 <span className="text-red-500">*</span></label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-white/80 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="填写真实姓名" />
                        </div>

                        {/* Role Specific Fields - De-emphasized as standard inputs */}
                        {role === 'manufacturer' ? (
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">主要产品类型 (选填)</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-white/80 focus:bg-white transition-all font-medium text-slate-700 text-sm appearance-none cursor-pointer">
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
                             <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">预计年采购量 (选填)</label>
                                <input type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-white/80 focus:bg-white transition-all font-medium text-slate-800 text-sm placeholder:font-normal" placeholder="例如: 500 (吨)" />
                            </div>
                        )}
                    </div>

                    <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2 group">
                        下一步 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            )}

            {/* STEP 3: Verification (SMS) */}
            {step === 3 && (
                <form className="space-y-5 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">手机号码 <span className="text-red-500">*</span></label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <input required type="tel" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-white/80 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="请输入11位手机号" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">短信验证码 <span className="text-red-500">*</span></label>
                            <div className="flex gap-3">
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-white/80 focus:bg-white transition-all font-bold text-slate-800 text-sm text-center tracking-widest placeholder:tracking-normal placeholder:font-normal" placeholder="6位数字" maxLength={6} />
                                <button 
                                    type="button" 
                                    onClick={handleSendCode}
                                    disabled={countdown > 0}
                                    className={`shrink-0 w-32 rounded-xl text-xs font-bold border transition-all ${
                                        countdown > 0 
                                            ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                                            : 'bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-sm'
                                    }`}
                                >
                                    {countdown > 0 ? `${countdown}s 后重试` : '获取验证码'}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                             <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">设置登录密码 <span className="text-red-500">*</span></label>
                             <input required type="password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-white/80 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="8-20位，需包含字母和数字" />
                        </div>
                    </div>

                     <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer group p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="relative flex items-center mt-0.5">
                                <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 shadow-sm checked:border-emerald-500 checked:bg-emerald-500 transition-all" />
                                <Check size={12} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                            <span className="text-xs text-slate-500 font-medium group-hover:text-slate-700 transition-colors leading-relaxed">
                                我已阅读并同意 <a href="#" className="text-emerald-600 font-bold hover:underline">《息壤平台服务协议》</a> 与 <a href="#" className="text-emerald-600 font-bold hover:underline">《隐私政策》</a>
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                        立即提交入驻申请
                    </button>
                </form>
            )}

        </div>
        
        {/* Footer Removed */}
      </div>
    </div>
  );
};