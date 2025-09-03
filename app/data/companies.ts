export interface Company {
  id: number;
  name: string;
  url: string;
  description: string;
  externalUrl: string;
}

const companiesData = {
  pt: [
    {
      id: 1,
      name: "KAV",
      url: "/project-details#kav",
      description: `
        Contribuí para o desenvolvimento de projetos, incluindo um ERP mobile multiplataforma e um aplicativo de delivery, utilizando tecnologias como Angular, Ionic, PHP e Spring Boot. 
        Também atuei na implementação de uma solução inovadora de engenharia de dados na Porto Seguro, empregando Python e PySpark, com integração da inteligência artificial da Brighterion para análise de risco de crédito. 
        Além disso, participei da migração de uma base de dados Oracle, realizando o remodelamento da estrutura utilizando PowerDesign. 
      `,
      externalUrl: "https://www.kav-sistemas.com.br/"
    },
    {
      id: 2,
      name: "Porto",
      url: "/project-details#porto",
      description: `
        Atuei na análise de sistemas Java legados, realizando o versionamento e a publicação por meio da plataforma IBM RTC. 
        Conduzi o monitoramento de APIs REST, identificando e solucionando problemas em produção em colaboração com parceiros externos. 
        Além disso, liderei a migração de mais de 20 projetos da plataforma IBM RTC para o GitLab, garantindo a transição eficiente e segura dos repositórios.
      `,
      externalUrl: "https://www.portoseguro.com.br/bank"
    },
    {
      id: 3,
      name: "Dock",
      url: "/project-details#dock",
      description: `
        Contribuí para o desenvolvimento de uma aplicação agendada (scheduled app) capaz de bloquear mais de 1.000 cartões vazados diariamente, utilizando Spring Scheduled e Spring WebFlux para garantir alto desempenho e escalabilidade.
        Orientei e mentorei uma equipe de três estagiários, oferecendo suporte técnico e profissional que resultou na efetivação deles em cargos permanentes.
        Além disso, apoiei a equipe de riscos e fraudes, atuando em manutenções, correções de bugs e no desenvolvimento de novas funcionalidades para aprimorar a segurança e a eficiência dos sistemas.
      `,
      externalUrl: "https://dock.tech/solucao/fraud-prevention/"
    },
    {
      id: 4,
      name: "AvenueCode",
      url: "/project-details#avenuecode",
      description: `
        Desenvolvi um recurso de alternância (feature toggle) utilizando a biblioteca Togglz, simplificando o gerenciamento de mensagens dos clientes e aumentando a flexibilidade no controle de funcionalidades.
        Realizei a integração de três microserviços com os maiores clientes do setor de combustíveis, como parte de um projeto inovador para uma das maiores montadoras de automóveis do mundo.
        Conduzi uma sessão de transferência de conhecimento em inglês, facilitando a transmissão de informações técnicas e estratégicas para novas equipes, garantindo a continuidade e eficiência do projeto.
      `,
      externalUrl: "https://www.avenuecode.com/"
    },
    {
      id: 5,
      name: "Merx",
      url: "/project-details#merx",
      description: `
        Refatorei integralmente o sistema CRM, introduzindo novas tecnologias e aprimorando funcionalidades de back-end, como processamento assíncrono utilizando serviços da AWS (SQS, SNS, S3 e Lambdas).
        Aumentei significativamente a cobertura de testes em diversos microsserviços Java, elevando-a de 5% para mais de 50%, por meio da implementação de testes unitários com JUnit e Spock.
        Desenvolvi um algoritmo genérico e independente de plataforma para geração de arquivos CSV, capaz de processar dados de qualquer lista proveniente de qualquer banco de dados.
      `,
      externalUrl: "https://www.merxagri.com/index.html#app"
    },
    {
      id: 6,
      name: "BRQ",
      url: "/project-details#brq",
      description: `
        Utilizei uma arquitetura de microsserviços em Java e Spring, seguindo os princípios da arquitetura hexagonal.
        Promovi a qualidade do código ao incentivar e compartilhar boas práticas, como os princípios SOLID, DRY, KISS, YAGNI, Design Patterns e outros conceitos de Clean Code.
        Participei ativamente das decisões de arquitetura, desenvolvimento e implantação de um MVP voltado à gamificação de clientes PJ, implementado para o maior banco da América Latina.
      `,
      externalUrl: "https://www.brq.com/en/home/"
    }
  ],
  en: [
    {
      id: 1,
      name: "KAV",
      url: "/project-details#kav",
      description: `
        I contributed to project development, including a cross-platform mobile ERP and a delivery application, using technologies such as Angular, Ionic, PHP, and Spring Boot.
        I also worked on implementing an innovative data engineering solution at Porto Seguro, using Python and PySpark, with integration of Brighterion's artificial intelligence for credit risk analysis.
        Additionally, I participated in migrating an Oracle database, performing structural remodeling using PowerDesign.
      `,
      externalUrl: "https://www.kav-sistemas.com.br/"
    },
    {
      id: 2,
      name: "Porto",
      url: "/project-details#porto",
      description: `
        I worked on analyzing legacy Java systems, performing versioning and publishing through the IBM RTC platform.
        I conducted REST API monitoring, identifying and solving production issues in collaboration with external partners.
        Additionally, I led the migration of over 20 projects from the IBM RTC platform to GitLab, ensuring efficient and secure repository transition.
      `,
      externalUrl: "https://www.portoseguro.com.br/bank"
    },
    {
      id: 3,
      name: "Dock",
      url: "/project-details#dock",
      description: `
        I contributed to developing a scheduled application capable of blocking over 1,000 leaked cards daily, using Spring Scheduled and Spring WebFlux to ensure high performance and scalability.
        I guided and mentored a team of three interns, providing technical and professional support that resulted in their permanent hiring.
        Additionally, I supported the risk and fraud team, working on maintenance, bug fixes, and developing new features to improve system security and efficiency.
      `,
      externalUrl: "https://dock.tech/solucao/fraud-prevention/"
    },
    {
      id: 4,
      name: "AvenueCode",
      url: "/project-details#avenuecode",
      description: `
        I developed a feature toggle using the Togglz library, simplifying client message management and increasing flexibility in feature control.
        I integrated three microservices with major fuel industry clients, as part of an innovative project for one of the world's largest automotive manufacturers.
        I conducted a knowledge transfer session in English, facilitating the transmission of technical and strategic information to new teams, ensuring project continuity and efficiency.
      `,
      externalUrl: "https://www.avenuecode.com/"
    },
    {
      id: 5,
      name: "Merx",
      url: "/project-details#merx",
      description: `
        I completely refactored the CRM system, introducing new technologies and improving back-end functionalities, such as asynchronous processing using AWS services (SQS, SNS, S3, and Lambdas).
        I significantly increased test coverage across various Java microservices, raising it from 5% to over 50%, through implementing unit tests with JUnit and Spock.
        I developed a generic and platform-independent algorithm for CSV file generation, capable of processing data from any list from any database.
      `,
      externalUrl: "https://www.merxagri.com/index.html#app"
    },
    {
      id: 6,
      name: "BRQ",
      url: "/project-details#brq",
      description: `
        I used a Java and Spring microservices architecture, following hexagonal architecture principles.
        I promoted code quality by encouraging and sharing best practices, such as SOLID principles, DRY, KISS, YAGNI, Design Patterns, and other Clean Code concepts.
        I actively participated in architecture, development, and deployment decisions for an MVP focused on corporate client gamification, implemented for the largest bank in Latin America.
      `,
      externalUrl: "https://www.brq.com/en/home/"
    }
  ]
} as const;

export function getCompanies(locale: 'pt' | 'en'): Company[] {
  return [...companiesData[locale]];
}

export default companiesData;
