import React from 'react';
import { DetailedEvent } from '../../types';
import { Card } from '../ui/card';

interface EventCardProps {
  event: DetailedEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="text-gray-700 text-sm mb-4">{event.description || 'No description available'}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </Card>
  );
};

export default EventCard; 