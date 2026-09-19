const stateNames = {
  hi: { Rajasthan: "राजस्थान", Kerala: "केरल", Gujarat: "गुजरात", Punjab: "पंजाब", "West Bengal": "पश्चिम बंगाल", "Tamil Nadu": "तमिलनाडु", Maharashtra: "महाराष्ट्र", Karnataka: "कर्नाटक", Telangana: "तेलंगाना", Odisha: "ओडिशा", Assam: "असम", Bihar: "बिहार", Goa: "गोवा", "Uttar Pradesh": "उत्तर प्रदेश", "Andhra Pradesh": "आंध्र प्रदेश", "Madhya Pradesh": "मध्य प्रदेश", Delhi: "दिल्ली", Haryana: "हरियाणा", Jharkhand: "झारखंड", Chhattisgarh: "छत्तीसगढ़", Uttarakhand: "उत्तराखंड", "Himachal Pradesh": "हिमाचल प्रदेश", Sikkim: "सिक्किम", Manipur: "मणिपुर", Meghalaya: "मेघालय", Mizoram: "मिजोरम", Nagaland: "नागालैंड", Tripura: "त्रिपुरा", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Jammu and Kashmir": "जम्मू और कश्मीर", Ladakh: "लद्दाख" },
  bn: { Rajasthan: "রাজস্থান", Kerala: "কেরল", Gujarat: "গুজরাট", Punjab: "পাঞ্জাব", "West Bengal": "পশ্চিমবঙ্গ", "Tamil Nadu": "তামিলনাড়ু", Maharashtra: "মহারাষ্ট্র", Karnataka: "কর্ণাটক", Telangana: "তেলেঙ্গানা", Odisha: "ওড়িশা", Assam: "অসম", Bihar: "বিহার", Goa: "গোয়া", "Uttar Pradesh": "উত্তরপ্রদেশ", "Andhra Pradesh": "অন্ধ্রপ্রদেশ", "Madhya Pradesh": "মধ্যপ্রদেশ", Delhi: "দিল্লি", Haryana: "হরিয়ানা" },
  ta: { Rajasthan: "ராஜஸ்தான்", Kerala: "கேரளா", Gujarat: "குஜராத்", Punjab: "பஞ்சாப்", "West Bengal": "மேற்கு வங்காளம்", "Tamil Nadu": "தமிழ்நாடு", Maharashtra: "மகாராஷ்டிரா", Karnataka: "கர்நாடகா", Telangana: "தெலங்கானா", Odisha: "ஒடிசா", Assam: "அசாம்", Bihar: "பீகார்", Goa: "கோவா", "Uttar Pradesh": "உத்தரப் பிரதேசம்", "Andhra Pradesh": "ஆந்திரப் பிரதேசம்", "Madhya Pradesh": "மத்தியப் பிரதேசம்", Delhi: "டெல்லி", Haryana: "ஹரியானா" },
  te: { Rajasthan: "రాజస్థాన్", Kerala: "కేరళ", Gujarat: "గుజరాత్", Punjab: "పంజాబ్", "West Bengal": "పశ్చిమ బెంగాల్", "Tamil Nadu": "తమిళనాడు", Maharashtra: "మహారాష్ట్ర", Karnataka: "కర్ణాటక", Telangana: "తెలంగాణ", Odisha: "ఒడిశా", Assam: "అస్సాం", Bihar: "బీహార్", Goa: "గోవా", "Uttar Pradesh": "ఉత్తర ప్రదేశ్", "Andhra Pradesh": "ఆంధ్రప్రదేశ్", "Madhya Pradesh": "మధ్యప్రదేశ్", Delhi: "ఢిల్లీ", Haryana: "హర్యానా" },
  mr: { Rajasthan: "राजस्थान", Kerala: "केरळ", Gujarat: "गुजरात", Punjab: "पंजाब", "West Bengal": "पश्चिम बंगाल", "Tamil Nadu": "तामिळनाडू", Maharashtra: "महाराष्ट्र", Karnataka: "कर्नाटक", Telangana: "तेलंगणा", Odisha: "ओडिशा", Assam: "आसाम", Bihar: "बिहार", Goa: "गोवा", "Uttar Pradesh": "उत्तर प्रदेश", "Andhra Pradesh": "आंध्र प्रदेश", "Madhya Pradesh": "मध्य प्रदेश", Delhi: "दिल्ली", Haryana: "हरियाणा" },
  gu: { Rajasthan: "રાજસ્થાન", Kerala: "કેરળ", Gujarat: "ગુજરાત", Punjab: "પંજાબ", "West Bengal": "પશ્ચિમ બંગાળ", "Tamil Nadu": "તમિલનાડુ", Maharashtra: "મહારાષ્ટ્ર", Karnataka: "કર્ણાટક", Telangana: "તેલંગાણા", Odisha: "ઓડિશા", Assam: "આસામ", Bihar: "બિહાર", Goa: "ગોવા", "Uttar Pradesh": "ઉત્તર પ્રદેશ", "Andhra Pradesh": "આંધ્ર પ્રદેશ", "Madhya Pradesh": "મધ્ય પ્રદેશ", Delhi: "દિલ્હી", Haryana: "હરિયાણા" },
  kn: { Rajasthan: "ರಾಜಸ್ಥಾನ", Kerala: "ಕೇರಳ", Gujarat: "ಗುಜರಾತ್", Punjab: "ಪಂಜಾಬ್", "West Bengal": "ಪಶ್ಚಿಮ ಬಂಗಾಳ", "Tamil Nadu": "ತಮಿಳುನಾಡು", Maharashtra: "ಮಹಾರಾಷ್ಟ್ರ", Karnataka: "ಕರ್ನಾಟಕ", Telangana: "ತೆಲಂಗಾಣ", Odisha: "ಒಡಿಶಾ", Assam: "ಅಸ್ಸಾಂ", Bihar: "ಬಿಹಾರ", Goa: "ಗೋವಾ", "Uttar Pradesh": "ಉತ್ತರ ಪ್ರದೇಶ", "Andhra Pradesh": "ಆಂಧ್ರ ಪ್ರದೇಶ", "Madhya Pradesh": "ಮಧ್ಯ ಪ್ರದೇಶ", Delhi: "ದೆಹಲಿ", Haryana: "ಹರಿಯಾಣ" },
  ml: { Rajasthan: "രാജസ്ഥാൻ", Kerala: "കേരളം", Gujarat: "ഗുജറാത്ത്", Punjab: "പഞ്ചാബ്", "West Bengal": "പശ്ചിമ ബംഗാൾ", "Tamil Nadu": "തമിഴ്നാട്", Maharashtra: "മഹാരാഷ്ട്ര", Karnataka: "കർണാടക", Telangana: "തെലങ്കാന", Odisha: "ഒഡീഷ", Assam: "അസം", Bihar: "ബീഹാർ", Goa: "ഗോവ", "Uttar Pradesh": "ഉത്തർപ്രദേശ്", "Andhra Pradesh": "ആന്ധ്രപ്രദേശ്", "Madhya Pradesh": "മധ്യപ്രദേശ്", Delhi: "ഡൽഹി", Haryana: "ഹരിയാന" },
  pa: { Rajasthan: "ਰਾਜਸਥਾਨ", Kerala: "ਕੇਰਲ", Gujarat: "ਗੁਜਰਾਤ", Punjab: "ਪੰਜਾਬ", "West Bengal": "ਪੱਛਮੀ ਬੰਗਾਲ", "Tamil Nadu": "ਤਾਮਿਲਨਾਡੂ", Maharashtra: "ਮਹਾਰਾਸ਼ਟਰ", Karnataka: "ਕਰਨਾਟਕ", Telangana: "ਤੇਲੰਗਾਨਾ", Odisha: "ਓਡੀਸ਼ਾ", Assam: "ਅਸਾਮ", Bihar: "ਬਿਹਾਰ", Goa: "ਗੋਆ", "Uttar Pradesh": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼", "Andhra Pradesh": "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼", "Madhya Pradesh": "ਮੱਧ ਪ੍ਰਦੇਸ਼", Delhi: "ਦਿੱਲੀ", Haryana: "ਹਰਿਆਣਾ" },
  od: { Rajasthan: "ରାଜସ୍ଥାନ", Kerala: "କେରଳ", Gujarat: "ଗୁଜରାଟ", Punjab: "ପଞ୍ଜାବ", "West Bengal": "ପଶ୍ଚିମବଙ୍ଗ", "Tamil Nadu": "ତାମିଲନାଡୁ", Maharashtra: "ମହାରାଷ୍ଟ୍ର", Karnataka: "କର୍ଣ୍ଣାଟକ", Telangana: "ତେଲେଙ୍ଗାନା", Odisha: "ଓଡ଼ିଶା", Assam: "ଆସାମ", Bihar: "ବିହାର", Goa: "ଗୋଆ", "Uttar Pradesh": "ଉତ୍ତର ପ୍ରଦେଶ", "Andhra Pradesh": "ଆନ୍ଧ୍ର ପ୍ରଦେଶ", "Madhya Pradesh": "ମଧ୍ୟପ୍ରଦେଶ", Delhi: "ଦିଲ୍ଲୀ", Haryana: "ହରିୟାଣା" }
};

const guideNames = {
  hi: ["राहुल शर्मा", "अंजलि वर्मा", "अमित सिंह"],
  bn: ["রাহুল শর্মা", "অঞ্জলি বর্মা", "অমিত সিংহ"],
  ta: ["ராகுல் சர்மா", "அஞ்சலி வர்மா", "அமித் சிங்"],
  te: ["రాహుల్ శర్మ", "అంజలి వర్మ", "అమిత్ సింగ్"],
  mr: ["राहुल शर्मा", "अंजली वर्मा", "अमित सिंह"],
  gu: ["રાહુલ શર્મા", "અંજલિ વર્મા", "અમિત સિંહ"],
  kn: ["ರಾಹುಲ್ ಶರ್ಮಾ", "ಅಂಜಲಿ ವರ್ಮಾ", "ಅಮಿತ್ ಸಿಂಗ್"],
  ml: ["രാഹുൽ ശർമ്മ", "അഞ്ജലി വർമ്മ", "അമിത് സിംഗ്"],
  pa: ["ਰਾਹੁਲ ਸ਼ਰਮਾ", "ਅੰਜਲੀ ਵਰਮਾ", "ਅਮਿਤ ਸਿੰਘ"],
  od: ["ରାହୁଲ ଶର୍ମା", "ଅଞ୍ଜଳି ବର୍ମା", "ଅମିତ ସିଂହ"]
};

export function getLocalizedStateName(name, language) {
  if (language === "en") {
    return name;
  }

  return stateNames[language]?.[name] || stateNames.hi?.[name] || name;
}

export function getLocalizedGuideName(index, language, fallback) {
  return guideNames[language]?.[index] || fallback;
}