import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";

const Events = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    
      <div className=" flex flex-col items-center  gap-5 px-28 py-4">
        <div className="text-[1.5rem] font-light w-1/3 self-center text-center  ">
          {language === "en"
            ? `بعد الكشخة يبدأ وقت التكبيرات وصلاة العيد وأجوائها الحلوة .. نسلم ونعايد وبعدين نلحق على جمعة العائلة`
            : `Now that we’re ready in our new Eid outfits, it’s time for Takbeer or Eid prayers. Let’s revel in this beautiful moment. Later, let’s join the family gathering and exchange warm greetings with loved ones.`}
        </div>
        <div className="flex flex-row justify-center gap-5">
          <button className="bg-[#8a59c8] text-white font-bold rounded-3xl px-6 text-[1.09rem] w-[16rem] h-[3.2rem] hover:bg-[#f5c547] transition duration-300">
            {language === "en" ? `كتيب فعاليات العيد` : `Eid Events Booklet`}
          </button>
          <button className="bg-[#8a59c8] text-white font-bold rounded-3xl px-6 text-[1.09rem] w-[16rem] h-[3.2rem] hover:bg-[#f5c547] transition duration-300">
            {language === "en" ? `بطاقات المعايدة` : `Greetings Cards`}
          </button>
          <button className="bg-[#8a59c8] text-white font-bold rounded-3xl px-6 text-[1.09rem] w-[16rem] h-[3.2rem] hover:bg-[#f5c547] transition duration-300">
            {language === "en" ? `مطبوعات المنازل` : `House Decorations`}
          </button>
          <button className="bg-[#8a59c8] text-white font-bold rounded-3xl px-6 text-[1.09rem] w-[16rem] h-[3.2rem] hover:bg-[#f5c547] transition duration-300">
            {language === "en" ? `مطبوعات الشركات` : `Companies Decorations`}
          </button>
        
      </div>
    </div>
  );
};

export default Events;
