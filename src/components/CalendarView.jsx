import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData } from "../data/calendarData"
import "./CalendarView.css"

const CalendarView = () => {
  const { month, days, schedule, appointments } = calendarData

  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <div className="calendar-header-left">
          <span className="this-week">This Week</span>
        </div>
        <div className="calendar-header-right">
          <h2 className="calendar-title">{month}</h2>
          <div className="calendar-nav">
            <button className="nav-button">
              <ChevronLeft className="nav-icon" />
            </button>
            <button className="nav-button">
              <ChevronRight className="nav-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="calendar-card">
        {/* Days header */}
        <div className="days-header">
          <div className="time-column-header"></div>
          {days.map((day) => (
            <div key={day.date} className="day-header">
              <div className="day-name">{day.day}</div>
              <div className="day-number">{day.date}</div>
            </div>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="time-slots-container">
          {schedule.map((row, rowIndex) => (
            <div key={rowIndex} className="time-row">
              <div className="time-label"></div>
              {row.map((entry, colIndex) => (
                <div key={colIndex} className="time-cell">
                  {entry ? (
                    <div className="appointment-slot normal">{entry}</div>
                  ) : (
                    <div className="empty-slot">—</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Appointment cards */}
        <div className="appointment-cards">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`appointment-card ${appointment.id === 1 ? "primary" : "secondary"}`}
            >
              <div className="appointment-header">
                <span className="appointment-icon">{appointment.icon}</span>
                <h3 className="appointment-title">{appointment.title}</h3>
              </div>
              <div className="appointment-time">{appointment.time}</div>
              <div className="appointment-doctor">{appointment.doctor}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarView
