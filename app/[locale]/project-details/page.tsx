import { getCompanies } from '../../data/companies';
import { getLocale } from 'next-intl/server';
import Link from "next/link";

export default async function Page() {
  const locale = await getLocale() as 'pt' | 'en';
  const companies = getCompanies(locale);
  
  return (
    <>
      {companies.map((company, index) => (
          <div key={index} id={company.name.toLowerCase()} className="mb-10">
            <Link href={company.externalUrl} target={`_blank`} className="group inline-flex items-center gap-1 transition-colors">
            <h1 className="text-xl underline text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {company.name}
                <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
            </h1>
            </Link>
            <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-800 dark:text-neutral-200">
              {company.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm leading-relaxed">{achievement}</li>
              ))}
            </ul>
          </div>
      ))}
    </>
  )
}