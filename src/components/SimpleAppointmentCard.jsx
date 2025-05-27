import "./SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-time">{time}</p>
        </div>
        <span className="card-icon">{icon}</span>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
