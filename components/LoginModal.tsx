import React from 'react';
import { X, Lock, User, ArrowRight, ShieldCheck, Activity, BarChart3, FileText } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onRegisterClick }) => {
  const [view, setView] = React.useState<'login' | 'forgotPassword'>('login');
  const [countdown, setCountdown] = React.useState(0);

  // Reset view when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setView('login');
        setCountdown(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // SMS Countdown timer
  React.useEffect(() => {
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"></div>

      {/* Modal Container - Matches Product Detail/Registration Modal Size & Layout */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row ring-1 ring-slate-900/5">
        
        {/* Left Panel - Decorative/Info */}
        <div className="hidden md:flex w-[45%] bg-gradient-to-br from-slate-50 via-blue-50 to-white relative items-center justify-center overflow-hidden border-r border-slate-100 shrink-0">
             
             {/* Content */}
             <div className="relative z-10 p-12 text-slate-900 max-w-md">
                 <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8">
                    <ShieldCheck size={32} className="text-blue-600" />
                 </div>
                 <h2 className="text-3xl font-black mb-6 leading-tight text-slate-900">登录<br/>碳资产账户</h2>
                 <p className="text-slate-600 leading-relaxed text-lg mb-10 font-medium">
                     管理您的减碳成果，<br/>追踪资产确权与转移记录。
                 </p>
                 <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                            <Activity size={16} strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-bold text-base mt-1">实时查看资产规模与新增减碳量</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                            <BarChart3 size={16} strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-bold text-base mt-1">追踪资产生成、确权与转移状态</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                            <FileText size={16} strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-bold text-base mt-1">导出可披露、可审计的减碳报告</span>
                    </div>
                 </div>
             </div>
        </div>

        {/* Right Panel - Login/Forgot Password Form */}
        <div className="w-full md:w-[55%] flex flex-col h-full bg-white relative">
            
            {/* Header with Close Button */}
            <div className="absolute top-6 right-8 z-20">
                <button onClick={onClose} className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={24} />
                </button>
            </div>

            {/* Centered Form Content */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                
                {view === 'login' ? (
                    <>
                        <div className="mb-10">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">账号登录</h3>
                            <p className="text-slate-500 font-medium">欢迎进入息壤碳资产管理平台</p>
                        </div>

                        <form className="space-y-6">
                            {/* Username Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">账号</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                        <User size={20} />
                                    </div>
                                    <input type="text" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 placeholder:font-normal" placeholder="请输入企业账号 / 手机号" />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">密码</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <input type="password" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 placeholder:font-normal" placeholder="请输入登录密码" />
                                </div>
                                <div className="flex justify-end pt-1">
                                    <button 
                                        type="button"
                                        onClick={() => setView('forgotPassword')}
                                        className="text-xs text-slate-400 font-bold hover:text-blue-600 hover:underline transition-colors"
                                    >
                                        忘记密码？
                                    </button>
                                </div>
                            </div>

                            <button type="button" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group transition-all duration-300 mt-4 text-lg">
                                <span>登录碳资产账户</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 text-center pt-8 border-t border-slate-100">
                            <p className="text-slate-500 font-medium text-sm">
                                还未开通碳资产账户？ 
                                <button 
                                    onClick={() => { onClose(); onRegisterClick(); }}
                                    className="ml-2 font-bold text-blue-600 hover:underline hover:text-blue-700"
                                >
                                    立即注册成为平台用户
                                </button>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-10">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">重置登录密码</h3>
                            <p className="text-slate-500 font-medium">请输入您的注册手机号进行验证</p>
                        </div>

                        <form className="space-y-6">
                            {/* Phone Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">手机号码</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                        <User size={20} />
                                    </div>
                                    <input type="tel" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 placeholder:font-normal" placeholder="请输入注册手机号" />
                                </div>
                            </div>

                            {/* Verification Code */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">短信验证码</label>
                                <div className="flex gap-3">
                                    <input type="text" className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-center tracking-widest placeholder:tracking-normal placeholder:font-normal" placeholder="6位数字" maxLength={6} />
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

                            {/* New Password Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">新密码</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <input type="password" className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 placeholder:font-normal" placeholder="设置新登录密码" />
                                </div>
                            </div>

                            <button type="button" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group transition-all duration-300 mt-4 text-lg">
                                <span>重置密码</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 text-center pt-8 border-t border-slate-100">
                            <button 
                                onClick={() => setView('login')}
                                className="font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-2 mx-auto"
                            >
                                返回账号登录
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};