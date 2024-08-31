import { useContext } from "react";
import { ThemeContext, AudioContext, LanguageContext } from "../context";
import { mainlogo, footerg, footero, footerp } from "../assets";
import { motion, useTransform, useScroll } from "framer-motion";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);
  const { scrollY } = useScroll();
  const movePinky = useTransform(scrollY, [4260, 4400], [0, -250]);
  const moveGreeny = useTransform(scrollY, [4260, 4400], [0, -250]);

  return (
    <div className="flex flex-col py-10 overflow-hidden max-w-screen">
      <div className="flex flex-row justify-center items-center mb-[12.3rem] h-[4.375rem]">
        <span
          className={`border-r-[1px] h-32 text-center text-[4rem] ${
            theme === "light" ? "border-[#8a59c8]" : "border-white"
          }`}
        >
          EID <br />
          EVENTS
        </span>
        <img
          src={mainlogo}
          className={`h-32 border-l-[1px] ${
            theme === "light" ? "border-[#8a59c8]" : "border-white"
          }`}
        />
      </div>
      <div className=" relative h-[18.75rem]">
        <motion.img
          src={footerg}
          alt="Footer 1"
          className="absolute"
          style={{ y: moveGreeny }}
        />
        <img src={footero} alt="Footer 2" className="absolute  -left-[20rem]" />
        <motion.img
          src={footerp}
          alt="Footer 3"
          className="absolute -right-[27rem]"
          style={{ y: movePinky }}
        />
      </div>
    </div>
  );
};

export default Footer;
