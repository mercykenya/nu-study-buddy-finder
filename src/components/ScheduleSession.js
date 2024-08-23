import React, { useState } from 'react';
import '../styles/ScheduleSession.css';

function ScheduleSession({ isOpen, onClose, groupName, onSchedule }) {
  const [sessionDetails, setSessionDetails] = useState({
    date: '',
    time: '',
    duration: 60,
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessionDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate with Google Calendar API
    console.log('Scheduling session:', { groupName, ...sessionDetails });
    alert(`Session scheduled for ${groupName} on ${sessionDetails.date} at ${sessionDetails.time}`);
    onSchedule(sessionDetails);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="schedule-overlay">
      <div className="schedule-content">
        <h2>Schedule Session for {groupName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={sessionDetails.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={sessionDetails.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (minutes):</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={sessionDetails.duration}
              onChange={handleChange}
              min="15"
              max="240"
              step="15"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={sessionDetails.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="schedule-btn">Schedule</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleSession;