import { activityData } from "../data/activityData"
import "./ActivityFeed.css"

const ActivityFeed = () => {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <span className="activity-summary">{activityData.summary}</span>
      </div>

      <div className="chart-container">
        <div className="chart">
          {activityData.data.map((day, dayIndex) => (
            <div key={day.day} className="chart-day">
              {day.values.map((value, index) => (
                <div
                  key={`${day.day}-${index}`}
                  className={`chart-bar bar-${index}`}
                  style={{ height: `${value * 2}px` }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="chart-labels">
          {activityData.days.map((day) => (
            <div key={day} className="chart-label">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
