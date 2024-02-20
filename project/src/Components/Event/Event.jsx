import React, { useState } from 'react';
import './Event.css'; // Import your CSS file

const EventCreationForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDescription: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    organizerName: '',
    organizerContact: '',
    registrationDeadline: '',
    socialMediaLinks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of event data (e.g., send to a server).
    console.log('Event data submitted:', eventData);
  };

  return (

    <div className="main-tag">
    <div className="event-form-container">
      <div className="header-text">
        <h1>Create Event</h1>
      </div>

      <div className="form-row main-home-container">
        <div className="form-row form-left-side">
          <form className="event-form" onSubmit={handleSubmit}>
            <div className="form-column">
              <div className="form-row">

                <div classNmae="fields">
                  <div>
                <label htmlFor="eventName">Event Name:</label>
                </div>
                <div>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={eventData.eventName}
                  onChange={handleChange}
                  placeholder="Enter event name"
                  required
                />
                </div>
                </div>

              </div>
              <div className="form-row">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  placeholder="Enter date"
                  required
                />
                <label htmlFor="registrationDeadline">Registration Deadline:</label>
                <input
                  type="date"
                  id="registrationDeadline"
                  name="registrationDeadline"
                  value={eventData.registrationDeadline}
                  onChange={handleChange}
                  placeholder="Enter registration deadline"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="startTime">Start Time:</label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={eventData.startTime}
                  onChange={handleChange}
                  placeholder="Enter start time"
                  required
                />
                <label htmlFor="endTime">End Time:</label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={eventData.endTime}
                  onChange={handleChange}
                  placeholder="Enter end time"
                  required
                />
              </div>
              <div className="form-row fields">
                <label htmlFor="eventDescription">Event Description:</label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  value={eventData.eventDescription}
                  onChange={handleChange}
                  placeholder="Enter event description"
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={eventData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="organizerName">Organizer Name:</label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  value={eventData.organizerName}
                  onChange={handleChange}
                  placeholder="Enter organizer name"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="organizerContact">Organizer Contact:</label>
                <input
                  type="text"
                  id="organizerContact"
                  name="organizerContact"
                  value={eventData.organizerContact}
                  onChange={handleChange}
                  placeholder="Enter organizer contact"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="socialMediaLinks">Social Media Links:</label>
                <input
                  type="url"
                  id="socialMediaLinks"
                  name="socialMediaLinks"
                  value={eventData.socialMediaLinks}
                  onChange={handleChange}
                  placeholder="Enter social media links"
                />
              </div>
              <div >
              <button type="submit">Create Event</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventCreationForm;