import React, { useState } from 'react';
import './tourplan.css';
import tourBackground from '../assets/images/ladakh.jpg';
import { useTranslation } from 'react-i18next';
import BackButton from "../backbutton";

const TourPlan = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    departureCity: '',
    destination: '',
    startDate: '',
    endDate: '',
    adults: 2,
    children: 0,
    tourType: '',
    budget: 1000,
    interests: [],
    guide: '',
  });

  const travelInterests = [
    { label: 'Beaches', key: 'beaches' }, { label: 'Mountains', key: 'mountains' }, { label: 'Heritage', key: 'heritage' }, { label: 'Food & Cuisine', key: 'food' },
    { label: 'Nature', key: 'nature' }, { label: 'Culture', key: 'culture' }, { label: 'Shopping', key: 'shopping' }, { label: 'Adventure', key: 'adventure' },
    { label: 'Wellness & Spa', key: 'wellness' }, { label: 'Photography', key: 'photography' }, { label: 'Nightlife', key: 'nightlife' }, { label: 'Scenic Routes', key: 'scenicRoutes' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((item) => item !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert(t('tourSubmitted'));
  };

  return (
    <div className="tour-plan-page" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${tourBackground})` }}>
     
      <BackButton />
      
      
      {/* Header / Navbar */}
      <header className="tour-plan-header">
        <h1>{t('siteName')}</h1>
        <span>{t('tourPlanning')}</span>
      </header>

      {/* Main Container */}
      <div className="tour-plan-container">
        
        {/* Hero Section */}
        <div className="tour-plan-hero">
          <h2>
            {t('planTour')} <span className="text-orange-400">{t('perfectTour')}</span>
          </h2>
          <p>
            {t('tourIntro')}
          </p>
        </div>

        {/* Tour Form */}
        <form onSubmit={handleSubmit} className="tour-plan-form">
          
          {/* Card 1: Destination & Dates */}
          <div className="tour-plan-card">
            <div className="tour-plan-card-title">
              <span>1</span>
              <h3>{t('destinationDates')}</h3>
            </div>
            
            <div className="tour-plan-grid tour-plan-grid-two">
              <div>
                <label>{t('departureCity')}</label>
                <input 
                  type="text" 
                  name="departureCity"
                  placeholder={t('departurePlaceholder')}
                  value={formData.departureCity}
                  onChange={handleChange}
                  className="tour-plan-input"
                />
              </div>
              <div>
                <label>{t('destination')}</label>
                <input 
                  type="text" 
                  name="destination"
                  placeholder={t('destinationPlaceholder')}
                  value={formData.destination}
                  onChange={handleChange}
                  className="tour-plan-input"
                />
              </div>
              <div>
                <label>{t('startDate')}</label>
                <input 
                  type="date" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="tour-plan-input"
                />
              </div>
              <div>
                <label>{t('endDate')}</label>
                <input 
                  type="date" 
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="tour-plan-input"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Group & Budget */}
          <div className="tour-plan-card">
            <div className="tour-plan-card-title">
              <span>2</span>
              <h3>{t('groupBudget')}</h3>
            </div>

            <div className="tour-plan-grid tour-plan-grid-three">
              <div>
                <label>{t('adults')}</label>
                <input 
                  type="number" 
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  min="1"
                  className="tour-plan-input"
                />
              </div>
              <div>
                <label>{t('children')}</label>
                <input 
                  type="number" 
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  className="tour-plan-input"
                />
              </div>
              <div>
                <label>{t('tourType')}</label>
                <select 
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  className="tour-plan-input"
                >
                  <option value="">{t('selectType')}</option>
                  <option value="solo">{t('solo')}</option>
                  <option value="family">{t('family')}</option>
                  <option value="friends">{t('friends')}</option>
                  <option value="couple">{t('couple')}</option>
                </select>
              </div>
            </div>

            {/* Slider */}
            <div>
              <div className="tour-plan-budget-label">
                <label>{t('budgetPerson')}</label>
                <span>₹{Number(formData.budget).toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                name="budget"
                min="1000" 
                max="100000" 
                step="500"
                value={formData.budget}
                onChange={handleChange}
                className="tour-plan-range"
              />
              <div className="tour-plan-range-labels">
                <span>₹1K</span>
                <span>₹1L</span>
              </div>
            </div>
          </div>

          {/* Card 3: Travel Interests */}
          <div className="tour-plan-card">
            <div className="tour-plan-card-title">
              <span>3</span>
              <h3>{t('travelInterests')}</h3>
            </div>
            <p className="tour-plan-hint">{t('pickInterests')}</p>

            <div className="tour-plan-interests">
              {travelInterests.map((interest) => {
                const isSelected = formData.interests.includes(interest.label);
                return (
                  <button
                    key={interest.label}
                    type="button"
                    onClick={() => toggleInterest(interest.label)}
                    className={`tour-plan-interest ${
                      isSelected 
                        ? 'selected' 
                        : ''
                    }`}
                  >
                    {t(interest.key)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 4: Choose Guide */}
          <div className="tour-plan-card">
            <div className="tour-plan-card-title">
              <span>4</span>
              <h3>{t('chooseGuideTitle')}</h3>
            </div>
            
            <select 
              name="guide"
              value={formData.guide}
              onChange={handleChange}
              className="tour-plan-guide-select"
            >
              <option value="">{t('selectGuide')}</option>
              <option value="ai-guide">{t('aiGuide')}</option>
              <option value="local-expert">{t('localExpert')}</option>
            </select>
          </div>

          {/* Card 5: Payment & Submit */}
          <div className="tour-plan-card tour-plan-payment">
            <div className="tour-plan-card-title">
              <span>5</span>
              <h3>{t('payment')}</h3>
            </div>

            <button 
              type="button" 
              className="tour-plan-button tour-plan-button-secondary"
            >
              {t('proceedPayment')}
            </button>

            <button 
              type="submit" 
              className="tour-plan-button tour-plan-button-primary"
            >
              {t('submitTour')}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TourPlan;