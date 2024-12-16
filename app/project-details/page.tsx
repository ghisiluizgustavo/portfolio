import companies from '../companies-projects'

export default function Page() {
  return (
    <>
      {companies.map(company => (
        <div id={company.name.toLowerCase()} className="mb-10">
          <h1 className="text-xl">{company.name}</h1>
          <p>{company.description}</p>
        </div>
      ))}
    </>
  )
}