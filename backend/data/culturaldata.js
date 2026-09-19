const culturalHighlights = {
  "Andhra Pradesh": ["Ugadi, Sankranti", "Pulihora, gongura pachadi", "Kuchipudi traditions", "Tirupati, Amaravati heritage", "Carnatic and folk music", "Kalamkari and Kondapalli toys"],
  "Arunachal Pradesh": ["Losar, Solung", "Thukpa, momos", "Tribal community traditions", "Tawang Monastery", "Monpa folk songs", "Bamboo and tribal crafts"],
  Assam: ["Bihu, Ambubachi Mela", "Khar, pitha", "Bihu community traditions", "Sivasagar monuments", "Bihu and Ojapali music", "Muga silk and bamboo craft"],
  Bihar: ["Chhath Puja, Sonepur Mela", "Litti chokha, thekua", "Chhath worship traditions", "Nalanda, Bodh Gaya", "Maithili folk music", "Madhubani painting"],
  Chhattisgarh: ["Bastar Dussehra, Hareli", "Chila, fara", "Adivasi traditions", "Sirpur, Chitrakote", "Pandavani music", "Dhokra and bell-metal craft"],
  Goa: ["Carnival, Shigmo", "Goan fish curry, bebinca", "Catholic and Konkan traditions", "Old Goa churches", "Mando and Konkani music", "Azulejo and shell craft"],
  Gujarat: ["Navratri, Rann Utsav", "Dhokla, undhiyu", "Garba and textile traditions", "Rani ki Vav, Dwarka", "Garba folk music", "Bandhani and Patola"],
  Haryana: ["Baisakhi, Teej", "Bajra khichdi, churma", "Rural wrestling and farming customs", "Rakhigarhi heritage", "Ragini folk music", "Phulkari and pottery"],
  "Himachal Pradesh": ["Kullu Dussehra, Losar", "Dham, sidu", "Mountain village traditions", "Shimla and Buddhist monasteries", "Nati folk music", "Wool weaving and wood carving"],
  "Jammu and Kashmir": ["Baisakhi, Tulip Festival", "Rogan josh, kahwa", "Kashmiri hospitality traditions", "Mughal gardens, monasteries", "Sufiana kalam", "Pashmina and papier-mache"],
  Jharkhand: ["Sarhul, Karma", "Dhuska, rugra", "Adivasi nature traditions", "Deogarh temples", "Jhumar and Nagpuri music", "Sohrai and Khovar art"],
  Karnataka: ["Mysuru Dasara, Ugadi", "Bisi bele bath, neer dosa", "Yakshagana traditions", "Hampi, Pattadakal", "Carnatic and folk music", "Mysore painting and sandalwood craft"],
  Kerala: ["Onam, Vishu", "Appam, sadya", "Ayurveda and temple traditions", "Fort Kochi, Padmanabhaswamy Temple", "Sopana and Carnatic music", "Kathakali and mural painting"],
  "Madhya Pradesh": ["Khajuraho Dance Festival, Bhagoria", "Poha, dal bafla", "Tribal and royal traditions", "Khajuraho, Sanchi", "Baul and Gond folk music", "Gond painting and Chanderi weaving"],
  Maharashtra: ["Ganesh Chaturthi, Gudi Padwa", "Vada pav, misal pav", "Warkari pilgrimage traditions", "Ajanta, Ellora, Raigad", "Lavani and powada", "Warli painting and Paithani"],
  Manipur: ["Yaoshang, Lai Haraoba", "Eromba, singju", "Meitei cultural traditions", "Kangla Fort", "Pena and Ras music", "Moirang phee and pottery"],
  Meghalaya: ["Wangala, Shad Suk Mynsiem", "Jadoh, tungrymbai", "Khasi, Garo and Jaintia customs", "Living root bridges", "Wangala drum music", "Bamboo craft and weaving"],
  Mizoram: ["Chapchar Kut, Mim Kut", "Bai, sawhchiar", "Community feast traditions", "Aizawl heritage", "Cheraw dance music", "Bamboo and handloom craft"],
  Nagaland: ["Hornbill Festival, Moatsu", "Smoked pork, axone", "Naga village traditions", "Kohima War Cemetery", "Naga warrior songs", "Shawl weaving and beadwork"],
  Odisha: ["Rath Yatra, Raja Parba", "Pakhala, dalma", "Jagannath traditions", "Konark, Puri temples", "Odissi music", "Pattachitra and silver filigree"],
  Punjab: ["Baisakhi, Lohri", "Sarson da saag, kulcha", "Farming and community traditions", "Golden Temple, Jallianwala Bagh", "Bhangra and Gurbani", "Phulkari and Punjabi jutti"],
  Rajasthan: ["Gangaur, Pushkar Fair", "Dal baati churma, ghevar", "Rajput and desert traditions", "Forts and palaces of Jaipur", "Ghoomar and folk ballads", "Phad painting and blue pottery"],
  Sikkim: ["Losar, Pang Lhabsol", "Thukpa, momos", "Buddhist monastery traditions", "Rumtek Monastery", "Cham music", "Thangka painting and carpet weaving"],
  "Tamil Nadu": ["Pongal, Thaipusam", "Dosa, idli, sambar", "Temple and Kolam traditions", "Mahabalipuram, Brihadeeswarar Temple", "Carnatic music", "Tanjore painting and bronze sculpture"],
  Telangana: ["Bathukamma, Bonalu", "Hyderabadi biryani, sarva pindi", "Deccan and village traditions", "Charminar, Warangal Fort", "Oggu Katha and folk music", "Cheriyal scrolls and Bidri craft"],
  Tripura: ["Kharchi Puja, Garia Puja", "Mui borok, chakhwi", "Tribal and royal traditions", "Ujjayanta Palace, Neermahal", "Hojagiri folk music", "Bamboo and cane craft"],
  "Uttar Pradesh": ["Holi, Diwali, Kumbh Mela", "Awadhi biryani, peda", "Ganga and pilgrimage traditions", "Taj Mahal, Varanasi ghats", "Hindustani classical music", "Chikankari and Banarasi silk"],
  Uttarakhand: ["Nanda Devi Raj Jat, Harela", "Kafuli, bal mithai", "Mountain and pilgrimage traditions", "Kedarnath, Badrinath", "Jagar folk music", "Aipan art and wool craft"],
  "West Bengal": ["Durga Puja, Poila Boishakh", "Rasgulla, macher jhol", "Bengali literary traditions", "Victoria Memorial, Bishnupur", "Rabindra Sangeet and Baul", "Kantha and terracotta art"],
  "Andaman and Nicobar Islands": ["Island festivals, Subhash Mela", "Seafood and coconut dishes", "Indigenous island traditions", "Cellular Jail, Ross Island", "Nicobari folk music", "Shell and coconut craft"],
  Chandigarh: ["Baisakhi, Rose Festival", "Punjabi and North Indian food", "Planned city traditions", "Capitol Complex, Rock Garden", "Punjabi folk music", "Mosaic and recycled art"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Nariyal Purnima, Navratri", "Seafood, ubadiyu", "Warli and coastal traditions", "Diu Fort, tribal villages", "Tarpa folk music", "Warli painting and bamboo craft"],
  Delhi: ["Diwali, Qutub Festival", "Chaat, kebabs, parathas", "Mughal and modern city culture", "Red Fort, Qutub Minar", "Hindustani and Sufi music", "Zardozi and miniature art"],
  Ladakh: ["Hemis Festival, Losar", "Thukpa, skyu", "Tibetan Buddhist traditions", "Leh Palace, monasteries", "Monastic chanting", "Thangka and wool craft"],
  Lakshadweep: ["Eid, Minicoy festivals", "Tuna dishes, coconut curry", "Island seafaring traditions", "Coral islands and mosques", "Lava folk music", "Coconut and coir craft"],
  Puducherry: ["Pongal, Bastille Day", "Creole cuisine, seafood", "Tamil and French traditions", "French Quarter, Auroville", "Tamil folk and Carnatic music", "Kolam and handmade crafts"]
};

const emojis = ["🌺", "🏛️", "🎭", "🌿", "🪔", "🎨"];

const mediaData = {
  Bihar: {
    food: [
      {
        name: "Litti Chokha",
        image: "/images/bihar/food/litti-chokha.jpg",
        desc: "A traditional and famous food of Bihar."
      },
      {
        name: "Malpua",
        image: "/images/bihar/food/Malpua.jpg",
        desc: "A traditional sweet dish enjoyed in Bihar."
      }
    ],

    traditions: [
      {
        name: "Chhath Tradition",
        image: "/images/bihar/tradition/chhat.jpg",
        desc: "Traditional customs associated with Chhath."
      },
      {
        name: "Mithila Tradition",
        image: "/images/bihar/tradition/Mithila Painting.jpg",
        desc: "Traditional cultural practices of the Mithila region."
      }
    ],

    dance: [
      {
        name: "Magadhi Jhumur",
        image: "/images/bihar/dance/bihar dance magadhi jhumur.jpg",
        desc: "A traditional folk dance of Bihar."
      },
      {
        name: "Jat-Jatin",
        image: "/images/bihar/dance/jat-jatin.jpg",
        desc: "A traditional folk dance of Bihar."
      }
    ],

    music: [
      {
        name: "Bhadu",
        image: "/images/bihar/music/bhadu.jpg",
        desc: "A traditional folk music tradition."
      },
      {
        name: "Bidesia",
        image: "/images/bihar/music/Bidesia – Folk Dance Drama From Bihar.jpg",
        desc: "A famous folk theatre and musical tradition of Bihar."
      }
    ],

    heritage: [
      {
        name: "Bodh Gaya",
        latitude: 24.695,
        longitude: 84.9925,
        image: "/images/bihar/heritage/Bodh Gaya, Bihar, India.jpg",
        desc: "An important heritage and pilgrimage site of Bihar."
      },
      {
        name: "Nalanda",
        latitude: 25.1357,
        longitude: 85.4437,
        image: "/images/bihar/heritage/Nalanda Ruins, Bihar.jpg",
        desc: "Historic ruins of the ancient Nalanda University."
      },
      {
        name: "Vikramshila University",
        latitude: 25.3245,
        longitude: 87.288,
        image: "/images/bihar/heritage/Vikramshila University.jpg",
        desc: "An important ancient centre of learning."
      }
    ],

    culture: [
      {
        name: "Chhath Culture",
        image: "/images/bihar/culture/chhat.jpg",
        desc: "A glimpse of Bihar's cultural traditions."
      },
      {
        name: "Mithila Culture",
        image: "/images/bihar/culture/Mithila Painting.jpg",
        desc: "The distinctive cultural heritage of Mithila."
      }
    ],

     art: [
  {
    name: "Madhubani Art",
    image: "/images/bihar/arts/madhubani.jpg",
    video: "/videos/bihar/art craft/madhubani painting.mp4",
    desc: "Traditional painting style associated with Bihar."
  },
      {
        name: "Sikki Art",
        image: "/images/bihar/arts/sikki.jpg",
        desc: "Traditional craft made from golden grass."
      }
    ],

    festivals: [
      {
        name: "Chhath Puja",
        video: "/videos/bihar/festival/chhath puja.mp4",
        desc: "One of the major festivals celebrated in Bihar."
      }
    ]
  },

  Chhattisgarh: {
    food: [
      {
        name: "Aamat",
        image: "/images/chhattisgarh/food/Aamat.jpg",
        desc: "A traditional dish of Chhattisgarh."
      },
      {
        name: "Chila Roti",
        image: "/images/chhattisgarh/food/Chila Roti of Chhattisgarh.jpg",
        desc: "A popular traditional food of Chhattisgarh."
      },
      {
        name: "Fara",
        image: "/images/chhattisgarh/food/fara.jpg",
        desc: "A traditional steamed food of Chhattisgarh."
      }
    ],

    traditions: [
      {
        name: "Haat Tradition",
        image: "/images/chhattisgarh/tradition/haat.jpg",
        desc: "Traditional weekly market culture."
      },
      {
        name: "Tribal Tradition",
        image: "/images/chhattisgarh/tradition/tribal.jpg",
        desc: "Traditional tribal customs and lifestyle."
      }
    ],

    dance: [
      {
        name: "Panthi",
        image: "/images/chhattisgarh/dance/panthi.jpg",
        desc: "A traditional folk dance of Chhattisgarh."
      },
      {
        name: "Raut Nacha",
        image: "/images/chhattisgarh/dance/Raut Nacha.jpg",
        desc: "A traditional folk dance of Chhattisgarh."
      }
    ],

    music: [
      {
        name: "Folk Music",
        image: "/images/chhattisgarh/music/folk-music.jpg",
        desc: "Traditional folk music of Chhattisgarh."
      },
      {
        name: "Pandavani",
        image: "/images/chhattisgarh/music/pandvani.jpg",
        desc: "A traditional musical storytelling tradition."
      }
    ],

    heritage: [
      {
        name: "Bhoramdev Temple",
        latitude: 22.097,
        longitude: 81.197,
        image: "/images/chhattisgarh/heritage/BHORAMDEV 🔱.jpg",
        desc: "A historic temple complex of Chhattisgarh."
      },
      {
        name: "Chitrakoot Waterfall",
        latitude: 19.205,
        longitude: 81.702,
        image: "/images/chhattisgarh/heritage/Chitrakoot Waterfall.jpg",
        desc: "A famous natural heritage site."
      },
      {
        name: "Lakshmana Temple, Sirpur",
        latitude: 21.466,
        longitude: 82.183,
        image: "/images/chhattisgarh/heritage/Lakshmana Temple - Sirpur.jpg",
        desc: "An important historical temple at Sirpur."
      }
    ],

    culture: [
      {
        name: "Chhattisgarh Culture",
        image: "/images/chhattisgarh/culture/chhatisgarh culture.jpg",
        desc: "A glimpse of the cultural identity of Chhattisgarh."
      },
      {
        name: "Tribal Culture",
        image: "/images/chhattisgarh/culture/tribal.jpg",
        desc: "Traditional tribal culture and lifestyle."
      }
    ],

    art: [
      {
        name: "Bamboo Craft",
        image: "/images/chhattisgarh/arts/Bamboo craft.jpg",
        desc: "Traditional bamboo craft of Chhattisgarh."
      },
     {
  name: "Bell Metal Craft",
  image: "/images/chhattisgarh/arts/bell-metal art.jpg",
  video: "/videos/chhattisgarh/art craft/bell metal craft.mp4",
  desc: "Traditional bell metal craft of Chhattisgarh."
},
      {
        name: "Terracotta Art",
        image: "/images/chhattisgarh/arts/terracota art.jpg",
        desc: "Traditional terracotta artwork."
      }
    ],

    festivals: [
      {
        name: "Bastar Dussehra",
        video: "/videos/chhattisgarh/festival/bastar dusshera.mp4",
        desc: "A major traditional festival of Bastar."
      }
    ]
  },

  Gujarat: {
    food: [
      {
        name: "Dhokla",
        image: "/images/gujarat/food/Dhokla, Indian Snacks.jpg",
        desc: "A famous Gujarati steamed snack."
      },
      {
        name: "Fafda",
        image: "/images/gujarat/food/Fafda -Gujarati breakfast.jpg",
        desc: "A popular traditional Gujarati snack."
      },
      {
        name: "Thepla",
        image: "/images/gujarat/food/Thepla.jpg",
        desc: "A popular Gujarati flatbread."
      }
    ],

    traditions: [
      {
        name: "Garba Tradition",
        image: "/images/gujarat/tradition/garba tradition.jpg",
        desc: "A traditional community dance and celebration."
      },
      {
        name: "Kutch Tradition",
        image: "/images/gujarat/tradition/Kutch tradition.jpg",
        desc: "Traditional culture and lifestyle of Kutch."
      }
    ],

    dance: [
      {
        name: "Dandiya Raas",
        image: "/images/gujarat/dance/Dandiya raas.jpg",
        desc: "A popular traditional Gujarati dance."
      },
      {
        name: "Garba",
        image: "/images/gujarat/dance/garba.jpg",
        desc: "A famous traditional dance of Gujarat."
      }
    ],

    music: [
      {
        name: "Dayro Music",
        image: "/images/gujarat/music/Dayro music.jpg",
        desc: "A traditional Gujarati folk music form."
      },
      {
        name: "Gujarati Folk Music",
        image: "/images/gujarat/music/folk music gujarat.jpg",
        desc: "Traditional folk music of Gujarat."
      }
    ],

    heritage: [
      {
        name: "Dwarka",
        latitude: 22.24638889,
        longitude: 68.96666667,
        image: "/images/gujarat/heritage/Dwarka 🛕🚩🙏🏻.jpg",
        desc: "An important cultural and heritage city of Gujarat."
      },
      {
        name: "Modhera Sun Temple",
        latitude: 23.58380556,
        longitude: 72.13268611,
        image: "/images/gujarat/heritage/Modhera Sun Temple Gujarat (1).jpg",
        desc: "A historic temple dedicated to the Sun God."
      },
      {
        name: "Rani ki Vav",
        latitude: 23.85888889,
        longitude: 72.10166667,
        image: "/images/gujarat/heritage/Rani ki Vav - Gujarat, India.jpg",
        desc: "A famous stepwell and UNESCO World Heritage Site."
      }
    ],

    culture: [
      {
        name: "Gujarati Culture",
        image: "/images/gujarat/culture/gujarati culture.jpg",
        desc: "A glimpse of Gujarati culture."
      },
      {
        name: "Kutch Culture",
        image: "/images/gujarat/culture/kutch culture.jpg",
        desc: "Traditional culture of the Kutch region."
      }
    ],

    art: [
      {
        name: "Bandhani Art",
        image: "/images/gujarat/arts/Bandhani art.jpg",
        desc: "Traditional tie-dye art of Gujarat."
      },
      {
        name: "Kutch Embroidery",
        image: "/images/gujarat/arts/Kutch Embroidery.jpg",
        desc: "Traditional embroidery from Kutch."
      },
      {
        name: "Patola Art",
        image: "/images/gujarat/arts/patola art.jpg",
        desc: "Traditional Patola textile art."
      }
    ],

    festivals: [
      {
        name: "Navratri",
        video: "/videos/gujarat/navratri.mp4",
        desc: "A vibrant festival celebrated with Garba and Dandiya."
      }
    ]
  },

  Kerala: {
    food: [
      {
        name: "Appam",
        image: "/images/kerala/food/Appam.jpg",
        desc: "A traditional Kerala rice pancake."
      },
      {
        name: "Puttu Kadala",
        image: "/images/kerala/food/Puttu Kadala.jpg",
        desc: "A popular traditional Kerala breakfast."
      },
      {
        name: "Sadya",
        image: "/images/kerala/food/Sadya.jpg",
        desc: "A traditional Kerala feast."
      }
    ],

    traditions: [
      {
        name: "Kasavu Saree",
        image: "/images/kerala/tradition/kasavu saree.jpg",
        desc: "A traditional Kerala clothing style."
      },
      {
        name: "Kerala Tradition",
        image: "/images/kerala/tradition/kerala tradition.jpg",
        desc: "Traditional customs and lifestyle of Kerala."
      }
    ],

    dance: [
      {
        name: "Kathakali",
        image: "/images/kerala/dance/kathakali.jpg",
        desc: "A classical dance-drama tradition of Kerala."
      },
      {
        name: "Mohiniyattam",
        image: "/images/kerala/dance/mohiniyattam.jpg",
        desc: "A classical dance form of Kerala."
      }
    ],

    music: [
      {
        name: "Chenda Music",
        image: "/images/kerala/music/Chenda music.jpg",
        desc: "Traditional percussion music of Kerala."
      },
      {
        name: "Kerala Folk Music",
        image: "/images/kerala/music/kerala folk music.jpg",
        desc: "Traditional folk music of Kerala."
      }
    ],

    heritage: [
      {
        name: "Bekal Fort",
        latitude: 12.391,
        longitude: 75.034,
        image: "/images/kerala/heritage/Bekal fort🏰.jpg",
        desc: "A historic fort overlooking the Arabian Sea."
      },
      {
        name: "Padmanabhapuram Palace",
        latitude: 8.248,
        longitude: 77.327,
        image: "/images/kerala/heritage/Padmanabhapuram Palace__,THIRUVANANTHAPURAM_.jpg",
        desc: "A historic palace of Kerala."
      },
      {
        name: "St. Francis Basilica",
        latitude: 9.966,
        longitude: 76.242,
        image: "/images/kerala/heritage/St_Francis Basilica Church, Fort Kochi.jpg",
        desc: "A historic church in Fort Kochi."
      }
    ],

    culture: [
      {
        name: "Kerala Culture",
        image: "/images/kerala/culture/kerala culture.jpg",
        desc: "A glimpse of Kerala's cultural identity."
      },
      {
        name: "Temple Culture",
        image: "/images/kerala/culture/temple culture.jpg",
        desc: "Traditional temple culture of Kerala."
      }
    ],

    art: [
      {
        name: "Coir Craft",
        image: "/images/kerala/arts/coir craft.jpg",
        desc: "Traditional craft made using coconut fibre."
      },
      {
        name: "Kasavu Weaving",
        image: "/images/kerala/arts/kasavu weaving.jpg",
        desc: "Traditional textile weaving of Kerala."
      },
      {
        name: "Mural Painting",
        image: "/images/kerala/arts/mural painting.jpg",
        desc: "Traditional Kerala mural painting."
      }
    ],

    festivals: [
      {
        name: "Onam",
        video: "/videos/kerala/onam.mp4",
        desc: "A major harvest festival of Kerala."
      }
    ]
  },

  "Madhya Pradesh": {
    food: [
      {
        name: "Bhutte Ka Khees",
        image: "/images/madhya-pradesh/food/Bhutte Ka Khees – Madhya Pradesh.jpg",
        desc: "A traditional corn-based dish of Madhya Pradesh."
      },
      {
        name: "Dal Bafla",
        image: "/images/madhya-pradesh/food/Dal bafla.jpg",
        desc: "A famous traditional dish of Madhya Pradesh."
      },
      {
        name: "Poha Jalebi",
        image: "/images/madhya-pradesh/food/Poha jalebi.jpg",
        desc: "A popular breakfast combination in Madhya Pradesh."
      }
    ],

    traditions: [
      {
        name: "Gond Tradition",
        image: "/images/madhya-pradesh/tradition/Gond tradition.jpg",
        desc: "Traditional Gond community customs."
      },
      {
        name: "Tribal Tradition",
        image: "/images/madhya-pradesh/tradition/tribal tradition.jpg",
        desc: "Traditional tribal lifestyle and customs."
      }
    ],

    dance: [
      {
        name: "Matki Folk Dance",
        image: "/images/madhya-pradesh/dance/Matki Folk Dance.jpg",
        desc: "A traditional folk dance of Madhya Pradesh."
      },
      {
        name: "Rai Dance",
        image: "/images/madhya-pradesh/dance/Raai Dance.jpg",
        desc: "A traditional folk dance of Madhya Pradesh."
      }
    ],

    music: [
      {
        name: "Folk Music",
        image: "/images/madhya-pradesh/music/folk music.jpg",
        desc: "Traditional folk music of Madhya Pradesh."
      }
    ],

    heritage: [
      {
        name: "Gwalior Fort",
        latitude: 26.2315,
        longitude: 78.1697,
        image: "/images/madhya-pradesh/heritage/Gwalior Fort, India.jpg",
        desc: "A historic fort of Madhya Pradesh."
      },
      {
        name: "Khajuraho",
        latitude: 24.854422,
        longitude: 79.921427,
        image: "/images/madhya-pradesh/heritage/Khajuraho.jpg",
        desc: "Famous historic temples of Madhya Pradesh."
      },
      {
        name: "Sanchi Stupa",
        latitude: 23.479223,
        longitude: 77.739683,
        image: "/images/madhya-pradesh/heritage/Sanchi stupa.jpg",
        desc: "An important Buddhist heritage site."
      }
    ],

    culture: [
      {
        name: "Madhya Pradesh Culture",
        image: "/images/madhya-pradesh/culture/Madhya Pradesh culture.jpg",
        desc: "A glimpse of Madhya Pradesh culture."
      }
    ],

    art: [
      {
        name: "Bagh Printing",
        image: "/images/madhya-pradesh/arts/Bagh Printing from Madhya Pradesh.jpg",
        desc: "Traditional hand block printing of Madhya Pradesh."
      },
      {
        name: "Chanderi Weaving",
        image: "/images/madhya-pradesh/arts/chanderi weaving.jpg",
        desc: "Traditional Chanderi textile weaving."
      },
      {
  name: "Gond Painting",
  image: "/images/madhya-pradesh/arts/Gond painting.jpg",
  video: "/videos/madhya-pradesh/art craft/gond painting.mp4",
  desc: "Traditional Gond painting of Madhya Pradesh."
},
    ],

    festivals: [
      {
        name: "Bhagoria",
        video: "/videos/madhya-pradesh/festival/bhagoria.mp4",
        desc: "A traditional tribal festival of Madhya Pradesh."
      }
    ]
  },

  Punjab: {
    food: [
      {
        name: "Chole Kulche",
        image: "/images/punjab/food/Chole & Kulche.jpg",
        desc: "A popular Punjabi food."
      },
      {
        name: "Makki di Roti with Saag",
        image: "/images/punjab/food/Makki ki roti with saag.jpg",
        desc: "A traditional Punjabi combination."
      },
      {
        name: "Sarson da Saag",
        image: "/images/punjab/food/Sarson ka Saag.jpg",
        desc: "A famous traditional Punjabi dish."
      }
    ],

    traditions: [
      {
        name: "Punjabi Tradition",
        image: "/images/punjab/tradition/punjabi tradition.jpg",
        desc: "Traditional customs and lifestyle of Punjab."
      },
      {
        name: "Turban Tradition",
        image: "/images/punjab/tradition/turban tradition.jpg",
        desc: "Traditional Punjabi turban culture."
      }
    ],

    dance: [
      {
        name: "Bhangra",
        image: "/images/punjab/dance/Bhangra.jpg",
        desc: "A famous energetic folk dance of Punjab."
      },
      {
        name: "Giddha",
        image: "/images/punjab/dance/giddha.jpg",
        desc: "A traditional Punjabi women's folk dance."
      }
    ],

    music: [
      {
        name: "Punjabi Folk Music",
        image: "/images/punjab/music/punjabi folk music.jpg",
        desc: "Traditional folk music of Punjab."
      },
      {
        name: "Tumbi Music",
        image: "/images/punjab/music/tumbi music.jpg",
        desc: "Traditional music using the tumbi."
      }
    ],

    heritage: [
      {
        name: "Golden Temple",
        latitude: 31.62,
        longitude: 74.87638889,
        image: "/images/punjab/heritage/Golden Temple (Amritsar, India).jpg",
        desc: "A major cultural and spiritual heritage site."
      },
      {
        name: "Jallianwala Bagh",
        latitude: 31.620,
        longitude: 74.880,
        image: "/images/punjab/heritage/Jallianwala Bagh Memorial , Amritsar, Punjab Editorial Stock Image - Image of india, amritsar_ 87831439.jpg",
        desc: "An important historic site in Amritsar."
      },
      {
        name: "Wagah-Attari Border",
        latitude: 31.604,
        longitude: 74.574,
        image: "/images/punjab/heritage/Wagah-Attari Border, Punjab 📌.jpg",
        desc: "A well-known landmark on the India-Pakistan border."
      }
    ],

    culture: [
      {
        name: "Punjabi Culture",
        image: "/images/punjab/culture/Punjabi culture.jpg",
        desc: "A glimpse of Punjabi culture."
      },
      {
        name: "Village Culture",
        image: "/images/punjab/culture/village culture.jpg",
        desc: "Traditional rural lifestyle of Punjab."
      }
    ],

    art: [
      {
        name: "Phulkari",
        image: "/images/punjab/art/phulkari.jpg",
        desc: "Traditional Punjabi embroidery."
      },
      {
        name: "Punjabi Jutti",
        image: "/images/punjab/art/punjabi jutti.jpg",
        desc: "Traditional handcrafted footwear."
      },
      {
        name: "Wood Craft",
        image: "/images/punjab/art/wood craft.jpg",
        desc: "Traditional Punjabi wood craft."
      }
    ],

    festivals: [
      {
        name: "Lohri",
        video: "/videos/punjab/festival/lohri.mp4",
        desc: "A popular winter festival celebrated in Punjab."
      }
    ]
  },

  Rajasthan: {
    food: [
      {
        name: "Dal Baati Churma",
        image: "/images/rajasthan/food/Dal Baati Churma.jpg",
        desc: "A famous traditional Rajasthani dish."
      },
      {
        name: "Ghevar",
        image: "/images/rajasthan/food/Ghevar😋.jpg",
        desc: "A traditional Rajasthani sweet."
      },
      {
        name: "Laal Maas",
        image: "/images/rajasthan/food/Laal Maas.jpg",
        desc: "A traditional spicy Rajasthani dish."
      }
    ],

    traditions: [
      {
        name: "Camel Tradition",
        image: "/images/rajasthan/tradition/camel tradition.jpg",
        desc: "Camel culture and desert traditions of Rajasthan."
      },
      {
        name: "Desert Tradition",
        image: "/images/rajasthan/tradition/desert tradition.jpg",
        desc: "Traditional desert lifestyle of Rajasthan."
      }
    ],

    dance: [
      {
        name: "Ghoomar",
        image: "/images/rajasthan/dance/Ghoomar dance.jpg",
        desc: "A famous traditional dance of Rajasthan."
      },
      {
        name: "Kalbelia",
        image: "/images/rajasthan/dance/kalbelia dance.jpg",
        desc: "A traditional folk dance of Rajasthan."
      }
    ],

    music: [
      {
        name: "Kamayacha Music",
        image: "/images/rajasthan/music/Kamayacha music.jpg",
        desc: "Traditional Rajasthani folk music."
      },
      {
        name: "Rajasthani Folk Music",
        image: "/images/rajasthan/music/Rajasthani Folk Music.jpg",
        desc: "Traditional folk music of Rajasthan."
      }
    ],

    heritage: [
      {
        name: "Amer Fort",
        latitude: 26.9859,
        longitude: 75.8507,
        image: "/images/rajasthan/heritage/Amer Fort.jpg",
        desc: "A famous historic fort in Jaipur."
      },
      {
        name: "City Palace",
        latitude: 26.9258,
        longitude: 75.8236,
        image: "/images/rajasthan/heritage/City Palace.jpg",
        desc: "A historic royal palace complex."
      },
      {
        name: "Hawa Mahal",
        latitude: 26.9239,
        longitude: 75.8267,
        image: "/images/rajasthan/heritage/Hawa mahal in Jaipur, Rajasthan.jpg",
        desc: "One of Jaipur's most famous heritage landmarks."
      }
    ],

    culture: [
      {
        name: "Desert Culture",
        image: "/images/rajasthan/culture/desert culture.jpg",
        desc: "Traditional desert culture of Rajasthan."
      },
      {
        name: "Rajasthani Culture",
        image: "/images/rajasthan/culture/rajasthani culture.jpg",
        desc: "A glimpse of Rajasthan's cultural identity."
      }
    ],

    art: [
      {
        name: "Block Printing",
        image: "/images/rajasthan/arts/Block Prints.jpg",
        desc: "Traditional textile block printing."
      },
     {
  name: "Blue Pottery",
  image: "/images/rajasthan/arts/Blue Pottery.jpg",
  video: "/videos/rajasthan/art craft/blue pottery.mp4",
  desc: "Traditional blue pottery craft of Rajasthan."
},
      {
        name: "Phad Painting",
        image: "/images/rajasthan/arts/Phad Painting.jpg",
        desc: "Traditional narrative painting of Rajasthan."
      }
    ],

    festivals: [
      {
        name: "Gangaur",
        video: "/videos/rajasthan/festival/gangaur.mp4",
        desc: "A traditional festival celebrated across Rajasthan."
      }
    ]
  },

  "Tamil Nadu": {
    food: [
      {
        name: "Dosa",
        image: "/images/tamil-nadu/food/dosaa.jpg",
        desc: "A popular South Indian dish."
      },
      {
        name: "Idli Sambar",
        image: "/images/tamil-nadu/food/Idli sambhar.jpg",
        desc: "A traditional Tamil Nadu breakfast."
      },
      {
        name: "Pongal",
        image: "/images/tamil-nadu/food/pongal.jpg",
        desc: "A traditional rice-based dish."
      }
    ],

    traditions: [
      {
        name: "Kolam",
        image: "/images/tamil-nadu/tradition/kolam.jpg",
        desc: "Traditional decorative floor art."
      },
      {
        name: "Tamil Tradition",
        image: "/images/tamil-nadu/tradition/tamil tradition.jpg",
        desc: "Traditional customs and lifestyle of Tamil Nadu."
      }
    ],

    dance: [
      {
        name: "Bharatanatyam",
        image: "/images/tamil-nadu/dance/Bharatanatyam.jpg",
        desc: "A classical Indian dance form from Tamil Nadu."
      },
      {
        name: "Karagattam",
        image: "/images/tamil-nadu/dance/karagattam.jpg",
        desc: "A traditional Tamil folk dance."
      }
    ],

    music: [
      {
        name: "Carnatic Music",
        image: "/images/tamil-nadu/music/carnatic music.jpg",
        desc: "A major classical music tradition of South India."
      },
      {
        name: "Nadaswaram",
        image: "/images/tamil-nadu/music/nadaswaram music.jpg",
        desc: "Traditional Tamil musical performance."
      }
    ],

    heritage: [
      {
        name: "Brihadeeswarar Temple",
        latitude: 10.7828,
        longitude: 79.1316,
        image: "/images/tamil-nadu/heritage/Brihadeeswarar Temple.jpg",
        desc: "A famous Chola-era temple."
      },
      {
        name: "Meenakshi Temple",
        latitude: 9.9195,
        longitude: 78.1193,
        image: "/images/tamil-nadu/heritage/meenakshi temple.jpg",
        desc: "A famous historic temple of Madurai."
      },
      {
        name: "Shore Temple",
        latitude: 12.6161,
        longitude: 80.1997,
        image: "/images/tamil-nadu/heritage/Shore temple.jpg",
        desc: "A historic temple at Mahabalipuram."
      }
    ],

    culture: [
      {
        name: "Tamil Culture",
        image: "/images/tamil-nadu/culture/tamil culture.jpg",
        desc: "A glimpse of Tamil cultural heritage."
      },
      {
        name: "Temple Culture",
        image: "/images/tamil-nadu/culture/temple culture TN.jpg",
        desc: "Traditional temple culture of Tamil Nadu."
      }
    ],

    art: [
      {
        name: "Bronze Sculpture",
        image: "/images/tamil-nadu/art/bronze sculpture.jpg",
        desc: "Traditional South Indian bronze sculpture."
      },
      {
        name: "Kanchipuram Silk",
        image: "/images/tamil-nadu/art/Kanchipuram Silk.jpg",
        desc: "Traditional silk weaving of Tamil Nadu."
      },
      {
        name: "Tanjore Painting",
        image: "/images/tamil-nadu/art/tanjore painting.jpg",
        desc: "Traditional Tanjore painting."
      }
    ],

    festivals: [
      {
        name: "Pongal",
        video: "/videos/tamil-nadu/pongal.mp4",
        desc: "A major harvest festival of Tamil Nadu."
      }
    ]
  },

  "Uttar Pradesh": {
    food: [
      {
        name: "Awadhi Biryani",
        image: "/images/uttar-pradesh/food/Awadhi biryani.jpg",
        desc: "A traditional Awadhi dish."
      },
      {
        name: "Kebab",
        image: "/images/uttar-pradesh/food/kebab.jpg",
        desc: "A famous part of Awadhi cuisine."
      },
      {
        name: "Peda",
        image: "/images/uttar-pradesh/food/Peda.jpg",
        desc: "A traditional Indian sweet associated with Uttar Pradesh."
      }
    ],

    traditions: [
      {
        name: "Banarasi Tradition",
        image: "/images/uttar-pradesh/tradition/banarasi tradition.jpg",
        desc: "Traditional culture of Banaras."
      },
      {
        name: "Ganga Aarti",
        image: "/images/uttar-pradesh/tradition/ganga aarti.jpg",
        desc: "A famous spiritual tradition on the Ganga ghats."
      }
    ],

    dance: [
      {
        name: "Kathak",
        image: "/images/uttar-pradesh/dance/kathak.jpg",
        desc: "A major classical dance tradition associated with North India."
      },
      {
        name: "Raslila",
        image: "/images/uttar-pradesh/dance/raslila.jpg",
        desc: "A traditional devotional performance from the Braj region."
      }
    ],

    music: [
      {
        name: "Banarasi Music",
        image: "/images/uttar-pradesh/music/banarasimusic.jpg",
        desc: "Traditional music associated with Banaras."
      },
      {
        name: "Thumri",
        image: "/images/uttar-pradesh/music/Thumri.jpg",
        desc: "A classical and semi-classical vocal tradition."
      }
    ],

    heritage: [
      {
        name: "Fatehpur Sikri",
        latitude: 27.091,
        longitude: 77.661,
        image: "/images/uttar-pradesh/heritage/fatehpur sikri.jpg",
        desc: "A historic Mughal-era city."
      },
      {
        name: "Taj Mahal",
        latitude: 27.175,
        longitude: 78.0419,
        image: "/images/uttar-pradesh/heritage/Taj Mahal.jpg",
        desc: "A world-famous monument in Agra."
      },
      {
        name: "Varanasi Ghats",
        latitude: 25.3069,
        longitude: 83.0107,
        image: "/images/uttar-pradesh/heritage/varanasi ghats.jpg",
        desc: "Historic and cultural riverfront of Varanasi."
      }
    ],

    culture: [
      {
        name: "Awadhi Culture",
        image: "/images/uttar-pradesh/culture/Awadhi culture.jpg",
        desc: "Traditional culture of the Awadh region."
      },
      {
        name: "Braj Culture",
        image: "/images/uttar-pradesh/culture/braj culture.jpg",
        desc: "Traditional culture of the Braj region."
      }
    ],

    art: [
      {
        name: "Banarasi Silk",
        image: "/images/uttar-pradesh/arts/Banarasi Silk.jpg",
        desc: "Famous traditional silk weaving of Banaras."
      },
      {
  name: "Chikankari",
  image: "/images/uttar-pradesh/arts/chikankari.jpg",
  video: "/videos/uttar-pradesh/art craft/chikankari.mp4",
  desc: "Traditional embroidery craft of Uttar Pradesh."
},
      {
        name: "Moradabad Brass",
        image: "/images/uttar-pradesh/arts/moradabad brass.jpg",
        desc: "Traditional brass craft of Moradabad."
      }
    ],

    festivals: [
      {
        name: "Holi",
        video: "/videos/uttar-pradesh/holi UP.mp4",
        desc: "A vibrant festival especially associated with the Braj region."
      }
    ]
  },

  "West Bengal": {
    food: [
      {
        name: "Macher Jhol",
        image: "/images/west-bengal/food/Macher jhol.jpg",
        desc: "A traditional Bengali fish curry."
      },
      {
        name: "Mishti Doi",
        image: "/images/west-bengal/food/Mishti Doi.jpg",
        desc: "A famous Bengali sweet yoghurt."
      },
      {
        name: "Rasgulla",
        image: "/images/west-bengal/food/Rasgulla.jpg",
        desc: "A famous Bengali sweet."
      }
    ],

    traditions: [
      {
        name: "Alpana Tradition",
        image: "/images/west-bengal/tradition/alpana tradition.jpg",
        desc: "Traditional decorative art of Bengal."
      },
      {
        name: "Bengali Tradition",
        image: "/images/west-bengal/tradition/bengali tradition.jpg",
        desc: "Traditional customs and lifestyle of Bengal."
      }
    ],

    dance: [
      {
        name: "Chhau Dance",
        image: "/images/west-bengal/dance/chhau dance.jpg",
        desc: "A traditional eastern Indian dance form."
      },
      {
        name: "Gaudiya Nritya",
        image: "/images/west-bengal/dance/Gaudiya Nritya.jpg",
        desc: "A traditional dance tradition of Bengal."
      }
    ],

    music: [
      {
        name: "Baul Music",
        image: "/images/west-bengal/music/Baul  music.jpg",
        desc: "Traditional Baul music of Bengal."
      },
      {
        name: "Rabindra Sangeet",
        image: "/images/west-bengal/music/rabindra sangeet.jpg",
        desc: "A major Bengali musical tradition."
      }
    ],

    heritage: [
      {
        name: "Bishnupur",
        latitude: 23.075,
        longitude: 87.317,
        image: "/images/west-bengal/heritage/Bishnupur,west bengal.jpg",
        desc: "Historic temples and heritage of Bishnupur."
      },
      {
        name: "Howrah Bridge",
        latitude: 22.5851,
        longitude: 88.3469,
        image: "/images/west-bengal/heritage/Howarh Bridge.jpg",
        desc: "An iconic landmark of Kolkata."
      },
      {
        name: "Victoria Memorial",
        latitude: 22.5448,
        longitude: 88.3426,
        image: "/images/west-bengal/heritage/Victoria memorial.jpg",
        desc: "A major historic landmark in Kolkata."
      }
    ],

    culture: [
      {
        name: "Bengali Culture",
        image: "/images/west-bengal/culture/bengali culture.jpg",
        desc: "A glimpse of Bengali cultural identity."
      },
      {
        name: "Kolkata Culture",
        image: "/images/west-bengal/culture/kolkata culture.jpg",
        desc: "The cultural character of Kolkata."
      }
    ],

    art: [
      {
        name: "Kantha",
        image: "/images/west-bengal/arts/Kantha.jpg",
        desc: "Traditional Bengali embroidery."
      },
      {
        name: "Pattachitra",
        image: "/images/west-bengal/arts/pattachitra.jpg",
        desc: "Traditional eastern Indian painting tradition."
      },
      {
        name: "Terracotta",
        image: "/images/west-bengal/arts/terracotta.jpg",
        desc: "Traditional terracotta craft of Bengal."
      }
    ],

    festivals: [
      {
        name: "Durga Puja",
        video: "/videos/west-bengal/festival/durga puja.mp4",
        desc: "The major festival of Bengal known for elaborate celebrations."
      }
    ]
  }
};

const itemLocations = {
  Bihar: {
    food: { "Litti Chokha": [25.6093, 85.1376], Malpua: [24.7914, 85.0002] },
    festivals: { "Chhath Puja": [25.5941, 85.1376] },
    dance: { "Magadhi Jhumur": [25.0961, 85.3131], "Jat-Jatin": [26.1197, 85.391] },
    music: { Bhadu: [24.254, 87.859], Bidesia: [25.0961, 85.3131] },
    art: { "Madhubani Art": [26.3489, 86.0717], "Sikki Art": [25.431, 86.423] },
    traditions: { "Chhath Tradition": [25.5941, 85.1376], "Mithila Tradition": [26.3489, 86.0717] },
    culture: { "Mithila Culture": [26.3489, 86.0717] }
  },
  Chhattisgarh: {
    food: { Aamat: [19.0748, 82.008], "Chila Roti": [21.2514, 81.6296], Fara: [21.2514, 81.6296] },
    festivals: { "Bastar Dussehra": [19.0748, 82.008] },
    dance: { Panthi: [21.2514, 81.6296], "Raut Nacha": [21.2514, 81.6296] },
    music: { "Folk Music": [21.2514, 81.6296], Pandavani: [21.2514, 81.6296] },
    art: { "Bamboo Craft": [19.0748, 82.008], "Bell Metal Craft": [19.0748, 82.008], "Terracotta Art": [21.2514, 81.6296] },
    traditions: { "Haat Tradition": [19.0748, 82.008], "Tribal Tradition": [19.0748, 82.008] },
    culture: { "Tribal Culture": [19.0748, 82.008] }
  },
  Gujarat: {
    food: { Dhokla: [23.0225, 72.5714], Fafda: [23.0225, 72.5714], Thepla: [23.0225, 72.5714] },
    festivals: { Navratri: [23.0225, 72.5714] },
    dance: { "Dandiya Raas": [22.3072, 73.1812], Garba: [23.0225, 72.5714] },
    music: { "Dayro Music": [21.1702, 72.8311], "Gujarati Folk Music": [23.0225, 72.5714] },
    art: { "Bandhani Art": [23.7337, 69.8597], "Kutch Embroidery": [23.7337, 69.8597], "Patola Art": [23.8589, 72.1017] },
    traditions: { "Garba Tradition": [23.0225, 72.5714], "Kutch Tradition": [23.7337, 69.8597] },
    culture: { "Kutch Culture": [23.7337, 69.8597] }
  },
  Kerala: {
    food: { Appam: [9.9312, 76.2673], "Puttu Kadala": [11.2588, 75.7804], Sadya: [8.5241, 76.9366] },
    festivals: { Onam: [9.9312, 76.2673] },
    dance: { Kathakali: [9.9312, 76.2673], Mohiniyattam: [8.5241, 76.9366] },
    music: { "Chenda Music": [10.5276, 76.2144], "Kerala Folk Music": [9.9312, 76.2673] },
    art: { "Coir Craft": [9.4981, 76.3388], "Kasavu Weaving": [10.5276, 76.2144], "Mural Painting": [9.5916, 76.5222] },
    traditions: { "Kasavu Saree": [10.5276, 76.2144], "Kerala Tradition": [9.9312, 76.2673] },
    culture: { "Temple Culture": [8.5241, 76.9366] }
  },
  "Madhya Pradesh": {
    food: { "Bhutte Ka Khees": [22.7196, 75.8577], "Dal Bafla": [23.2599, 77.4126], "Poha Jalebi": [22.7196, 75.8577] },
    festivals: { Bhagoria: [22.0574, 74.9085] },
    dance: { "Matki Folk Dance": [22.7196, 75.8577], "Rai Dance": [24.5362, 81.3] },
    music: { "Folk Music": [22.7196, 75.8577] },
    art: { "Bagh Printing": [22.3857, 74.9706], "Chanderi Weaving": [24.7136, 78.1385], "Gond Painting": [22.9734, 78.6569] },
    traditions: { "Gond Tradition": [22.9734, 78.6569], "Tribal Tradition": [22.0574, 74.9085] },
    culture: { "Madhya Pradesh Culture": [23.2599, 77.4126] }
  },
  Punjab: {
    food: { "Chole Kulche": [31.634, 74.8723], "Makki di Roti with Saag": [30.901, 75.8573], "Sarson da Saag": [31.634, 74.8723] },
    festivals: { Lohri: [31.634, 74.8723] },
    dance: { Bhangra: [31.634, 74.8723], Giddha: [30.901, 75.8573] },
    music: { "Punjabi Folk Music": [31.634, 74.8723], "Tumbi Music": [30.901, 75.8573] },
    art: { Phulkari: [31.634, 74.8723], "Punjabi Jutti": [30.901, 75.8573], "Wood Craft": [31.326, 75.5762] },
    traditions: { "Punjabi Tradition": [31.634, 74.8723], "Turban Tradition": [30.901, 75.8573] },
    culture: { "Village Culture": [30.901, 75.8573] }
  },
  Rajasthan: {
    food: { "Dal Baati Churma": [26.9124, 75.7873], Ghevar: [26.9124, 75.7873], "Laal Maas": [26.2389, 73.0243] },
    festivals: { Gangaur: [26.9124, 75.7873] },
    dance: { Ghoomar: [26.9124, 75.7873], Kalbelia: [26.2389, 73.0243] },
    music: { "Kamayacha Music": [26.9157, 70.9083], "Rajasthani Folk Music": [26.9124, 75.7873] },
    art: { "Block Printing": [26.9124, 75.7873], "Blue Pottery": [26.9124, 75.7873], "Phad Painting": [25.148, 73.588] },
    traditions: { "Camel Tradition": [26.9157, 70.9083], "Desert Tradition": [26.9157, 70.9083] },
    culture: { "Desert Culture": [26.9157, 70.9083] }
  },
  "Tamil Nadu": {
    food: { Dosa: [13.0827, 80.2707], "Idli Sambar": [13.0827, 80.2707], Pongal: [10.7905, 78.7047] },
    festivals: { Pongal: [10.7905, 78.7047] },
    dance: { Bharatanatyam: [13.0827, 80.2707], Karagattam: [10.7905, 78.7047] },
    music: { "Carnatic Music": [13.0827, 80.2707], Nadaswaram: [10.7867, 79.1378] },
    art: { "Bronze Sculpture": [10.7905, 78.7047], "Kanchipuram Silk": [12.8342, 79.7036], "Tanjore Painting": [10.787, 79.1378] },
    traditions: { Kolam: [13.0827, 80.2707], "Tamil Tradition": [10.7905, 78.7047] },
    culture: { "Temple Culture": [10.7905, 78.7047] }
  },
  "Uttar Pradesh": {
    food: { "Awadhi Biryani": [26.8467, 80.9462], Kebab: [26.8467, 80.9462], Peda: [27.1591, 78.3957] },
    festivals: { Holi: [27.4924, 77.6737] },
    dance: { Kathak: [26.8467, 80.9462], Raslila: [27.4924, 77.6737] },
    music: { "Banarasi Music": [25.3176, 82.9739], Thumri: [25.3176, 82.9739] },
    art: { "Banarasi Silk": [25.3176, 82.9739], Chikankari: [26.8467, 80.9462], "Moradabad Brass": [28.8386, 78.7733] },
    traditions: { "Banarasi Tradition": [25.3176, 82.9739], "Ganga Aarti": [25.3176, 82.9739] },
    culture: { "Awadhi Culture": [26.8467, 80.9462], "Braj Culture": [27.4924, 77.6737] }
  },
  "West Bengal": {
    food: { "Macher Jhol": [22.5726, 88.3639], "Mishti Doi": [22.5726, 88.3639], Rasgulla: [22.5726, 88.3639] },
    festivals: { "Durga Puja": [22.5726, 88.3639] },
    dance: { "Chhau Dance": [23.331, 86.361], "Gaudiya Nritya": [22.5726, 88.3639] },
    music: { "Baul Music": [23.235, 87.07], "Rabindra Sangeet": [22.8909, 88.7597] },
    art: { Kantha: [22.5726, 88.3639], Pattachitra: [22.882, 87.786], Terracotta: [23.075, 87.317] },
    traditions: { "Alpana Tradition": [22.5726, 88.3639], "Bengali Tradition": [22.5726, 88.3639] },
    culture: { "Kolkata Culture": [22.5726, 88.3639] }
  },
  Odisha: {
    food: { "Pakhala, dalma": [20.2961, 85.8245] },
    festivals: { "Rath Yatra, Raja Parba": [19.8135, 85.8312] },
    dance: { "Odissi music": [20.2961, 85.8245] },
    music: { "Odissi music": [20.2961, 85.8245] },
    art: { "Pattachitra and silver filigree": [19.8135, 85.8312] },
    traditions: { "Jagannath traditions": [19.8135, 85.8312] },
    culture: { "Jagannath traditions": [19.8135, 85.8312], "Odissi music": [20.2961, 85.8245], "Pattachitra and silver filigree": [19.8135, 85.8312] },
    heritage: { "Konark, Puri temples": [19.8876, 86.0945] }
  },
  Assam: {
    food: { "Khar, pitha": [26.1445, 91.7362] },
    festivals: { "Bihu, Ambubachi Mela": [26.1445, 91.7362] },
    dance: { "Bihu and Ojapali music": [26.1445, 91.7362] },
    music: { "Bihu and Ojapali music": [26.1445, 91.7362] },
    art: { "Muga silk and bamboo craft": [26.1829, 91.7457] },
    traditions: { "Bihu community traditions": [26.1445, 91.7362] },
    culture: { "Bihu community traditions": [26.1445, 91.7362], "Bihu and Ojapali music": [26.1445, 91.7362], "Muga silk and bamboo craft": [26.1829, 91.7457] },
    heritage: { "Sivasagar monuments": [26.9842, 94.6373] }
  },
  Maharashtra: {
    food: { "Vada pav, misal pav": [19.076, 72.8777] },
    festivals: { "Ganesh Chaturthi, Gudi Padwa": [19.076, 72.8777] },
    dance: { "Lavani and powada": [18.5204, 73.8567] },
    music: { "Lavani and powada": [18.5204, 73.8567] },
    art: { "Warli painting and Paithani": [20.011, 73.932] },
    traditions: { "Warkari pilgrimage traditions": [18.5167, 73.8563] },
    culture: { "Warkari pilgrimage traditions": [18.5167, 73.8563], "Lavani and powada": [18.5204, 73.8567], "Warli painting and Paithani": [20.011, 73.932] },
    heritage: { "Ajanta, Ellora, Raigad": [20.5519, 75.7033] }
  }
};

const addItemLocations = (state) => {
  const locations = itemLocations[state.name] || {};
  Object.entries(locations).forEach(([category, categoryLocations]) => {
    if (!Array.isArray(state[category])) return;
    state[category] = state[category].map((item) => {
      const itemName = typeof item === "string" ? item : item.name;
      const coordinates = categoryLocations[itemName];
      if (!coordinates) return item;
      const [latitude, longitude] = coordinates;
      return {
        ...(typeof item === "string" ? { name: item } : item),
        location: `${itemName}, ${state.name}`,
        latitude,
        longitude
      };
    });
  });
  return state;
};

const makeStateRecord = (name, index) => {
  const highlights = culturalHighlights[name] || [
    `${name} cultural festivals`,
    `${name} traditional cuisine`,
    `${name} community traditions`,
    `${name} historic heritage`,
    `${name} folk and classical music`,
    `${name} traditional arts`
  ];

  const media = mediaData[name];

  return addItemLocations({
    name,
    emoji: emojis[index % emojis.length],
    title: `The Cultural Soul of ${name}`,
    description: `Explore the food, festivals, traditions, heritage, music and arts of ${name}.`,
    about: `${name} has a distinctive cultural identity shaped by its history, communities, landscapes and living traditions.`,

    traditions: media?.traditions || [highlights[2]],

    festivals: media?.festivals || [highlights[0]],

    food: media?.food || [highlights[1]],

    heritage: media?.heritage || [highlights[3]],

    music: media?.music || [highlights[4]],

    art: media?.art || [highlights[5]],

    arts: media?.art || [highlights[5]],

    dance: media?.dance || [highlights[4]],

    culture: media?.culture || [
      highlights[2],
      highlights[4],
      highlights[5]
    ]
  });
};

module.exports = Object.keys(culturalHighlights).map(makeStateRecord);

// const featuredStates = [
//   "Bihar",
//   "Chhattisgarh",
//   "Gujarat",
//   "Kerala",
//   "Madhya Pradesh",
//   "Punjab",
//   "Rajasthan",
//   "Tamil Nadu",
//   "Uttar Pradesh",
//   "West Bengal"
// ];

// module.exports = featuredStates.map(makeStateRecord);
