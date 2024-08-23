import React from 'react';

function StudyGroupCard({ name, members, nextSession }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-[#4E2A84]">{name}</h3>
      <p className="text-gray-600">Members: {members.join(', ')}</p>
      <p className="text-gray-600">Next Session: {nextSession}</p>
      <button className="mt-2 bg-[#4E2A84] text-white px-4 py-2 rounded">
        Chat
      </button>
    </div>
  );
}

export default StudyGroupCard;