import { getTechs } from '../data/techs'
import {getTranslations, getLocale} from 'next-intl/server';

export default async function TechsBadges() {
  const t = await getTranslations('components');
  const locale = await getLocale() as 'pt' | 'en';
  const techs = getTechs(locale);
  
  return (
    <div className='mb-10'>
      <h1 className='mb-5 text-lg font-medium'>{t('techs_title')}</h1>
      <div className='flex flex-wrap gap-2'>
        {techs.map((tech, index) => (
          <span key={index} className={`${tech.color} text-white px-2 py-1 rounded text-sm`}>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  )
}