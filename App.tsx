import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ExternalLink, Command, ArrowRight } from 'lucide-react';
import TerminalWindow from './components/TerminalWindow';
import PythonSnippet from './components/PythonSnippet';
import { isValidUrl, saveUrl, formatPythonSnippet } from './utils';
import { CommandHistory } from './types';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on click anywhere or load
  useEffect(() => {
    inputRef.current?.focus();
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const newHistory: CommandHistory[] = [...history];
    
    // Add User Input
    newHistory.push({
      type: 'input',
      content: cmd
    });

    // Process Command
    if (cmd.toLowerCase() === 'help') {
      newHistory.push({
        type: 'output',
        content: (
          <div className="text-[#8b949e]">
            <p>TypeLink Terminal Shortener v1.0.0</p>
            <p className="mt-2">Available commands:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><span className="text-[#d2a8ff]">help</span>: Show this message</li>
              <li><span className="text-[#d2a8ff]">clear</span>: Clear terminal history</li>
              <li><span className="text-[#d2a8ff]">[url]</span>: Shorten a valid URL (e.g. https://google.com)</li>
            </ul>
          </div>
        )
      });
    } else if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (isValidUrl(cmd)) {
      // Simulate Backend Process
      const result = saveUrl(cmd);
      const pythonCode = formatPythonSnippet(result.shortCode, result.originalUrl);
      const shortUrl = `https://typelink.in/${result.shortCode}`;

      newHistory.push({
        type: 'success',
        content: (
          <div className="space-y-4 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="text-[#3fb950] font-bold">✔ SUCCESS</span>
              <span className="text-[#8b949e]">Link shortened successfully!</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-[#161b22] p-3 rounded border border-[#30363d] w-fit">
               <span className="text-[#58a6ff] hover:underline cursor-pointer flex items-center gap-2">
                 {shortUrl}
               </span>
               <button 
                  onClick={() => navigator.clipboard.writeText(shortUrl)}
                  className="text-[#8b949e] hover:text-white text-xs border border-[#30363d] px-2 py-1 rounded"
                >
                  COPY
                </button>
            </div>

            <div className="mt-4">
              <p className="text-[#8b949e] text-sm mb-2">Integration Code:</p>
              <PythonSnippet code={pythonCode} />
            </div>
          </div>
        )
      });
    } else {
      newHistory.push({
        type: 'error',
        content: (
          <span className="text-[#ff7b72]">
            Error: Invalid command or URL. Type 'help' for instructions.
          </span>
        )
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="min-h-screen bg-[#010409] text-[#c9d1d9] p-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#238636] blur-[150px] rounded-full"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#a371f7] blur-[150px] rounded-full"></div>
      </div>

      <div className="z-10 w-full max-w-4xl mb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3fb950] to-[#2ea043] mb-2 flex items-center gap-3">
          <Terminal size={40} className="text-[#3fb950]" />
          TypeLink
        </h1>
        <p className="text-[#8b949e] text-lg">
          The Developer-First URL Shortener. <span className="text-[#79c0ff]">Python ready.</span>
        </p>
      </div>

      <div className="z-10 w-full">
        <TerminalWindow>
          {/* Intro Text */}
          <div className="mb-6">
            <span className="text-[#3fb950]">Welcome to TypeLink v1.0.0</span>
            <br />
            <span className="text-[#8b949e]">Type a URL to shorten it and get your Python snippet.</span>
            <br />
            <span className="text-[#8b949e]">Type <span className="text-[#d2a8ff]">'help'</span> for more commands.</span>
          </div>

          {/* History */}
          {history.map((entry, idx) => (
            <div key={idx} className="mb-4">
              {entry.type === 'input' && (
                <div className="flex items-center space-x-2 text-[#c9d1d9]">
                  <span className="text-[#3fb950]">user@typelink</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#79c0ff]">~</span>
                  <span className="text-[#8b949e]">$</span>
                  <span>{entry.content}</span>
                </div>
              )}
              {entry.type !== 'input' && (
                <div className="mt-2 ml-4 md:ml-6">
                  {entry.content}
                </div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center space-x-2 text-[#c9d1d9]">
            <span className="text-[#3fb950]">user@typelink</span>
            <span className="text-[#8b949e]">:</span>
            <span className="text-[#79c0ff]">~</span>
            <span className="text-[#8b949e]">$</span>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none w-full text-[#c9d1d9] font-mono caret-transparent"
                autoComplete="off"
                autoFocus
                spellCheck={false}
              />
              {/* Custom blinking cursor */}
              <div 
                className="absolute top-0 pointer-events-none cursor-blink bg-[#c9d1d9] w-2.5 h-5"
                style={{ left: `${input.length}ch` }}
              ></div>
            </div>
          </div>
        </TerminalWindow>
      </div>
      
      <footer className="z-10 mt-8 text-[#484f58] text-sm">
        <p>&copy; {new Date().getFullYear()} TypeLink.in &bull; Built with FastAPI & React (Simulated)</p>
      </footer>
    </div>
  );
};

export default App;