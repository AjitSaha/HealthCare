import { Search, Bell, Plus } from "lucide-react"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <span className="logo-health">Health</span>
          <span className="logo-care">care.</span>
        </h1>
        <div className="search-container">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <Bell className="bell-icon" />
        </button>
        <div className="user-avatar">
          <img
            src="src\image\243fbee1-e10b-41c9-b6a9-9827597824d0-1f9d3-2_320px.avif"
            alt="User avatar"
            className="avatar-image"
          />
        </div>
        <button className="add-button">
          <Plus className="plus-icon" />
        </button>
      </div>
    </header>
  )
}

export default Header
