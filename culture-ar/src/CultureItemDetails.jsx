import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import SiteNav from "./SiteNav";
import { getLocalizedStateName } from "./localizedData";
import { getStateImage } from "./stateImages";
import OfflineMap from "./components/OfflineMap";
import { getMonument } from "./services/offlineStorage";

const categoryInfo = {
  traditions: {
    title: "Traditions",
    icon: "🥻",
    colorClass: "traditions",
  },
  festivals: {
    title: "Festivals",
    icon: "🎉",
    colorClass: "festivals",
  },
  food: {
    title: "Food",
    icon: "🍛",
    colorClass: "food",
  },
  art: {
    title: "Art & Crafts",
    icon: "🎨",
    colorClass: "art",
  },
  dance: {
    title: "Dance & Music",
    icon: "💃",
    colorClass: "dance",
  },
  heritage: {
    title: "Heritage",
    icon: "🏛️",
    colorClass: "heritage",
  },
  culture: {
    title: "Culture",
    icon: "🌏",
    colorClass: "culture",
  },
  music: {
    title: "Music",
    icon: "🎶",
    colorClass: "music",
  },
  arts: {
    title: "Arts",
    icon: "🖌️",
    colorClass: "arts",
  },
};


/* =========================================================
   REMOVE NUMBER FROM NAMES
   Examples:
   Punjab Dance 0 -> Punjab Dance
   Punjab Dance 1 -> Punjab Dance
   Dance 0 -> Dance
========================================================= */

function cleanItemName(name) {
  if (!name) return "";

  return String(name)
    // Remove last number: Dance 0, Dance-0, Dance_0
    .replace(/[-_\s]+\d+$/g, "")
    // Convert URL hyphens/underscores into spaces
    .replace(/[-_]+/g, " ")
    // Clean extra spaces
    .replace(/\s+/g, " ")
    .trim();
}

function getOfflineId(stateName, category, itemName) {
  return `${stateName}:${category}:${cleanItemName(itemName).toLowerCase()}`;
}

function CultureItemDetails() {
  const { stateName, category, itemName } = useParams();

  const [stateData, setStateData] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const offlineId = getOfflineId(stateName, category, itemName);

    fetch(`http://localhost:5000/api/states/${stateName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("State not found");
        }

        return response.json();
      })
      .then((data) => {
        setStateData(data);

        const decodedName = decodeURIComponent(itemName || "");

        const apiCategory =
          category === "arts" ? "art" : category;

        const rawItems = data?.[apiCategory] || [];

        let foundItem = null;

        rawItems.forEach((item, index) => {
          const currentName =
            typeof item === "string"
              ? item
              : item?.name;

          const cleanCurrentName =
            cleanItemName(currentName);

          const cleanURLName =
            cleanItemName(decodedName);

          if (
            currentName === decodedName ||
            cleanCurrentName === cleanURLName ||
            String(currentName).toLowerCase() ===
              String(decodedName).toLowerCase()
          ) {
            foundItem =
              typeof item === "string"
                ? {
                    name: currentName,
                    description: `Explore ${cleanCurrentName} as part of ${data.name}'s cultural heritage.`,
                  }
                : item;
          }
        });

        if (!foundItem) {
          foundItem = {
            name: decodedName,
            description: `Explore ${cleanItemName(
              decodedName
            )} as part of ${data.name}'s cultural heritage.`,
          };
        }

        setItemData(foundItem);
      })
      .then(() => setIsLoading(false))
      .catch(async () => {
        try {
          const cached = await getMonument(offlineId);
          if (cached) {
            setStateData({ name: cached.state });
            setItemData({
              name: cached.name,
              description: cached.description,
              image: cached.image,
              latitude: cached.latitude,
              longitude: cached.longitude,
            });
          }
        } catch (storageError) {
          console.error("Offline monument data could not be loaded", storageError);
        }
        setIsLoading(false);
      });
  }, [stateName, category, itemName]);


  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <div className="item-details-page">

        <SiteNav />

        <div className="item-loading">
          <div className="item-loading-spinner"></div>

          <h2>Preparing your cultural experience...</h2>

          <p>
            Please wait while we load the heritage information.
          </p>
        </div>

      </div>
    );
  }


  /* ================= NOT FOUND ================= */

  if (!stateData || !itemData) {
    return (
      <div className="item-details-page">

        <SiteNav />

        <div className="item-not-found">

          <div className="item-not-found-icon">
            🏛️
          </div>

          <h2>Cultural information not found</h2>

          <p>
            We couldn't find this cultural experience.
          </p>

          <Link
            to={`/culture/${stateName}/${category}`}
            className="item-back-main"
          >
            ← Back to {category}
          </Link>

        </div>

      </div>
    );
  }


  const localizedStateName =
    getLocalizedStateName(
      stateData.name,
      "en"
    );

  const info =
    categoryInfo[category] ||
    categoryInfo.culture;


  /* =========================================================
     CLEAN DISPLAY NAME
  ========================================================= */

  const rawName =
  itemData.name ||
  decodeURIComponent(itemName || "");

let displayName = cleanItemName(rawName);

// If the name came from URL like "punjab-dance-0",
// make it readable
if (
  !itemData.name &&
  itemName
) {
  displayName = decodeURIComponent(itemName)
    .replace(/[-_]+\d+$/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}

  /* =========================================================
     IMAGE
  ========================================================= */

  const itemImage =
    itemData.image ||
    itemData.imageUrl ||
    getStateImage(stateData.name);


  /* =========================================================
     DESCRIPTION
  ========================================================= */

  const description =
    itemData.description ||
    itemData.desc ||
    `Explore the rich history, cultural importance, and traditions of ${displayName} in ${localizedStateName}.`;


  /* =========================================================
     MAP
  ========================================================= */

  const latitude = Number(itemData.latitude || itemData.lat || stateData.latitude);
  const longitude = Number(itemData.longitude || itemData.lng || stateData.longitude);
  const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);

  const mapQuery =
    itemData.location ||
    `${displayName}, ${localizedStateName}`;


  return (
    <div
      className={`item-details-page item-theme-${info.colorClass}`}
    >

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <SiteNav />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="item-premium-hero">

        <div className="item-hero-content">

          <Link
            to={`/culture/${stateName}/${category}`}
            className="item-premium-back"
          >
            ← Back to Explore {info.title} of{" "}
            {localizedStateName}
          </Link>


          <div className="item-category-badge">

            <span>
              {info.icon}
            </span>

            {localizedStateName.toUpperCase()}
            {" • "}
            {info.title.toUpperCase()}

          </div>


          <h1>
            {displayName}
          </h1>


          <p className="item-hero-description">
            {description}
          </p>


          <div className="item-hero-tags">

            <span>
              📍 {localizedStateName}
            </span>

            <span>
              {info.icon} {info.title}
            </span>

            <span>
              ✦ Cultural Heritage
            </span>

          </div>

        </div>


        <div
          className="item-hero-image"
          style={{
            backgroundImage: `url(${itemImage})`,
          }}
        >

          <div className="item-hero-image-overlay"></div>


          <div className="item-floating-card">

            <div className="item-floating-icon">
              {info.icon}
            </div>

            <div>
              <strong>
                {displayName}
              </strong>

              <small>
                {localizedStateName}
              </small>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="item-premium-content">


        {/* ===================================================
            CULTURAL HIGHLIGHTS
        =================================================== */}

        <section className="item-highlight-section">

          <div className="item-highlight-card">

            <div className="item-section-heading">

              <div className="item-heading-icon">
                ✨
              </div>

              <div>

                <p>
                  CULTURAL HIGHLIGHTS
                </p>

                <h2>
                  Why {displayName} matters
                </h2>

              </div>

            </div>


            <div className="item-highlight-list">

              <div>
                <span>✦</span>
                <p>
                  Deeply rooted in the identity and
                  cultural heritage of {localizedStateName}.
                </p>
              </div>

              <div>
                <span>✦</span>
                <p>
                  Preserved and celebrated by local
                  communities across generations.
                </p>
              </div>

              <div>
                <span>✦</span>
                <p>
                  Reflects the traditions, history and
                  artistic expression of the region.
                </p>
              </div>

            </div>

          </div>


          {/* ================================================
              AR EXPERIENCE
          ================================================= */}

          <div className="item-ar-card">

            <div className="item-ar-pattern"></div>

            <div className="item-ar-icon">
              📱
            </div>

            <p className="item-ar-label">
              IMMERSIVE EXPERIENCE
            </p>

            <h2>
              Experience by scanning
            </h2>

            <p>
              Visualize {displayName} in an interactive way.
              
            </p>

            <Link
              to={`/ar?item=${encodeURIComponent(
                displayName
              )}`}
              className="item-ar-button"
            >
              ✦ View
              <span>→</span>
            </Link>

          </div>

        </section>


        {/* ===================================================
            HISTORY
        =================================================== */}

        <section className="item-history-section">

          <div className="item-history-heading">

            <p className="item-section-label">
              ✦ EXPLORE THE STORY
            </p>

            <h2>
              History & Cultural Significance
            </h2>

          </div>


          <div className="item-history-grid">

            <div className="item-history-text">

              <p>
                {itemData.history ||
                  `The story of ${displayName} is closely connected
                  with the cultural identity of ${localizedStateName}.
                  It represents the traditions, knowledge and
                  practices that have been preserved through
                  generations.`}
              </p>

              {itemData.culturalImportance && (
                <div className="item-quote-box">
                  <span>❝</span>

                  <p>
                    {itemData.culturalImportance}
                  </p>
                </div>
              )}

            </div>


            <div className="item-story-card">

              <div className="item-story-icon">
                {info.icon}
              </div>

              <p>
                CULTURAL HERITAGE
              </p>

              <h3>
                {localizedStateName}
              </h3>

              <span>
                A living expression of India's
                diverse cultural heritage.
              </span>

            </div>

          </div>

        </section>


        {/* ===================================================
            LOCATION & MAP
        ================================================= */}

        <section className="item-location-section">

          <div className="item-location-header">

            <div>

              <p className="item-section-label">
                ✦ VISIT THE PLACE
              </p>

              <h2>
                📍 Location & Map
              </h2>

              <p>
                Primary origin and landmark location for{" "}
                <strong>{displayName}</strong>
                {" "}({localizedStateName})
              </p>

            </div>


            {hasCoordinates && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="item-directions-button"
              >
                🧭 Get Directions
              </a>
            )}

          </div>


          <div className="item-map-container">
            {hasCoordinates ? (
              <OfflineMap
                monument={{
                  id: getOfflineId(stateName, category, displayName),
                  name: displayName,
                  state: localizedStateName,
                  category,
                  latitude,
                  longitude,
                  description,
                  image: itemImage,
                }}
              />
            ) : (
              <p className="item-map-unavailable">
                Location map is not available for this item.
              </p>
            )}

            {hasCoordinates && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="item-map-open"
              >
                Open in Maps ↗
              </a>
            )}

          </div>

        </section>


        {/* ===================================================
            FINAL AR CTA
        ================================================= */}

        <section className="item-final-ar">

          <div className="item-final-ar-icon">
            ✦
          </div>

          <div>

            <p>
              DISCOVER HERITAGE DIFFERENTLY
            </p>

            <h2>
              See {displayName} 
            </h2>

            <span>
              Turn your surroundings into an immersive
              cultural experience.
            </span>

          </div>


          <Link
            to={`/ar?item=${encodeURIComponent(
              displayName
            )}`}
            className="item-final-ar-button"
          >
            ✦ view
            <span>→</span>
          </Link>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="item-page-footer">

        <div>
          <span>✦</span>
          Culture Explorer
        </div>

        <p>
          Discover India's culture by exploring.
        </p>

        <small>
          © 2026 Culture Explorer. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default CultureItemDetails;