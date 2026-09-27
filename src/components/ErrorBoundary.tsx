import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F2F1EC] text-[#202624] flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 bg-white border border-[#21443D]/20 rounded-3xl shadow-xl text-center space-y-4">
            <div className="w-12 h-12 bg-[#21443D] text-[#A77C50] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#21443D]">
              Ghauri Dental Center
            </h2>
            <p className="text-sm text-[#727A76]">
              Something went wrong loading this view. Please refresh the page or contact the clinic directly.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-3 px-6 bg-[#21443D] text-[#F2F1EC] text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#17322D] transition-colors"
              >
                Reload Page
              </button>
              <a
                href="https://wa.me/923333711434"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 border border-[#21443D]/30 text-[#21443D] text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#E2E6E2] transition-colors"
              >
                WhatsApp Desk: +92 333 3711434
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
