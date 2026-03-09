import "./TimeLineContainer.css";

function TimeLineContainer({ date, title, location, description }) {
  return (
    <div className="time-line-container">
      <p className="time-line-date">{date}</p>
      <h2 className="time-line-title">{title}</h2>
      <p className="time-line-location">{location}</p>
      <p className="time-line-description">{description}</p>
    </div>
  );
}

export default TimeLineContainer;
