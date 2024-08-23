import React from 'react';
import '../styles/StatsCard.css';

function StatsCard({ title, stats }) {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="stat-item">
          <span className="stat-label">{key}:</span>
          <span className="stat-value">{value}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;