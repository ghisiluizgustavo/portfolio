'use client'
import { getCompanies } from '../data/companies';
import { useLocale } from 'next-intl';
import {useTranslations} from 'next-intl';
import { useRef, useState } from 'react';

export function CompaniesGallery() {
  const t = useTranslations('components');
  const locale = useLocale() as 'pt' | 'en';
  const companies = getCompanies(locale);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  return (
    <div className='mb-10'>
      <h1 className='mb-5 text-lg font-medium'>{t('companies_title')}</h1>
      
      {/* Mobile: Vertical stack */}
      <div className='flex flex-col gap-3 md:hidden'>
        {companies.map(company => (
          <a 
            key={company.id}
            href={`/${locale}${company.url}`}
            className="block"
          >
            <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg p-5 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {company.logo && (
                    <>
                      <img 
                        src={company.logo.light} 
                        alt={`${company.name} logo`}
                        className="w-8 h-8 object-contain dark:hidden"
                      />
                      <img 
                        src={company.logo.dark} 
                        alt={`${company.name} logo`}
                        className="w-8 h-8 object-contain hidden dark:block"
                      />
                    </>
                  )}
                  <span className="text-lg font-semibold">{company.name}</span>
                </div>
                <span className="text-xs opacity-60">→</span>
              </div>
              <p className="text-xs opacity-70 mt-1">{t('companies_learn_more')}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop: Horizontal scroll with drag */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`hidden md:flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {companies.map(company => (
          <a 
            key={company.id}
            href={`/${locale}${company.url}`}
            className="block flex-shrink-0"
            draggable={false}
          >
            <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg p-6 w-[200px] h-[140px] flex flex-col justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all hover:scale-105 select-none">
              <div className="flex flex-col gap-2">
                {company.logo && (
                  <>
                    <img 
                      src={company.logo.light} 
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-contain dark:hidden"
                    />
                    <img 
                      src={company.logo.dark} 
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-contain hidden dark:block"
                    />
                  </>
                )}
                <span className="text-base font-semibold">{company.name}</span>
              </div>
              <p className="text-xs opacity-70">{t('companies_learn_more')}</p>
            </div>
          </a>
        ))}
      </div>
     </div>
  );
};