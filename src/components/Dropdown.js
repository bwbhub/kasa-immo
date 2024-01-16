import '../styles/Dropdown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Dropdown({ title, text }) {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)

  return (
    <div className="section-dropdown">
      <div className="container-dropdown">
        <div className="topbar-dropdown">
          <h2>{title}</h2>
          {open ? (
            <button className="btn-dropdown" onClick={handleToggle}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          ) : (
            <button className="btn-dropdown" onClick={handleToggle}>
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          )}
        </div>
        <div className={`bottombar-dropdown ${open ? 'open' : ''}`}>
          <p className="bottombar-text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
