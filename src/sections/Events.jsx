import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";

const Events = () => {
  // Import context/state 
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  
  const buttonData = [
    { ar: "كتيب فعاليات العيد", en: "Eid Events Booklet" },
    { ar: "بطاقات المعايدة", en: "Greetings Cards" },
    { ar: "مطبوعات المنازل", en: "House Decorations" },
    { ar: "مطبوعات الشركات", en: "Companies Decorations" },
  ];

  // Variable to store style
  const commonClasses =
    "font-bold rounded-3xl px-6 text-[1.09rem] w-[16rem] h-[3.2rem] transition duration-300";

  return (
    <div className=" flex flex-col items-center  gap-5 px-28 py-4 pt-64 mb-64">
      <div className="text-[1.875rem] font-light w-1/3 py-[3.125rem] self-center text-center  ">
        {language === "ar"
          ? `بعد الكشخة يبدأ وقت التكبيرات وصلاة العيد وأجوائها الحلوة .. نسلم ونعايد وبعدين نلحق على جمعة العائلة`
          : `Now that we’re ready in our new Eid outfits, it’s time for Takbeer or Eid prayers. Let’s revel in this beautiful moment. Later, let’s join the family gathering and exchange warm greetings with loved ones.`}
      </div>
      <div className="flex flex-row justify-center gap-5 py-[3.75rem]">
        {buttonData.map((button, index) => (
          <button
            key={index}
            className={`${commonClasses} ${
              theme === "light"
                ? "bg-[#8a59c8] text-white hover:bg-[#f5c547]"
                : "bg-[#f5c547] text-[#514f53] hover:bg-white"
            }`}
          >
            {language === "ar" ? button.ar : button.en}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Events;
