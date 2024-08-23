import React, { useState } from 'react';
import { useFontSize } from '../contexts/FontSizeContext';
import ScheduleSession from '../components/ScheduleSession';
import '../styles/MyStudyGroups.css';

function StudyGroupCard({ group, onSchedule, onChat }) {
  const { fontSizes } = useFontSize();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="group-card" style={{ fontSize: `${fontSizes.base}px` }}>
      <div className="group-header">
        <h3 style={{ fontSize: `${fontSizes.medium}px` }}>{group.name}</h3>
        <span className="course-tag" style={{ fontSize: `${fontSizes.small}px` }}>{group.course}</span>
      </div>
      <p className="group-members" style={{ fontSize: `${fontSizes.base}px` }}>Members: {group.members.join(', ')}</p>
      <div className="group-session-info" style={{ fontSize: `${fontSizes.base}px` }}>
        <p><strong>Next Session:</strong> {group.nextSession}</p>
      </div>
      <div className="group-actions">
        <button className="action-button primary" style={{ fontSize: `${fontSizes.base}px` }} onClick={() => onChat(group.name)}>
          Chat
        </button>
        <button className="action-button secondary" style={{ fontSize: `${fontSizes.base}px` }} onClick={() => setIsScheduleOpen(true)}>
          Schedule
        </button>
      </div>
      <ScheduleSession
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        groupName={group.name}
        onSchedule={(details) => onSchedule(group.name, details)}
      />
    </div>
  );
}
function CreateGroupForm({ onSubmit, onCancel }) {
  const { fontSizes } = useFontSize();
  const [groupName, setGroupName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [memberNames, setMemberNames] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: groupName,
      course: courseName,
      members: ['You', ...memberNames.split(',').map((name) => name.trim())],
      nextSession: 'Not scheduled',
    });
    setGroupName('');
    setCourseName('');
    setMemberNames('');
  };

  return (
    <div className="create-group-form" style={{ fontSize: `${fontSizes.base}px` }}>
      <h2 style={{ fontSize: `${fontSizes.large}px` }}>Create New Study Group</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="groupName" style={{ fontSize: `${fontSizes.base}px` }}>
          Group Name:
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="courseName" style={{ fontSize: `${fontSizes.base}px` }}>
          Course Name:
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="memberNames" style={{ fontSize: `${fontSizes.base}px` }}>
          Member Names (comma-separated):
          <input
            type="text"
            id="memberNames"
            value={memberNames}
            onChange={(e) => setMemberNames(e.target.value)}
          />
        </label>
        <div className="form-actions">
          <button type="submit" className="action-button primary" style={{ fontSize: `${fontSizes.base}px` }}>
            Create Group
          </button>
          <button type="button" className="action-button secondary" style={{ fontSize: `${fontSizes.base}px` }} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function MyStudyGroups() {
  const { fontSizes } = useFontSize();
  const [groups, setGroups] = useState([
    { 
      name: "Econ Study Group", 
      course: "ECON 310",
      members: ["You", "Sarah J.", "Emily R."],
      nextSession: "Not scheduled",
    },
    { 
      name: "CS Programming Group", 
      course: "CS 214",
      members: ["You", "Mike T.", "Alex W.", "Lisa M."],
      nextSession: "Not scheduled",
    },
  ]);
  const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);

  const handleSchedule = (groupName, details) => {
    setGroups(prevGroups => 
      prevGroups.map(group => 
        group.name === groupName 
          ? { ...group, nextSession: `${details.date} at ${details.time}` }
          : group
      )
    );
  };

  const handleChat = (groupName) => {
    // In a real application, this would open a chat interface or redirect to a chat page
    alert(`Opening chat for ${groupName}`);
  };

  const handleCreateGroup = (newGroup) => {
    setGroups((prevGroups) => [...prevGroups, newGroup]);
    setIsCreateGroupOpen(false);
  };
  return (
    <div className="study-groups-container" style={{ fontSize: `${fontSizes.base}px` }}>
      <h1 className="page-title" style={{ fontSize: `${fontSizes.extraLarge}px` }}>My Study Groups</h1>
      <div className="groups-wrapper">
        {groups.map((group, index) => (
          <StudyGroupCard
            key={index}
            group={group}
            onSchedule={handleSchedule}
            onChat={handleChat}
          />
        ))}
      </div>
      <div className="create-group-section">
        <button
          className="create-group-button"
          style={{ fontSize: `${fontSizes.medium}px` }}
          onClick={() => setIsCreateGroupOpen(true)}
        >
          Create New Study Group
        </button>
      </div>
      {isCreateGroupOpen && (
        <CreateGroupForm
          onSubmit={handleCreateGroup}
          onCancel={() => setIsCreateGroupOpen(false)}
        />
      )}
    </div>
  );
}

export default MyStudyGroups;