import SimpleAppointmentCard from "./SimpleAppointmentCard"
import { upcomingAppointments } from "../data/appointments"
import "./UpcomingSchedule.css"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      {upcomingAppointments.map((day) => (
        <div key={day.day} className="schedule-day">
          <h3 className="day-title">On {day.day}</h3>
          <div className="appointments-grid">
            {day.appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
