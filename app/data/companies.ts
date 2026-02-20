export interface Company {
  id: number;
  name: string;
  url: string;
  achievements: readonly string[];
  externalUrl: string;
  logo?: {
    light: string;
    dark: string;
  };
}

const companiesData = {
  pt: [
    {
      id: 6,
      name: "Itaú via BRQ",
      url: "/project-details#brq",
      logo: {
        light: "/logos/brq-light.png",
        dark: "/logos/brq-dark.png"
      },
      achievements: [
        "Atuou como feature lead no desenvolvimento de funcionalidades estratégicas, incluindo cashback de boletos e automação de benefícios, em uma plataforma com mais de 300 mil clientes ativos.",
        "Liderou integrações orientadas a eventos com Kafka e definiu uma abordagem tecnológica agnóstica, reduzindo o acoplamento e facilitando a evolução do ecossistema.",
        "Influenciou decisões arquiteturais, incluindo a migração de um motor de regras (BRE) para Amazon RDS, e conduziu entregas de ponta a ponta até produção em duas squads.",
        "Elevou o throughput do processamento de benefícios em mais de 10x (10h → 1h) e promoveu melhorias de qualidade técnica com DDD, code reviews e adoção de recursos modernos do Java."
      ],
      externalUrl: "https://www.brq.com/en/home/"
    },
    {
      id: 5,
      name: "Merx",
      url: "/project-details#merx",
      logo: {
        light: "/logos/merx-light.png",
        dark: "/logos/merx-dark.png"
      },
      achievements: [
        "Elevou a cobertura de testes de microsserviços Java de 5% para mais de 55% por meio de testes com JUnit e Spock trazendo mais segurança na implementação de novas features.",
        "Refatorou todo o sistema CRM, introduzindo novas tecnologias e melhorando as funcionalidades de back-end, com processamento assíncrono usando AWS (SQS, SNS, S3 e Lambdas).",
        "Desenvolveu um algoritmo genérico e agnóstico para gerar arquivos CSV a partir de qualquer lista em qualquer banco de dados."
      ],
      externalUrl: "https://www.merxagri.com/index.html#app"
    },
    {
      id: 4,
      name: "Avenue Code",
      url: "/project-details#avenuecode",
      logo: {
        light: "/logos/avenuecode-light.png",
        dark: "/logos/avenuecode-dark.png"
      },
      achievements: [
        "Projetou e desenvolveu um recurso de alternância usando feature-toggle togglz (Java + SpringBoot), simplificando o gerenciamento de mensagens do cliente.",
        "Integrou com sucesso 3 microsserviços SpringBoot que se comunicam com um banco de dados PostgreSQL, um BFF e dependências externas usando SpringCloud e OpenFeign com parceiros líderes do seu setor.",
        "Conduziu uma sessão de transferência de conhecimento por meio de chamadas de vídeo e documentação no Confluence, facilitando as transições de processo dentro da equipe."
      ],
      externalUrl: "https://www.avenuecode.com/"
    },
    {
      id: 3,
      name: "Dock",
      url: "/project-details#dock",
      logo: {
        light: "/logos/dock-light.png",
        dark: "/logos/dock-dark.png"
      },
      achievements: [
        "Desenvolveu um aplicativo agendado e reativo utilizando Spring Scheduled e Spring Webflux que bloqueia mais de 1.000 cartões comprometidos diariamente.",
        "Orientou e ajudou uma equipe de 3 estagiários, contribuindo para a transição bem-sucedida deles para funções permanentes.",
        "Forneceu manutenção, correção de bugs e desenvolvimento de recursos para grandes bancos, varejistas e fintechs usando Spring Webflux, AWS, Kafka e outras tecnologias."
      ],
      externalUrl: "https://dock.tech/solucao/fraud-prevention/"
    },
    {
      id: 2,
      name: "Porto",
      url: "/project-details#porto",
      logo: {
        light: "/logos/porto-light.png",
        dark: "/logos/porto-dark.png"
      },
      achievements: [
        "Atuei na análise de sistemas Java legados, realizando o versionamento e a publicação por meio da plataforma IBM RTC.",
        "Conduzi o monitoramento de APIs REST, identificando e solucionando problemas em produção em colaboração com parceiros externos.",
        "Liderei a migração de mais de 20 projetos da plataforma IBM RTC para o GitLab, garantindo a transição eficiente e segura dos repositórios."
      ],
      externalUrl: "https://www.portoseguro.com.br/bank"
    },
    {
      id: 1,
      name: "KAV",
      url: "/project-details#kav",
      logo: {
        light: "/logos/kav-light.png",
        dark: "/logos/kav-dark.png"
      },
      achievements: [
        "Contribuí para o desenvolvimento de projetos, incluindo um ERP mobile multiplataforma e um aplicativo de delivery, utilizando tecnologias como Angular, Ionic, PHP e Spring Boot.",
        "Atuei na implementação de uma solução inovadora de engenharia de dados na Porto Seguro, empregando Python e PySpark, com integração da inteligência artificial da Brighterion para análise de risco de crédito.",
        "Participei da migração de uma base de dados Oracle, realizando o remodelamento da estrutura utilizando PowerDesign."
      ],
      externalUrl: "https://www.kav-sistemas.com.br/"
    }
  ],
  en: [
    {
      id: 6,
      name: "Itaú via BRQ",
      url: "/project-details#brq",
      logo: {
        light: "/logos/brq-light.png",
        dark: "/logos/brq-dark.png"
      },
      achievements: [
        "Acted as feature lead in developing strategic features, including bill cashback and benefits automation, on a platform with over 300,000 active customers.",
        "Led event-driven integrations with Kafka and defined a technology-agnostic approach, reducing coupling and facilitating ecosystem evolution.",
        "Influenced architectural decisions, including migrating a business rules engine (BRE) to Amazon RDS, and conducted end-to-end deliveries to production across two squads.",
        "Increased benefits processing throughput by more than 10x (10h → 1h) and promoted technical quality improvements with DDD, code reviews, and adoption of modern Java features."
      ],
      externalUrl: "https://www.brq.com/en/home/"
    },
    {
      id: 5,
      name: "Merx",
      url: "/project-details#merx",
      logo: {
        light: "/logos/merx-light.png",
        dark: "/logos/merx-dark.png"
      },
      achievements: [
        "Increased Java microservices test coverage from 5% to over 55% through testing with JUnit and Spock, bringing more security to new feature implementation.",
        "Refactored the entire CRM system, introducing new technologies and improving back-end functionalities with asynchronous processing using AWS (SQS, SNS, S3, and Lambdas).",
        "Developed a generic and agnostic algorithm to generate CSV files from any list in any database."
      ],
      externalUrl: "https://www.merxagri.com/index.html#app"
    },
    {
      id: 4,
      name: "Avenue Code",
      url: "/project-details#avenuecode",
      logo: {
        light: "/logos/avenuecode-light.png",
        dark: "/logos/avenuecode-dark.png"
      },
      achievements: [
        "Designed and developed a toggle feature using feature-toggle togglz (Java + SpringBoot), simplifying client message management.",
        "Successfully integrated 3 SpringBoot microservices that communicate with a PostgreSQL database, a BFF, and external dependencies using SpringCloud and OpenFeign with industry-leading partners.",
        "Conducted a knowledge transfer session through video calls and Confluence documentation, facilitating process transitions within the team."
      ],
      externalUrl: "https://www.avenuecode.com/"
    },
    {
      id: 3,
      name: "Dock",
      url: "/project-details#dock",
      logo: {
        light: "/logos/dock-light.png",
        dark: "/logos/dock-dark.png"
      },
      achievements: [
        "Developed a scheduled and reactive application using Spring Scheduled and Spring Webflux that blocks over 1,000 compromised cards daily.",
        "Guided and helped a team of 3 interns, contributing to their successful transition to permanent roles.",
        "Provided maintenance, bug fixes, and feature development for major banks, retailers, and fintechs using Spring Webflux, AWS, Kafka, and other technologies."
      ],
      externalUrl: "https://dock.tech/solucao/fraud-prevention/"
    },
    {
      id: 2,
      name: "Porto",
      url: "/project-details#porto",
      logo: {
        light: "/logos/porto-light.png",
        dark: "/logos/porto-dark.png"
      },
      achievements: [
        "Worked on analyzing legacy Java systems, performing versioning and publishing through the IBM RTC platform.",
        "Conducted REST API monitoring, identifying and solving production issues in collaboration with external partners.",
        "Led the migration of over 20 projects from the IBM RTC platform to GitLab, ensuring efficient and secure repository transition."
      ],
      externalUrl: "https://www.portoseguro.com.br/bank"
    },
    {
      id: 1,
      name: "KAV",
      url: "/project-details#kav",
      logo: {
        light: "/logos/kav-light.png",
        dark: "/logos/kav-dark.png"
      },
      achievements: [
        "Contributed to project development, including a cross-platform mobile ERP and a delivery application, using technologies such as Angular, Ionic, PHP, and Spring Boot.",
        "Worked on implementing an innovative data engineering solution at Porto Seguro, using Python and PySpark, with integration of Brighterion's artificial intelligence for credit risk analysis.",
        "Participated in migrating an Oracle database, performing structural remodeling using PowerDesign."
      ],
      externalUrl: "https://www.kav-sistemas.com.br/"
    }
  ]
} as const;

export function getCompanies(locale: 'pt' | 'en'): Company[] {
  return [...companiesData[locale]];
}

export default companiesData;
