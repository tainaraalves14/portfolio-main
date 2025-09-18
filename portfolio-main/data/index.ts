export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projeto", link: "#projects" },
  { name: "Recomendações", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo ​​a colaboração com o cliente, promovendo uma comunicação aberta ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Apaixonado por UX e performance",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha stack ",
    description: "Eu tento melhorar constantemente",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Focado em experiência do usuário e impacto real",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente focada em desenvolvimento de software escalável",
    description: "Informação privilegiada",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Você quer começar um projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ayxi - Plataforma no-code",
    des: "Ayxi é uma plataforma sem código que permite aos usuários criar e gerenciar aplicativos da web sem escrever código.",
    img: "/b10.png",
    iconLists: ["/charp.png", "/re.svg"],
    link: "/",
  },
  {
    id: 2,
    title: "Lira - AI SaaS App",
    des: "plataforma empresarial de gráficos e dashboards interativos, que ajuda empresas a analisar KPIs, monitorar operações e gerar relatórios inteligentes.",
    img: "/b11.png",
    iconLists: ["/next.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "Aion - AI SaaS App",
    des: "Aion é um aplicativo SaaS com tecnologia de IA que utiliza algoritmos avançados de aprendizado de máquina para fornecer soluções personalizadas para empresas.",
    img: "/12.png",
    iconLists: ["/re.svg"],
    link: "/",
  },
  {
    id: 4,
    title: "CelestiumAI",
    des:" CelestiumAI é uma plataforma de IA que oferece soluções inovadoras para empresas, impulsionando a eficiência e a tomada de decisões.",
    img: "/13.png",
    iconLists: ["/charp.png" ],
   link: "/",
  },
];

export const testimonials = [
  {
    quote:
   "Não trabalhei com a Tainara profissionalmente, mas nos conhecíamos academicamente e fiquei feliz por ter a oportunidade de conhecê-la. Desde o primeiro ano, fiquei impressionado ao vê-la conduzir sua Iniciação Científica, demonstrando paixão e dedicação à tecnologia. Ela é uma pessoa incrível, com integridade, excelentes habilidades de comunicação e sólido conhecimento técnico. Ela está sempre aprendendo, fazendo perguntas construtivas e disposta a ajudar as pessoas ao seu redor. Recomendo fortemente a Tainara para qualquer oportunidade na área de tecnologia.",    name: "Gisler Ferrarezi",
    title: "Young Apprentice | Computer Science Student | Unisagrado",
  },
  {
     quote:
   "Extremamente profissional, sempre buscando entender o problema profundamente e encontrar soluções duradouras. Ela aborda cada projeto com muita seriedade, responsabilizando-se e responsabilizando os outros, sempre buscando entregar os melhores resultados possíveis. Ela tem tudo o que se espera de uma desenvolvedora: faz o que faz porque ama, e faz bem.",    name: "Felipe Bello Grigolato",
    title: "Software Engineering | UNISAGRADO",
   
  },
  {
    quote:
   "Desde que conheci a Tainara, durante nossos estudos, ela sempre foi determinada e focada em seus objetivos, muito criativa e persistente. Ela sempre pensa fora da caixa e encara os desafios de frente. Ter alguém como ela em uma equipe é um grande trunfo.",    name: "João Pedro Maria",
    title: "Data Analyst and Developer",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Estagiária de Engenharia Frontend",
    desc: "Auxiliei no desenvolvimento de interfaces web utilizando React.js, com foco em interatividade e usabilidade.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desenvolvedora Backend",
    desc: "Implementei APIs RESTful e realizei integrações com serviços externos, garantindo escalabilidade e segurança.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Desenvolvedora Frontend Líder",
    desc: "Desenvolvi e mantive funcionalidades voltadas ao usuário utilizando tecnologias modernas de frontend.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Arquiteta de Software",
    desc: "Projetei a arquitetura de sistemas, defini padrões de código e gerenciei a integração entre backend, banco de dados e serviços.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
