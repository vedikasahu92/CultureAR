import React from 'react';
import './TravelGuideUI.css';
import { useTranslation } from 'react-i18next';
import { getLocalizedGuideName } from '../localizedData';
import BackButton from "../backbutton";

const guidesData = [
  {
    id: 1,
    name: "Rahul Sharma",
    specialtyKey: "delhiSpecialist",
    rating: "4.8",
    experience: "5 years experience",
    locationKey: "delhiLocation",
    languagesKey: "hindiEnglish",
    descriptionKey: "delhiDescription",
    price: "₹1,500 / day",
    image: "/guides/guide1.jpg.webp"
  },
  {
    id: 2,
    name: "Anjali Verma",
    specialtyKey: "agraExpert",
    rating: "4.9",
    experience: "7 years experience",
    locationKey: "agraLocation",
    languagesKey: "hindiEnglishFrench",
    descriptionKey: "agraDescription",
    price: "₹1,800 / day",
    image: "/guides/guide2.jpg.webp"
  },
  {
    id: 3,
    name: "Amit Singh",
    specialtyKey: "jaipurHeritageGuide",
    rating: "4.7",
    experience: "4 years experience",
    locationKey: "jaipurLocation",
    languagesKey: "hindiEnglish",
    descriptionKey: "jaipurDescription",
    price: "₹1,400 / day",
    image: "/guides/guide3.jpg.webp"
  }
];

export default function TravelGuideUI() {
  const { t, i18n } = useTranslation();
  return (
    
      <main className="travel-guide-page">
  <BackButton />

  <section className="travel-guide-hero">
     
     
        <p className="travel-guide-eyebrow">{t('localExperts')}</p>
        <h1>{t('chooseGuide')}</h1>
        <p>{t('guideIntro')}</p>
      </section>
      
      <section className="travel-guide-grid" aria-label={t('availableGuides')}>
        {guidesData.map((guide) => (
          <article
            key={guide.id}
            className="travel-guide-card"
          >
            {(() => {
              const localizedName = getLocalizedGuideName(guide.id - 1, i18n.language, guide.name);
              return (
                <>
            <div className="travel-guide-card-top">
              <span className="travel-guide-status">{t('availableToday')}</span>
              <span className="travel-guide-badge">{t('topRated')}</span>
            </div>
            <div className="travel-guide-avatar">
              <img 
                src={guide.image} 
                alt={guide.name} 
              />
            </div>

            <div className="travel-guide-info">
                <h2>{localizedName}</h2>
              <p className="travel-guide-specialty">{t(guide.specialtyKey)}</p>
              <p className="travel-guide-location">⌖ {t(guide.locationKey)}</p>
              <p className="travel-guide-description">{t(guide.descriptionKey)}</p>
              
              <div className="travel-guide-meta">
                <span>★ {guide.rating}</span>
                <span>{t('yearsExperience', { years: guide.experience.split(' ')[0] })}</span>
                <span>{t(guide.languagesKey)}</span>
              </div>
            </div>

            <div className="travel-guide-card-footer">
              <strong>{guide.price}</strong>
              <button type="button" onClick={() => alert(t('bookingSent', { name: localizedName }))}>{t('bookGuide')}</button>
            </div>
                </>
              );
            })()}
          </article>
        ))}
      </section>
    </main>
  );
}