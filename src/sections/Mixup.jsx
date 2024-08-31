import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";
import { motion, useTransform, useScroll } from "framer-motion";

import {
  bigeidengdark,
  bigeidenglight,
  bigeidarablight,
  bigeidarabdark,
} from "../assets";

const Mixup = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const { scrollY } = useScroll();
  const scaleEid = useTransform(scrollY, [4200, 4800], [1, 0.6]);
  const rotateEid = useTransform(scrollY, [4200, 4800], [0, 25]);
  const moveEidx = useTransform(scrollY, [4200, 4800], [0, 300]);
  const moveEidy = useTransform(scrollY, [4200, 4800], [0, 300]);

  const getImageSrc = () => {
    if (theme === "light" && language === "en") return bigeidenglight;
    if (theme === "dark" && language === "en") return bigeidengdark;
    if (theme === "light" && language === "ar") return bigeidarablight;
    if (theme === "dark" && language === "ar") return bigeidarabdark;
    return null;
  };

  const imageSrc = getImageSrc();

  window.addEventListener("scroll", () => {
    console.log("Scroll Position:", window.scrollY + "px");
  });
  return (
    <div className="flex flex-col h-[50rem]">
      <div className="relative flex justify-center">
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt="Eid Mubarak Big"
            className="absolute h-[19rem]"
            style={{
              x: moveEidx,
              y: moveEidy,
              scale: scaleEid,
              rotate: rotateEid,
            }}
          />
        )}
      </div>
     
    </div>
  );
};

export default Mixup;
