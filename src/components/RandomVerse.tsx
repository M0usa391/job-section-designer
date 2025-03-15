
import { useState, useEffect } from "react";

interface Verse {
  arabic: string;
  translation: string;
  surah: string;
  ayah: number;
}

// قائمة من الآيات المختارة
const VERSES: Verse[] = [
  {
    arabic: "وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً وَدُونَ الْجَهْرِ مِنَ الْقَوْلِ بِالْغُدُوِّ وَالْآصَالِ وَلَا تَكُن مِّنَ الْغَافِلِينَ",
    translation: "وذكر ربك في نفسك تضرعا وخيفة ودون الجهر من القول بالغدو والآصال ولا تكن من الغافلين",
    surah: "الأعراف",
    ayah: 205
  },
  {
    arabic: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
    translation: "إنما المؤمنون الذين إذا ذكر الله وجلت قلوبهم وإذا تليت عليهم آياته زادتهم إيمانا وعلى ربهم يتوكلون",
    surah: "الأنفال",
    ayah: 2
  },
  {
    arabic: "وَأَقِمِ الصَّلَاةَ ۖ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ ۗ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ",
    translation: "وأقم الصلاة إن الصلاة تنهى عن الفحشاء والمنكر ولذكر الله أكبر والله يعلم ما تصنعون",
    surah: "العنكبوت",
    ayah: 45
  },
  {
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
    translation: "ربنا تقبل منا إنك أنت السميع العليم",
    surah: "البقرة",
    ayah: 127
  },
  {
    arabic: "وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ",
    translation: "واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه",
    surah: "الكهف",
    ayah: 28
  }
];

const RandomVerse = () => {
  const [currentVerse, setCurrentVerse] = useState<Verse>(VERSES[0]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // تغيير الآية بشكل عشوائي كل 30 ثانية
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * VERSES.length);
      setCurrentVerse(VERSES[randomIndex]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container-fluid py-3 animate__animated animate__zoomIn">
      <div 
        className={`card btn-glass p-3 cursor-pointer position-relative ${
          isFlipped ? "bg-gradient" : ""
        }`}
        onClick={handleFlip}
        style={{ minHeight: "150px", cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div></div>
          <div className="d-flex align-items-center">
            <i className="bi bi-book text-info fs-5 me-1"></i>
            <span className="fs-5 text-info fw-medium">آية قرآنية</span>
          </div>
        </div>
        
        {!isFlipped ? (
          <p className="text-end text-white fw-medium lh-lg fs-5 px-2">
            {currentVerse.arabic}
          </p>
        ) : (
          <div className="text-end px-2 text-white-50">
            <p className="fw-medium lh-lg fs-6 mb-2">
              {currentVerse.translation}
            </p>
            <p className="small text-info">
              سورة {currentVerse.surah} - آية {currentVerse.ayah}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomVerse;
