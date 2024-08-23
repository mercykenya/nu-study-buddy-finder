import React, { useState, useEffect } from 'react';
import { useFontSize } from '../contexts/FontSizeContext';
import { getRandomStudyTip } from '../utils/studyTips';
import '../styles/Home.css';

function Home() {
  const [studyTip, setStudyTip] = useState('');
  const { fontSizes } = useFontSize();

  useEffect(() => {
    setStudyTip(getRandomStudyTip());
  }, []);

  const studyStats = [
    { label: "Active Study Groups", value: 3 },
    { label: "Study Sessions This Week", value: 2 },
    { label: "Total Study Hours", value: 12 },
  ];

  const upcomingSessions = [
    { course: "ECON310", buddy: "Sarah J.", time: "Today, 3PM" },
    { course: "CS214", buddy: "Group", time: "Tomorrow, 2PM" },
    { course: "MATH240", buddy: "Review", time: "Fri, 11AM" },
  ];

  const suggestedBuddies = [
    { name: "Mike T.", course: "COMP_SCI 214" },
    { name: "Emily R.", course: "ECON 310" },
    { name: "Alex W.", course: "MATH 240" },
  ];

  return (
    <div className="home-container" style={{ fontSize: `${fontSizes.base}px` }}>
      <h1 className="welcome-message" style={{ fontSize: `${fontSizes.extraLarge}px` }}>Welcome back, Mercy!</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-card study-stats">
          <h2 style={{ fontSize: `${fontSizes.large}px` }}>Your Study Stats</h2>
          {studyStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value" style={{ fontSize: `${fontSizes.medium}px` }}>{stat.value}</span>
              <span className="stat-label" style={{ fontSize: `${fontSizes.base}px` }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="dashboard-card upcoming-sessions">
          <h2 style={{ fontSize: `${fontSizes.large}px` }}>Upcoming Sessions</h2>
          {upcomingSessions.map((session, index) => (
            <div key={index} className="session-item">
              <span className="session-course" style={{ fontSize: `${fontSizes.medium}px` }}>{session.course}</span>
              <span className="session-info" style={{ fontSize: `${fontSizes.base}px` }}>with {session.buddy}</span>
              <span className="session-time" style={{ fontSize: `${fontSizes.base}px` }}>{session.time}</span>
            </div>
          ))}
        </div>

        <div className="dashboard-card suggested-buddies">
          <h2 style={{ fontSize: `${fontSizes.large}px` }}>Suggested Buddies</h2>
          {suggestedBuddies.map((buddy, index) => (
            <div key={index} className="buddy-item">
              <span className="buddy-name" style={{ fontSize: `${fontSizes.medium}px` }}>{buddy.name}</span>
              <span className="buddy-course" style={{ fontSize: `${fontSizes.base}px` }}>{buddy.course}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="study-tip">
        <h2 style={{ fontSize: `${fontSizes.large}px` }}>Study Tip of the Day</h2>
        <p style={{ fontSize: `${fontSizes.base}px` }}>{studyTip}</p>
      </div>
    </div>
  );
}

export default Home;