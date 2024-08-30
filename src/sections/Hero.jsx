import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";
import { motion, useTransform, useScroll } from "framer-motion";

import {
  eiddark1,
  eiddark2,
  eidlight1,
  eidlight2,
  mainjug,
  flag1,
  flag2,
} from "../assets";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const { scrollY } = useScroll();
  const scaleEid = useTransform(scrollY, [0, 500], [1, 1.1]);
  const moveJugx = useTransform(scrollY, [0, 500], [0, -400]);
  const moveJugy = useTransform(scrollY, [0, 500], [0, -150]);
  const moveFlagy = useTransform(scrollY, [0, 900], [0, -250]);

  const getImageSrc = () => {
    if (theme === "light" && language === "en") return eidlight2;
    if (theme === "dark" && language === "en") return eiddark2;
    if (theme === "light" && language === "ar") return eidlight1;
    if (theme === "dark" && language === "ar") return eiddark1;
    return null;
  };

  const imageSrc = getImageSrc();

  return (
    <div className=" flex flex-col items-center  gap-5 py-4 mb-64  ">
      <motion.div style={{ scale: scaleEid }} className="p-4">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Eid Mubarak"
            className="h-[11rem]"
          />
        )}
      </motion.div>
      <motion.img
          src={mainjug}
          alt="Main Jug"
          className="absolute h-[20rem] left-[30rem] object-cover"
          style={{ x: moveJugx,
            y: moveJugy

           }}
        />
        <img src={flag1} alt="Flag1" className="absolute -bottom-40  w-full"/>
        <motion.img src={flag2} alt="Flag2" className="absolute w-full -bottom-[18rem]" style={{y:moveFlagy}}/>
      <div className="text-[1.875rem] font-light w-[26.125rem] mt-[30rem] self-center text-center  ">
        {language === "ar"
          ? `هلا هلا بالعيد اللي لنا سنة نستناه ما ننسى البخور ولبس العيد اللي مجهزينه وننتظر اليوم اللي نلبسه`
          : `After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the incense smells, the outfits and the delicious food? But first, let’s get Eid-ready with our outfits.`}
      </div>
      <button
        className={`font-bold rounded-3xl px-6 text-[1.125rem] w-[10.5rem] h-[2.6rem] transition duration-300 
    ${
      theme === "light"
        ? "bg-[#8a59c8] text-white hover:bg-[#f5c547]"
        : "bg-[#f5c547] text-[#514f53] hover:bg-white"
    }`}
      >
        {language === "ar" ? `هوية العيد` : `Eid Identity`}
      </button>
      
    </div>
  );
};

export default Hero;
