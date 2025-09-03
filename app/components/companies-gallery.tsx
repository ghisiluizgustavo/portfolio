'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { getCompanies } from '../data/companies';
import { useLocale } from 'next-intl';
import {useTranslations} from 'next-intl';

export function CompaniesGallery() {
  const t = useTranslations('components');
  const locale = useLocale() as 'pt' | 'en';
  const companies = getCompanies(locale);
  
  return (
    <div className='mb-10'>
      <h1 className='mb-5 text-lg font-medium'>{t('companies_title')}</h1>
      <Swiper 
        className='w-full flex items-center justify-center' 
        navigation={true} 
        modules={[Navigation]}
        slidesPerView={2}
        loop={true}
      >

        {companies.map(company => (
          <SwiperSlide key={company.id}>
            <a href={`/${locale}${company.url}`}>
              <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mx-12 rounded-lg flex flex-col items-center cursor-pointer p-4">
                {company.name}
                <p className="text-xs">{t('companies_learn_more')}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}

      </Swiper>
     </div>
  );
};