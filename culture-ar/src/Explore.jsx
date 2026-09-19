import React, { useEffect, useState } from "react";
import "./index.css";
import { Link , useNavigate} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedStateName } from "./localizedData";
import BackButton from "./backbutton";
 
const imageFiles = import.meta.glob("./assets/images/*", {
  eager: true
});

const stateImageKeywords = {
  "andhra pradesh": "araku valley andhra pradesh",
  "arunachal pradesh": "arunachal pradesh",
  assam: "assam tourism",
  bihar: "bihar",
  chhattisgarh: "chhattisgarh",
  chandigarh: "chandigarh",
  "dadra and nagar haveli and daman and diu": "daman and diu",
  "dadra and nagar haveli": "dradra and nagar haveli",
  delhi: "explore delhi",
  "andaman and nicobar islands": "andaman nicobar",
  "andaman and nicobar": "andaman nicobar",
  goa: "goa",
  gujarat: "gujarat",
  haryana: "haryana",
  "himachal pradesh": "himachal pradesh",
  "jammu and kashmir": "jammu kashmir",
  jharkhand: "jharkhand",
  karnataka: "karnataka",
  kerala: "kerala.jpg",
  lakshadweep: "lakshadweep",
  ladakh: "ladakh",
  "madhya pradesh": "madhya pradesh",
  maharashtra: "maharastra",
  manipur: "manipur",
  meghalaya: "meghalaya",
  mizoram: "mizoram",
  nagaland: "nagaland",
  odisha: "odisha",
  punjab: "punjab",
  rajasthan: "rajasthan",
  sikkim: "sikkim",
  "tamil nadu": "tamil nadu",
  telangana: "hyderabad",
  tripura: "tripura",
  "uttar pradesh": "uttar pradesh",
  uttarakhand: "uttrakhand",
  puducherry: "pondicherry",
  "west bengal": "west bengal"
};

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const imageEntries = Object.entries(imageFiles)
  .map(([filePath, image]) => [filePath, image.default])
  .filter(([, image]) => image);

const getMatchingImage = (stateName, usedImages) => {
  const keyword = stateImageKeywords[stateName.toLowerCase()] || stateName;
  const normalizedKeyword = normalize(keyword);
  const matchingFile = imageEntries.find(([filePath, image]) =>
    !usedImages.has(image) && normalize(filePath).includes(normalizedKeyword)
  );

  return matchingFile?.[1];
};

const getStateImages = (states) => {
  const usedImages = new Set();
  const assignedImages = {};

  states.forEach((state) => {
    const image = getMatchingImage(state.name, usedImages);
    if (image) {
      assignedImages[state.name] = image;
      usedImages.add(image);
    }
  });

  const unusedImages = imageEntries
    .map(([, image]) => image)
    .filter((image) => !usedImages.has(image));

  states.forEach((state) => {
    if (!assignedImages[state.name]) {
      assignedImages[state.name] = unusedImages.shift();
    }
  });

  return assignedImages;
};
 
function Explore() {
   const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [states, setStates] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/states")
      .then((response) => response.json())
      .then((data) => {
        setStates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
      });
  }, []);

  const filteredStates = states.filter((state) => {
    const localizedName = getLocalizedStateName(state.name, i18n.language);
    return `${state.name} ${localizedName}`.toLowerCase().includes(search.toLowerCase());
  });
  const stateImages = getStateImages(filteredStates);
  return (
    <div className="explore-page">
     <button
  className="explore-back-btn"
  onClick={() => navigate("/home-page-1", { replace: true })}
>
  ← Back
</button>

      {/* HEADER */}
      <div className="explore-header">
        <h1>{t("discoverDiversity")}</h1>

        <p>
          {t("diversityDescription")}
        </p>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder={t("searchState")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <h2 style={{ textAlign: "center", padding: "30px" }}>
          {t("loadingStates")}
        </h2>
      )}

      {/* STATES */}
      {!loading && (
        <div className="states-grid">

          {filteredStates.map((state) => (
            <div className="state-card" key={state.name}>
              {(() => {
                const localizedName = getLocalizedStateName(state.name, i18n.language);
                return (
                  <>

              <div className="state-image">
                <img
                  src={stateImages[state.name]}
                  alt={`${state.name} cultural heritage`}
                />
              </div>

              <div className="state-card-content">

                <h3>🇮🇳 {localizedName}</h3>

                <p>
                  {t("stateCultureDescription", { state: localizedName })}
                </p>

                <Link
                  to={`/state/${state.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="state-explore-btn"
                >
                  {t("exploreState", { state: localizedName })}
                </Link>

              </div>
                  </>
                );
              })()}

            </div>
          ))}

          {/* NO RESULT */}
          {filteredStates.length === 0 && (
            <p
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "40px",
                color: "#766c64"
              }}
            >
              {t("noState")}
            </p>
          )}

        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Culture Explorer— Discover India's Culture Differently
      </footer>

    </div>
  );
}

export default Explore;