import { BlogPosts } from 'app/components/posts'
import { CompaniesGallery } from './components/companies-gallery'
import TechBadges from './components/techs-badges'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Olá, seja bem vindo(a)
      </h1>
      <p className="mb-4">
        Eu sou um desenvolvedor Backend (Java), com mais de <span className='font-semibold'> 5 anos de experiência </span>
        no mercado profissional. Com expertise em <span className='font-semibold'> Java, Spring, AWS, Microserviços e mais. </span>
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
