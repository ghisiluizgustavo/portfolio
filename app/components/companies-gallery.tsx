'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import companies from '../companies-projects';

export function CompaniesGallery() {
  return (
    <div className='mb-10'>
      <h1 className='mb-5 text-lg font-medium'>Empresas e projetos que contribui:</h1>
      <Swiper 
        className='w-full flex items-center justify-center' 
        navigation={true} 
        modules={[Navigation]}
        slidesPerView={2}
        loop={true}
      >

        {companies.map(company => (
          <SwiperSlide key={company.id}>
            <a href={company.url}>
              <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mx-12 rounded-lg flex flex-col items-center cursor-pointer p-4">
                {company.name}
                <p className="text-xs">Saiba mais</p>
              </div>
            </a>
          </SwiperSlide>
        ))}

      </Swiper>
     </div>
  );
};