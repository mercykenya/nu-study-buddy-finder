import React, { useState } from 'react';
import '../styles/EditProfileModal.css';

function EditProfileModal({ isOpen, onClose, studentInfo, onSave, fontSizes }) {
  const [editedInfo, setEditedInfo] = useState(studentInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedInfo);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ fontSize: `${fontSizes.base}px` }}>
        <h2 style={{ fontSize: `${fontSizes.large}px` }}>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{ fontSize: `${fontSizes.base}px` }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedInfo.name}
              onChange={handleChange}
              style={{ fontSize: `${fontSizes.base}px` }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="major" style={{ fontSize: `${fontSizes.base}px` }}>Major:</label>
            <input
              type="text"
              id="major"
              name="major"
              value={editedInfo.major}
              onChange={handleChange}
              style={{ fontSize: `${fontSizes.base}px` }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year" style={{ fontSize: `${fontSizes.base}px` }}>Year:</label>
            <select
              id="year"
              name="year"
              value={editedInfo.year}
              onChange={handleChange}
              style={{ fontSize: `${fontSizes.base}px` }}
            >
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ fontSize: `${fontSizes.base}px` }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedInfo.email}
              onChange={handleChange}
              style={{ fontSize: `${fontSizes.base}px` }}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="save-btn" style={{ fontSize: `${fontSizes.base}px` }}>Save</button>
            <button type="button" onClick={onClose} className="cancel-btn" style={{ fontSize: `${fontSizes.base}px` }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;