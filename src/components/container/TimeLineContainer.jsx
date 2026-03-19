function TimeLineContainer({ date, title, location, description }) {
  return (
    <div className="time-line-container">
      <p className="timeline-date">{date}</p>
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-location">{location}</p>
      <p className="timeline-description">{description}</p>
    </div>
  );
}

export default TimeLineContainer;
