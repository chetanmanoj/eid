import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";
import { mainlogo, footerg, footero, footerp } from "../assets";
import { motion, useTransform, useScroll } from "framer-motion";

const Footer = () => {
  // Import context/state
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);

  // Variables for animation of certain elements
  const { scrollY } = useScroll();
  const movePinky = useTransform(scrollY, [5200, 5300], [0, -50]);
  const moveGreeny = useTransform(scrollY, [5200, 5300], [0, -50]);

  return (
    <div className="flex flex-col py-10 overflow-hidden max-w-screen">
      {/* REPLAY BUTTON / RESET WINDOW POSITION  */}
      <div className="flex flex-col items-center h-[10rem]">
       <button
        onClick={() => window.scrollTo(0, 0)}
        className={`font-bold rounded-3xl px-6 text-[1.125rem] w-[16.25rem] h-[3.2rem] transition duration-300 
     ${
       theme === "light"
         ? "bg-[#8a59c8] text-white hover:bg-[#f5c547]"
         : "bg-[#f5c547] text-[#514f53] hover:bg-white"
     }`}
      >
        {language === "ar" ? "عيد الرحلة من جديد" : `Replay The Journey`}
      </button>
      </div>
      {/* EVENT AND GROUP LOGOS  */}
      <div className="flex flex-row justify-center items-center mb-[12.3rem] h-[4.375rem]">
        <span
          className={`border-r-[1px]  text-center text-[3rem] px-6 ${
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
      {/* BOTTOM DECOR  */}
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
