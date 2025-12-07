import React, { useEffect, useRef } from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  });

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden flex flex-col h-[80vh]">
      {/* Terminal Header */}
      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-[#30363d]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-xs text-[#8b949e] font-mono">user@typelink: ~</div>
        <div className="w-14"></div> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="flex-1 p-6 overflow-y-auto font-mono text-sm md:text-base space-y-4"
      >
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;