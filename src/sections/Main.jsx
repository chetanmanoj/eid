import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center gap-5 px-28 py-4">
      <div className="text-[1.5rem] font-light w-1/3 self-center text-center">
        {language === "en"
          ? `وبعد التهاني والمعايدات يجي الوقت اللي يكون فيه الصّغار اغنى من أهلهم ويجمعون فيه العيديات ويتسابقون مين يجمّع أكثر`
          : `After that much-needed family time, it’s the kids’ favourite part, Eideyah! Time for them to engage in friendly banter as to who received the most.`}
      </div>

      <div className="text-[1.5rem] font-light w-1/3 self-center text-center">
        {language === "en"
          ? `يجي وقت الغداء مع الأهل… بس مو الكل موجود! ناس بدت عندهم غيبوبة العيد والباقيين بيلحقونهم في الليل`
          : `Next up, a treat for the eyes and a feast for the belly, it’s ‘Eid lunch’ with family. Although we might be missing a few due to food coma, there’s plenty of room for laughter and fun.`}
      </div>

      <div className="text-[1.5rem] font-light w-1/3 self-center text-center">
        {language === "en"
          ? `بعد غيبوبة العيد يتجدد الحماس وين نروح وش نسوي؟ وهنا يجي دور فعاليّات العيد`
          : `After we emerge from our Eid coma, everyone’s excited about Eid outings. Where do we go? What adventures can await? Don’t worry, we have you covered, with Eid events.`}
      </div>

      <button className="bg-[#8a59c8] text-white font-bold rounded-3xl px-6 text-[1.125rem] w-[10.5rem] h-[2.6rem] hover:bg-[#f5c547] transition duration-300">
        {language === "en" ? `هوية العيد` : `Eid Identity`}
      </button>
    </div>
  );
};

export default Main;
