import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="description-block">
        <h2>{event.eventName}</h2>
        <p>{event.eventDescription}</p>
      </div>
      <div className="info-block">
        <div>
          <strong>Date:</strong> {event.date}
        </div>
        <div>
          <strong>Time:</strong> {event.startTime} - {event.endTime}
        </div>
        <div>
          <strong>Location:</strong> {event.location}
        </div>
        <div>
          <strong>Organizer:</strong> {event.organizerName}
        </div>
        <div>
          <strong>Contact:</strong> {event.organizerContact}
        </div>
        <div>
          <strong>Registration Deadline:</strong> {event.registrationDeadline}
        </div>
        <div>
          <strong>Social Media Links:</strong> {event.socialMediaLinks}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
