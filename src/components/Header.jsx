import { useContext } from "react";
import { ThemeContext, AudioContext, LanguageContext } from "../context";

import { mainlogo, header1, header2 } from "../assets";

const Header = () => {
  // Import context/states
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);
  const { audio, toggleAudio } = useContext(AudioContext);
  return (
    <div className="flex flex-col py-10 overflow-hidden h-[22rem] max-w-screen">
      <div className="flex flex-row px-14 justify-between z-20 ">
        <div className="flex flex-row gap-5">
          <button
            onClick={() => switchLanguage(language === "en" ? "ar" : "en")}
            className="text-[#902cf5] font-bold rounded-3xl border-[1px] bg-white text-[14px] border-[#902cf5] w-[5.313rem] h-[2.18rem]"
          >
            {language === "en" ?  "عربي" : "English"}
          </button>
          <button
            onClick={() => toggleAudio()}
            className="text-[#902cf5] font-bold rounded-3xl border-[1px] bg-white text-[14px] border-[#902cf5] w-[5.313rem] h-[2.18rem]"
          >
            {audio === true ? "Mute" : "Unmute"}
          </button>
        </div>
        <div className="">
          <img src={mainlogo} alt="Logo" className="h-32" />
        </div>
        <div className="">
          <button
            onClick={toggleTheme}
            className="text-[#902cf5] font-bold rounded-3xl border-[1px] bg-white text-[14px] border-[#902cf5] w-[5.313rem] h-[2.18rem]"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
      <div className="relative z-10">
        <img
          src={header1}
          alt="header1"
          className="absolute  -bottom-28 -left-[28rem]"
        />
        <img
          src={header2}
          alt="header2"
          className="absolute -top-[3rem]  -right-[43rem]"
        />
      </div>
    </div>
  );
};

export default Header;
