"use client";

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { personal } from '@data/personal';

export function CodeConsole() {
  const t = useTranslations('codeConsole');

  const codeLines = useMemo(() => {
    const skills = personal.codeConsoleSkills;
    const skillsStr = skills.map((s) => `'${s}'`).join(", ");
    return [
      t('lineInstall'),
      t('lineOk'),
      "",
      "const developer = {",
      `  name: '${personal.fullName}',`,
      `  role: '${t('role')}',`,
      `  skills: [${skillsStr}],`,
      `  passion: '${t('passion')}',`,
      `  status: '${t('status')}'`,
      "};",
      "",
      t('magicComment'),
    ];
  }, [t]);

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentText('');
    setCurrentCharIndex(0);
  }, [codeLines]);

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentText('');
        setCurrentCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentLine = codeLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentText('');
        setCurrentCharIndex(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, currentText, codeLines]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#090E1B] to-[#0F172A]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-2xl border border-[#334155]">
          <div className="bg-[#0F172A] px-4 py-3 flex items-center gap-2 border-b border-[#334155]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm font-medium">{t('windowTitle')}</span>
            </div>
          </div>

          <div className="h-[400px] overflow-hidden break-words p-6 font-mono text-sm">
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-1">
                {line.startsWith('$') ? (
                  <span className="text-[#06B6D4]">{line}</span>
                ) : line.startsWith('✓') ? (
                  <span className="text-[#10B981]">{line}</span>
                ) : line.includes('const') || line.includes('developer') ? (
                  <span className="text-gray-300">
                    {line.split(/(\bconst\b|\bdeveloper\b|'[^']*'|:)/g).map((part, i) => {
                      if (part === 'const') return <span key={i} className="text-[#C084FC]">{part}</span>;
                      if (part === 'developer') return <span key={i} className="text-[#06B6D4]">{part}</span>;
                      if (part.startsWith("'") && part.endsWith("'")) return <span key={i} className="text-[#34D399]">{part}</span>;
                      if (part === ':') return <span key={i} className="text-[#F59E0B]">{part}</span>;
                      return <span key={i}>{part}</span>;
                    })}
                  </span>
                ) : line.includes('//') ? (
                  <span className="text-gray-500">{line}</span>
                ) : line.includes('{') || line.includes('}') || line.includes('[') || line.includes(']') ? (
                  <span className="text-[#F59E0B]">{line}</span>
                ) : (
                  <span className="text-gray-300">{line}</span>
                )}
              </div>
            ))}
            {currentText && (
              <div className="mb-1">
                {currentText.startsWith('$') ? (
                  <span className="text-[#06B6D4]">{currentText}<span className="animate-pulse">_</span></span>
                ) : currentText.startsWith('✓') ? (
                  <span className="text-[#10B981]">{currentText}<span className="animate-pulse">_</span></span>
                ) : currentText.includes('const') || currentText.includes('developer') ? (
                  <span className="text-gray-300">
                    {currentText.split(/(\bconst\b|\bdeveloper\b|'[^']*'|:)/g).map((part, i) => {
                      if (part === 'const') return <span key={i} className="text-[#C084FC]">{part}</span>;
                      if (part === 'developer') return <span key={i} className="text-[#06B6D4]">{part}</span>;
                      if (part.startsWith("'") && part.endsWith("'")) return <span key={i} className="text-[#34D399]">{part}</span>;
                      if (part === ':') return <span key={i} className="text-[#F59E0B]">{part}</span>;
                      return <span key={i}>{part}</span>;
                    })}
                    <span className="animate-pulse">_</span>
                  </span>
                ) : currentText.includes('//') ? (
                  <span className="text-gray-500">{currentText}<span className="animate-pulse">_</span></span>
                ) : currentText.includes('{') || currentText.includes('}') || currentText.includes('[') || currentText.includes(']') ? (
                  <span className="text-[#F59E0B]">{currentText}<span className="animate-pulse">_</span></span>
                ) : (
                  <span className="text-gray-300">{currentText}<span className="animate-pulse">_</span></span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
