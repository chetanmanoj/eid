import { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext, ThemeContext, AudioContext } from "../context";

import { Header, Footer } from "../components";
import { Hero, Hero2, Events, Mainarea, Final, Mixup } from "../sections";
import { birds, crowd, adhan, eidmain } from "../assets";

const sections = [
  { id: "heroUp", audioSrc: birds },
  { id: "heroDown", audioSrc: crowd },
  { id: "events", audioSrc: adhan },
];

const defaultAudio = eidmain;

const Home = () => {
  const [active, setActive] = useState("");

  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { audio } = useContext(AudioContext);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const currentActive = sections.find((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const top = sectionElement.offsetTop - offset;
          const bottom = top + sectionElement.clientHeight;
          return window.scrollY >= top && window.scrollY < bottom;
        }
        return false;
      });

      if (currentActive) {
        if (active !== currentActive.id) {
          setActive(currentActive.id);
        }
      } else if (active !== "default") {
        setActive("default");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  useEffect(() => {
    if (audio) {
      if (active === "default") {
        audioRef.current.src = defaultAudio;
      } else {
        const section = sections.find((sec) => sec.id === active);
        if (section) {
          audioRef.current.src = section.audioSrc;
        }
      }
      audioRef.current.loop = true;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [active, audio]);

  return (
    <div
      className={`${language === "ar" ? "font-arabic" : "font-english"} ${
        theme === "light" ? "bg-white text-black" : "bg-[#8957c6] text-white"
      }`}
    >
      <Header />
      <div id="heroUp">
        <Hero />
      </div>
      <div id="heroDown">
        <Hero2 />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="final">
        <Mainarea />
        <Final />
        <Mixup />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
