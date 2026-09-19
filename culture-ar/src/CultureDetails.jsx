import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";
import SiteNav from "./SiteNav";
import { getLocalizedStateName } from "./localizedData";
import { getStateImage } from "./stateImages";

const API_BASE_URL = "http://localhost:5000";

const categoryInfo = {
  traditions: {
    title: "Traditions",
    icon: "🥻",
    description:
      "Discover the traditional lifestyle, customs and practices that make this region unique.",
    about:
      "Traditional customs, clothing, rituals and everyday practices passed down through generations.",
  },

  festivals: {
    title: "Festivals",
    icon: "🎉",
    description:
      "Explore colourful festivals, celebrations and cultural traditions of the state.",
    about:
      "Festivals bring communities together through music, rituals, food, dance and joyful celebrations.",
  },

  food: {
    title: "Food",
    icon: "🍛",
    description:
      "Taste the flavours, recipes and traditional cuisine of the region.",
    about:
      "The food of every state reflects its history, geography, local ingredients and cultural traditions.",
  },

  art: {
    title: "Art & Crafts",
    icon: "🎨",
    description:
      "Explore traditional paintings, crafts and artistic heritage.",
    about:
      "Traditional art and crafts preserve stories, skills and artistic expressions passed from one generation to another.",
  },

  dance: {
    title: "Dance & Music",
    icon: "💃",
    description:
      "Experience traditional dance, music and performing arts.",
    about:
      "Dance and music are an important part of celebrations, storytelling and community life.",
  },

  heritage: {
    title: "Heritage",
    icon: "🏛️",
    description:
      "Discover historic monuments, places and cultural landmarks.",
    about:
      "India's heritage reflects centuries of architecture, history, traditions and artistic achievement.",
  },

  culture: {
    title: "Culture",
    icon: "🌏",
    description:
      "Explore the unique cultural identity of the state.",
    about:
      "Culture connects traditions, food, festivals, arts, music and the everyday life of local communities.",
  },

  music: {
    title: "Music",
    icon: "🎶",
    description:
      "Discover traditional music and musical traditions.",
    about:
      "Traditional music preserves regional stories, emotions and cultural expressions through generations.",
  },

  arts: {
    title: "Arts",
    icon: "🖌️",
    description:
      "Explore creative arts and traditional artistic expressions.",
    about:
      "Regional arts showcase the creativity, history and identity of local communities.",
  },
};

const categoryFallbackIcons = {
  traditions: ["🥻", "🧵", "👘", "🌿"],
  festivals: ["🎉", "🪔", "🎊", "🥁"],
  food: ["🍛", "🍲", "🥘", "🍚"],
  art: ["🎨", "🖌️", "🏺", "🧵"],
  dance: ["💃", "🕺", "🥁", "🎭"],
  heritage: ["🏛️", "🏰", "🛕", "🗿"],
  culture: ["🌏", "🎭", "🪔", "🧿"],
  music: ["🎶", "🎵", "🥁", "🎼"],
  arts: ["🖌️", "🎨", "🏺", "🧵"],
};

function UploadVideoControl({
  stateName,
  category,
  itemName,
  onUploaded,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const previewUrl = useMemo(
    () => (selectedFile ? URL.createObjectURL(selectedFile) : ""),
    [selectedFile]
  );

  useEffect(
    () => () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    },
    [previewUrl]
  );

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    if (!file.type.startsWith("video/")) {
      setStatus("error");
      setMessage("Please select a video file.");
      return;
    }

    setSelectedFile(file);
    setStatus("preview");
    setProgress(0);
    setMessage("");
  };

  const uploadFile = () => {
    if (!selectedFile || status === "uploading") {
      return;
    }

    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("stateName", stateName);
    formData.append("category", category);

    if (itemName) {
      formData.append("itemName", itemName);
    }

    const request = new XMLHttpRequest();
    request.open("POST", `${API_BASE_URL}/api/videos`);
    request.responseType = "json";
    request.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };
    request.onload = () => {
      const response = request.response || {};

      if (request.status >= 200 && request.status < 300) {
        setStatus("success");
        setMessage("Video uploaded successfully.");
        setSelectedFile(null);
        setProgress(100);
        onUploaded(response);
        return;
      }

      setStatus("error");
      setMessage(response.message || "Video upload failed.");
    };
    request.onerror = () => {
      setStatus("error");
      setMessage("Unable to reach the video upload service.");
    };
    request.send(formData);
    setStatus("uploading");
    setMessage("Uploading video...");
  };

  const clearSelection = () => {
    if (status === "uploading") {
      return;
    }

    setSelectedFile(null);
    setStatus("idle");
    setProgress(0);
    setMessage("");
  };

  return (
    <div className="culture-upload-control">
      <label className="culture-upload-button">
        Upload Video
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          disabled={status === "uploading"}
        />
      </label>

      {selectedFile && previewUrl && (
        <div className="culture-upload-preview">
          <video src={previewUrl} controls muted />
          <span>{selectedFile.name}</span>
          <div className="culture-upload-actions">
            <button
              type="button"
              onClick={uploadFile}
              disabled={status === "uploading"}
            >
              {status === "uploading"
                ? `Uploading ${progress}%`
                : "Upload Selected Video"}
            </button>
            <button
              type="button"
              onClick={clearSelection}
              disabled={status === "uploading"}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {message && (
        <p className={`culture-upload-message ${status}`}>
          {message}
        </p>
      )}
    </div>
  );
}

function CultureDetails() {
  const { t, i18n } = useTranslation();

  const { stateName, category } = useParams();

  const [apiState, setApiState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadedVideos, setUploadedVideos] = useState({});

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:5000/api/states/${stateName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("State not found");
        }

        return response.json();
      })
      .then((data) => {
        setApiState(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [stateName]);

  const getUploadKey = (itemName) => itemName || "__category__";

  useEffect(() => {
    if (!apiState) {
      return;
    }

    const apiCategory = category === "arts" ? "art" : category;
    const rawItems = apiState?.[apiCategory] || [];
    const itemNames = rawItems
      .map((item) => (typeof item === "string" ? item : item?.name))
      .filter(Boolean);
    const contexts = itemNames.length ? itemNames : [null];

    Promise.all(
      contexts.map((itemName) => {
        const params = new URLSearchParams({
          stateName: apiState.name,
          category,
        });

        if (itemName) {
          params.set("itemName", itemName);
        }

        return fetch(`${API_BASE_URL}/api/videos?${params}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Uploaded videos could not be loaded");
            }

            return response.json();
          })
          .then((videos) => [getUploadKey(itemName), videos]);
      })
    )
      .then((entries) => setUploadedVideos(Object.fromEntries(entries)))
      .catch((error) => {
        console.error(error);
        setUploadedVideos({});
      });
  }, [apiState, category]);

  const stateData = apiState;

  // ================= LOADING =================

  if (isLoading && !stateData) {
    return (
      <div className="culture-details-page">
        <SiteNav />

        <div className="culture-loading">
          <div className="loading-circle"></div>

          <h2>Loading culture...</h2>

          <p>Please wait while we prepare this state.</p>
        </div>
      </div>
    );
  }

  // ================= STATE NOT FOUND =================

  if (!stateData) {
    return (
      <div className="culture-details-page">
        <SiteNav />

        <div className="culture-not-found">
          <div className="not-found-icon">🏛️</div>

          <h2>{t("stateNotFound")}</h2>

          <p>
            We couldn't find the cultural information for this state.
          </p>

          <Link to="/explore" className="culture-main-btn">
            ← {t("backExplore")}
          </Link>
        </div>
      </div>
    );
  }

  const localizedStateName = getLocalizedStateName(
    stateData.name,
    i18n.language
  );

  const stateImage = getStateImage(stateData.name);

  // arts → art
  const apiCategory = category === "arts" ? "art" : category;

  const rawItems = stateData?.[apiCategory] || [];

  // Convert API strings into objects
  const itemsList = rawItems.map((item, index) => {
    if (typeof item === "string") {
      return {
        id: `${stateName}-${category}-${index}`,
        name: item,
        desc: `Explore ${item} as part of ${localizedStateName}'s cultural heritage.`,
        image: null,
        video: null,
        poster: null,
        icon:
          categoryFallbackIcons[category]?.[
            index % categoryFallbackIcons[category].length
          ] || "✨",
      };
    }

    return {
      ...item,

      icon:
        item.icon ||
        categoryFallbackIcons[category]?.[
          index % categoryFallbackIcons[category].length
        ] ||
        "✨",
    };
  });

  const info =
    categoryInfo[category] || {
      title:
        category?.charAt(0).toUpperCase() + category?.slice(1),
      icon: "✨",
      description: `Explore the ${category} of ${localizedStateName}.`,
      about: `Discover the cultural heritage of ${localizedStateName}.`,
    };

  const categories = [
    "traditions",
    "festivals",
    "food",
    "art",
    "dance",
    "heritage",
    "culture",
    "music",
    "arts",
  ];

  // First 3 items for highlight section
  const highlightItems = itemsList.slice(0, 3);

  const handleMediaError = (event) => {
    const mediaElement = event.currentTarget;
    const mediaContainer = mediaElement.parentElement;
    const fallbackImage = mediaContainer?.querySelector("img");
    const placeholder = mediaContainer?.querySelector(
      ".culture-card-placeholder"
    );

    mediaElement.style.display = "none";

    if (mediaElement.tagName === "VIDEO" && fallbackImage) {
      fallbackImage.style.display = "block";
      return;
    }

    if (placeholder) {
      placeholder.style.display = "flex";
    }
  };

  const addUploadedVideo = (itemName, video) => {
    const key = getUploadKey(itemName);
    setUploadedVideos((current) => ({
      ...current,
      [key]: [...(current[key] || []), video],
    }));
  };

  return (
    <div className="culture-details-page">

      {/* ================= NAVBAR ================= */}

      <SiteNav />

      {/* ================= HERO ================= */}

      <section className="culture-premium-hero">

        <div className="culture-premium-hero-content">

          <Link
            to="/explore"
            className="culture-premium-back"
          >
            ← Back to Explore
          </Link>

          <p className="culture-premium-eyebrow">
            ✦ DISCOVER INDIAN CULTURE
          </p>

          <div className="culture-premium-category-icon">
            {info.icon}
          </div>

          <h1>{localizedStateName}</h1>

          <h2>{info.title}</h2>

          <p className="culture-premium-description">
            {info.description}
          </p>

          <div className="culture-premium-tags">

            <span>
              📍 {localizedStateName}
            </span>

            <span>
              ✦ Rich Cultural Heritage
            </span>

            <span>
              🪷 Living Traditions
            </span>

          </div>

        </div>

        <div
          className="culture-premium-hero-image"
          style={{
            backgroundImage: `url(${stateImage})`,
          }}
        >

          <div className="culture-premium-image-overlay"></div>

          <div className="culture-premium-floating-card">

            <span>{info.icon}</span>

            <div>
              <strong>{info.title}</strong>
              <small>{localizedStateName}</small>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CATEGORY NAVIGATION ================= */}

      <section className="culture-category-nav">

        <div className="culture-category-nav-inner">

          {categories.map((cat) => {

            const catInfo = categoryInfo[cat];

            return (
              <Link
                key={cat}
                to={`/culture/${stateName}/${cat}`}
                className={
                  category === cat
                    ? "culture-category-pill active"
                    : "culture-category-pill"
                }
              >

                <span>{catInfo.icon}</span>

                {catInfo.title}

              </Link>
            );

          })}

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="culture-about-section">

        <div className="culture-about-main">

          <p className="culture-section-label">
            ✦ ABOUT {localizedStateName.toUpperCase()}
          </p>

          <h2>
            Discover the soul of{" "}
            <span>{localizedStateName}</span>
          </h2>

          <p className="culture-about-description">
            {info.about}
          </p>

          <div className="culture-about-highlight">

            <span>📖</span>

            <p>
              From ancient traditions to modern celebrations,
              {localizedStateName}'s cultural identity continues
              to live through its people.
            </p>

          </div>

        </div>

        {/* ================= 3 HIGHLIGHTS ================= */}

        <div className="culture-about-cards">

          {highlightItems.length > 0 ? (

            highlightItems.map((item, index) => (

              <div
                className="culture-about-card"
                key={item.id || index}
              >

                <div
                  className="culture-about-card-image"
                  style={
                    item.image
                      ? {
                          backgroundImage: `url(${item.image})`,
                        }
                      : {}
                  }
                >

                  {!item.image && (
                    <span>{item.icon}</span>
                  )}

                </div>

                <div className="culture-about-card-content">

                  <div className="culture-about-card-icon">
                    {item.icon}
                  </div>

                  <h3>{item.name}</h3>

                  <p>
                    {item.desc ||
                      `Discover ${item.name} and its importance in ${localizedStateName}.`}
                  </p>

                </div>

              </div>

            ))

          ) : (

            <div className="culture-about-empty">

              <span>{info.icon}</span>

              <p>
                More cultural highlights coming soon.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ================= EXPERIENCE STRIP ================= */}

      <section className="culture-experience-strip">

        <div className="culture-experience-icon">
          ✦
        </div>

        <div className="culture-experience-text">

          <p>
            EXPERIENCE {localizedStateName.toUpperCase()}
          </p>

          <h2>
            Explore Living Heritage
          </h2>

          <span>
            Discover {info.title.toLowerCase()} through immersive
            digital experiences.
          </span>

        </div>

        <Link
          to={`/ar?state=${encodeURIComponent(
            stateData.name
          )}`}
          className="culture-experience-button"
        >
          ✦ View
          <span>→</span>
        </Link>

      </section>

      {/* ================= DISCOVERIES ================= */}

      <main className="culture-content">

        <div className="culture-content-heading">

          <div>

            <p className="culture-section-label">
              ✦ {info.title.toUpperCase()}
            </p>

            <h2>
              Explore {info.title}
            </h2>

            <p>
              Discover the cultural elements that make{" "}
              <strong>{localizedStateName}</strong> unique.
            </p>

          </div>

          <div className="culture-result-badge">

            {itemsList.length}{" "}
            {itemsList.length === 1
              ? "Discovery"
              : "Discoveries"}

          </div>

        </div>

        {/* ================= CARDS ================= */}

        {itemsList.length > 0 ? (

          <div className="culture-new-grid">

            {itemsList.map((item, index) => (

              <article
                className="culture-new-card"
                key={item.id || index}
              >

                {/* ================= MEDIA ================= */}

                <div className="culture-card-image">

                  {/* VIDEO FIRST */}

                  {item.video ? (

                    <video
                      src={item.video}
                      poster={item.poster || undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onError={handleMediaError}
                    />

                  ) : null}

                  {/* IMAGE FALLBACK */}

                  {item.image ? (

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        display: item.video ? "none" : "block",
                      }}
                      onError={handleMediaError}
                    />

                  ) : null}

                  {/* PLACEHOLDER */}

                  <div
                    className="culture-card-placeholder"
                    style={{
                      display:
                        !item.video && !item.image
                          ? "flex"
                          : "none",
                    }}
                  >

                    <span>{item.icon}</span>

                    <small>{info.title}</small>

                  </div>

                  {/* GRADIENT */}

                  <div className="culture-image-gradient"></div>

                  {/* NUMBER */}

                  <span className="culture-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* VIDEO LABEL */}

                  {item.video && (
                    <span className="culture-video-label">
                      ▶ VIDEO
                    </span>
                  )}

                </div>

                {/* ================= CARD CONTENT ================= */}

                <div className="culture-new-card-content">

                  <div className="culture-card-tag">
                    {info.icon} {info.title}
                  </div>

                  <h3>{item.name}</h3>

                  <p>
                    {item.desc ||
                      `Discover the cultural significance of ${item.name} in ${localizedStateName}.`}
                  </p>

                  <div className="culture-card-divider"></div>

                  <div className="culture-card-actions">

                    <Link
                      to={`/culture/${stateName}/${category}/${encodeURIComponent(
                        item.id || item.name
                      )}`}
                      className="culture-details-btn"
                    >
                      View Details
                      <span>→</span>
                    </Link>

                    <Link
                      to={`/ar?item=${encodeURIComponent(
                        item.id || item.name
                      )}`}
                      className="culture-ar-btn"
                    >
                      ✦ scan
                    </Link>

                  </div>

                  <UploadVideoControl
                    stateName={stateData.name}
                    category={category}
                    itemName={item.name}
                    onUploaded={(video) =>
                      addUploadedVideo(item.name, video)
                    }
                  />

                </div>

              </article>

            ))}

            {itemsList.flatMap((item) =>
              (uploadedVideos[item.name] || []).map((video) => (
                <article
                  className="culture-new-card culture-uploaded-video-card"
                  key={video.id}
                >
                  <div className="culture-card-image">
                    <video
                      src={`${API_BASE_URL}${video.video}`}
                      controls
                      playsInline
                      preload="metadata"
                    />
                    <span className="culture-video-label">
                      ▶ UPLOADED VIDEO
                    </span>
                  </div>
                  <div className="culture-new-card-content">
                    <div className="culture-card-tag">
                      {info.icon} {info.title}
                    </div>
                    <h3>{item.name}</h3>
                    <p>{video.name}</p>
                  </div>
                </article>
              ))
            )}

          </div>

        ) : (

          <div className="culture-empty">

            <div className="culture-empty-icon">
              {info.icon}
            </div>

            <h3>
              More {info.title} Coming Soon
            </h3>

            <p>
              We are adding more cultural information about{" "}
              {localizedStateName}.
            </p>

            <UploadVideoControl
              stateName={stateData.name}
              category={category}
              itemName={null}
              onUploaded={(video) =>
                addUploadedVideo(null, video)
              }
            />

            {(uploadedVideos.__category__ || []).map((video) => (
              <article
                className="culture-new-card culture-uploaded-video-card"
                key={video.id}
              >
                <div className="culture-card-image">
                  <video
                    src={`${API_BASE_URL}${video.video}`}
                    controls
                    playsInline
                    preload="metadata"
                  />
                  <span className="culture-video-label">
                    ▶ UPLOADED VIDEO
                  </span>
                </div>
                <div className="culture-new-card-content">
                  <div className="culture-card-tag">
                    {info.icon} {info.title}
                  </div>
                  <h3>{localizedStateName}</h3>
                  <p>{video.name}</p>
                </div>
              </article>
            ))}

          </div>

        )}

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="culture-page-footer">

        <div>
          <span>✦</span> Culture Explorer
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

export default CultureDetails;