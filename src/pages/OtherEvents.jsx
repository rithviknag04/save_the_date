import React from 'react';
import { Clock, Hotel, Shirt, Heart, Gift, MapPin } from 'lucide-react';

export default function OtherEvents() {
  return (
    <div className="details-page animate-fade-in">
      <section className="section details-hero" style={{ paddingBottom: '30px' }}>
        <div className="container text-center">
          <h1 className="page-title">Other Events & Info</h1>
          <p className="page-subtitle">Additional celebrations, dress codes, and accommodation details</p>
          <div className="botanical-divider">
            <div className="botanical-line"></div>
            <div className="botanical-icon">
              <Heart size={16} fill="currentColor" />
            </div>
            <div className="botanical-line"></div>
          </div>
        </div>
      </section>

      <section className="events-grid-section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="grid-2">
            {/* Additional Events */}
            <div className="details-card glass-panel">
              <div className="details-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Clock className="details-header-icon" size={24} style={{ color: 'var(--text-gold)' }} />
                <h2>Pre & Post Wedding Events</h2>
              </div>
              <div className="schedule-list">
                <div className="schedule-item" style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <span className="schedule-time" style={{ fontWeight: '600', color: 'var(--text-accent)', minWidth: '85px' }}>Dec 12</span>
                  <div className="schedule-info">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Mehendi & Sangeet</h4>
                    <p style={{ margin: '4px 0 2px', color: 'var(--text-secondary)' }}>6:00 PM onwards</p>
                    <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A night filled with henna, dance, music, and celebration.</p>
                  </div>
                </div>
                <div className="schedule-item" style={{ display: 'flex', gap: '16px' }}>
                  <span className="schedule-time" style={{ fontWeight: '600', color: 'var(--text-accent)', minWidth: '85px' }}>Dec 14</span>
                  <div className="schedule-info">
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Post-Wedding Lunch</h4>
                    <p style={{ margin: '4px 0 2px', color: 'var(--text-secondary)' }}>12:30 PM onwards</p>
                    <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Join us for a relaxed celebratory lunch to wrap up the festivities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Registry / Notes */}
            <div className="details-card glass-panel">
              <div className="details-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Gift className="details-header-icon" size={24} style={{ color: 'var(--text-gold)' }} />
                <h2>Registry & Blessings</h2>
              </div>
              <div className="venue-info">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>Your Presence is Our Gift</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  We are incredibly blessed to have you in our lives. Having you celebrate our union with us is the greatest gift we could ask for.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  If you wish to honor us with a gift, a contribution box will be placed at the reception desk, or blessings in the form of prayers are warmly appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accom-dress-section" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="grid-2">
            {/* Accommodations */}
            <div className="details-card glass-panel">
              <div className="details-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Hotel className="details-header-icon" size={24} style={{ color: 'var(--text-gold)' }} />
                <h2>Accommodations</h2>
              </div>
              <div className="accom-list">
                <div className="accom-item" style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600' }}>The Royal Orchid Hotel</h4>
                  <p style={{ margin: '2px 0', color: 'var(--text-secondary)' }}>Distance: 10 mins from venue</p>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-accent)' }}>Mention the <strong>Prajwala-Shravan Wedding</strong> block for a preferred rate.</p>
                </div>
                <div className="accom-item">
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Vinayaka Grand Residency</h4>
                  <p style={{ margin: '2px 0', color: 'var(--text-secondary)' }}>Distance: 5 mins from venue</p>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-accent)' }}>Use discount code <strong>PSWED2026</strong> when booking online.</p>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div className="details-card glass-panel">
              <div className="details-card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Shirt className="details-header-icon" size={24} style={{ color: 'var(--text-gold)' }} />
                <h2>Dress Code</h2>
              </div>
              <div className="dress-code-content">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>Traditional / Festive Festive Wear</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  We encourage guests to wear colorful traditional Indian attire (e.g. Sarees, Lehengas, Kurtas, or Sherwanis) to match the joyous celebratory mood!
                </p>
                <p className="color-palette-tip" style={{ fontStyle: 'italic', color: 'var(--text-gold)' }}>
                  Color Palette ideas: Bright marigold yellows, royal blues, emerald greens, champagne golds, and creams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
