import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Heart, ArrowLeft } from 'lucide-react';
import Countdown from '../components/Countdown';

export default function Wedding() {
  return (
    <div className="wedding-page animate-fade-in">
      <section className="section page-header-section" style={{ paddingBottom: '20px' }}>
        <div className="container text-center">
          <Link to="/" className="btn-secondary" style={{ marginBottom: '24px', display: 'inline-flex', padding: '8px 16px', letterSpacing: '1px', textTransform: 'none' }}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} />
            Back to Welcome
          </Link>
          <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '8px' }}>The Wedding Celebration</h1>
          <p className="page-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Prajwala Nag & Shravan Kumar</p>
          <div className="botanical-divider">
            <div className="botanical-line"></div>
            <div className="botanical-icon">
              <Heart size={16} fill="currentColor" />
            </div>
            <div className="botanical-line"></div>
          </div>
        </div>
      </section>

      <section className="wedding-countdown-section" style={{ padding: '20px 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="glass-panel text-center" style={{ padding: '32px' }}>
            <span className="hero-eyebrow" style={{ display: 'block', marginBottom: '12px' }}>Countdown to the Big Day</span>
            <Countdown targetDate="2026-12-13T19:00:00" />
          </div>
        </div>
      </section>

      <section className="events-grid-section" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="grid-2">
            {/* The Details */}
            <div className="details-card glass-panel" style={{ padding: '40px' }}>
              <div className="details-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Calendar className="details-header-icon" size={24} style={{ color: 'var(--text-gold)' }} />
                <h2>Date & Time</h2>
              </div>
              <div className="schedule-list">
                <div className="schedule-item" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <span className="schedule-time" style={{ fontWeight: '600', color: 'var(--text-accent)', minWidth: '80px' }}>Dec 13</span>
                  <div className="schedule-info">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Wedding Ceremony & Reception</h4>
                    <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)' }}>Celebrations commence with sacred rituals followed by dinner.</p>
                  </div>
                </div>
                <div className="schedule-item" style={{ display: 'flex', gap: '16px' }}>
                  <span className="schedule-time" style={{ fontWeight: '600', color: 'var(--text-accent)', minWidth: '80px' }}>Dec 14</span>
                  <div className="schedule-info">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Blessings & Reception</h4>
                    <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)' }}>A special gathering to celebrate and bless the newlyweds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Venue */}
            <div className="details-card glass-panel" style={{ padding: '40px' }}>
              <div className="details-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <MapPin className="details-header-icon" size={24} style={{ color: 'var(--text-gold)' }} />
                <h2>The Venue</h2>
              </div>
              <div className="venue-info">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>Vinayaka Convention</h3>
                <p className="venue-address" style={{ fontWeight: '500', color: 'var(--text-accent)', marginBottom: '16px' }}>Mysuru, Karnataka, India</p>
                <p className="venue-desc" style={{ color: 'var(--text-secondary)' }}>
                  A magnificent and spacious convention hall perfect for hosting traditional Indian wedding celebrations.
                  Ample parking space is available at the venue.
                </p>
                <a 
                  href="https://maps.app.goo.gl/rbJAkSdWV3f6h6Sh8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-placeholder glass-card" 
                  style={{ marginTop: '24px', padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none', cursor: 'pointer' }}
                >
                  <MapPin size={24} className="map-pin-icon" style={{ color: 'var(--text-gold)' }} />
                  <p style={{ margin: '0', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-accent)' }}>View Venue on Google Maps</p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Click to open driving directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
