// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="wave-container">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
              className="wave-sizing"
            />
          </Link>

          <h1 className="header-heading">
            <Link to="/" className="nav-link">
              Wave
            </Link>
          </h1>
        </div>
        <div className="sub-header">
          <h1 className="header-heading">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </h1>
          <h1 className="header-heading">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </h1>
          <h1 className="header-heading">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default Header
