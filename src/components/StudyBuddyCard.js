import React from 'react';

function StudyBuddyCard({ name, course, major, preference }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-[#4E2A84]">{name}</h3>
      <p className="text-gray-600">{course} | {major}</p>
      <p className="text-gray-600">Prefers: {preference}</p>
      <button className="mt-2 bg-[#4E2A84] text-white px-4 py-2 rounded">
        Connect
      </button>
    </div>
  );
}

export default StudyBuddyCard;