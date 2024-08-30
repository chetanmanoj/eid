import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../context";

import { Header } from "../components";
import { Hero, Events, Main } from "../sections";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${language === "ar" ? "font-arabic" : "font-english"} ${theme === "light" ? "bg-white text-black" : "bg-[#8957c6] text-white"}`}>
      <Header />
      <Hero />
      <Events />
      <Main />
    </div>
  );
};

export default Home;
