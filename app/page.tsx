import { BlogPosts } from 'app/components/posts'
import CompaniesGallery from './components/companies-gallery'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Olá, seja bem vindo(a)
      </h1>
      <p className="mb-4">
        {`Eu sou um desenvolvedor Backend (Java), com mais de 5 anos de experiência
        no mercado profissional. Com expertise em Java, Spring, AWS, Microserviços e mais`}
      </p>

      <div className="my-8">
        <CompaniesGallery />
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
