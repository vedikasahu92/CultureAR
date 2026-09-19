import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const common = {
  chooseLanguage: "Choose language", siteName: "Culture Explorer", home: "Home", explore: "Explore", arExperience: "AR Experience", scanner: "Scanner", about: "About", tourPlan: "Tour Plan", login: "Login", logout: "Logout",
  discoverDifferently: "✦ DISCOVER INDIA DIFFERENTLY", experienceCulture: "Experience India's Culture", cultureDescription: "Explore the traditions, festivals, food, art and heritage of India's diverse states through an immersive augmented reality experience.", exploreCulture: "Explore Culture →", startARScan: "◉ Start AR Scan", travelGuide: "🧭 Travel Guide", leaveReview: "★ Leave a Review", askAIGuide: "🤖 Ask AI Guide", indianHeritage: "Indian Heritage", heritageCardDesc: "Discover monuments, traditions, festivals & more.", arReady: "AR READY", traditions: "Traditions", traditionsDesc: "Explore India's unique traditions.", festivals: "Festivals", festivalsDesc: "Discover festivals from every state.", food: "Food", foodDesc: "Explore India's diverse cuisines.", heritage: "Heritage", heritageDesc: "Experience heritage through AR.", startAR: "Start AR Experience", experienceHeritage: "EXPERIENCE HERITAGE", shareExperience: "SHARE YOUR EXPERIENCE", submitReview: "Submit Review",
  discoverDiversity: "Discover India's Cultural Diversity", diversityDescription: "Explore unique heritage, festivals, food, art and dance across Indian states.", searchState: "🔍 Search an Indian state...", loadingStates: "Loading States...", noState: "No state found 😕", exploreState: "Explore {{state}} →", stateCultureDescription: "Discover the culture, heritage, festivals, food and traditions of {{state}}.", discoverIndianCulture: "✦ DISCOVER INDIAN CULTURE", backExplore: "← Back to Explore", stateNotFound: "State Not Found", stateMissing: "Sorry, we couldn't find this state.", viewAR: "✦ View AR", viewMap: "🗺️ View Map", moreComing: "More {{category}} coming soon for {{state}}!", backToState: "← Back to {{state}}", culture: "Culture", music: "Music", arts: "Arts", dance: "Dance", art: "Art & Crafts", categoryCulture: "Understand the living culture and identity of the state.", categoryMusic: "Listen to folk, classical and devotional traditions.", categoryArts: "Discover local crafts, painting, textiles and design.", of: "of", itemDescription: "Explore the rich history, cultural importance, and geographic roots of {{item}} in {{state}}. This represents one of the signature cultural expressions preserved through traditions and community heritage.", culturalHighlights: "Cultural Highlights", rootedIdentity: "Deeply rooted in the identity and folklore of {{state}}.", celebratedEvents: "Celebrated during major cultural events and seasonal festivals.", preservedGenerations: "Preserved by local communities across generations.", visualizeItem: "Visualize {{item}} in interactive 3D / Augmented Reality space.", launchAR: "Launch AR View", locationMap: "Location & Map", primaryLocation: "Primary origin and landmark location for {{item}} ({{state}})", getDirections: "Get Directions",
  liveRecognition: "Live Monument Recognition", selectTarget: "Select Target Photo to Scan:", turnCameraOn: "📷 Turn ON Live Camera", pointCamera: "Point Camera at {{name}} Photo", scanning: "🔍 Scanning Image...", scanNow: "⚡ Scan Photo Now", turnCameraOff: "Turn Off Camera", matchFound: "MATCH FOUND ✅", stopListening: "⏹ Stop Listening", listenStory: "🔊 Listen Audio Story", historyDetails: "History & Details:",
  chooseGuide: "Choose Your Travel Guide", guideIntro: "Find a trusted local guide to make your journey through India personal, vivid and unforgettable.", availableToday: "Available today", topRated: "TOP RATED", yearsExperience: "{{years}} years experience", bookGuide: "Book Guide →", bookingSent: "Booking request sent to {{name}}.",
  planTour: "Plan Your", perfectTour: "Perfect Tour", tourIntro: "Tell us your dream. We'll craft every detail of an unforgettable experience.", destinationDates: "Destination & Dates", groupBudget: "Group & Budget", travelInterests: "Travel Interests", chooseGuideTitle: "Choose Guide", payment: "Payment", departureCity: "Departure City", destination: "Destination", startDate: "Start Date", endDate: "End Date", adults: "Adults", children: "Children", tourType: "Tour Type", selectType: "Select type", solo: "Solo", family: "Family", friends: "Friends", couple: "Honeymoon / Couple", budgetPerson: "Budget Per Person", pickInterests: "Pick all that excite you", selectGuide: "Select Guide", aiGuide: "AI Culture Guide", localExpert: "Local Human Expert", proceedPayment: "Proceed to Payment", submitTour: "Submit My Tour Plan", tourSubmitted: "Tour Plan Submitted Successfully!", beaches: "Beaches", mountains: "Mountains", nature: "Nature", shopping: "Shopping", adventure: "Adventure", wellness: "Wellness & Spa", photography: "Photography", nightlife: "Nightlife", scenicRoutes: "Scenic Routes", departurePlaceholder: "e.g. Raipur", destinationPlaceholder: "e.g. Goa, Manali, Kerala", aboutState: "ABOUT THE STATE", discoverState: "Discover {{state}}", exploreCultureSection: "EXPLORE CULTURE", exploreCultureQuestion: "What would you like to explore?", exploreCultureDescription: "Explore different aspects of {{state}}'s unique cultural identity.", exploreLink: "Explore →", traditionalCustoms: "Explore traditional customs and lifestyle.", colourfulFestivals: "Discover colourful festivals and celebrations.", stateFlavours: "Taste the traditional flavours of the state.", traditionalArt: "Discover traditional art and handicrafts.", traditionalDance: "Experience traditional dance and music.", monumentsPlaces: "Explore monuments and historic places.", cultureExplorer: "CULTURE EXPLORER", quality: "Quality", value: "Value", speed: "Speed", support: "Support", design: "Design", easeOfUse: "Ease of use",
  reviewTitle: "Leave a Review", reviewIntro: "Your feedback helps other travellers make better decisions.", thankYou: "Thank you for sharing!", reviewRecorded: "Your review has been recorded and will help fellow culture explorers.", anotherReview: "Write another review", overallRating: "Overall rating", chooseRating: "Choose an overall rating", noRating: "No rating", liked: "What did you like?", reviewHeading: "Review title", reviewPlaceholder: "Summarise your experience in a few words...", yourReview: "Your review", reviewMessagePlaceholder: "Tell us what you think, as briefly or as deeply as you like...", reviewHelp: "Please keep your review respectful and helpful.", name: "Name", email: "Email", yourName: "Your name", anonymous: "Post anonymously", submitting: "Submitting...", submitReviewButton: "Submit review →", loginBeforeReview: "Please login before submitting a review.", chooseRatingError: "Please choose an overall rating before submitting.",
  emailPlaceholder: "Enter your email", passwordPlaceholder: "Enter your password", welcomeBack: "Welcome back!", createAccount: "Create Account", joinCulture: "Join Culture Explorer", namePlaceholder: "Enter your name", passwordCreate: "Create password", signUp: "Sign Up", noAccount: "Don't have an account?", loginSuccess: "Login successful!", loginFailed: "Login failed", signupSuccess: "Signup successful!", signupFailed: "Signup failed", serverFailed: "Server connection failed", aiChatbot: "AI Chatbot 🤖", typeMessage: "Type your message...", askPlaceholder: "Ask about culture or monuments...", chatGreeting: "Namaste! I am your AI Culture Guide. Ask me anything about India's heritage, monuments, or festivals!", send: "Send", you: "You: ", ai: "AI: ", chatError: "Sorry, something went wrong!", tourPlanning: "TOUR PLANNING", localExperts: "CULTURE EXPLORER LOCAL EXPERTS", availableGuides: "Available travel guides", reviewSubmitError: "Review could not be submitted.", reviewConnectionError: "Unable to connect to the review service.", delhiSpecialist: "Delhi Specialist", delhiLocation: "Delhi, India", hindiEnglish: "Hindi, English", delhiDescription: "Discover Delhi's historic lanes, monuments and local food with a guide who knows every story.", agraExpert: "Agra Expert", agraLocation: "Agra, Uttar Pradesh", hindiEnglishFrench: "Hindi, English, French", agraDescription: "Explore the Taj Mahal and Agra's hidden heritage with thoughtful, story-led walking tours.", jaipurHeritageGuide: "Jaipur Heritage Guide", jaipurLocation: "Jaipur, Rajasthan", jaipurDescription: "See Jaipur beyond the postcards through royal architecture, artisan markets and local traditions.", hawaMahal: "Hawa Mahal", tajMahal: "Taj Mahal", chitrakoteFalls: "Chitrakote Falls", jaipur: "Jaipur", agra: "Agra", bastar: "Bastar", jaipurRajasthan: "Jaipur, Rajasthan", agraUttarPradesh: "Agra, Uttar Pradesh", bastarChhattisgarh: "Bastar, Chhattisgarh", hawaMahalHistory: "Hawa Mahal, also called the Palace of Winds, was built in 1799 by Maharaja Sawai Pratap Singh in Jaipur.", hawaMahalAudio: "Hawa Mahal, or Palace of Winds, was built in 1799 by Maharaja Sawai Pratap Singh in Jaipur.", tajMahalHistory: "The Taj Mahal is an ivory-white marble mausoleum on the bank of the Yamuna in Agra, commissioned by Shah Jahan in memory of Mumtaz Mahal.", tajMahalAudio: "The Taj Mahal is an ivory-white marble mausoleum in Agra, commissioned by Mughal emperor Shah Jahan.", chitrakoteHistory: "Chitrakote Falls is a natural waterfall on the Indravati River in Bastar, often called the Niagara Falls of India.", chitrakoteAudio: "Chitrakote Falls is a natural waterfall on the Indravati River in Bastar, Chhattisgarh.", cameraAccessDenied: "Camera access denied", speechNotSupported: "Audio text-to-speech is not supported."
};

const resources = {
  en: {
    translation: {
      ...common,
      home: "Home",
      explore: "Explore",
      arExperience: "AR Experience",
      about: "About",
      tourPlan: "Tour Plan",
      login: "Login",
      logout: "Logout",

        exploreStates: "Explore States",
        discoverHeritage: "Discover India's Rich Cultural Heritage",
        discoverDifferently: "✦ DISCOVER INDIA DIFFERENTLY",
experienceCulture: "Experience India's Culture ",
cultureDescription: "Explore the traditions, festivals, food, art and heritage of India's diverse states in an interactive way.",
experienceCulture: "Experience India's Heritage →",
startARScan: "◉ Start Scan",
travelGuide: "🧭 Travel Guide",
leaveReview: "★ Leave a Review",
askAIGuide: "🤖 Ask AI Guide",

indianHeritage: "Indian Heritage",
heritageCardDesc: "Discover monuments, traditions, festivals & more.",
arReady: "IMMERSIVE",

traditions: "Traditions",
traditionsDesc: "Explore India's unique traditions.",
festivals: "Festivals",
festivalsDesc: "Discover festivals from every state.",
food: "Food",
foodDesc: "Explore India's diverse cuisines.",
heritage: "Heritage",
heritageDesc: "Experience heritage through AR.",

      startAR: "Start AR Experience",
      experienceHeritage: "EXPERIENCE HERITAGE",

      shareExperience: "SHARE YOUR EXPERIENCE",
      leaveReview: "Leave a Review",
      submitReview: "Submit Review"
    }
  },

  hi: {
    translation: {
      chooseLanguage: "भाषा चुनें", home: "होम", explore: "एक्सप्लोर करें", arExperience: "AR अनुभव", about: "हमारे बारे में", tourPlan: "टूर प्लान", login: "लॉगिन", logout: "लॉगआउट", discoverDifferently: "✦ भारत को अलग तरीके से जानें", experienceCulture: "AR में भारत की संस्कृति का अनुभव करें", cultureDescription: "इमर्सिव ऑगमेंटेड रियलिटी अनुभव के माध्यम से भारत के विभिन्न राज्यों की परंपराओं, त्योहारों, भोजन, कला और विरासत को जानें।", exploreCulture: "संस्कृति एक्सप्लोर करें →", startARScan: "◉ AR स्कैन शुरू करें", travelGuide: "🧭 यात्रा गाइड", leaveReview: "★ रिव्यू दें", askAIGuide: "🤖 AI गाइड से पूछें", indianHeritage: "भारतीय विरासत", heritageCardDesc: "स्मारकों, परंपराओं, त्योहारों और बहुत कुछ को जानें।", arReady: "AR तैयार", traditions: "परंपराएँ", traditionsDesc: "भारत की अनोखी परंपराओं को जानें।", festivals: "त्योहार", festivalsDesc: "हर राज्य के त्योहारों को जानें।", food: "भोजन", foodDesc: "भारत के विभिन्न व्यंजनों को जानें।", heritage: "विरासत", heritageDesc: "AR के माध्यम से विरासत का अनुभव करें।", startAR: "AR अनुभव शुरू करें", experienceHeritage: "विरासत का अनुभव करें", shareExperience: "अपना अनुभव साझा करें", submitReview: "रिव्यू सबमिट करें",
      discoverDiversity: "भारत की सांस्कृतिक विविधता खोजें", diversityDescription: "भारतीय राज्यों की अनोखी विरासत, त्योहार, भोजन, कला और नृत्य जानें।", searchState: "🔍 भारतीय राज्य खोजें...", loadingStates: "राज्य लोड हो रहे हैं...", noState: "कोई राज्य नहीं मिला 😕", exploreState: "{{state}} एक्सप्लोर करें →", stateCultureDescription: "{{state}} की संस्कृति, विरासत, त्योहार, भोजन और परंपराएँ जानें।", discoverIndianCulture: "✦ भारतीय संस्कृति खोजें", backExplore: "← एक्सप्लोर पर वापस जाएँ", stateNotFound: "राज्य नहीं मिला", stateMissing: "क्षमा करें, यह राज्य नहीं मिला।", viewAR: "✦ AR में देखें", viewMap: "🗺️ नक्शा देखें", moreComing: "{{state}} के लिए {{category}} जल्द आ रहा है!", backToState: "← {{state}} पर वापस जाएँ", culture: "संस्कृति", music: "संगीत", arts: "कलाएँ", dance: "नृत्य", art: "कला और शिल्प", categoryCulture: "राज्य की जीवंत संस्कृति और पहचान समझें।", categoryMusic: "लोक, शास्त्रीय और भक्ति परंपराएँ सुनें।", categoryArts: "स्थानीय शिल्प, चित्रकला, वस्त्र और डिजाइन जानें।", of: "का", itemDescription: "{{state}} में {{item}} के समृद्ध इतिहास, सांस्कृतिक महत्व और भौगोलिक जड़ों को जानें। यह परंपराओं और सामुदायिक विरासत से संरक्षित सांस्कृतिक अभिव्यक्ति है।", culturalHighlights: "सांस्कृतिक विशेषताएँ", rootedIdentity: "{{state}} की पहचान और लोककथाओं में गहराई से जुड़ा हुआ।", celebratedEvents: "प्रमुख सांस्कृतिक आयोजनों और मौसमी त्योहारों में मनाया जाता है।", preservedGenerations: "स्थानीय समुदायों द्वारा पीढ़ियों से संरक्षित।", visualizeItem: "{{item}} को इंटरैक्टिव 3D / ऑगमेंटेड रियलिटी में देखें।", launchAR: "AR दृश्य शुरू करें", locationMap: "स्थान और नक्शा", primaryLocation: "{{item}} ({{state}}) का मुख्य उद्गम और स्थल", getDirections: "दिशा-निर्देश प्राप्त करें",
      liveRecognition: "स्मारक पहचान", selectTarget: "स्कैन करने के लिए फोटो चुनें:", turnCameraOn: "📷 लाइव कैमरा चालू करें", pointCamera: "{{name}} की फोटो पर कैमरा रखें", scanning: "🔍 फोटो स्कैन हो रही है...", scanNow: "⚡ अभी फोटो स्कैन करें", turnCameraOff: "कैमरा बंद करें", matchFound: "मिलान मिला ✅", stopListening: "⏹ सुनना बंद करें", listenStory: "🔊 ऑडियो कहानी सुनें", historyDetails: "इतिहास और विवरण:",
      chooseGuide: "अपना यात्रा गाइड चुनें", guideIntro: "भारत की यात्रा को व्यक्तिगत और यादगार बनाने के लिए विश्वसनीय स्थानीय गाइड खोजें।", availableToday: "आज उपलब्ध", topRated: "शीर्ष रेटेड", yearsExperience: "{{years}} वर्षों का अनुभव", bookGuide: "गाइड बुक करें →", bookingSent: "{{name}} को बुकिंग अनुरोध भेजा गया।",
      planTour: "अपना", perfectTour: "सही टूर प्लान करें", tourIntro: "अपना सपना बताइए। हम यादगार अनुभव की हर detail तैयार करेंगे।", destinationDates: "गंतव्य और तारीखें", groupBudget: "समूह और बजट", travelInterests: "यात्रा की रुचियाँ", chooseGuideTitle: "गाइड चुनें", payment: "भुगतान", departureCity: "प्रस्थान शहर", destination: "गंतव्य", startDate: "आरंभ तारीख", endDate: "समाप्ति तारीख", adults: "वयस्क", children: "बच्चे", tourType: "टूर का प्रकार", selectType: "प्रकार चुनें", solo: "अकेले", family: "परिवार", friends: "दोस्त", couple: "हनीमून / कपल", budgetPerson: "प्रति व्यक्ति बजट", pickInterests: "अपनी सभी पसंद चुनें", selectGuide: "गाइड चुनें", aiGuide: "AI संस्कृति गाइड", localExpert: "स्थानीय विशेषज्ञ", proceedPayment: "भुगतान पर जाएँ", submitTour: "मेरा टूर प्लान सबमिट करें", tourSubmitted: "टूर प्लान सफलतापूर्वक सबमिट हुआ!",
      reviewTitle: "रिव्यू दें", reviewIntro: "आपकी प्रतिक्रिया अन्य यात्रियों को बेहतर निर्णय लेने में मदद करती है।", thankYou: "साझा करने के लिए धन्यवाद!", reviewRecorded: "आपका रिव्यू दर्ज हो गया है और अन्य संस्कृति प्रेमियों की मदद करेगा।", anotherReview: "एक और रिव्यू लिखें", overallRating: "कुल रेटिंग", chooseRating: "कुल रेटिंग चुनें", noRating: "कोई रेटिंग नहीं", liked: "आपको क्या पसंद आया?", reviewHeading: "रिव्यू शीर्षक", reviewPlaceholder: "कुछ शब्दों में अपना अनुभव लिखें...", yourReview: "आपका रिव्यू", reviewMessagePlaceholder: "अपनी राय संक्षेप में या विस्तार से बताएं...", reviewHelp: "कृपया अपना रिव्यू सम्मानजनक और उपयोगी रखें।", name: "नाम", email: "ईमेल", yourName: "आपका नाम", anonymous: "गुमनाम पोस्ट करें", submitting: "सबमिट हो रहा है...", submitReviewButton: "रिव्यू सबमिट करें →", loginBeforeReview: "रिव्यू सबमिट करने से पहले लॉगिन करें।", chooseRatingError: "सबमिट करने से पहले कुल रेटिंग चुनें।",
      emailPlaceholder: "अपना ईमेल दर्ज करें", passwordPlaceholder: "अपना पासवर्ड दर्ज करें", welcomeBack: "वापसी पर स्वागत है!", createAccount: "खाता बनाएं", joinCulture: "Culture Explorer से जुड़ें", namePlaceholder: "अपना नाम दर्ज करें", passwordCreate: "पासवर्ड बनाएं", signUp: "साइन अप", noAccount: "खाता नहीं है?", loginSuccess: "लॉगिन सफल!", loginFailed: "लॉगिन विफल", signupSuccess: "साइनअप सफल!", signupFailed: "साइनअप विफल", serverFailed: "सर्वर कनेक्शन विफल", aiChatbot: "AI चैटबॉट 🤖", typeMessage: "अपना संदेश लिखें...", askPlaceholder: "संस्कृति या स्मारकों के बारे में पूछें...", chatGreeting: "नमस्ते! मैं आपका AI संस्कृति गाइड हूँ। भारत की विरासत, स्मारकों या त्योहारों के बारे में पूछें!", send: "भेजें", you: "आप: ", ai: "AI: ", chatError: "क्षमा करें, कुछ गलत हुआ!",
      home: "होम",
      explore: "एक्सप्लोर करें",
      arExperience: "AR अनुभव",
      about: "हमारे बारे में",
      tourPlan: "टूर प्लान",
      login: "लॉगिन",
      logout: "लॉगआउट",

      exploreStates: "राज्यों को एक्सप्लोर करें",
      discoverHeritage: "भारत की समृद्ध सांस्कृतिक विरासत खोजें",
      discoverDifferently: "✦ भारत को अलग तरीके से जानें",
experienceCulture: "AR में भारत की संस्कृति का अनुभव करें",
cultureDescription: "इमर्सिव ऑगमेंटेड रियलिटी अनुभव के माध्यम से भारत के विभिन्न राज्यों की परंपराओं, त्योहारों, भोजन, कला और विरासत को जानें।",
exploreCulture: "संस्कृति एक्सप्लोर करें →",
startARScan: "◉ AR स्कैन शुरू करें",
travelGuide: "🧭 यात्रा गाइड",
leaveReview: "★ रिव्यू दें",
askAIGuide: "🤖 AI गाइड से पूछें",

indianHeritage: "भारतीय विरासत",
heritageCardDesc: "स्मारकों, परंपराओं, त्योहारों और बहुत कुछ को जानें।",
arReady: "AR तैयार",

traditions: "परंपराएँ",
traditionsDesc: "भारत की अनोखी परंपराओं को जानें।",
festivals: "त्योहार",
festivalsDesc: "हर राज्य के त्योहारों को जानें।",
food: "भोजन",
foodDesc: "भारत के विभिन्न व्यंजनों को जानें।",
heritage: "विरासत",
heritageDesc: "AR के माध्यम से विरासत का अनुभव करें।",

      startAR: "AR अनुभव शुरू करें",
      experienceHeritage: "विरासत का अनुभव करें",

      shareExperience: "अपना अनुभव साझा करें",
      leaveReview: "रिव्यू दें",
      submitReview: "रिव्यू सबमिट करें"
    }
  }
};

Object.assign(resources, {
  bn: { translation: { ...common, home: "হোম", explore: "অন্বেষণ", arExperience: "AR অভিজ্ঞতা", about: "সম্পর্কে", tourPlan: "ট্যুর পরিকল্পনা", login: "লগইন", chooseLanguage: "ভাষা বেছে নিন", discoverDiversity: "ভারতের সাংস্কৃতিক বৈচিত্র্য আবিষ্কার করুন", diversityDescription: "ভারতের রাজ্যগুলির ঐতিহ্য, উৎসব, খাবার, শিল্প ও নৃত্য অন্বেষণ করুন।", searchState: "🔍 ভারতীয় রাজ্য খুঁজুন...", loadingStates: "রাজ্যগুলি লোড হচ্ছে...", noState: "কোনও রাজ্য পাওয়া যায়নি 😕", exploreState: "{{state}} অন্বেষণ করুন →", stateCultureDescription: "{{state}}-এর সংস্কৃতি, ঐতিহ্য, উৎসব, খাবার ও প্রথা আবিষ্কার করুন।", aiChatbot: "AI চ্যাটবট 🤖", typeMessage: "আপনার বার্তা লিখুন...", send: "পাঠান", you: "আপনি: ", ai: "AI: ", chatError: "দুঃখিত, কিছু ভুল হয়েছে!" } },
  ta: { translation: { ...common, home: "முகப்பு", explore: "ஆராயுங்கள்", arExperience: "AR அனுபவம்", about: "எங்களைப் பற்றி", tourPlan: "சுற்றுலா திட்டம்", login: "உள்நுழைவு", chooseLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்", discoverDiversity: "இந்தியாவின் கலாச்சாரப் பன்முகத்தைக் கண்டறியுங்கள்", diversityDescription: "இந்திய மாநிலங்களின் பாரம்பரியம், திருவிழாக்கள், உணவு, கலை மற்றும் நடனத்தை ஆராயுங்கள்.", searchState: "🔍 இந்திய மாநிலத்தைத் தேடுங்கள்...", loadingStates: "மாநிலங்கள் ஏற்றப்படுகின்றன...", noState: "மாநிலம் கிடைக்கவில்லை 😕", exploreState: "{{state}} ஐ ஆராயுங்கள் →", stateCultureDescription: "{{state}} இன் கலாச்சாரம், பாரம்பரியம், திருவிழாக்கள் மற்றும் உணவை அறியுங்கள்.", aiChatbot: "AI அரட்டை 🤖", typeMessage: "உங்கள் செய்தியை எழுதுங்கள்...", send: "அனுப்பு", you: "நீங்கள்: ", ai: "AI: ", chatError: "மன்னிக்கவும், ஏதோ தவறு நடந்துவிட்டது!" } },
  te: { translation: { ...common, home: "హోమ్", explore: "అన్వేషించండి", arExperience: "AR అనుభవం", about: "మా గురించి", tourPlan: "టూర్ ప్లాన్", login: "లాగిన్", chooseLanguage: "భాషను ఎంచుకోండి", discoverDiversity: "భారతదేశ సాంస్కృతిక వైవిధ్యాన్ని కనుగొనండి", diversityDescription: "భారత రాష్ట్రాల వారసత్వం, పండుగలు, ఆహారం, కళలు మరియు నృత్యాలను అన్వేషించండి.", searchState: "🔍 భారత రాష్ట్రాన్ని వెతకండి...", loadingStates: "రాష్ట్రాలు లోడ్ అవుతున్నాయి...", noState: "రాష్ట్రం కనుగొనబడలేదు 😕", exploreState: "{{state}} ను అన్వేషించండి →", stateCultureDescription: "{{state}} సంస్కృతి, వారసత్వం, పండుగలు మరియు ఆహారాన్ని తెలుసుకోండి.", aiChatbot: "AI చాట్‌బాట్ 🤖", typeMessage: "మీ సందేశాన్ని టైప్ చేయండి...", send: "పంపండి", you: "మీరు: ", ai: "AI: ", chatError: "క్షమించండి, ఏదో తప్పు జరిగింది!" } },
  mr: { translation: { ...common, home: "मुख्यपृष्ठ", explore: "भटकंती", arExperience: "AR अनुभव", about: "आमच्याबद्दल", tourPlan: "टूर प्लॅन", login: "लॉगिन", chooseLanguage: "भाषा निवडा", discoverDiversity: "भारताची सांस्कृतिक विविधता शोधा", diversityDescription: "भारतीय राज्यांची परंपरा, सण, खाद्यपदार्थ, कला आणि नृत्य जाणून घ्या.", searchState: "🔍 भारतीय राज्य शोधा...", loadingStates: "राज्ये लोड होत आहेत...", noState: "राज्य सापडले नाही 😕", exploreState: "{{state}} पाहा →", stateCultureDescription: "{{state}} ची संस्कृती, वारसा, सण, खाद्यपदार्थ आणि परंपरा जाणून घ्या.", aiChatbot: "AI चॅटबॉट 🤖", typeMessage: "तुमचा संदेश लिहा...", send: "पाठवा", you: "तुम्ही: ", ai: "AI: ", chatError: "क्षमस्व, काहीतरी चूक झाली!" } },
  gu: { translation: { ...common, home: "હોમ", explore: "શોધો", arExperience: "AR અનુભવ", about: "અમારા વિશે", tourPlan: "ટૂર પ્લાન", login: "લોગિન", chooseLanguage: "ભાષા પસંદ કરો", discoverDiversity: "ભારતની સાંસ્કૃતિક વિવિધતા શોધો", diversityDescription: "ભારતીય રાજ્યોની પરંપરા, તહેવારો, ભોજન, કલા અને નૃત્ય શોધો.", searchState: "🔍 ભારતીય રાજ્ય શોધો...", loadingStates: "રાજ્યો લોડ થઈ રહ્યા છે...", noState: "રાજ્ય મળ્યું નથી 😕", exploreState: "{{state}} શોધો →", stateCultureDescription: "{{state}}ની સંસ્કૃતિ, વારસો, તહેવારો, ભોજન અને પરંપરાઓ જાણો.", aiChatbot: "AI ચેટબોટ 🤖", typeMessage: "તમારો સંદેશ લખો...", send: "મોકલો", you: "તમે: ", ai: "AI: ", chatError: "માફ કરશો, કંઈક ખોટું થયું!" } },
  kn: { translation: { ...common, home: "ಮುಖಪುಟ", explore: "ಅನ್ವೇಷಿಸಿ", arExperience: "AR ಅನುಭವ", about: "ನಮ್ಮ ಬಗ್ಗೆ", tourPlan: "ಪ್ರವಾಸ ಯೋಜನೆ", login: "ಲಾಗಿನ್", chooseLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ", discoverDiversity: "ಭಾರತದ ಸಾಂಸ್ಕೃತಿಕ ವೈವಿಧ್ಯವನ್ನು ಕಂಡುಕೊಳ್ಳಿ", diversityDescription: "ಭಾರತದ ರಾಜ್ಯಗಳ ಪರಂಪರೆ, ಹಬ್ಬಗಳು, ಆಹಾರ, ಕಲೆ ಮತ್ತು ನೃತ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ.", searchState: "🔍 ಭಾರತೀಯ ರಾಜ್ಯವನ್ನು ಹುಡುಕಿ...", loadingStates: "ರಾಜ್ಯಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...", noState: "ರಾಜ್ಯ ಕಂಡುಬಂದಿಲ್ಲ 😕", exploreState: "{{state}} ಅನ್ವೇಷಿಸಿ →", stateCultureDescription: "{{state}} ಸಂಸ್ಕೃತಿ, ಪರಂಪರೆ, ಹಬ್ಬಗಳು ಮತ್ತು ಆಹಾರವನ್ನು ತಿಳಿಯಿರಿ.", aiChatbot: "AI ಚಾಟ್‌ಬಾಟ್ 🤖", typeMessage: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...", send: "ಕಳುಹಿಸಿ", you: "ನೀವು: ", ai: "AI: ", chatError: "ಕ್ಷಮಿಸಿ, ಏನೋ ತಪ್ಪಾಗಿದೆ!" } },
  ml: { translation: { ...common, home: "ഹോം", explore: "പര്യവേക്ഷണം", arExperience: "AR അനുഭവം", about: "ഞങ്ങളെക്കുറിച്ച്", tourPlan: "ടൂർ പ്ലാൻ", login: "ലോഗിൻ", chooseLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക", discoverDiversity: "ഇന്ത്യയുടെ സാംസ്കാരിക വൈവിധ്യം കണ്ടെത്തൂ", diversityDescription: "ഇന്ത്യൻ സംസ്ഥാനങ്ങളുടെ പൈതൃകം, ഉത്സവങ്ങൾ, ഭക്ഷണം, കല, നൃത്തം എന്നിവ കാണൂ.", searchState: "🔍 ഇന്ത്യൻ സംസ്ഥാനം തിരയുക...", loadingStates: "സംസ്ഥാനങ്ങൾ ലോഡ് ചെയ്യുന്നു...", noState: "സംസ്ഥാനം കണ്ടെത്തിയില്ല 😕", exploreState: "{{state}} കാണുക →", stateCultureDescription: "{{state}}-ന്റെ സംസ്കാരം, പൈതൃകം, ഉത്സവങ്ങൾ, ഭക്ഷണം എന്നിവ അറിയുക.", aiChatbot: "AI ചാറ്റ്ബോട്ട് 🤖", typeMessage: "നിങ്ങളുടെ സന്ദേശം എഴുതുക...", send: "അയയ്ക്കുക", you: "നിങ്ങൾ: ", ai: "AI: ", chatError: "ക്ഷമിക്കണം, എന്തോ തെറ്റ് സംഭവിച്ചു!" } },
  pa: { translation: { ...common, home: "ਮੁੱਖ ਪੰਨਾ", explore: "ਖੋਜੋ", arExperience: "AR ਤਜਰਬਾ", about: "ਸਾਡੇ ਬਾਰੇ", tourPlan: "ਟੂਰ ਯੋਜਨਾ", login: "ਲੌਗਇਨ", chooseLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ", discoverDiversity: "ਭਾਰਤ ਦੀ ਸੱਭਿਆਚਾਰਕ ਵਿਭਿੰਨਤਾ ਖੋਜੋ", diversityDescription: "ਭਾਰਤੀ ਰਾਜਾਂ ਦੀ ਵਿਰਾਸਤ, ਤਿਉਹਾਰ, ਖਾਣਾ, ਕਲਾ ਅਤੇ ਨਾਚ ਵੇਖੋ।", searchState: "🔍 ਭਾਰਤੀ ਰਾਜ ਲੱਭੋ...", loadingStates: "ਰਾਜ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...", noState: "ਰਾਜ ਨਹੀਂ ਮਿਲਿਆ 😕", exploreState: "{{state}} ਖੋਜੋ →", stateCultureDescription: "{{state}} ਦੇ ਸੱਭਿਆਚਾਰ, ਵਿਰਾਸਤ, ਤਿਉਹਾਰ ਅਤੇ ਖਾਣੇ ਬਾਰੇ ਜਾਣੋ।", aiChatbot: "AI ਚੈਟਬੋਟ 🤖", typeMessage: "ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ...", send: "ਭੇਜੋ", you: "ਤੁਸੀਂ: ", ai: "AI: ", chatError: "ਮਾਫ਼ ਕਰਨਾ, ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ!" } },
  od: { translation: { ...common, home: "ମୁଖ୍ୟପୃଷ୍ଠା", explore: "ଅନ୍ୱେଷଣ", arExperience: "AR ଅନୁଭୂତି", about: "ଆମ ବିଷୟରେ", tourPlan: "ଭ୍ରମଣ ଯୋଜନା", login: "ଲଗଇନ୍", chooseLanguage: "ଭାଷା ବାଛନ୍ତୁ", discoverDiversity: "ଭାରତର ସାଂସ୍କୃତିକ ବିବିଧତା ଆବିଷ୍କାର କରନ୍ତୁ", diversityDescription: "ଭାରତୀୟ ରାଜ୍ୟଗୁଡ଼ିକର ଐତିହ୍ୟ, ପର୍ବ, ଖାଦ୍ୟ, କଳା ଓ ନୃତ୍ୟ ଦେଖନ୍ତୁ।", searchState: "🔍 ଭାରତୀୟ ରାଜ୍ୟ ଖୋଜନ୍ତୁ...", loadingStates: "ରାଜ୍ୟ ଲୋଡ୍ ହେଉଛି...", noState: "ରାଜ୍ୟ ମିଳିଲା ନାହିଁ 😕", exploreState: "{{state}} ଅନ୍ୱେଷଣ କରନ୍ତୁ →", stateCultureDescription: "{{state}}ର ସଂସ୍କୃତି, ଐତିହ୍ୟ, ପର୍ବ ଓ ଖାଦ୍ୟ ବିଷୟରେ ଜାଣନ୍ତୁ।", aiChatbot: "AI ଚାଟବଟ୍ 🤖", typeMessage: "ଆପଣଙ୍କ ବାର୍ତ୍ତା ଲେଖନ୍ତୁ...", send: "ପଠାନ୍ତୁ", you: "ଆପଣ: ", ai: "AI: ", chatError: "ଦୁଃଖିତ, କିଛି ଭୁଲ ହୋଇଛି!" } }
});

const coreTranslations = {
  bn: { siteName: "কালচার এক্সপ্লোরার", scanner: "স্ক্যানার", logout: "লগআউট", discoverDifferently: "✦ ভারতকে নতুনভাবে আবিষ্কার করুন", experienceCulture: "AR-এ ভারতের সংস্কৃতি অনুভব করুন", exploreCulture: "সংস্কৃতি অন্বেষণ করুন →", startARScan: "◉ AR স্ক্যান শুরু করুন", travelGuide: "🧭 ভ্রমণ গাইড", leaveReview: "★ পর্যালোচনা দিন", askAIGuide: "🤖 AI গাইডকে জিজ্ঞাসা করুন", indianHeritage: "ভারতীয় ঐতিহ্য", arReady: "AR প্রস্তুত", traditions: "ঐতিহ্য", festivals: "উৎসব", food: "খাবার", heritage: "ঐতিহ্য", aiChatbot: "AI চ্যাটবট 🤖", send: "পাঠান" },
  ta: { siteName: "கலாச்சார ஆய்வாளர்", scanner: "ஸ்கேனர்", logout: "வெளியேறு", discoverDifferently: "✦ இந்தியாவை வித்தியாசமாகக் கண்டறியுங்கள்", experienceCulture: "AR-ல் இந்திய கலாச்சாரத்தை அனுபவியுங்கள்", exploreCulture: "கலாச்சாரத்தை ஆராயுங்கள் →", startARScan: "◉ AR ஸ்கேனைத் தொடங்குங்கள்", travelGuide: "🧭 பயண வழிகாட்டி", leaveReview: "★ மதிப்புரை எழுதுங்கள்", askAIGuide: "🤖 AI வழிகாட்டியிடம் கேளுங்கள்", indianHeritage: "இந்திய பாரம்பரியம்", arReady: "AR தயார்", traditions: "மரபுகள்", festivals: "திருவிழாக்கள்", food: "உணவு", heritage: "பாரம்பரியம்", aiChatbot: "AI அரட்டை 🤖", send: "அனுப்பு" },
  te: { siteName: "కల్చర్ ఎక్స్‌ప్లోరర్", scanner: "స్కానర్", logout: "లాగ్ అవుట్", discoverDifferently: "✦ భారతదేశాన్ని భిన్నంగా అన్వేషించండి", experienceCulture: "ARలో భారత సంస్కృతిని అనుభవించండి", exploreCulture: "సంస్కృతిని అన్వేషించండి →", startARScan: "◉ AR స్కాన్ ప్రారంభించండి", travelGuide: "🧭 ప్రయాణ మార్గదర్శి", leaveReview: "★ సమీక్ష రాయండి", askAIGuide: "🤖 AI గైడ్‌ను అడగండి", indianHeritage: "భారత వారసత్వం", arReady: "AR సిద్ధంగా ఉంది", traditions: "సంప్రదాయాలు", festivals: "పండుగలు", food: "ఆహారం", heritage: "వారసత్వం", aiChatbot: "AI చాట్‌బాట్ 🤖", send: "పంపండి" },
  mr: { siteName: "कल्चर एक्सप्लोरर", scanner: "स्कॅनर", logout: "लॉगआउट", discoverDifferently: "✦ भारत वेगळ्या पद्धतीने जाणून घ्या", experienceCulture: "AR मध्ये भारताची संस्कृती अनुभवा", exploreCulture: "संस्कृती पाहा →", startARScan: "◉ AR स्कॅन सुरू करा", travelGuide: "🧭 प्रवास मार्गदर्शक", leaveReview: "★ अभिप्राय द्या", askAIGuide: "🤖 AI मार्गदर्शकाला विचारा", indianHeritage: "भारतीय वारसा", arReady: "AR तयार", traditions: "परंपरा", festivals: "सण", food: "अन्न", heritage: "वारसा", aiChatbot: "AI चॅटबॉट 🤖", send: "पाठवा" },
  gu: { siteName: "કલ્ચર એક્સપ્લોરર", scanner: "સ્કેનર", logout: "લૉગઆઉટ", discoverDifferently: "✦ ભારતને અલગ રીતે શોધો", experienceCulture: "AR માં ભારતની સંસ્કૃતિનો અનુભવ કરો", exploreCulture: "સંસ્કૃતિ શોધો →", startARScan: "◉ AR સ્કેન શરૂ કરો", travelGuide: "🧭 પ્રવાસ માર્ગદર્શિકા", leaveReview: "★ સમીક્ષા આપો", askAIGuide: "🤖 AI માર્ગદર્શકને પૂછો", indianHeritage: "ભારતીય વારસો", arReady: "AR તૈયાર", traditions: "પરંપરાઓ", festivals: "તહેવારો", food: "ભોજન", heritage: "વારસો", aiChatbot: "AI ચેટબોટ 🤖", send: "મોકલો" },
  kn: { siteName: "ಕಲ್ಚರ್ ಎಕ್ಸ್‌ಪ್ಲೋರರ್", scanner: "ಸ್ಕ್ಯಾನರ್", logout: "ಲಾಗ್‌ಔಟ್", discoverDifferently: "✦ ಭಾರತವನ್ನು ವಿಭಿನ್ನವಾಗಿ ಕಂಡುಕೊಳ್ಳಿ", experienceCulture: "AR ನಲ್ಲಿ ಭಾರತದ ಸಂಸ್ಕೃತಿಯನ್ನು ಅನುಭವಿಸಿ", exploreCulture: "ಸಂಸ್ಕೃತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ →", startARScan: "◉ AR ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ", travelGuide: "🧭 ಪ್ರವಾಸ ಮಾರ್ಗದರ್ಶಿ", leaveReview: "★ ವಿಮರ್ಶೆ ನೀಡಿ", askAIGuide: "🤖 AI ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಕೇಳಿ", indianHeritage: "ಭಾರತೀಯ ಪರಂಪರೆ", arReady: "AR ಸಿದ್ಧವಾಗಿದೆ", traditions: "ಸಂಪ್ರದಾಯಗಳು", festivals: "ಹಬ್ಬಗಳು", food: "ಆಹಾರ", heritage: "ಪರಂಪರೆ", aiChatbot: "AI ಚಾಟ್‌ಬಾಟ್ 🤖", send: "ಕಳುಹಿಸಿ" },
  ml: { siteName: "കൾച്ചർ എക്സ്പ്ലോറർ", scanner: "സ്കാനർ", logout: "ലോഗൗട്ട്", discoverDifferently: "✦ ഇന്ത്യയെ വ്യത്യസ്തമായി കണ്ടെത്തൂ", experienceCulture: "AR-ൽ ഇന്ത്യയുടെ സംസ്കാരം അനുഭവിക്കൂ", exploreCulture: "സംസ്കാരം കാണൂ →", startARScan: "◉ AR സ്കാൻ ആരംഭിക്കുക", travelGuide: "🧭 യാത്രാ ഗൈഡ്", leaveReview: "★ അവലോകനം എഴുതുക", askAIGuide: "🤖 AI ഗൈഡിനോട് ചോദിക്കൂ", indianHeritage: "ഇന്ത്യൻ പൈതൃകം", arReady: "AR തയ്യാറാണ്", traditions: "പാരമ്പര്യങ്ങൾ", festivals: "ഉത്സവങ്ങൾ", food: "ഭക്ഷണം", heritage: "പൈതൃകം", aiChatbot: "AI ചാറ്റ്ബോട്ട് 🤖", send: "അയയ്ക്കുക" },
  pa: { siteName: "ਕਲਚਰ ਐਕਸਪਲੋਰਰ", scanner: "ਸਕੈਨਰ", logout: "ਲੌਗਆਊਟ", discoverDifferently: "✦ ਭਾਰਤ ਨੂੰ ਵੱਖਰੇ ਢੰਗ ਨਾਲ ਜਾਣੋ", experienceCulture: "AR ਵਿੱਚ ਭਾਰਤ ਦੇ ਸੱਭਿਆਚਾਰ ਦਾ ਅਨੁਭਵ ਕਰੋ", exploreCulture: "ਸੱਭਿਆਚਾਰ ਖੋਜੋ →", startARScan: "◉ AR ਸਕੈਨ ਸ਼ੁਰੂ ਕਰੋ", travelGuide: "🧭 ਯਾਤਰਾ ਗਾਈਡ", leaveReview: "★ ਸਮੀਖਿਆ ਦਿਓ", askAIGuide: "🤖 AI ਗਾਈਡ ਨੂੰ ਪੁੱਛੋ", indianHeritage: "ਭਾਰਤੀ ਵਿਰਾਸਤ", arReady: "AR ਤਿਆਰ", traditions: "ਪਰੰਪਰਾਵਾਂ", festivals: "ਤਿਉਹਾਰ", food: "ਭੋਜਨ", heritage: "ਵਿਰਾਸਤ", aiChatbot: "AI ਚੈਟਬੋਟ 🤖", send: "ਭੇਜੋ" },
  od: { siteName: "କଲଚର ଏକ୍ସପ୍ଲୋରର", scanner: "ସ୍କାନର", logout: "ଲଗଆଉଟ୍", discoverDifferently: "✦ ଭାରତକୁ ଭିନ୍ନ ଭାବରେ ଆବିଷ୍କାର କରନ୍ତୁ", experienceCulture: "AR ରେ ଭାରତର ସଂସ୍କୃତି ଅନୁଭବ କରନ୍ତୁ", exploreCulture: "ସଂସ୍କୃତି ଅନ୍ୱେଷଣ କରନ୍ତୁ →", startARScan: "◉ AR ସ୍କାନ୍ ଆରମ୍ଭ କରନ୍ତୁ", travelGuide: "🧭 ଭ୍ରମଣ ଗାଇଡ୍", leaveReview: "★ ସମୀକ୍ଷା ଦିଅନ୍ତୁ", askAIGuide: "🤖 AI ଗାଇଡ୍‌ଙ୍କୁ ପଚାରନ୍ତୁ", indianHeritage: "ଭାରତୀୟ ଐତିହ୍ୟ", arReady: "AR ପ୍ରସ୍ତୁତ", traditions: "ପରମ୍ପରା", festivals: "ପର୍ବପର୍ବାଣି", food: "ଖାଦ୍ୟ", heritage: "ଐତିହ୍ୟ", aiChatbot: "AI ଚାଟବଟ୍ 🤖", send: "ପଠାନ୍ତୁ" }
};

Object.entries(coreTranslations).forEach(([language, translation]) => {
  resources[language].translation = { ...resources[language].translation, ...translation };
});

resources.hi.translation = {
  ...resources.hi.translation,
  tourPlanning: "टूर योजना",
  localExperts: "कल्चर एक्सप्लोरर स्थानीय विशेषज्ञ",
  availableGuides: "उपलब्ध यात्रा गाइड",
  reviewSubmitError: "रिव्यू सबमिट नहीं हो सका।",
  reviewConnectionError: "रिव्यू सेवा से कनेक्ट नहीं हो सका।",
  delhiSpecialist: "दिल्ली विशेषज्ञ",
  delhiLocation: "दिल्ली, भारत",
  hindiEnglish: "हिंदी, अंग्रेज़ी",
  delhiDescription: "हर कहानी जानने वाले गाइड के साथ दिल्ली की ऐतिहासिक गलियों, स्मारकों और स्थानीय भोजन को जानें।",
  agraExpert: "आगरा विशेषज्ञ",
  agraLocation: "आगरा, उत्तर प्रदेश",
  hindiEnglishFrench: "हिंदी, अंग्रेज़ी, फ़्रेंच",
  agraDescription: "सोच-समझकर तैयार किए गए पैदल टूर के साथ ताजमहल और आगरा की छिपी विरासत को जानें।",
  jaipurHeritageGuide: "जयपुर विरासत गाइड",
  jaipurLocation: "जयपुर, राजस्थान",
  jaipurDescription: "शाही वास्तुकला, कारीगर बाज़ारों और स्थानीय परंपराओं के माध्यम से पोस्टकार्ड से अलग जयपुर देखें।",
  hawaMahal: "हवा महल",
  tajMahal: "ताजमहल",
  chitrakoteFalls: "चित्रकोट जलप्रपात",
  jaipur: "जयपुर",
  agra: "आगरा",
  bastar: "बस्तर",
  jaipurRajasthan: "जयपुर, राजस्थान",
  agraUttarPradesh: "आगरा, उत्तर प्रदेश",
  bastarChhattisgarh: "बस्तर, छत्तीसगढ़",
  hawaMahalHistory: "हवा महल, जिसे पैलेस ऑफ विंड्स भी कहा जाता है, जयपुर में महाराजा सवाई प्रताप सिंह ने 1799 में बनवाया था।",
  hawaMahalAudio: "हवा महल जयपुर में महाराजा सवाई प्रताप सिंह द्वारा 1799 में बनवाया गया था।",
  tajMahalHistory: "ताजमहल आगरा में यमुना नदी के किनारे बना सफेद संगमरमर का मकबरा है, जिसे शाहजहाँ ने मुमताज़ महल की याद में बनवाया था।",
  tajMahalAudio: "ताजमहल आगरा में स्थित सफेद संगमरमर का मकबरा है, जिसे मुगल सम्राट शाहजहाँ ने बनवाया था।",
  chitrakoteHistory: "चित्रकोट जलप्रपात छत्तीसगढ़ के बस्तर में इंद्रावती नदी पर स्थित प्राकृतिक जलप्रपात है, जिसे भारत का नियाग्रा भी कहा जाता है।",
  chitrakoteAudio: "चित्रकोट जलप्रपात छत्तीसगढ़ के बस्तर में इंद्रावती नदी पर स्थित प्राकृतिक जलप्रपात है।",
  cameraAccessDenied: "कैमरा एक्सेस अस्वीकार किया गया",
  speechNotSupported: "ऑडियो टेक्स्ट-टू-स्पीच समर्थित नहीं है।",
  beaches: "समुद्र तट",
  mountains: "पहाड़",
  nature: "प्रकृति",
  shopping: "खरीदारी",
  adventure: "रोमांच",
  wellness: "वेलनेस और स्पा",
  photography: "फोटोग्राफी",
  nightlife: "रात्रि जीवन",
  scenicRoutes: "मनोरम मार्ग",
  departurePlaceholder: "जैसे रायपुर",
  destinationPlaceholder: "जैसे गोवा, मनाली, केरल",
  quality: "गुणवत्ता",
  value: "मूल्य",
  speed: "गति",
  support: "सहायता",
  design: "डिज़ाइन",
  easeOfUse: "उपयोग में आसानी"
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("culture-language") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on("languageChanged", (language) => {
  localStorage.setItem("culture-language", language);
});

export default i18n;