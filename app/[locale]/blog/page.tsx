import { BlogPosts } from '../../components/posts'
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'blog'});
  
  return {
    title: t('page_title'),
    description: t('description'),
  };
}

export default async function Page() {
  const t = await getTranslations('blog');
  
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{t('title')}</h1>
      <BlogPosts />
    </section>
  )
}
