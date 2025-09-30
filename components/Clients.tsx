"use client";

import React from "react";
import dynamic from "next/dynamic";

import {testimonials } from "@/data";

// Carregar InfiniteMovingCards somente no cliente
const InfiniteMovingCards = dynamic(
  () => import("./ui/InfiniteCards").then((mod) => mod.InfiniteMovingCards),
  { ssr: false }
);

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        O Que Dizem
        <span className="text-purple"> Sobre Mim</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col 
          antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

      
      </div>
    </section>
  );
};

export default Clients;
