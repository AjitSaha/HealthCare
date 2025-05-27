import { navigationItems } from "../data/navigation"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {navigationItems.map((section) => (
          <div key={section.section} className="sidebar-section">
            <h3 className="section-title">{section.section}</h3>
            <nav className="nav-menu">
              {section.items.map((item) => (
                <a key={item.name} href="#" className={`nav-item ${item.active ? "nav-item-active" : ""}`}>
                  <item.icon className="nav-icon" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
