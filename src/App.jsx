import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"
import "./App.css"

function App() {
  return (
    <div className="app">
      <div className="app-layout">
        <Sidebar />
        <div className="main-container">
          <Header />
          <div className="dashboard-content">
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
