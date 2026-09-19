import React, { useState } from "react";
import "./ReviewPage.css";
import { useTranslation } from "react-i18next";

const savedUser = JSON.parse(localStorage.getItem("user"));

const reviewTags = [
  { label: "Quality", key: "quality" },
  { label: "Value", key: "value" },
  { label: "Speed", key: "speed" },
  { label: "Support", key: "support" },
  { label: "Design", key: "design" },
  { label: "Ease of use", key: "easeOfUse" }
];

function ReviewPage() {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

const [formData, setFormData] = useState({
  title: "",
  message: "",
  name: savedUser ? savedUser.name : "",
  email: savedUser ? savedUser.email : "",
  anonymous: false
});

  const toggleTag = (tag) => {
    setSelectedTags((currentTags) => currentTags.includes(tag)
      ? currentTags.filter((currentTag) => currentTag !== tag)
      : [...currentTags, tag]
    );
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (!token || !user) {
  setError(t("loginBeforeReview"));
  return;
}
    if (!rating) {
      setError(t("chooseRatingError"));
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
},
        body: JSON.stringify({
          ...formData,
          rating,
          tags: selectedTags
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || t("reviewSubmitError"));
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message || t("reviewConnectionError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="review-page">
      <section className="review-intro">
        <button className="page-back-btn" type="button" onClick={() => window.history.back()}>
          ← Back
        </button>
        <p className="review-eyebrow">{t("shareExperience")}</p>
        <h1>{t("reviewTitle")}</h1>
        <p>{t("reviewIntro")}</p>
      </section>

      <form className="review-card" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="review-success" role="status">
            <span>✓</span>
            <h2>{t("thankYou")}</h2>
            <p>{t("reviewRecorded")}</p>
            <button type="button" onClick={() => setSubmitted(false)}>{t("anotherReview")}</button>
          </div>
        ) : (
          <>
            <fieldset className="review-section review-rating-section">
              <legend>{t("overallRating")}</legend>
              <div className="review-stars" aria-label={t("chooseRating")}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={star <= rating ? "active" : ""}
                    onClick={() => setRating(star)}
                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  >
                    ★
                  </button>
                ))}
                <span>{rating ? `${rating}/5` : t("noRating")}</span>
              </div>
            </fieldset>

            <fieldset className="review-section">
                <legend>{t("liked")}</legend>
              <div className="review-tags">
                {reviewTags.map((tag) => (
                  <button
                    key={tag.label}
                    type="button"
                    className={selectedTags.includes(tag.label) ? "selected" : ""}
                    onClick={() => toggleTag(tag.label)}
                  >
                    {t(tag.key)}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="review-section">
              <label htmlFor="review-title">{t("reviewHeading")}</label>
              <input id="review-title" name="title" type="text" value={formData.title} onChange={handleChange} placeholder={t("reviewPlaceholder")} required />
            </div>

            <div className="review-section">
              <label htmlFor="review-message">{t("yourReview")}</label>
              <textarea id="review-message" name="message" value={formData.message} onChange={handleChange} placeholder={t("reviewMessagePlaceholder")} maxLength="500" required />
              <span className="review-help">{t("reviewHelp")}</span>
            </div>

            <div className="review-details-grid">
              <div className="review-section">
                <label htmlFor="review-name">{t("name")}</label>
              <input
              id="review-name"
              name="name"
              type="text"
              value={formData.name}
              placeholder={t("yourName")}
              readOnly
              required
              />
              </div>
              <div className="review-section">
                <label htmlFor="review-email">{t("email")}</label>
                <input id="review-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>
            </div>

            <div className="review-submit-row">
              <label className="anonymous-option">
                <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                <span>{t("anonymous")}</span>
              </label>
              <button className="review-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("submitting") : t("submitReviewButton")}
              </button>
            </div>
            {error && <p className="review-error" role="alert">{error}</p>}
          </>
        )}
      </form>
    </main>
  );
}

export default ReviewPage;
