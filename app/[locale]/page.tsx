import { BlogPosts } from '../components/posts'
import { CompaniesGallery } from '../components/companies-gallery'
import TechBadges from '../components/techs-badges'
import {getTranslations} from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('home');
  
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {t('welcome')}
      </h1>
      <p className="mb-4">
        {t('description', {
          experience: t('experience_years'),
          technologies: t('technologies')
        })}
      </p>

      <div className="my-8">
        <CompaniesGallery />
      </div>

      <div className="my-8">
        <TechBadges />
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
