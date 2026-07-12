import React from 'react';
import { Heart, Sparkles, MapPin, Smile } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const storyMilestones = [
  {
    key: '0',
    date: 'May 12, 2021',
    title: 'How We Met',
    description: '',
    icon: <Smile size={20} />,
  },
  {
    key: '1',
    date: 'June 18, 2021',
    title: 'Our First Date',
    description: 'A surprise sunset picnic. We spent the evening talking under a grand oak tree, knowing this was something special.',
    icon: <MapPin size={20} />,
  },
  {
    key: '2',
    date: 'September 24, 2025',
    title: 'The Proposal',
    description: 'Under the canopy of stars, Shravan asked the question at a beautiful venue, and Prajwala said yes!',
    icon: <Sparkles size={20} />,
  },
  {
    key: '3',
    date: 'December 13, 2026',
    title: 'The Big Day',
    description: 'We tie the knot! We cannot wait to celebrate this culmination of our love with our dearest family and friends.',
    icon: <Heart size={20} />,
  },
];

export default function Story() {
  const { t } = useLanguage();

  return (
    <div className="story-page animate-fade-in">
      <section className="section story-hero">
        <div className="container text-center">
          <h1 className="page-title">{t('story.title', 'Our Story')}</h1>
          <p className="page-subtitle">{t('story.subtitle', 'The beautiful journey that led us to this moment')}</p>
          <div className="botanical-divider">
            <div className="botanical-line"></div>
            <div className="botanical-icon">
              <Heart size={16} fill="currentColor" />
            </div>
            <div className="botanical-line"></div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {storyMilestones.map((milestone, idx) => (
              <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot glass-card">
                  <div className="timeline-dot-icon">{milestone.icon}</div>
                </div>
                
                <div className="timeline-card-wrapper">
                  <div className="timeline-card glass-panel">
                    <span className="timeline-date">{t(`story.milestone.${milestone.key}.date`, milestone.date)}</span>
                    <h3 className="timeline-title">{t(`story.milestone.${milestone.key}.title`, milestone.title)}</h3>
                    <p className="timeline-desc">{t(`story.milestone.${milestone.key}.desc`, milestone.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
