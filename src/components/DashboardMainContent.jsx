import AnatomySection from "./AnatomySection"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"
import "./DashboardMainContent.css"

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-left">
        <h1 className="dashboard-title">Dashboard</h1>
        <AnatomySection />
        <ActivityFeed />
      </div>
      <div className="dashboard-right">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  )
}

export default DashboardMainContent
