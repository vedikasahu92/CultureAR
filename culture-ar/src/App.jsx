import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Explore from "./Explore";
import StateDetails from "./StateDetails";
import CultureDetails from "./CultureDetails";
import CultureItemDetails from "./CultureItemDetails";
import ARExperience from "./ARExperience";
import Chatbot from "./chatbot";
import TourPlan from "./pages/tourplan";
import TravelGuideUI from "./pages/TravelGuideUI";
import ReviewPage from "./pages/ReviewPage";
import Quiz from "./quiz";
import Login from "./login";
import Signup from "./signup";
import HomePage1 from "./HomePage1";
import exploreImage from "./assets/images/Explore delhi_.jpg";
import reviewImage from "./assets/images/himachal pradesh.jpg";
import tourPlanImage from "./assets/images/ladakh.jpg";

import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  // ================= USER LOGIN STATE =================
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // ================= CHATBOT STATE =================
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: t("chatGreeting"),
    },
  ]);

  const [inputQuery, setInputQuery] = useState("");

  // ================= CONTACT FORM STATE =================
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for reaching out! We will get back to you soon.");

    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    alert("Thank you for subscribing to our updates!");

    setSubscribeEmail("");
  };

  return (
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}
      <nav className="navbar">

        <div className="logo">
          <span>✦</span> {t("siteName")}
        </div>

        {/* ================= LANGUAGE + LOGIN ================= */}
        <div className="nav-actions">

          <select
            className="language"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">🌐 EN</option>
            <option value="hi">🌐 हिंदी</option>
            <option value="bn">🌐 বাংলা</option>
            <option value="ta">🌐 தமிழ்</option>
            <option value="te">🌐 తెలుగు</option>
            <option value="mr">🌐 मराठी</option>
            <option value="gu">🌐 ગુજરાતી</option>
            <option value="kn">🌐 ಕನ್ನಡ</option>
            <option value="ml">🌐 മലയാളം</option>
            <option value="pa">🌐 ਪੰਜਾਬੀ</option>
            <option value="od">🌐 ଓଡ଼ିଆ</option>
          </select>

          {user ? (
            <>
              <span className="user-name">
                👤 {user.name}
              </span>

              <button
                className="login-btn"
                onClick={handleLogout}
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="login-btn"
            >
              {t("login")}
            </Link>
          )}

        </div>
      </nav>


      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section className="hero">

        <div className="hero-container">

          {/* ================= HERO CONTENT ================= */}
          <div className="hero-content">

            <p className="small-title">
              {t("discoverDifferently")}
            </p>

            <h1>
              {t("experienceCulture")}
            </h1>

            <p className="description">
              {t("cultureDescription")}
            </p>


            {/* ================= HERO BUTTONS ================= */}
            <div className="hero-buttons">

              <Link
                to="/home-page-1"
                className="primary-btn"
              >
                {t("exploreCulture")}
              </Link>

            </div>

          </div>

          <div className="hero-visual">

            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>

            <div className="culture-card">
              <div className="card-icon">🏛️</div>
              <h3>{t("indianHeritage")}</h3>
              <p>{t("heritageCardDesc")}</p>
              <div className="scan-line"></div>
              <span>{t("arReady")}</span>
            </div>

          </div>

        </div>

      </section>



      {/* =================================================
          FEATURES SECTION
      ================================================= */}
      <section className="features">

        <div className="feature">

          <div>🥻</div>

          <h3>
            {t("traditions")}
          </h3>

          <p>
            {t("traditionsDesc")}
          </p>

        </div>


        <div className="feature">

          <div>🎉</div>

          <h3>
            {t("festivals")}
          </h3>

          <p>
            {t("festivalsDesc")}
          </p>

        </div>


        <div className="feature">

          <div>🍛</div>

          <h3>
            {t("food")}
          </h3>

          <p>
            {t("foodDesc")}
          </p>

        </div>


        <div className="feature">

          <div>🏛️</div>

          <h3>
            {t("heritage")}
          </h3>

          <p>
            {t("heritageDesc")}
          </p>

        </div>

      </section>


      {/* =================================================
          ABOUT US SECTION
      ================================================= */}
      <section
        className="about-us-section"
        id="about"
      >

        <div className="about-container">

          <div className="about-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
              alt="About Us Heritage"
              className="about-img"
            />

          </div>


          <div className="about-content">

            <h2>
              About Us
            </h2>

            <p>
              Our team of travel experts is passionate
              about exploring the world and helping our
              clients do the same. With years of experience
              in the travel industry, we have developed
              strong relationships with suppliers and
              vendors around the world, allowing us to
              offer exclusive deals and insider access to
              some of the world's most incredible
              destinations.
            </p>

            <p>
              At our travel agency, we believe that travel
              is more than just visiting new places — it's
              about experiencing new cultures, meeting new
              people, and creating memories that last a
              lifetime.
            </p>


            {/* ================= HIGHLIGHTS ================= */}
            <div className="about-highlights">

              <div className="highlight-item">

                <span className="highlight-icon">
                  🛡️
                </span>

                <span className="highlight-title">
                  Reliability
                </span>

              </div>


              <div className="highlight-item">

                <span className="highlight-icon">
                  ⏱️
                </span>

                <span className="highlight-title">
                  Fast
                </span>

              </div>


              <div className="highlight-item">

                <span className="highlight-icon">
                  💰
                </span>

                <span className="highlight-title">
                  Best Value
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          3 PICTURE / FEATURED CULTURE SECTION
          THIS IS BETWEEN ABOUT US AND GET IN TOUCH
      ================================================= */}
      <section className="featured-culture-section">

        <div className="featured-culture-heading">

          <p>
            EXPLORE INDIA
          </p>

          <h2>
            Discover Culture & Heritage
          </h2>

          <span>
            Explore India's traditions, monuments,
            food and vibrant heritage.
          </span>

        </div>


        <div className="featured-culture-cards">

          {/* ================= PICTURE 1 ================= */}
          <Link
            to="/explore"
            className="featured-culture-card featured-culture-card-explore"
          >

            <img
              src={exploreImage}
              alt="Explore Indian heritage"
            />

            <div className="featured-culture-overlay">

              <span>
                01
              </span>

              <h3>
                Explore
              </h3>

              <p>
                Discover states, monuments and traditions
              </p>

            </div>

          </Link>


          {/* ================= PICTURE 2 ================= */}
          <Link
            to="/review"
            className="featured-culture-card featured-culture-card-review"
          >

            <img
              src={reviewImage}
              alt="Share a travel review"
            />

            <div className="featured-culture-overlay">

              <span>
                02
              </span>

              <h3>
                Reviews
              </h3>

              <p>
                Share your cultural experience
              </p>

            </div>

          </Link>


          {/* ================= PICTURE 3 ================= */}
          <Link
            to="/tourplan"
            className="featured-culture-card featured-culture-card-tour"
          >

            <img
              src={tourPlanImage}
              alt="Plan an Indian cultural journey"
            />

            <div className="featured-culture-overlay">

              <span>
                03
              </span>

              <h3>
                Tour Plan
              </h3>

              <p>
                Build your cultural journey
              </p>

            </div>

          </Link>

        </div>

      </section>


      {/* =================================================
          GET IN TOUCH SECTION
      ================================================= */}
      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-container">

          <div className="contact-info">

            <h2>
              Get in Touch
            </h2>

            <p>
              Have questions, feedback, or want to
              collaborate? Reach out and let's bring
              history to life together through AR.
            </p>

            <ul className="contact-details">

              <li>
                📧 <strong>Email:</strong>{" "}
                support@yourapp.com
              </li>

              <li>
                📍 <strong>Location:</strong> India
              </li>

              <li>
                📞 <strong>Phone:</strong>{" "}
                +91 98765 43210
              </li>

            </ul>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <form
            className="contact-form"
            onSubmit={handleContactSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              value={contactData.name}
              onChange={(e) =>
                setContactData({
                  ...contactData,
                  name: e.target.value,
                })
              }
              required
            />


            <input
              type="email"
              placeholder="Your Email"
              value={contactData.email}
              onChange={(e) =>
                setContactData({
                  ...contactData,
                  email: e.target.value,
                })
              }
              required
            />


            <textarea
              rows="4"
              placeholder="Your Message"
              value={contactData.message}
              onChange={(e) =>
                setContactData({
                  ...contactData,
                  message: e.target.value,
                })
              }
              required
            ></textarea>


            <button
              type="submit"
              className="send-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* =================================================
          FOOTER SECTION
      ================================================= */}
      <footer className="footer-section">

        <div className="footer-container">

          {/* ================= BRAND ================= */}
          <div className="footer-col brand-col">

            <h3>
              Culture Explorer
            </h3>

            <p>
              Step into history in a whole new
              dimension. Explore cultural heritage
              through immersive AR experiences.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="footer-col">

            <h4>
              Quick Links
            </h4>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/explore">
                  Explore
                </Link>
              </li>

              <li>
                <a href="#about">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* ================= SERVICES ================= */}
          <div className="footer-col">

            <h4>
              Services
            </h4>

            <ul>

              <li>
                <Link to="/tourplan">
                  Tour Plan
                </Link>
              </li>

              <li>
                <Link to="/chatbot">
                  AI Guides
                </Link>
              </li>

              <li>
                <Link to="/ar">
                  Scan & Identify
                </Link>
              </li>

              <li>
                <Link to="/travel-guide">
                  Find a Guide
                </Link>
              </li>

              <li>
                <Link to="/quiz">
                  Quiz
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= SUBSCRIBE ================= */}
          <div className="footer-col subscribe-col">

            <h4>
              Subscribe
            </h4>

            <p>
              Get updates about new features
              and monuments.
            </p>


            <form
              onSubmit={handleSubscribe}
              className="subscribe-form"
            >

              <input
                type="email"
                placeholder="Your email"
                value={subscribeEmail}
                onChange={(e) =>
                  setSubscribeEmail(e.target.value)
                }
                required
              />

              <button type="submit">
                Join
              </button>

            </form>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Culture Explorer.
            All rights reserved.
          </p>

        </div>

      </footer>


      {/* =================================================
          AI CHATBOT OVERLAY
      ================================================= */}
      {isChatOpen && (

        <div className="home-chatbot-overlay">

          <button
            className="home-chatbot-close"
            onClick={() => setIsChatOpen(false)}
          >
            ✕
          </button>

          <Chatbot />

        </div>

      )}

    </div>
  );
}


/* =========================================================
   APP ROUTES
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/home-page-1"
          element={<HomePage1 />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/state/:stateName"
          element={<StateDetails />}
        />

        <Route
          path="/culture/:stateName/:category"
          element={<CultureDetails />}
        />

        <Route
          path="/culture/:stateName/:category/:itemName"
          element={<CultureItemDetails />}
        />

        <Route
          path="/ar"
          element={<ARExperience />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/tourplan"
          element={<TourPlan />}
        />

        <Route
          path="/travel-guide"
          element={<TravelGuideUI />}
        />

        <Route
          path="/review"
          element={<ReviewPage />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/chatbot"
          element={<Chatbot />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;