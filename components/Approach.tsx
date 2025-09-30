"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// ======= Componente Principal =======
const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Minha <span className="text-purple">abordagem</span>
      </h1>

  <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
    {/* Etapa 1 */}
    <Card
      title="Planejamento e Estratégia"
      icon={<AceternityIcon order="Etapa 1" />}
      des="Colaboraremos para mapear os objetivos do seu site, o público-alvo
      e as principais funcionalidades. Discutiremos aspectos como a estrutura do site,
      navegação e requisitos de conteúdo."
    >
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-[#B28AE2] rounded-3xl overflow-hidden"
      />
    </Card>

    {/* Etapa 2 */}
    <Card
      title="Atualização de Desenvolvimento e Progresso"
      icon={<AceternityIcon order="Etapa 2" />}
      des="Assim que concordamos com o plano, coloco minha playlist lo-fi e mergulho
      na codificação. Dos esboços iniciais ao código finalizado, mantenho você atualizado
      a cada passo do caminho."
    >
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-[#E3C4F0] rounded-3xl overflow-hidden"
        colors={[
          [194, 136, 226], // roxo mais rosa
          [255, 196, 240], // rosa claro
        ]}
        dotSize={2}
      />
    </Card>

    {/* Etapa 3 */}
    <Card
      title="Desenvolvimento e Lançamento"
      icon={<AceternityIcon order="Etapa 3" />}
      des="É aqui que a mágica acontece! Com base no design aprovado,
        traduzirei tudo em código funcional, construindo seu site
        do zero."
    >
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-[#C288E2] rounded-3xl overflow-hidden"
        colors={[
          [178, 138, 226], // roxo mais rosa suave
        ]}
      />
    </Card>
  </div>


    </section>
  );
};

export default Approach;

// ======= Card Component =======
interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex items-center justify-center
      max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Ícones decorativos */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      {/* Hover animation */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo do card */}
      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>

        <h2 className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

// ======= AceternityIcon Component =======
interface AceternityIconProps {
  order: string;
}

const AceternityIcon: React.FC<AceternityIconProps> = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

// ======= Ícone decorativo =======
interface IconProps extends React.SVGProps<SVGSVGElement> {}
export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
