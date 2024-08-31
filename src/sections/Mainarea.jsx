import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../context";
import { eidarabdark, eidarablight, eidengdark, eidenglight } from "../assets";

const Mainarea = () => {
  // Import context/state
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Button style variable
  const buttonClass = `font-bold rounded-3xl px-6 text-[1.125rem] w-[18rem] h-[3.2rem] transition duration-300 ${
    theme === "light"
      ? "bg-[#8a59c8] text-white hover:bg-[#f5c547]"
      : "bg-[#f5c547] text-[#514f53] hover:bg-white"
  }`;

  return (
    <div className="flex flex-col items-center text-[1.875rem] gap-5 px-28 py-4 mt-64">
      <div className=" font-light w-[26.525rem] py-[13.3rem] self-center text-center">
        {language === "ar"
          ? `وبعد التهاني والمعايدات يجي الوقت اللي يكون فيه الصّغار اغنى من أهلهم ويجمعون فيه العيديات ويتسابقون مين يجمّع أكثر`
          : `After that much-needed family time, it’s the kids’ favourite part, Eideyah! Time for them to engage in friendly banter as to who received the most.`}
      </div>

      <div>
        <div className=" font-light  self-center text-center">
          <div className="flex flex-row gap-5 justify-center">
            {language === "ar" ? (
              <>
                <img
                  src={eidarablight}
                  alt="Eid Mubarak"
                  className="h-[19rem] rounded-xl border-2 border-[#902cf5]"
                />
                <img
                  src={eidarabdark}
                  alt="Eid Mubarak"
                  className="h-[19rem] rounded-xl border-2 border-[#f5c547] "
                />
              </>
            ) : (
              <>
                <img
                  src={eidenglight}
                  alt="Eid Mubarak"
                  className="h-[19rem] rounded-xl border-2 border-[#902cf5]"
                />
                <img
                  src={eidengdark}
                  alt="Eid Mubarak"
                  className="h-[19rem] rounded-xl border-2 border-[#f5c547]"
                />
              </>
            )}
          </div>

          <span
            className={`flex flex-col text-[32px] font-bold mt-[90px] ${
              theme === "light" ? "text-[#eb436f]" : "text-[#87ec6c]"
            }`}
          >
            {language === "ar" ? `بطاقات المعايدة` : `Greeting Cards`}
          </span>
          <span className="mt-4 mb-12 ">
            {language === "ar"
              ? `حمّل بطاقات المعايدة لتشاركها مع أهلك وناسك`
              : `To share with your loved ones!`}
          </span>
          <div className="flex flex-row mt-4 gap-4">
            <button className={buttonClass}>
              {language === "ar" ? `اكتشف فعاليات العيد` : `Your Greeting`}
            </button>
            <button className={buttonClass}>
              {language === "ar" ? `اكتشف فعاليات العيد` : `Create your own`}
            </button>
          </div>
        </div>
      </div>

      <div className=" font-light w-1/3 py-[9.37rem] self-center text-center">
        {language === "ar"
          ? `يجي وقت الغداء مع الأهل… بس مو الكل موجود! ناس بدت عندهم غيبوبة العيد والباقيين بيلحقونهم في الليل`
          : `Next up, a treat for the eyes and a feast for the belly, it’s ‘Eid lunch’ with family. Although we might be missing a few due to food coma, there’s plenty of room for laughter and fun.`}
      </div>

      <div className="w-[31rem] font-light  py-[9.37rem] self-center text-center">
        <div className=" font-light self-center text-center">
          {language === "ar"
            ? `بعد غيبوبة العيد يتجدد الحماس وين نروح وش نسوي؟ وهنا يجي دور فعاليّات العيد`
            : `After we emerge from our Eid coma, everyone’s excited about Eid outings. Where do we go? What adventures can await? Don’t worry, we have you covered, with Eid events.`}
        </div>

        <button
          className={`font-bold rounded-3xl px-6 text-[1.125rem] w-full h-[3.2rem] transition duration-300 
    ${
      theme === "light"
        ? "bg-[#8a59c8] text-white hover:bg-[#f5c547]"
        : "bg-[#f5c547] text-[#514f53] hover:bg-white"
    }`}
        >
          {language === "ar"
            ? `اكتشف فعاليات العيد `
            : `Discover our Eid Events`}
        </button>
      </div>
    </div>
  );
};

export default Mainarea;
