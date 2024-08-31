import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";

const Hero2 = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center gap-5 mb-64">
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

export default Hero2;
