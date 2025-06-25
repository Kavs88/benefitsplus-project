import React from 'react';

interface EventCardProps {
  name: string;
  date: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ name, date, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-1"><span className="font-semibold">Date:</span> {date}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Location:</span> {location}</p>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard; 