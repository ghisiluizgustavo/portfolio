export interface Tech {
  name: string;
  color: string;
}

const techsData = {
  pt: [
    // langs + frameworks
    { name: "Java", color: "bg-stone-700" },
    { name: "Kotlin", color: "bg-stone-500" },
    { name: "Python", color: "bg-stone-600" },
    { name: "Typescript", color: "bg-slate-500" },
    { name: "JPA", color: "bg-slate-600" },
    { name: "Maven", color: "bg-stone-600" },
    { name: "Spring Boot", color: "bg-emerald-700" },
    { name: "Spring Data", color: "bg-emerald-600" },
    { name: "Spring Webflux", color: "bg-emerald-500" },
    { name: "Spring Cloud", color: "bg-teal-500" },
    { name: "NextJS", color: "bg-neutral-800" },
    { name: "Angular", color: "bg-rose-600" },

    // test
    { name: "JUnit", color: "bg-amber-500" },
    { name: "Spock", color: "bg-violet-500" },
    { name: "Mockito", color: "bg-indigo-500" },

    // devops
    { name: "AWS", color: "bg-orange-500" },
    { name: "Docker", color: "bg-sky-500" },
    { name: "PostgreSQL", color: "bg-indigo-600" },
    { name: "MongoDB", color: "bg-emerald-500" },
    { name: "Git", color: "bg-rose-500" },
    { name: "Splunk", color: "bg-yellow-500" },
    { name: "Rancher", color: "bg-blue-500" },

    // arch + design
    { name: "Microserviços", color: "bg-stone-500" },
    { name: "Arquitetura Limpa", color: "bg-slate-500" },
    { name: "Arquitetura Hexagonal", color: "bg-teal-500" },
    { name: "Arquitetura Orientada a Eventos", color: "bg-cyan-600" },
    { name: "Domain Driven Design (DDD)", color: "bg-violet-600" },
    { name: "APIs RESTful", color: "bg-sky-500" },

    // methodologies
    { name: "Scrum", color: "bg-amber-500" },
  ],
  en: [
    // langs + frameworks
    { name: "Java", color: "bg-stone-700" },
    { name: "Kotlin", color: "bg-stone-500" },
    { name: "Python", color: "bg-stone-600" },
    { name: "Typescript", color: "bg-slate-500" },
    { name: "JPA", color: "bg-slate-600" },
    { name: "Maven", color: "bg-stone-600" },
    { name: "Spring Boot", color: "bg-emerald-700" },
    { name: "Spring Data", color: "bg-emerald-600" },
    { name: "Spring Webflux", color: "bg-emerald-500" },
    { name: "Spring Cloud", color: "bg-teal-500" },
    { name: "NextJS", color: "bg-neutral-800" },
    { name: "Angular", color: "bg-rose-600" },

    // test
    { name: "JUnit", color: "bg-amber-500" },
    { name: "Spock", color: "bg-violet-500" },
    { name: "Mockito", color: "bg-indigo-500" },

    // devops
    { name: "AWS", color: "bg-orange-500" },
    { name: "Docker", color: "bg-sky-500" },
    { name: "PostgreSQL", color: "bg-indigo-600" },
    { name: "MongoDB", color: "bg-emerald-500" },
    { name: "Git", color: "bg-rose-500" },
    { name: "Splunk", color: "bg-yellow-500" },
    { name: "Rancher", color: "bg-blue-500" },

    // arch + design
    { name: "Microservices", color: "bg-stone-500" },
    { name: "Clean Architecture", color: "bg-slate-500" },
    { name: "Hexagonal Architecture", color: "bg-teal-500" },
    { name: "Event-Driven Architecture", color: "bg-cyan-600" },
    { name: "Domain Driven Design (DDD)", color: "bg-violet-600" },
    { name: "RESTful APIs", color: "bg-sky-500" },

    // methodologies
    { name: "Scrum", color: "bg-amber-500" },
  ]
} as const;

export function getTechs(locale: 'pt' | 'en'): Tech[] {
  return [...techsData[locale]];
}

export default techsData;
