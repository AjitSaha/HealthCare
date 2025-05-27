import { Search } from "lucide-react"
import { healthData } from "../data/healthData"
import "./AnatomySection.css"

// ✅ Import your local image
import anatomyImage from "../image/istockphoto-1408937316-612x612.jpg"

const AnatomySection = () => {
  return (
    <div className="anatomy-card">
      <div className="anatomy-content">
        <div className="anatomy-left">
          <div className="search-icon-container">
            <Search className="anatomy-search-icon" />
          </div>
          <div className="anatomy-image-container">
            <img
              src={anatomyImage}
              alt="Human anatomy"
              className="anatomy-image"
            />

            {/* Health indicators */}
            <div className="health-indicator heart-indicator">
              <div className="indicator-icon">❤️</div>
              <span>Healthy Heart</span>
            </div>

            <div className="health-indicator leg-indicator">
              <span>Healthy Leg</span>
            </div>

            <div className="anatomy-slider">
              <div className="slider-handle"></div>
            </div>
          </div>
        </div>

        <div className="anatomy-right">
          {healthData.map((item) => (
            <div key={item.id} className="health-item">
              <div className="health-header">
                <item.icon className="health-icon" />
                <h3 className="health-title">{item.title}</h3>
              </div>
              <div className="health-date">Date: {item.date}</div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${item.status}`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          <div className="details-link">
            <a href="#" className="details-text">
              Details →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnatomySection
