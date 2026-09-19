import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

import exploreImage from "./assets/images/Explore delhi_.jpg";
import heritageImage from "./assets/images/himachal pradesh.jpg";
import arImage from "./assets/images/ladakh.jpg";


    function HomePage1() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");

  const handleWikipediaSearch = async () => {
    if (!search.trim()) return;

    setSearchLoading(true);
    setSearchError("");
    setSearchResult(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/culture/${encodeURIComponent(search.trim())}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Culture data not found");
      }

      setSearchResult(data);
    } catch (error) {
      console.error("Wikipedia search error:", error);
      setSearchError("No information found. Try another search.");
    } finally {
      setSearchLoading(false);
    }
  };
    const navigate = useNavigate();

  return (
    <div className="culture-dashboard">

     <button
  className="home1-back-btn"
  onClick={() => navigate("/")}
>
  ← Back
</button>

      {/* ================= HERO ================= */}

      <section className="culture-hero">

        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>

        <div className="culture-hero-content">

          <p className="culture-eyebrow">
            ✦ INDIA · PRESERVED THROUGH EXPERIENCE
          </p>

          <h1>
            Explore culture.
            <br />
            <span>See history differently.</span>
          </h1>

          <p className="culture-hero-description">
            Step into a living archive of places, people,
            traditions and stories from across India.
          </p>

         <div className="culture-search">
  <span>⌕</span>

  <input
    type="text"
    placeholder="Search temples, history, arts..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleWikipediaSearch();
      }
    }}
  />

  <button onClick={handleWikipediaSearch}>
    {searchLoading ? "Searching..." : "Search"}
  </button>
</div>
{searchError && (
  <div className="wikipedia-error">
    {searchError}
  </div>
)}

{searchResult && (
  <div className="wikipedia-result">
    {searchResult.image && (
      <img
        src={searchResult.image}
        alt={searchResult.name}
      />
    )}

    <div className="wikipedia-result-content">
      <span>WIKIPEDIA DISCOVERY</span>

      <h2>{searchResult.name}</h2>

      <p>{searchResult.description}</p>

      <a
        href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
          searchResult.name.replace(/ /g, "_")
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more on Wikipedia ↗
      </a>
    </div>
  </div>
)}

          <div className="hero-mini-stats">
            <div>
              <strong>10+</strong>
              <span>States</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Stories</span>
            </div>

            {/* <div>
              <strong>AR</strong>
              <span>Experiences</span>
            </div> */}
          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="culture-hero-visual">

          <div className="hero-image-main">
            <img
              src={exploreImage}
              alt="Indian cultural heritage"
            />

            <div className="hero-image-overlay"></div>

            <div className="hero-image-label">
              <span>✦</span>
              <div>
                <small>DISCOVER</small>
                <strong>India's Heritage</strong>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span>✦</span>
            <div>
              <small>IMMERSIVE</small>
              <strong>Experience</strong>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span>◉</span>
            <div>
              <small>EXPLORE</small>
              <strong>Living Culture</strong>
            </div>
          </div>

        </div>

      </section>


      {/* ================= QUICK ACTIONS ================= */}

      <section className="culture-actions">

        <div className="section-heading">
          <div>
            <p>EXPLORE & EXPERIENCE</p>
            <h2>Everything you need to discover India.</h2>
          </div>

          <span className="section-number">01 / 03</span>
        </div>


        <div className="culture-action-grid">

          <Link to="/explore" className="culture-action-card explore-card">
            <div className="action-icon">⌖</div>

            <div className="action-content">
              <span className="action-number">01</span>
              <h3>Explore</h3>
              <p>
                Discover India's states, traditions,
                food, festivals and stories.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </Link>


          <Link to="/ar" className="culture-action-card scan-card">
            <div className="action-icon">◉</div>

            <div className="action-content">
              <span className="action-number">02</span>
              <h3>Scan</h3>
              <p>
                Identify cultural heritage through
                an interactive AR experience.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </Link>


          <Link to="/quiz" className="culture-action-card quiz-card">
            <div className="action-icon">?</div>

            <div className="action-content">
              <span className="action-number">03</span>
              <h3>Quiz</h3>
              <p>
                Test your knowledge of India's
                fascinating cultural heritage.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </Link>


          <Link to="/tourplan" className="culture-action-card tour-card">
            <div className="action-icon">⌘</div>

            <div className="action-content">
              <span className="action-number">04</span>
              <h3>Tour Plan</h3>
              <p>
                Plan a meaningful cultural journey
                around the places you love.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </Link>


          <Link
            to="/travel-guide"
            className="culture-action-card guide-card"
          >
            <div className="action-icon">✦</div>

            <div className="action-content">
              <span className="action-number">05</span>
              <h3>Guide</h3>
              <p>
                Connect with local cultural guides
                and discover places differently.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </Link>


          <Link to="/review" className="culture-action-card review-card">
            <div className="action-icon">★</div>

            <div className="action-content">
              <span className="action-number">06</span>
              <h3>Review</h3>
              <p>
                Share your experience and help
                other travellers discover culture.
              </p>
            </div>

            <span className="action-arrow">↗</span>
          </Link>

        </div>

      </section>


      {/* ================= FEATURED HERITAGE ================= */}

      {/* <section className="featured-heritage">

        <div className="section-heading heritage-heading">

          <div>
            <p>PLACES WITH STORIES</p>
            <h2>Discover India's heritage.</h2>
          </div>

          <Link to="/explore" className="view-all-link">
            View all →
          </Link>

        </div>


        <div className="heritage-grid">

          <div className="heritage-card heritage-large">

            <img
              src={heritageImage}
              alt="Indian heritage"
            />

            <div className="heritage-gradient"></div>

            <div className="heritage-card-content">
              <span>HIMACHAL PRADESH</span>
              <h3>Mountains, stories & traditions</h3>
              <p>
                Discover the living culture behind India's
                landscapes.
              </p>
            </div>

          </div>


          <div className="heritage-card">

            <img
              src={exploreImage}
              alt="Delhi heritage"
            />

            <div className="heritage-gradient"></div>

            <div className="heritage-card-content">
              <span>DELHI</span>
              <h3>History in every corner</h3>
            </div>

          </div>


          <div className="heritage-card">

            <img
              src={arImage}
              alt="Ladakh heritage"
            />

            <div className="heritage-gradient"></div>

            <div className="heritage-card-content">
              <span>LADAKH</span>
              <h3>Culture beyond borders</h3>
            </div>

          </div>

        </div>

      </section> */}


      {/* ================= AR CTA ================= */}

      <section className="culture-ar-banner">

        <div className="ar-banner-image">
          <img
            src={arImage}
            alt="Experience heritage through AR"
          />
        </div>

        <div className="ar-banner-content">

          <p>✦ EXPERIENCE HERITAGE</p>

          <h2>
            See history
            <br />
            <span>come alive.</span>
          </h2>

          <p className="ar-description">
            Point your camera towards cultural heritage
            and discover the story behind it.
          </p>

          <Link to="/ar" className="ar-start-button">
            <span>✦</span>
            Start Experience
            <b>↗</b>
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="culture-dashboard-footer">

        <div className="footer-brand">
          <div className="footer-logo">
            ✦ Culture explorer
          </div>

          <p>
            Discover India's culture differently.
          </p>
        </div>

        <div className="footer-links">

          <Link to="/explore">Explore</Link>
          <Link to="/ar">Scan</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/tourplan">Tour Plan</Link>
          <Link to="/travel-guide">Guide</Link>
          <Link to="/review">Review</Link>

        </div>

        <div className="footer-copy">
          © 2026 CultureAR
        </div>

      </footer>

    </div>
  );
}

export default HomePage1;
