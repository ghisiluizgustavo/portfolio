import companies from '../companies-projects'
import Link from "next/link";

export default function Page() {
  return (
    <>
      {companies.map(company => (
          <div id={company.name.toLowerCase()} className="mb-10">
            <Link href={company.externalUrl} target={`_blank`} className="group inline-flex items-center gap-1 transition-colors">
            <h1 className="text-xl underline text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {company.name}
                <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
            </h1>
            </Link>
            <p>{company.description}</p>
          </div>
      ))}
    </>
  )
}