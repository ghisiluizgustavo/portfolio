const techs = [
  // langs + frameworks
  { name: "Java", color: "bg-orange-500" },          // Associado ao logo do Java
  { name: "Kotlin", color: "bg-purple-400" },        // Cor relacionada ao logo do Kotlin
  { name: "Python", color: "bg-blue-400" },          // Associado ao logo do Python
  { name: "Typescript", color: "bg-sky-500" },       // Relacionado ao JS
  { name: "JPA", color: "bg-red-500" },              // Complementar ao ecossistema Java
  { name: "Maven", color: "bg-blue-600" },           // Associado ao Maven Central
  { name: "Spring Boot", color: "bg-green-600" },    // Verde relacionado ao logo do Spring
  { name: "Spring Data", color: "bg-teal-500" },     // Outra variação de verde
  { name: "Spring Webflux", color: "bg-lime-600" },   // Verde mais claro
  { name: "Spring Cloud", color: "bg-emerald-500" }, // Tons relacionados a Spring
  { name: "NextJS", color: "bg-neutral-800" },       // Associado ao tema escuro do Next.js
  { name: "Angular", color: "bg-red-600" },          // Relacionado ao logo vermelho do Angular

  // test
  { name: "JUnit", color: "bg-pink-500" },           // Rosa que destaca o JUnit
  { name: "Spock", color: "bg-violet-500" },         // Tons mais próximos ao icônico Spock
  { name: "Mockito", color: "bg-indigo-600" },       // Azul escuro para contrastar

  // devops
  { name: "AWS", color: "bg-orange-600" },           // Associado ao logo laranja da AWS
  { name: "Docker", color: "bg-blue-500" },          // Azul clássico do Docker
  { name: "PostgreSQL", color: "bg-indigo-700" },    // Azul profundo do logo do PostgreSQL
  { name: "MongoDB", color: "bg-green-500" },        // Verde clássico do MongoDB
  { name: "Git", color: "bg-red-400" },              // Associado ao logo vermelho do Git
  { name: "Splunk", color: "bg-yellow-600" },        // Amarelo para Splunk
  { name: "Rancher", color: "bg-blue-700" },         // Azul característico do Rancher

  // arch + design
  { name: "Microserviços", color: "bg-gray-600" },   // Cor neutra para arquitetura
  { name: "Arquitetura Limpa", color: "bg-blue-400" },
  { name: "Arquitetura Hexagonal", color: "bg-teal-400" },
  { name: "Arquitetura Orientada a Eventos", color: "bg-cyan-600" },
  { name: "Domain Driven Design (DDD)", color: "bg-purple-600" },
  { name: "Restful APIs", color: "bg-sky-500" },

  // methodologies
  { name: "Scrum", color: "bg-yellow-500" },         // Amarelo que remete a agilidade
];


export default function TechBadges() {
  return (
    <>
      <h1 className="text-lg font-medium">Tecnologias que domino:</h1>
      <div className="flex flex-wrap gap-3 p-4">
        {techs.map((tech) => (
          <span className={`px-3 py-1 text-sm font-medium text-white rounded-full ${tech.color}`}>
            {tech.name}
          </span>
        ))}
      </div>
    </>
  );
}