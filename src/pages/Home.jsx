import { useContext } from "react";
import { LanguageContext } from "../context";

import { Header } from "../components"
import { Hero, Events, Main } from "../sections"


const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className={`${language === 'en' ? 'font-arabic' : 'font-english'}`}>
        <Header/>
        <Hero/>
        <Events/>
        <Main/>
    </div>
  )
}

export default Home