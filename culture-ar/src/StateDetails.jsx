import "./index.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SiteNav from "./SiteNav";
import { getLocalizedStateName } from "./localizedData";
import { getStateImage } from "./stateImages";

const stateData = {
  rajasthan: {
    name: "Rajasthan",
    emoji: "🏜️",
    title: "The Land of Kings",
    description:
      "Discover the royal traditions, colourful festivals, delicious food and magnificent heritage of Rajasthan.",
    about:
      "Rajasthan is famous for its royal history, forts, palaces, folk music, traditional clothing and vibrant festivals. Its culture reflects the rich heritage of Rajput rulers and the colourful lifestyle of its people.",
  },

  kerala: {
    name: "Kerala",
    emoji: "🌴",
    title: "God's Own Country",
    description:
      "Explore the traditions, festivals, food, art and beautiful heritage of Kerala.",
    about:
      "Kerala is known for its beautiful landscapes, traditional art forms, Ayurveda, temple festivals and unique food culture. Its heritage combines nature, spirituality and centuries-old traditions.",
  },

  gujarat: {
    name: "Gujarat",
    emoji: "🪔",
    title: "The Land of Vibrant Culture",
    description:
      "Experience the colourful festivals, food, folk arts and heritage of Gujarat.",
    about:
      "Gujarat is famous for its colourful traditions, handicrafts, textiles, folk dances and historic sites. The state has a rich cultural identity influenced by trade, spirituality and local communities.",
  },

  punjab: {
    name: "Punjab",
    emoji: "🌾",
    title: "The Land of Bhangra",
    description:
      "Discover the energetic traditions, festivals, food and heritage of Punjab.",
    about:
      "Punjab is known for its energetic folk culture, warm hospitality, colourful clothing, music and delicious food. Its cultural identity is strongly connected with farming, community and celebration.",
  },

  "west-bengal": {
    name: "West Bengal",
    emoji: "🎨",
    title: "The Land of Art & Literature",
    description:
      "Explore the artistic traditions, festivals, food and heritage of West Bengal.",
    about:
      "West Bengal has a rich cultural history known for literature, music, art, festivals and traditional food. Kolkata and other regions are home to many historic buildings and cultural traditions.",
  },

  "tamil-nadu": {
    name: "Tamil Nadu",
    emoji: "🛕",
    title: "The Land of Temples",
    description:
      "Discover the ancient temples, classical arts, festivals and food of Tamil Nadu.",
    about:
      "Tamil Nadu has one of India's oldest and richest cultural traditions. It is famous for its ancient temples, classical dance, Carnatic music, literature and traditional cuisine.",
  },
};

const monumentsData = {
  rajasthan: [
    {
      icon: "🏰",
      name: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      id: "hawa-mahal",
    },
    {
      icon: "🏯",
      name: "Amer Fort",
      location: "Amer, Jaipur",
      id: "amer-fort",
    },
    {
      icon: "🔭",
      name: "Jantar Mantar",
      location: "Jaipur, Rajasthan",
      id: "jantar-mantar",
    },
    {
      icon: "🏛️",
      name: "City Palace",
      location: "Jaipur, Rajasthan",
      id: "city-palace-jaipur",
    },
  ],

  kerala: [
    {
      icon: "🏛️",
      name: "Mattancherry Palace",
      location: "Kochi, Kerala",
      id: "mattancherry-palace",
    },
    {
      icon: "🏰",
      name: "Bekal Fort",
      location: "Kasaragod, Kerala",
      id: "bekal-fort",
    },
    {
      icon: "🏯",
      name: "Padmanabhapuram Palace",
      location: "Thuckalay, Kerala",
      id: "padmanabhapuram-palace",
    },
  ],

  gujarat: [
    {
      icon: "🏛️",
      name: "Rani ki Vav",
      location: "Patan, Gujarat",
      id: "rani-ki-vav",
    },
    {
      icon: "🛕",
      name: "Modhera Sun Temple",
      location: "Modhera, Gujarat",
      id: "modhera-sun-temple",
    },
    {
      icon: "🏰",
      name: "Champaner-Pavagadh",
      location: "Panchmahal, Gujarat",
      id: "champaner-pavagadh",
    },
  ],

  punjab: [
    {
      icon: "🛕",
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      id: "golden-temple",
    },
    {
      icon: "🏰",
      name: "Gobindgarh Fort",
      location: "Amritsar, Punjab",
      id: "gobindgarh-fort",
    },
    {
      icon: "🏯",
      name: "Sheesh Mahal",
      location: "Patiala, Punjab",
      id: "sheesh-mahal-patiala",
    },
  ],

  "west-bengal": [
    {
      icon: "🏛️",
      name: "Victoria Memorial",
      location: "Kolkata, West Bengal",
      id: "victoria-memorial",
    },
    {
      icon: "🛕",
      name: "Bishnupur Temples",
      location: "Bishnupur, West Bengal",
      id: "bishnupur-temples",
    },
    {
      icon: "🏛️",
      name: "Hazarduari Palace",
      location: "Murshidabad, West Bengal",
      id: "hazarduari-palace",
    },
  ],

  "tamil-nadu": [
    {
      icon: "🛕",
      name: "Brihadeeswarar Temple",
      location: "Thanjavur, Tamil Nadu",
      id: "brihadeeswarar-temple",
    },
    {
      icon: "🛕",
      name: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      id: "meenakshi-temple",
    },
    {
      icon: "🌊",
      name: "Shore Temple",
      location: "Mahabalipuram, Tamil Nadu",
      id: "shore-temple",
    },
  ],
};

function MonumentCard({ icon, name, location, id }) {
  return (
    <div className="new-monument-card">
      <div className="new-monument-icon">{icon}</div>

      <div className="new-monument-info">
        <h3>{name}</h3>

        <p>📍 {location}</p>

        <Link
          to={`/ar?monument=${id}`}
          className="new-monument-btn"
        >
          ✦ View
        </Link>
      </div>
    </div>
  );
}

function StateDetails() {
  const { t, i18n } = useTranslation();
  const { stateName } = useParams();

  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:5000/api/states/${stateName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend not available");
        }

        return res.json();
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setApiData(null);
        setIsLoading(false);
      });
  }, [stateName]);

  const state = apiData || stateData[stateName];

  const localizedStateName = state
    ? getLocalizedStateName(state.name, i18n.language)
    : "";

  const stateImage = state ? getStateImage(state.name) : null;

  const monuments = monumentsData[stateName] || [];

  if (isLoading && !state) {
    return (
      <div className="state-loading">
        <div className="loading-spinner"></div>
        <h2>{t("loadingStates")}</h2>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="state-not-found">
        <SiteNav />

        <div className="state-error-content">
          <div className="state-error-icon">🌏</div>

          <h2>{t("stateMissing")}</h2>
{/* 
          <Link to="/explore" className="primary-btn">
            {t("backExplore")}
          </Link> */}
        </div>
      </div>
    );
  }

  return (
    <div className="state-page-new">

      {/* NAVBAR */}
      <SiteNav />

      {/* HERO */}
      <section className="state-new-hero">

        <div className="state-new-hero-left">

          <Link to="/explore" className="state-new-back">
            ← {t("backExplore")}
          </Link>

          <p className="state-new-eyebrow">
            ✦ DISCOVER INDIAN CULTURE
          </p>

          <h1>
            {localizedStateName}
          </h1>

          <h2>{state.title}</h2>

          <p className="state-new-description">
            {state.description}
          </p>

          <div className="state-new-buttons">

            <Link to="/ar" className="state-new-primary">
              ✦ Scan
            </Link>

            <a
              href="#culture"
              className="state-new-secondary"
            >
              Explore Culture 
            </a>

          </div>

        </div>

        <div className="state-new-hero-right">

          <div
            className="state-new-image"
            style={{
              backgroundImage: `url(${stateImage})`,
            }}
          >
            <div className="state-new-image-overlay"></div>

            <div className="state-new-floating-card">

              <div className="state-new-card-icon">
                {state.emoji}
              </div>

              <div>
                <span>EXPLORE</span>

                <h3>{localizedStateName}</h3>

                <p>
                  Traditions • Festivals • Food
                </p>

                <p>
                  Art • Dance • Heritage
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      {/* <section className="state-new-about">

        <div className="state-new-section-label">
          ✦ ABOUT THE STATE
        </div>

        <div className="state-new-about-grid">

          <div>
            <h2>
              Discover the soul of{" "}
              <span>{localizedStateName}</span>
            </h2>
          </div>

          <div>
            <p>{state.about}</p>
          </div>

        </div>

      </section> */}

      <section className="state-new-about">

  <div className="state-new-about-inner">

    <p className="state-new-section-label">
      ✦ ABOUT THE STATE
    </p>

    <h2>
      Discover the soul of{" "}
      <span>{localizedStateName}</span>
    </h2>

    <div className="state-new-about-line"></div>

    <p className="state-new-about-text">
      {state.about}
    </p>

  </div>

</section>
{/* CULTURAL HIGHLIGHTS */}

<section className="state-highlights">

  <div className="state-highlights-inner">

    <div className="state-highlight">
      <span className="highlight-icon">🎭</span>
      <div>
        <strong>Traditions</strong>
        <p>Living customs & lifestyle</p>
      </div>
    </div>

    <div className="state-highlight">
      <span className="highlight-icon">🎉</span>
      <div>
        <strong>Festivals</strong>
        <p>Colourful celebrations</p>
      </div>
    </div>

    <div className="state-highlight">
      <span className="highlight-icon">🍛</span>
      <div>
        <strong>Food</strong>
        <p>Authentic local flavours</p>
      </div>
    </div>

    <div className="state-highlight">
      <span className="highlight-icon">🎨</span>
      <div>
        <strong>Art & Craft</strong>
        <p>Traditional craftsmanship</p>
      </div>
    </div>

  </div>

</section>

      {/* CULTURE */}
      <section
        className="state-new-culture"
        id="culture"
      >

      <div className="state-new-section-heading state-vertical-heading">

  <p className="state-new-section-label">
    ✦ EXPLORE CULTURE
  </p>

  <h2>Experience the Culture</h2>

  <p>
    Discover the traditions, festivals, food,
    art, dance and heritage of{" "}
    {localizedStateName}.
  </p>

</div>

        <div className="state-new-culture-grid">

          <Link
            to={`/culture/${stateName}/traditions`}
            className="state-new-culture-card"
          >
            <div className="state-new-culture-icon">
              🥻
            </div>

            <span className="state-new-card-number">
              01
            </span>

            <h3>{t("traditions")}</h3>

            <p>
              Traditional customs, clothing and lifestyle.
            </p>

            <span className="state-new-card-link">
              {t("exploreLink")} →
            </span>
          </Link>

          <Link
            to={`/culture/${stateName}/festivals`}
            className="state-new-culture-card"
          >
            <div className="state-new-culture-icon">
              🎉
            </div>

            <span className="state-new-card-number">
              02
            </span>

            <h3>{t("festivals")}</h3>

            <p>
              Colourful celebrations and cultural festivals.
            </p>

            <span className="state-new-card-link">
              {t("exploreLink")} →
            </span>
          </Link>

          <Link
            to={`/culture/${stateName}/food`}
            className="state-new-culture-card"
          >
            <div className="state-new-culture-icon">
              🍛
            </div>

            <span className="state-new-card-number">
              03
            </span>

            <h3>{t("food")}</h3>

            <p>
              Traditional flavours and famous local dishes.
            </p>

            <span className="state-new-card-link">
              {t("exploreLink")} →
            </span>
          </Link>

          <Link
            to={`/culture/${stateName}/art`}
            className="state-new-culture-card"
          >
            <div className="state-new-culture-icon">
              🎨
            </div>

            <span className="state-new-card-number">
              04
            </span>

            <h3>{t("art")}</h3>

            <p>
              Traditional paintings, crafts and handicrafts.
            </p>

            <span className="state-new-card-link">
              {t("exploreLink")} →
            </span>
          </Link>

          <Link
            to={`/culture/${stateName}/dance`}
            className="state-new-culture-card"
          >
            <div className="state-new-culture-icon">
              💃
            </div>

            <span className="state-new-card-number">
              05
            </span>

            <h3>
              {t("dance")} & {t("music")}
            </h3>

            <p>
              Folk dances and traditional musical forms.
            </p>

            <span className="state-new-card-link">
              {t("exploreLink")} →
            </span>
          </Link>

          <Link
            to={`/culture/${stateName}/heritage`}
            className="state-new-culture-card"
          >
            <div className="state-new-culture-icon">
              🏛️
            </div>

            <span className="state-new-card-number">
              06
            </span>

            <h3>{t("heritage")}</h3>

            <p>
              Historic monuments and cultural places.
            </p>

            <span className="state-new-card-link">
              {t("exploreLink")} →
            </span>
          </Link>

        </div>

      </section>

      {/* MONUMENTS */}
      <section className="state-new-monuments">

      <div className="state-new-section-heading state-vertical-heading">

  <p className="state-new-section-label">
    ✦ HIDDEN HERITAGE
  </p>

  <h2>Explore Monuments </h2>

  <p>
    Discover historic monuments of{" "}
    {localizedStateName} and experience
    their stories through AR.
  </p>

</div>

        <div className="state-new-monuments-grid">

          {monuments.length > 0 ? (
            monuments.map((monument) => (
              <MonumentCard
                key={monument.id}
                icon={monument.icon}
                name={monument.name}
                location={monument.location}
                id={monument.id}
              />
            ))
          ) : (
            <p>
              Monument information is currently unavailable.
            </p>
          )}

        </div>

      </section>

      {/* AR CTA */}
      <section className="state-new-ar">

       <div className="state-new-ar-inner state-ar-vertical">

  <p className="state-new-section-label">
    ✦ EXPERIENCE HERITAGE
  </p>

  <h2>
    See {localizedStateName}'s Heritage{" "}
    {/* <span>in AR</span> */}
  </h2>

  <p>
    Point your camera towards a cultural
    monument and discover its history
    in an interactive way.
  </p>

  <Link
    to="/ar"
    className="state-new-ar-button"
  >
   ✦ Scan
  </Link>

</div>

      </section>

      {/* FOOTER */}
      <footer className="state-new-footer">

        <div>
          <h3>
            <span>✦</span> Culture Explorer
          </h3>

          <p>
            Discover India's culture by exploring.
          </p>
        </div>

        <p>
          © 2026 Culture Explorer.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default StateDetails;