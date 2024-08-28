import { useContext } from 'react';
import { ThemeContext, LanguageContext } from '../context'; 

const Hero = () => {
    const { theme  } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
  return (
    
    <div className=' flex flex-col items-center  gap-5 px-28 py-4 '>
        <div className= 'text-[1.5rem] font-light w-1/3 self-center text-center  '>
        {language === 'en' ? `هلا هلا بالعيد اللي لنا سنة نستناه ما ننسى البخور ولبس العيد اللي مجهزينه وننتظر اليوم اللي نلبسه` : `After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the incense smells, the outfits and the delicious food? But first, let’s get Eid-ready with our outfits.`}
        </div>
        <button
            className="bg-[#8a59c8] text-white font-bold rounded-3xl px-6 text-[1.125rem] w-[10.5rem] h-[2.6rem] hover:bg-[#f5c547] transition duration-300"
          >
            {language === 'en' ? `هوية العيد` : `Eid Identity`}
          </button>
    </div>
    
  )
}

export default Hero