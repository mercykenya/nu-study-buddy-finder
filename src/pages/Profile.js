import React, { useState, useRef } from 'react';
import { useFontSize } from '../contexts/FontSizeContext';
import EditProfileModal from '../components/EditProfileModal';
import '../styles/Profile.css';

function StatCard({ title, stats }) {
  const { fontSizes } = useFontSize();
  
  return (
    <div className="stat-card" style={{ fontSize: `${fontSizes.base}px` }}>
      <h3 style={{ fontSize: `${fontSizes.medium}px` }}>{title}</h3>
      {Object.entries(stats).map(([key, value], index) => (
        <div key={index} className="stat-item">
          <span className="stat-key">{key}</span>
          <span className="stat-value">{value}</span>
        </div>
      ))}
    </div>
  );
}

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "Mercy Omwoyo",
    major: "Computer Science",
    year: "Senior",
    email: "mercyomwoyo2024@u.northwestern.edu"
  });
  const fileInputRef = useRef(null);
  const { fontSizes } = useFontSize();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const size = Math.min(img.width, img.height);
          canvas.width = 180;
          canvas.height = 180;
          
          // Crop to square
          ctx.drawImage(
            img,
            (img.width - size) / 2,
            (img.height - size) / 2,
            size,
            size,
            0,
            0,
            180,
            180
          );
          
          setProfileImage(canvas.toDataURL('image/jpeg'));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveProfileChanges = (editedInfo) => {
    setStudentInfo(editedInfo);
  };

  const academicInfo = {
    "Major": "Computer Science",
    "Minor": "Economics",
    "GPA": "3.7",
    "Expected Graduation": "Spring 2025"
  };

  const currentCourses = {
    "COMP_SCI 214": "Data Structures",
    "COMP_SCI 213": "Intro to Systems",
    "ECON 310": "Microeconomics",
    "MATH 240": "Linear Algebra"
  };

  const studyPreferences = {
    "Preferred Study Time": "Evenings",
    "Preferred Location": "Library",
    "Study Group Size": "3-4 people",
    "Learning Style": "Visual learner"
  };

  const studyStats = {
    "Total Study Hours": "120",
    "Study Sessions": "45",
    "Active Study Groups": "3",
    "Courses Tutored": "2"
  };

  return (
    <div className="profile-container" style={{ fontSize: `${fontSizes.base}px` }}>
      <div className="profile-header">
        <div className="profile-picture-container" onClick={triggerFileInput}>
          <div className="profile-picture" style={profileImage ? { backgroundImage: `url(${profileImage})` } : {}}>
            <div className="upload-overlay">
              <div className="upload-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <span className="upload-text" style={{ fontSize: `${fontSizes.small}px` }}>Upload Photo</span>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        <div className="profile-info">
          <h1 style={{ fontSize: `${fontSizes.extraLarge}px` }}>{studentInfo.name}</h1>
          <p style={{ fontSize: `${fontSizes.medium}px` }}>{studentInfo.major} • {studentInfo.year}</p>
          <p style={{ fontSize: `${fontSizes.base}px` }}>{studentInfo.email}</p>
          <button className="edit-profile-btn" onClick={openEditModal} style={{ fontSize: `${fontSizes.base}px` }}>
            Edit Profile
          </button>
        </div>
      </div>
      
      <div className="stats-grid">
        <StatCard title="Academic Information" stats={academicInfo} />
        <StatCard title="Current Courses" stats={currentCourses} />
        <StatCard title="Study Preferences" stats={studyPreferences} />
        <StatCard title="Study Stats" stats={studyStats} />
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        studentInfo={studentInfo}
        onSave={saveProfileChanges}
        fontSizes={fontSizes}
      />
    </div>
  );
}

export default Profile;