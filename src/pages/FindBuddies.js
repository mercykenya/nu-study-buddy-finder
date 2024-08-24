import React, { useState, useEffect } from 'react';
import { useFontSize } from '../contexts/FontSizeContext';
import '../styles/FindBuddies.css';

function ConnectDialog({ isOpen, onClose, buddy, fontSizes }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content" style={{ fontSize: `${fontSizes.base}px` }}>
        <h2 style={{ fontSize: `${fontSizes.large}px` }}>Connect with {buddy.name}</h2>
        <p style={{ fontSize: `${fontSizes.base}px` }}>
          Would you like to send a connection request to {buddy.name} for {buddy.course}?
        </p>
        <div className="dialog-actions">
          <button 
            onClick={() => {
              alert(`Connection request sent to ${buddy.name}!`);
              onClose();
            }} 
            className="connect-confirm-btn"
            style={{ fontSize: `${fontSizes.base}px` }}
          >
            Send Request
          </button>
          <button 
            onClick={onClose} 
            className="connect-cancel-btn"
            style={{ fontSize: `${fontSizes.base}px` }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function StudyBuddyCard({ buddy }) {
  const { fontSizes } = useFontSize();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="buddy-card" style={{ fontSize: `${fontSizes.base}px` }}>
      <div className="buddy-header">
        <h3 style={{ fontSize: `${fontSizes.medium}px` }}>{buddy.name}</h3>
        <span className="compatibility" style={{ fontSize: `${fontSizes.small}px` }}>{buddy.compatibility}% Match</span>
      </div>
      <p className="buddy-info" style={{ fontSize: `${fontSizes.base}px` }}>{buddy.course} | {buddy.major}</p>
      <p className="buddy-preference" style={{ fontSize: `${fontSizes.base}px` }}>
        Prefers: <span className="preference-value">{buddy.preference}</span>
      </p>
      <button 
        className="connect-button" 
        style={{ fontSize: `${fontSizes.base}px` }}
        onClick={() => setIsDialogOpen(true)}
      >
        Connect
      </button>
      <ConnectDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        buddy={buddy}
        fontSizes={fontSizes}
      />
    </div>
  );
}

function FindBuddies() {
  const [filters, setFilters] = useState({
    course: '',
    major: '',
    preference: '',
    availability: ''
  });
   // eslint-disable-next-line
  const [appliedFilters, setAppliedFilters] = useState({});
  const [filteredBuddies, setFilteredBuddies] = useState([]);
  const { fontSizes } = useFontSize();

  const allBuddies = [
    { name: "Sarah J.", course: "ECON 310", major: "Economics", preference: "Library", availability: "Evenings", compatibility: 95 },
    { name: "Mike T.", course: "COMP_SCI 214", major: "Computer Science", preference: "Group Study", availability: "Afternoons", compatibility: 88 },
    { name: "Emily R.", course: "MATH 240", major: "Mathematics", preference: "Online", availability: "Mornings", compatibility: 92 },
    { name: "Alex W.", course: "CHEM 210", major: "Chemistry", preference: "Individual", availability: "Weekends", compatibility: 85 },
  ];

  useEffect(() => {
    setFilteredBuddies(allBuddies);
     // eslint-disable-next-line
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
    const filtered = allBuddies.filter(buddy => {
      return (
        (filters.course === '' || buddy.course.toLowerCase().includes(filters.course.toLowerCase())) &&
        (filters.major === '' || buddy.major.toLowerCase().includes(filters.major.toLowerCase())) &&
        (filters.preference === '' || buddy.preference.toLowerCase().includes(filters.preference.toLowerCase())) &&
        (filters.availability === '' || buddy.availability.toLowerCase().includes(filters.availability.toLowerCase()))
      );
    });
    setFilteredBuddies(filtered);
  };

  return (
    <div className="find-buddies-container" style={{ fontSize: `${fontSizes.base}px` }}>
      <div className="content-wrapper">
        <div className="filters-tower">
          <h2 style={{ fontSize: `${fontSizes.large}px` }}>Filters</h2>
          <div className="filter-item">
            <label htmlFor="course" style={{ fontSize: `${fontSizes.base}px` }}>Course:</label>
            <input 
              type="text" 
              id="course" 
              name="course" 
              value={filters.course}
              onChange={handleFilterChange}
              placeholder="e.g., ECON 310"
              style={{ fontSize: `${fontSizes.base}px` }}
            />
          </div>
          <div className="filter-item">
            <label htmlFor="major" style={{ fontSize: `${fontSizes.base}px` }}>Major:</label>
            <input 
              type="text" 
              id="major" 
              name="major" 
              value={filters.major}
              onChange={handleFilterChange}
              placeholder="e.g., Economics"
              style={{ fontSize: `${fontSizes.base}px` }}
            />
          </div>
          <div className="filter-item">
            <label htmlFor="preference" style={{ fontSize: `${fontSizes.base}px` }}>Study Preference:</label>
            <select 
              id="preference" 
              name="preference"
              value={filters.preference}
              onChange={handleFilterChange}
              style={{ fontSize: `${fontSizes.base}px` }}
            >
              <option value="">Any</option>
              <option value="group">Group Study</option>
              <option value="individual">Individual Study</option>
              <option value="library">Library</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="availability" style={{ fontSize: `${fontSizes.base}px` }}>Availability:</label>
            <select 
              id="availability" 
              name="availability"
              value={filters.availability}
              onChange={handleFilterChange}
              style={{ fontSize: `${fontSizes.base}px` }}
            >
              <option value="">Any</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
          <button className="apply-filters-btn" onClick={applyFilters} style={{ fontSize: `${fontSizes.base}px` }}>Apply Filters</button>
        </div>
        <div className="main-content">
          <h1 className="page-title" style={{ fontSize: `${fontSizes.extraLarge}px` }}>Find Study Buddies</h1>
          {filteredBuddies.length > 0 ? (
            <div className="buddy-grid">
              {filteredBuddies.map((buddy, index) => (
                <StudyBuddyCard key={index} buddy={buddy} />
              ))}
            </div>
          ) : (
            <p style={{ fontSize: `${fontSizes.medium}px`, textAlign: 'center' }}>No study buddies match your criteria. Try adjusting your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindBuddies;