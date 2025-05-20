"use client";
import Image from "next/image";
import {motion} from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <Image
            className="max-h-screen object-cover object-bottom brightness-75 "
            width={2000}
            height={1335}
            src={"/img/hero.jpg"}
            alt="foto de los picos nevados"
          />
        </div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1/2 left-1/3 flex flex-col items-center justify-center text-center"
        >
          <h1 className=" text-white text-7xl font-bold -translate-x-1/2 -translate-y-1/2">
            Bienvenido a la montaña
          </h1>
          <p className=" text-white text-xl font-bold -translate-x-1/2 -translate-y-1/2">
            Disfruta de la naturaleza y la aventura
          </p>
        </motion.div>
      </div>
    </div>
  );
};
